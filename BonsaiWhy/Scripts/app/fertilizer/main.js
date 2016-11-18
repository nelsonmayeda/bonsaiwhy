if (typeof define === 'function' && define.amd) {
    /* AMD. Register as an anonymous module.*/
    require(["fertilizerui"], function (FertilizerUI) {
        FertilizerUI.Init();
    });
} else {
    /* Browser globals*/
    FertilizerUI.Init();
}