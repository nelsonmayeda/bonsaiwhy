/*test reveal tooltips in navbar during scroll*/
'use strict';

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define([], factory);
    } else {
        /* Browser globals*/
        Menu = factory();
    }
})(function () {

    var scroll = function scroll(e) {
        var menubox = document.querySelector('#body-header').getBoundingClientRect().bottom;

        var lighttip = document.querySelector('#light-tip');
        var soiltip = document.querySelector('#soil-tip');
        var fertilizertip = document.querySelector('#fertilizer-tip');

        var lightbox = lighttip.getBoundingClientRect().top;
        var soilbox = soiltip.getBoundingClientRect().top;
        var fertilizerbox = fertilizertip.getBoundingClientRect().top;

        var navlight = document.querySelector('#nav-light');
        var navsoil = document.querySelector('#nav-soil');
        var navfertilizer = document.querySelector('#nav-fertilizer');

        if (lightbox < menubox) {
            lighttip.classList.add("hidden");
            navlight.classList.remove("hidden");
        } else {
            lighttip.classList.remove("hidden");
            navlight.classList.add("hidden");
        }

        if (soilbox < menubox) {
            soiltip.classList.add("hidden");
            navsoil.classList.remove("hidden");
        } else {
            soiltip.classList.remove("hidden");
            navsoil.classList.add("hidden");
        }

        if (fertilizerbox < menubox) {
            fertilizertip.classList.add("hidden");
            navfertilizer.classList.remove("hidden");
        } else {
            fertilizertip.classList.remove("hidden");
            navfertilizer.classList.add("hidden");
        }
    };
    var Init = function Init() {
        window.addEventListener("scroll", scroll);
    };

    return {
        Init: Init
    };
});

