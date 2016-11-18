
if (typeof define === 'function' && define.amd) {
    /* AMD. Register as an anonymous module.*/
    require.config({
        paths: {
            'chartjs': 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min'
        }
    });
    require(["lightui"], function (LightUI) {
        LightUI.Init();
    });
} else {
    /* Browser globals*/
    LightUI.Init();
}