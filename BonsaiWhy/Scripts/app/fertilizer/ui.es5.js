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
    var addLoading = function addLoading(container) {
        container.innerHTML = '<div class="loading">Loading...</div>';
    };
    /*remove isn't supported in older browsers*/
    var removeLoading = function removeLoading(container) {
        var loading = container.querySelector(".loading");
        container.removeChild(loading);
    };
    /*create html: calculated amounts*/
    var createAmount = function createAmount(name, value, unit) {
        var node = document.createElement("div");
        node.className = "row";
        var description = document.createElement("span");
        description.innerHTML = name + ": ";
        description.className = "cell";
        var amount = document.createElement("span");
        amount.innerHTML = value.toLocaleString() + unit;
        amount.className = "cell";
        node.appendChild(description);
        node.appendChild(amount);
        return node;
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
        var container = document.getElementById("fertilizer-options");
        var formula = document.getElementById("fertilizer-formula").value;
        if (formula) {
            var node = createOption(formula, formula);
            container.appendChild(node);
        }
    };
    /*create html: fertilizer goals with textboxes*/
    var createGoal = function createGoal(name, value) {
        var node = document.createElement("div");
        node.className = "row goal";
        var label = document.createElement("label");
        label.className = "cell element active";
        label.innerHTML = name;
        label.addEventListener("click", function () {
            this.classList.toggle("active");
        });
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
    var addGoal = function addGoal() {
        var container = document.getElementById("fertilizer-goals");
        var formula = document.getElementById("goal-element").value;
        if (formula) {
            var node = createGoal(formula, 0);
            container.appendChild(node);
        }
    };
    /*input fertilizer selections*/
    var getFertilizers = function getFertilizers() {
        var fertilizers = [];
        forEach(document.querySelectorAll('.fertilizer.active'), function (element) {
            var parsed = JSON.parse(element.dataset.fertilizer);
            fertilizers.push(parsed);
        });
        return fertilizers;
    };
    /*input volume*/
    var getVolume = function getVolume() {
        var volume = parseFloat(document.getElementById("volumeInput").value);
        return volume;
    };
    /*input goal elements*/
    var getElements = function getElements() {
        var elements = [];
        forEach(document.querySelectorAll('.goal .element.active'), function (element) {
            elements.push({ name: element.innerHTML });
        });
        return elements;
    };
    /*equation coefficients*/
    var createEquations = function createEquations(elements, fertilizers) {
        var equations = [];
        elements.forEach(function (element, index) {
            var elementEquation = [];
            fertilizers.forEach(function (fertilizer) {
                elementEquation.push(fertilizer.value.hasOwnProperty(element.name) ? fertilizer.value[element.name] : 0);
            });
            equations.push(elementEquation);
        });
        return equations;
    };
    /*equation answers*/
    var createAnswers = function createAnswers(elements, volume) {
        var answers = [];
        elements.forEach(function (element, index, arr) {
            var value = parseFloat(document.getElementById("goal" + element.name).value) || 0;
            arr[index].value = value;
            answers.push(value * volume);
        });
        return answers;
    };
    /*output goal table - calculatedppm, error */
    var setElements = function setElements(elements, fertilizers, coefficients, volume) {
        /*clear all*/
        forEach(document.querySelectorAll('.goal output'), function (output) {
            output.innerHTML = 0;
        });
        /*set some*/
        elements.forEach(function (element, index) {
            var totalmass = 0;
            coefficients.forEach(function (fertilizeramount, fertilizerindex) {
                totalmass += fertilizeramount * (fertilizers[fertilizerindex].value.hasOwnProperty(element.name) ? fertilizers[fertilizerindex].value[element.name] : 0);
            });
            var totalppm = totalmass / volume;
            document.getElementById("output" + element.name).innerHTML = Math.round(totalppm);
            document.getElementById("error" + element.name).innerHTML = Math.round(totalppm - element.value);
        });
    };
    /*output total of each fertilizer to use*/
    var setTotals = function setTotals(fertilizers, coefficients) {
        var container = document.getElementById("fertilizer-amounts");
        /*total weights of each fertilizer*/
        coefficients.forEach(function (amount, fertilizerindex) {
            var node = createAmount(fertilizers[fertilizerindex].name, Math.round(amount), "mg");
            container.appendChild(node);
        });
    };
    /*total ppm*/
    var setPPM = function setPPM(fertilizers, coefficients, volume) {
        var container = document.getElementById("fertilizer-amounts");
        var total = 0;
        coefficients.forEach(function (amount, fertilizerindex) {
            total += amount;
        });
        var ppm = createAmount("Total PPM", Math.round(total / volume), "ppm");
        container.appendChild(ppm);
    };
    /*pass checked items, goal*/
    var recalc = function recalc() {
        var container = document.getElementById("fertilizer-amounts");
        addLoading(container);

        var fertilizers = getFertilizers();
        var volume = getVolume();
        var elements = getElements();

        var equations = createEquations(elements, fertilizers);
        var answers = createAnswers(elements, volume);

        /*calculate how much of each fertilizer to use*/
        var coefficients = fertilizerCalculator.Calculate(equations, answers);

        setElements(elements, fertilizers, coefficients, volume);
        setTotals(fertilizers, coefficients);
        setPPM(fertilizers, coefficients, volume);

        removeLoading(container);
    };
    var submitEverything = function submitEverything() {
        addLoading(document.getElementById("fertilizer-amounts"));
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
        var goals = [{ name: "N", value: 211 }, { name: "P", value: 46 }, { name: "K", value: 263 }, { name: "Ca", value: 132 }, { name: "Mg", value: 20 }, { name: "S", value: 13 }];
        goals.forEach(function (element) {
            var node = createGoal(element.name, element.value);
            goalcontainer.appendChild(node);
        });

        var fertilizeradd = document.getElementById("fertilizer-add");
        fertilizeradd.addEventListener("click", addOption);

        var goaladd = document.getElementById("goal-add");
        goaladd.addEventListener("click", addGoal);

        var submit = document.getElementById("fertilizer-submit");
        submit.addEventListener("click", submitEverything);
    };
    return {
        Init: uiInit
    };
});

