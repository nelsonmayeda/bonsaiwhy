'use strict';

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define([], factory);
    } else {
        /* Browser globals*/
        SoilCalculator = factory();
    }
})(function () {
    /*update data when mix has been changed*/
    var calculate = function calculate(substrates) {
        var mix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        var volume = 0;
        substrates.forEach(function (eSubstrate) {
            volume += 1;
            eSubstrate.data.forEach(function (ePoint, iPoint) {
                mix[iPoint] += ePoint.water;
            });
        });
        mix.forEach(function (e, i) {
            mix[i] = e / volume;
        });
        return mix;
    };
    return {
        calculate: calculate
    };
});

