"use strict";

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define([], factory);
    } else {
        /* Browser globals*/
        SoilData = factory();
    }
})(function () {
    /*data is in ounces/cubic inch*/
    return [{
        label: "Akadama",
        data: [{ hour: 0, water: 0.347 }, { hour: 1, water: 0.325 }, { hour: 2, water: 0.304 }, { hour: 3, water: 0.283 }, { hour: 6, water: 0.228 }, { hour: 12, water: 0.203 }, { hour: 24, water: 0.186 }, { hour: 48, water: 0.106 }, { hour: 72, water: 0.072 }]
    }, {
        label: "Pumice",
        data: [{ hour: 0, water: 0.190 }, { hour: 1, water: 0.177 }, { hour: 2, water: 0.135 }, { hour: 3, water: 0.109 }, { hour: 6, water: 0.050 }, { hour: 12, water: 0.029 }, { hour: 24, water: 0.020 }, { hour: 48, water: 0.000 }, { hour: 72, water: 0.000 }]
    }, {
        label: "Lava",
        data: [{ hour: 0, water: 0.178 }, { hour: 1, water: 0.165 }, { hour: 2, water: 0.123 }, { hour: 3, water: 0.097 }, { hour: 6, water: 0.038 }, { hour: 12, water: 0.017 }, { hour: 24, water: 0.000 }, { hour: 48, water: 0.000 }, { hour: 72, water: 0.000 }]
    }, {
        label: "DE",
        data: [{ hour: 0, water: 0.452 }, { hour: 1, water: 0.444 }, { hour: 2, water: 0.418 }, { hour: 3, water: 0.402 }, { hour: 6, water: 0.342 }, { hour: 12, water: 0.317 }, { hour: 24, water: 0.287 }, { hour: 48, water: 0.203 }, { hour: 72, water: 0.165 }]
    }, {
        label: "Turface",
        data: [{ hour: 0, water: 0.304 }, { hour: 1, water: 0.266 }, { hour: 2, water: 0.245 }, { hour: 3, water: 0.232 }, { hour: 6, water: 0.207 }, { hour: 12, water: 0.190 }, { hour: 24, water: 0.173 }, { hour: 48, water: 0.101 }, { hour: 72, water: 0.072 }]
    }, {
        label: "Bark",
        data: [{ hour: 0, water: 0.093 }, { hour: 1, water: 0.088 }, { hour: 2, water: 0.073 }, { hour: 3, water: 0.068 }, { hour: 6, water: 0.051 }, { hour: 12, water: 0.042 }, { hour: 24, water: 0.037 }, { hour: 48, water: 0.017 }, { hour: 72, water: 0.002 }]
    }, {
        label: "Perlite",
        data: [{ hour: 0, water: 0.165 }, { hour: 1, water: 0.152 }, { hour: 2, water: 0.127 }, { hour: 3, water: 0.101 }, { hour: 6, water: 0.055 }, { hour: 12, water: 0.030 }, { hour: 24, water: 0.021 }, { hour: 48, water: 0.000 }, { hour: 72, water: 0.000 }]
    }];
});

