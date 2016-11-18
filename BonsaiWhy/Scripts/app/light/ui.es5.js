"use strict";

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define(["lightcalculator", "suncalc", "sundata", "bulbdata", "lightchart", "lightcolormaker"], factory);
    } else {
        /* Browser globals*/
        LightUI = factory(LightCalculator, SunCalc, SunData, BulbData, LightChart, LightColorMaker);
    }
})(function (lightCalc, sunCalc, sunData, bulbData, lightChart, colorMaker) {
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
    /*create element*/
    var createElement = function createElement(className, title, value) {
        var node = document.createElement("button");
        node.className = className;
        node.innerHTML = title;
        node.title = title;
        node.value = value;

        return node;
    };
    /*sun*/
    var sunrecalc = function sunrecalc() {
        var surfaceazimuth = document.querySelector(".azimuth.active").value;
        surfaceazimuth = parseFloat(surfaceazimuth);
        var location = document.querySelector(".location.active").value;
        var locationData = sunData.GetData(location);
        var longitude = locationData.longitude;
        var latitude = locationData.latitude;
        var indoordata = [];
        var outdoordata = [];
        locationData.data.forEach(function (monthData, month) {
            var indoor = 0;
            var outdoor = 0;
            monthData.hourly.forEach(function (hourData) {
                var date = new Date(0, 0, monthData.day, hourData.hour + 1);
                var sun = sunCalc.getPosition(date, latitude, longitude);
                /*note that suncalc azimuth is calculated degrees west of south, rather than true solar azimuth degrees east of south*/
                sun.azimuth *= -1;
                indoor += lightCalc.calculateInside(sun.altitude, sun.azimuth, Math.PI / 2, surfaceazimuth, hourData);
                outdoor += lightCalc.calculateOutside(sun.altitude, sun.azimuth, 0, sun.azimuth, hourData);
            });
            indoor = Math.round(indoor * 7.058 / 1000);;
            outdoor = Math.round(outdoor * 7.058 / 1000);
            indoordata.push(indoor);
            outdoordata.push(outdoor);
        });
        lightChart.UpdateDataset(0, outdoordata);
        lightChart.UpdateDataset(1, indoordata);
    };
    /*locations*/
    var switchLocation = function switchLocation() {
        var locations = document.querySelectorAll(".location");
        forEach(locations, function (element) {
            element.classList.remove("active");
        });
        this.classList.add("active");
        sunrecalc();
    };
    var createLocations = function createLocations() {
        var locations = sunData.GetLocations();
        var container = document.getElementById("location-container");
        locations.forEach(function (element, index) {
            var node = createElement("location", element.label, element.id);
            node.addEventListener("click", switchLocation);
            container.appendChild(node);
            if (index == 0) {
                node.classList.add("active");
            }
        });
        removeLoading(container);
    };
    /*azimuth*/
    var switchAzimuth = function switchAzimuth() {
        var azimuths = document.querySelectorAll(".azimuth");
        forEach(azimuths, function (element) {
            element.classList.remove("active");
        });
        this.classList.add("active");
        sunrecalc();
    };
    var createAzimuths = function createAzimuths() {
        var azimuths = [{ label: "N", value: -1 * Math.PI }, { label: "NW", value: -3 * Math.PI / 4 }, { label: "W", value: -1 * Math.PI / 2 }, { label: "SW", value: -1 * Math.PI / 4 }, { label: "S", value: 0 }, { label: "SE", value: Math.PI / 4 }, { label: "E", value: Math.PI / 2 }, { label: "NE", value: 3 * Math.PI / 4 }];
        var container = document.getElementById("azimuth-container");
        azimuths.forEach(function (element, index) {
            var node = createElement("azimuth", element.label, element.value);
            node.addEventListener("click", switchAzimuth);
            container.appendChild(node);
            if (index == 4) {
                node.classList.add("active");
            }
        });
        removeLoading(container);
    };
    var sunInit = function sunInit() {
        createLocations();
        createAzimuths();
        lightChart.NewDataset("outdoor", colorMaker.GetNewColor(1));
        lightChart.NewDataset("indoor", colorMaker.GetNewColor(1));
        sunrecalc();
    };
    /*bulb*/
    var bulbrecalc = function bulbrecalc() {
        var bulbIndex = parseInt(document.querySelector(".bulb.active").value);
        var distanceIndex = parseInt(document.querySelector(".distance.active").value);
        var coverageIndex = parseInt(document.querySelector(".coverage.active").value);
        var light = Math.round(bulbData.bulbs[bulbIndex].data[distanceIndex][coverageIndex] * 18 * 3.6 / 1000);
        var lightdata = [];
        var xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        xLabels.forEach(function () {
            lightdata.push(light);
        });
        lightChart.UpdateDataset(2, lightdata);
    };
    /*bulb distances*/
    var switchDistance = function switchDistance() {
        var distances = document.querySelectorAll(".distance");
        forEach(distances, function (element) {
            element.classList.remove("active");
        });
        this.classList.add("active");
        bulbrecalc();
    };
    var createDistances = function createDistances() {
        var distances = bulbData.distances;
        var container = document.getElementById("distance-container");
        distances.forEach(function (element, index) {
            var node = createElement("distance", element, index);
            node.addEventListener("click", switchDistance);
            container.appendChild(node);
            if (index == 0) {
                node.classList.add("active");
            }
        });
        removeLoading(container);
    };
    /*bulb coverage*/
    var switchCoverage = function switchCoverage() {
        var bulbs = document.querySelectorAll(".coverage");
        forEach(bulbs, function (element) {
            element.classList.remove("active");
        });
        this.classList.add("active");
        bulbrecalc();
    };
    var createCoverages = function createCoverages() {
        var coverages = bulbData.coverages;
        var container = document.getElementById("coverage-container");
        coverages.forEach(function (element, index) {
            var node = createElement("coverage", element, index);
            node.addEventListener("click", switchCoverage);
            container.appendChild(node);
            if (index == 0) {
                node.classList.add("active");
            }
        });
        removeLoading(container);
    };
    /*bulb types*/
    var switchBulb = function switchBulb() {
        var bulbs = document.querySelectorAll(".bulb");
        forEach(bulbs, function (element) {
            element.classList.remove("active");
        });
        this.classList.add("active");
        bulbrecalc();
    };
    var createBulbs = function createBulbs() {
        var bulbs = bulbData.bulbs;
        var container = document.getElementById("bulb-container");
        bulbs.forEach(function (element, index) {
            var node = createElement("bulb", element.label, index);
            node.addEventListener("click", switchBulb);
            container.appendChild(node);
            if (index == 0) {
                node.classList.add("active");
            }
        });
        removeLoading(container);
    };
    var bulbInit = function bulbInit() {
        createBulbs();
        createDistances();
        createCoverages();
        lightChart.NewDataset("bulb", colorMaker.GetNewColor(1));
        bulbrecalc();
    };
    /*chart*/
    var chartInit = function chartInit() {
        var title = 'Daily Light Integral - mol/m²day';
        var xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var ctx1 = document.getElementById("chart1").getContext("2d");
        lightChart.Init(ctx1, title, xLabels);
    };
    var uiInit = function uiInit() {
        chartInit();
        sunInit();
        bulbInit();
    };
    return {
        Init: function Init() {
            uiInit();
        }
    };
});

