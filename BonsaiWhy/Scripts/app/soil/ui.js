(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define(['soilcalculator', 'soildata', 'pottingsoildata', 'soilchart', 'soilcolormaker'], factory);
    } else {
        /* Browser globals*/
        SoilUI = factory(SoilCalculator, SoilData, PottingSoilData, SoilChart, SoilColorMaker);
    }
}(function (soilcalculator, soildata, pottingSoilData, soilChart, colorMaker) {

    var forEach = function (array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
            callback.call(scope, array[i], i, array);
        }
    };
    /*remove isn't supported in older browsers*/
    var removeLoading = function (container) {
        var loading = container.querySelector(".loading");
        container.removeChild(loading);
    };
    /*source*/
    var copySubstrate = function (element) {
        var container = document.querySelector('.mix.active .substrate-container');
        var node = element.cloneNode(true);
        node.title = "Remove " + element.value;
        container.appendChild(node);
    };
    var sourceClick = function (e) {
        var s = findParent(e.target, "substrate");
        if (s) {
            copySubstrate(s);
            recalculateCurrentMix();
        }
    };
    var createSubstrate = function (element) {
        var node = document.createElement('button');
        node.className = "substrate";
        node.innerHTML = element.label;
        node.value = element.label;
        node.title = "Add " + element.label;
        node.dataset.substrate = JSON.stringify(element);
        return node;
    };
    var sourceInit = function () {
        var source = document.getElementById("source");
        source.addEventListener("click", sourceClick);

        var container = document.getElementById("substrate-container");
        if (container) {
            soildata.forEach(function (element) {
                var node = createSubstrate(element);
                container.appendChild(node);
            });
        }

        removeLoading(container);
    };
    /*destination*/
    var recalculateCurrentMix = function () {
        var data = [];
        var substrates = document.querySelectorAll('.mix.active .substrate')
        forEach(substrates,function (element) {
            data.push(JSON.parse(element.dataset.substrate));
        });
        var iMix = -1;
        var mixes = document.querySelectorAll('.mix');
        forEach(mixes,function (mix, i) {
            if (mix.classList.contains('active')) {
                iMix = i;
            }
        });
        if (iMix >= 0) {
            var water = soilcalculator.calculate(data);
            var roundedwater = [];
            water.forEach(function(e){
                roundedwater.push(Math.round(1000 * e) / 1000);
            });
            soilChart.UpdateDataset(iMix, roundedwater);
        }
    };
    var findParent = function (e, filter) {
        if (e) {
            if (e.classList.contains(filter)) {
                return e;
            }
            else {
                return findParent(e.parentElement, filter);
            }
        }
        return null;
    };
    var destinationClick = function (e) {
        var m = findParent(e.target, "mix");
        if (m) {
            activateMix(m);
            var s = findParent(e.target, "substrate");
            if (s) {
                /*s.remove() isn't supported in older browsers*/
                s.parentElement.removeChild(s);
                recalculateCurrentMix();
            }
        }
    };
    var activateMix = function (someMix) {
        var otherMixes = document.querySelectorAll('.mix')
        forEach(otherMixes, function (mix) {
            mix.classList.remove("active");
        });
        someMix.classList.add("active");
    };
    var createMix = function (text, color) {
        var mixes = document.querySelectorAll('.mix');
        var iMix = mixes.length + 1;

        var node = document.createElement('div');
        node.className = "mix active";
        var label = document.createElement('div');
        label.className = "label",
        label.appendChild(document.createTextNode(text));
        var container = document.createElement('div');
        container.className = "substrate-container";

        node.appendChild(label);
        node.appendChild(container);
        node.style.backgroundColor = color;
        return node;
    };
    var newMix = function () {
        var mixes = document.querySelectorAll('.mix');
        var iMix = mixes.length + 1;
        var label = "Mix " + iMix;
        var color = colorMaker.GetNewColor(1);
        var container = document.getElementById("mixes-container");
        var node = createMix(label, color);
        container.insertBefore(node, container.firstChild);
        activateMix(node);

        soilChart.NewDataset(label, color);
    };
    var customMix = function (values) {
        newMix();
        values.forEach(function (element) {
            var substrate = document.querySelector('.substrate[value=' + element + ']');
            copySubstrate(substrate);
        });
        recalculateCurrentMix();
    }
    var destinationInit = function () {
        var destination = document.getElementById("destination");
        destination.addEventListener("click", destinationClick);

        var submit = document.getElementById("btn-add");
        submit.addEventListener("click", newMix);

        customMix(["Akadama", "Pumice", "Lava"]);
        newMix();

        var container = document.getElementById("mixes-container");
        removeLoading(container);
    };
    /*chart*/
    var defaultChartData = function () {
        pottingSoilData.forEach(function(e){
            var color = colorMaker.GetNewColor(1);
            soilChart.NewDataset(e.label, color);

            var water = [];
            e.data.forEach(function (e) {
                water.push( e.water);
            });
            soilChart.UpdateDataset(0, water);
        });
    };
    var chartInit = function () {
        var title = 'Water ratio by volume - %';
        var xLabels = ["0hr", "1hr", "2hr", "3hr", "6hr", "12hr", "24hr", "48hr", "72hr"];
        var ctx1 = document.getElementById("chart1").getContext("2d");
        soilChart.Init(ctx1, title, xLabels);

        defaultChartData();
    };
    var uiInit = function () {
        chartInit();
        sourceInit();
        destinationInit();
    };

    return {
        Init: uiInit
    };
}));