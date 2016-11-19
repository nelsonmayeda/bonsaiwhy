(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define([], factory);
    }else {
        /* Browser globals*/
        FertilizerData = factory();
    }
}(function () {
    return [
        {
            name: "Calcium Nitrate",
            formula: "Ca5(NO3)10NH4NO3(H2O)10"
        },
        {
            name: "Potassium Nitrate",
            formula: "KNO3"
        },
        {
            name: "Magnesium Sulfate",
            formula: "MgSO4(H2O)7"
        },
        {
            name: "Potassium Phosphate",
            formula: "KH2PO4"
        }
    ];
}));