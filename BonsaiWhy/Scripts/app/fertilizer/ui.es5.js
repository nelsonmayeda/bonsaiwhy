"use strict";

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define(["fertilizercalculator", "fertilizerdata", "molarmass"], factory);
    } else {
        /* Browser globals*/
        FertilizerUI = factory(FertilizerCalculator, FertilizerData, MolarMass);
    }
})(function (fertilizerCalculator, fertilizerData, molarMass) {
    var forEach = function forEach(array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
            callback.call(scope, array[i], i, array);
        }
    };
    /*remove isn't supported in older browsers*/
    var removeLoading = function removeLoading(container) {
        var loading = container.querySelector(".loading");
        container.removeChild(loading);
    };
    /*create html: fertilizer options with click handler*/
    var createOption = function createOption(name, formula) {
        var data = { name: "", value: "" };
        data.name = name;
        data.value = molarMass.Calculate(formula);
        var node = document.createElement("button");
        node.className = "fertilizer active";
        node.innerHTML = name;
        node.value = name;
        node.title = "Remove " + name;
        node.dataset.fertilizer = JSON.stringify(data);
        node.addEventListener("click", function () {
            this.classList.toggle("active");
        });
        return node;
    };
    var addOption = function addOption() {
        var optioncontainer = document.getElementById("fertilizer-options");
        var formula = document.getElementById("fertilizer-formula").value;
        var node = createOption(formula, formula);
        optioncontainer.appendChild(node);
    };
    /*create html: fertilizer goals with textboxes*/
    var createGoal = function createGoal(name, value) {
        var node = document.createElement("div");
        node.className = "row";
        var label = document.createElement("label");
        label.className = "cell";
        label.innerHTML = name;
        var goalppm = document.createElement("div");
        goalppm.className = "cell";
        var inputText = document.createElement("input");
        inputText.type = "text";
        inputText.id = "goal" + name;
        inputText.value = value;
        goalppm.appendChild(inputText);
        var outputppm = document.createElement("output");
        outputppm.className = "cell";
        outputppm.id = "output" + name;
        var outputerror = document.createElement("output");
        outputerror.className = "cell";
        outputerror.id = "error" + name;
        node.appendChild(label);
        node.appendChild(goalppm);
        node.appendChild(outputppm);
        node.appendChild(outputerror);
        return node;
    };
    /*create html: calculated amounts*/
    var createAmount = function createAmount(name, value) {
        var node = document.createElement("div");
        node.className = "row";
        var description = document.createElement("span");
        description.innerHTML = name + ": ";
        description.className = "cell";
        var amount = document.createElement("span");
        amount.innerHTML = value.toLocaleString() + "mg";
        amount.className = "cell";
        node.appendChild(description);
        node.appendChild(amount);
        return node;
    };
    var goals = [{ name: "N", value: 211 }, { name: "P", value: 46 }, { name: "K", value: 263 }, { name: "Ca", value: 132 }, { name: "Mg", value: 20 }, { name: "S", value: 13 }];
    /*pass checked items, goal*/
    var recalc = function recalc() {
        var container = document.getElementById("fertilizer-amounts");
        container.innerHTML = '<div class="loading">Loading...</div>';
        /*input fertilizer selections*/
        var fertilizers = [];
        forEach(document.querySelectorAll('.fertilizer.active'), function (element) {
            var parsed = JSON.parse(element.dataset.fertilizer);
            fertilizers.push(parsed);
        });
        /*input volume*/
        var volume = parseFloat(document.getElementById("volumeInput").value);
        /*input goal ppm*/
        var goalmass = [];
        goals.forEach(function (element, index, arr) {
            var value = parseFloat(document.getElementById("goal" + element.name).value);
            arr[index].value = value;
            goalmass.push(value * volume);
        });

        /*create equations
        one equation per element: (NPKCaMgS) =6equations
        each equation.length =fertilizers.length*/
        var equations = [];
        goals.forEach(function (element, index) {
            var elementEquation = [];
            fertilizers.forEach(function (fertilizer) {
                elementEquation.push(fertilizer.value.hasOwnProperty(element.name) ? fertilizer.value[element.name] : 0);
            });
            equations.push(elementEquation);
        });
        /*calculate how much of each fertilizer to use*/
        var solution = fertilizerCalculator.Calculate(equations, goalmass);

        /*output how much of each fertilizer to use*/
        solution.forEach(function (amount, fertilizerindex) {
            var node = createAmount(fertilizers[fertilizerindex].name, Math.round(amount));
            container.appendChild(node);
        });
        /*output goal table - calculatedppm, error */
        goals.forEach(function (element, index) {
            var totalmass = 0;
            solution.forEach(function (fertilizeramount, fertilizerindex) {
                totalmass += fertilizeramount * (fertilizers[fertilizerindex].value.hasOwnProperty(element.name) ? fertilizers[fertilizerindex].value[element.name] : 0);
            });
            var totalppm = totalmass / volume;
            document.getElementById("output" + element.name).innerHTML = Math.round(totalppm);
            document.getElementById("error" + element.name).innerHTML = Math.round(totalppm - element.value);
        });
        removeLoading(container);
    };
    var submitEverything = function submitEverything() {
        var container = document.getElementById("fertilizer-amounts");
        container.innerHTML = '<div class="loading">Loading...</div>';
        setTimeout(recalc, 100);
    };
    var uiInit = function uiInit() {
        var optioncontainer = document.getElementById("fertilizer-options");
        fertilizerData.forEach(function (fertilizer) {
            var node = createOption(fertilizer.name, fertilizer.formula);
            optioncontainer.appendChild(node);
        });
        removeLoading(optioncontainer);
        var goalcontainer = document.getElementById("fertilizer-goals");
        goals.forEach(function (element) {
            var node = createGoal(element.name, element.value);
            goalcontainer.appendChild(node);
        });
        var add = document.getElementById("fertilizer-add");
        add.addEventListener("click", addOption);
        var submit = document.getElementById("fertilizer-submit");
        submit.addEventListener("click", submitEverything);
    };
    return {
        Init: uiInit
    };
});

