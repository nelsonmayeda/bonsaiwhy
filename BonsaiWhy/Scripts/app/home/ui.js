(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define(["svgload", "rain", "parallax"], factory);
    } else {
        /* Browser globals*/
        HomeUI = factory(SVGLoad, Rain, Parallax);
    }
}(function (svgload, rain, parallax) {
    var init = function () {
        svgload.Init();
        rain.Init();
        parallax.Init();
    };
    return {
        Init: init
    };

}));