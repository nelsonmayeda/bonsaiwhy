"use strict";

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define([], factory);
    } else {
        /* Browser globals*/
        SoilColorMaker = factory();
    }
})(function () {
    var colorIndex = -1;
    var colors = [
    /*Green 500*/
    "4CAF50",
    /*Cyan 500*/
    "00BCD4",
    /*Purple 500*/
    "9C27B0",
    /*Indigo 500*/
    "3F51B5",
    /*Amber 600*/
    "FFA000",
    /*Red 700*/
    "C62828"];
    /*input values in hex*/
    var rgba = function rgba(c, a) {
        var r = parseInt(c.substring(0, 2), 16);
        var g = parseInt(c.substring(2, 4), 16);
        var b = parseInt(c.substring(4, 6), 16);
        return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    };
    var newColor = function newColor(a) {
        colorIndex += 1;
        if (colorIndex < 0 || colorIndex == colors.length) {
            colorIndex = 0;
        }
        var color = colors[colorIndex];
        return rgba(color, a);
    };
    var currentColor = function currentColor(a) {
        var curindex = colorIndex;
        if (curindex < 0 || curindex == colors.length) {
            curindex = 0;
        }
        var color = colors[curindex];
        return rgba(color, a);
    };
    return {
        GetNewColor: newColor,
        GetCurrentColor: currentColor
    };
});

