"use strict";

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define([], factory);
    } else {
        /* Browser globals*/
        PottingSoilData = factory();
    }
})(function () {
    /*data is in ounces/cubic inch*/
    return [{
        label: "Potting Soil",
        data: [{ hour: 0, water: 0.372 }, { hour: 1, water: 0.355 }, { hour: 2, water: 0.338 }, { hour: 3, water: 0.317 }, { hour: 6, water: 0.279 }, { hour: 12, water: 0.254 }, { hour: 24, water: 0.224 }, { hour: 48, water: 0.152 }, { hour: 72, water: 0.118 }]
    }, {
        label: "River Sand",
        data: [{ hour: 0, water: 0.334 }, { hour: 1, water: 0.317 }, { hour: 2, water: 0.292 }, { hour: 3, water: 0.266 }, { hour: 6, water: 0.216 }, { hour: 12, water: 0.199 }, { hour: 24, water: 0.165 }, { hour: 48, water: 0.063 }, { hour: 72, water: 0.025 }]
    }];
});

