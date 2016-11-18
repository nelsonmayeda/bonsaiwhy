/*data from growershouse.com
PAR measured at distances 6,12,18,24" from source
each data array measured at 0,6",12" away from center
[
[12 in @ center, 12 in @ 6 from center, 12 in @ 12 from center],
[18 in @ center, 18 in @ 6 from center, 18 in @ 12 from center],
[24 in @ center, 24 in @ 6 from center, 24 in @ 12 from center]
]
*/
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define([], factory);
    }else {
        /* Browser globals*/
        BulbData = factory();
    }
}(function () {
    return {
        coverages: ["0ft²", "1ft²", "4ft²"],
        distances: ["12in", "18in", "24in"],
        bulbs: [
                {
                    label: "55W CFL",
                    data: [
                        [52, 50, 31],
                        [26, 25, 17],
                        [12, 12, 7]
                    ]
                },
                {
                    label: "4x54w T5HO",
                    data: [
                        [380, 240, 170],
                        [240, 120, 80],
                        [140, 80, 70]
                    ]
                },
                {
                    label: "90W LED",
                    data: [
                        [485, 110, 9],
                        [248, 112, 17],
                        [140, 89, 24]
                    ]
                },
                {
                    label: "200W LED",
                    data: [
                        [825, 296, 14],
                        [375, 220, 50],
                        [216, 161, 73]
                    ]
                },
                {
                    label: "325W LED",
                    data: [
                        [1419, 455, 60],
                        [622, 340, 109],
                        [354, 242, 114]
                    ]
                },
                {
                    label: "650W LED",
                    data: [
                        [1820, 1033, 198],
                        [1024, 702, 268],
                        [652, 490, 260]
                    ]
                },
                {
                    label: "800W LED",
                    data: [
                        [1942, 1220, 194],
                        [1265, 875, 270],
                        [857, 665, 307]
                    ]
                }
            ]
    };
}));