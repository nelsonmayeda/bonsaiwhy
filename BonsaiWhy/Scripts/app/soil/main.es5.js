'use strict';

if (typeof define === 'function' && define.amd) {
    /* AMD. Register as an anonymous module.*/
    require.config({
        paths: {
            'chartjs': 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min'
        }
    });
    require(["soilui"], function (SoilUI) {
        SoilUI.Init();
    });
} else {
    /* Browser globals*/
    SoilUI.Init();
}

