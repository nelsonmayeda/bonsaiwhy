"use strict";

if (typeof define === 'function' && define.amd) {
    /* AMD. Register as an anonymous module.*/
    require(["homeui"], function (HomeUI) {
        HomeUI.Init();
    });
} else {
    /* Browser globals*/
    HomeUI.Init();
}

