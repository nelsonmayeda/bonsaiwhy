
/*hourly data from National Renewable Energy Laboratory
units are Watt Hour/meter2
hour: 1 starts at 1AM, 23 is 11PM
note that cover comes from daily average data, it is monthly,not hourly
note: W118 22, N34 05 los angeles, ca
http://rredc.nrel.gov/solar/old_data/nsrdb/1961-1990/bluebook/state.html
*/
"use strict";

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define([], factory);
    } else {
        /* Browser globals*/
        SunData = factory();
    }
})(function () {
    var cachedData = [
    /*Los Angeles*/
    {
        id: "23174",
        label: "Los Angeles",
        longitude: -118.22,
        latitude: 34.05,
        data: [
        /*January*/
        {
            label: "January",
            day: 1,
            hourly: [{ hour: 7, global: 40, direct: 108, diffuse: 29, extraterrestrial: 0.1, cover: 4.93 }, { hour: 8, global: 161, direct: 310, diffuse: 78, extraterrestrial: 0.26, cover: 4.93 }, { hour: 9, global: 296, direct: 427, diffuse: 121, extraterrestrial: 0.41, cover: 4.93 }, { hour: 10, global: 400, direct: 484, diffuse: 152, extraterrestrial: 0.51, cover: 4.93 }, { hour: 11, global: 463, direct: 518, diffuse: 168, extraterrestrial: 0.57, cover: 4.93 }, { hour: 12, global: 466, direct: 522, diffuse: 167, extraterrestrial: 0.57, cover: 4.93 }, { hour: 13, global: 419, direct: 504, diffuse: 154, extraterrestrial: 0.52, cover: 4.93 }, { hour: 14, global: 318, direct: 449, diffuse: 127, extraterrestrial: 0.43, cover: 4.93 }, { hour: 15, global: 184, direct: 341, diffuse: 86, extraterrestrial: 0.29, cover: 4.93 }, { hour: 16, global: 55, direct: 142, diffuse: 37, extraterrestrial: 0.12, cover: 4.93 }, { hour: 17, global: 3, direct: 6, diffuse: 2, extraterrestrial: 0.14, cover: 4.93 }]
        },

        /*February*/
        {
            label: "February",
            day: 32,
            hourly: [{ hour: 6, global: 7, direct: 9, diffuse: 6, extraterrestrial: 0.13, cover: 5.28 }, { hour: 7, global: 78, direct: 172, diffuse: 50, extraterrestrial: 0.16, cover: 5.28 }, { hour: 8, global: 223, direct: 337, diffuse: 106, extraterrestrial: 0.35, cover: 5.28 }, { hour: 9, global: 374, direct: 438, diffuse: 153, extraterrestrial: 0.5, cover: 5.28 }, { hour: 10, global: 489, direct: 493, diffuse: 186, extraterrestrial: 0.61, cover: 5.28 }, { hour: 11, global: 556, direct: 524, diffuse: 202, extraterrestrial: 0.67, cover: 5.28 }, { hour: 12, global: 560, direct: 523, diffuse: 204, extraterrestrial: 0.68, cover: 5.28 }, { hour: 13, global: 521, direct: 520, diffuse: 191, extraterrestrial: 0.63, cover: 5.28 }, { hour: 14, global: 420, direct: 483, diffuse: 162, extraterrestrial: 0.53, cover: 5.28 }, { hour: 15, global: 273, direct: 397, diffuse: 119, extraterrestrial: 0.39, cover: 5.28 }, { hour: 16, global: 117, direct: 242, diffuse: 66, extraterrestrial: 0.21, cover: 5.28 }, { hour: 17, global: 20, direct: 33, diffuse: 16, extraterrestrial: 0.12, cover: 5.28 }]
        },

        /*March*/
        {
            label: "March",
            day: 60,
            hourly: [{ hour: 6, global: 38, direct: 71, diffuse: 29, extraterrestrial: 0.12, cover: 5.04 }, { hour: 7, global: 164, direct: 254, diffuse: 89, extraterrestrial: 0.29, cover: 5.04 }, { hour: 8, global: 334, direct: 379, diffuse: 152, extraterrestrial: 0.48, cover: 5.04 }, { hour: 9, global: 486, direct: 446, diffuse: 202, extraterrestrial: 0.63, cover: 5.04 }, { hour: 10, global: 615, direct: 512, diffuse: 233, extraterrestrial: 0.74, cover: 5.04 }, { hour: 11, global: 684, direct: 548, diffuse: 243, extraterrestrial: 0.8, cover: 5.04 }, { hour: 12, global: 696, direct: 563, diffuse: 242, extraterrestrial: 0.8, cover: 5.04 }, { hour: 13, global: 639, direct: 553, diffuse: 223, extraterrestrial: 0.75, cover: 5.04 }, { hour: 14, global: 529, direct: 518, diffuse: 194, extraterrestrial: 0.64, cover: 5.04 }, { hour: 15, global: 368, direct: 437, diffuse: 151, extraterrestrial: 0.49, cover: 5.04 }, { hour: 16, global: 194, direct: 318, diffuse: 96, extraterrestrial: 0.31, cover: 5.04 }, { hour: 17, global: 46, direct: 100, diffuse: 34, extraterrestrial: 0.12, cover: 5.04 }]
        },

        /*April*/
        {
            label: "April",
            day: 91,
            hourly: [{ hour: 5, global: 17, direct: 20, diffuse: 15, extraterrestrial: 0.11, cover: 4.44 }, { hour: 6, global: 108, direct: 184, diffuse: 67, extraterrestrial: 0.22, cover: 4.44 }, { hour: 7, global: 274, direct: 331, diffuse: 133, extraterrestrial: 0.43, cover: 4.44 }, { hour: 8, global: 455, direct: 429, diffuse: 193, extraterrestrial: 0.61, cover: 4.44 }, { hour: 9, global: 614, direct: 501, diffuse: 235, extraterrestrial: 0.75, cover: 4.44 }, { hour: 10, global: 743, direct: 567, diffuse: 256, extraterrestrial: 0.86, cover: 4.44 }, { hour: 11, global: 811, direct: 604, diffuse: 262, extraterrestrial: 0.91, cover: 4.44 }, { hour: 12, global: 813, direct: 614, diffuse: 257, extraterrestrial: 0.9, cover: 4.44 }, { hour: 13, global: 755, direct: 613, diffuse: 239, extraterrestrial: 0.84, cover: 4.44 }, { hour: 14, global: 634, direct: 579, diffuse: 211, extraterrestrial: 0.73, cover: 4.44 }, { hour: 15, global: 461, direct: 505, diffuse: 170, extraterrestrial: 0.57, cover: 4.44 }, { hour: 16, global: 269, direct: 394, diffuse: 117, extraterrestrial: 0.39, cover: 4.44 }, { hour: 17, global: 92, direct: 193, diffuse: 56, extraterrestrial: 0.18, cover: 4.44 }, { hour: 18, global: 9, direct: 9, diffuse: 8, extraterrestrial: 0.12, cover: 4.44 }]
        },

        /*May*/
        {
            label: "May",
            day: 121,
            hourly: [{ hour: 5, global: 38, direct: 45, diffuse: 33, extraterrestrial: 0.12, cover: 5.1 }, { hour: 6, global: 148, direct: 153, diffuse: 100, extraterrestrial: 0.32, cover: 5.1 }, { hour: 7, global: 297, direct: 234, diffuse: 177, extraterrestrial: 0.51, cover: 5.1 }, { hour: 8, global: 456, direct: 315, diffuse: 241, extraterrestrial: 0.68, cover: 5.1 }, { hour: 9, global: 616, direct: 405, diffuse: 282, extraterrestrial: 0.82, cover: 5.1 }, { hour: 10, global: 747, direct: 489, diffuse: 298, extraterrestrial: 0.92, cover: 5.1 }, { hour: 11, global: 831, direct: 559, diffuse: 293, extraterrestrial: 0.96, cover: 5.1 }, { hour: 12, global: 840, direct: 582, diffuse: 284, extraterrestrial: 0.95, cover: 5.1 }, { hour: 13, global: 788, direct: 584, diffuse: 266, extraterrestrial: 0.89, cover: 5.1 }, { hour: 14, global: 668, direct: 548, diffuse: 238, extraterrestrial: 0.78, cover: 5.1 }, { hour: 15, global: 501, direct: 486, diffuse: 194, extraterrestrial: 0.63, cover: 5.1 }, { hour: 16, global: 313, direct: 388, diffuse: 139, extraterrestrial: 0.45, cover: 5.1 }, { hour: 17, global: 134, direct: 227, diffuse: 77, extraterrestrial: 0.25, cover: 5.1 }, { hour: 18, global: 25, direct: 32, diffuse: 21, extraterrestrial: 0.11, cover: 5.1 }]
        },

        /*June*/
        {
            label: "June",
            day: 152,
            hourly: [{ hour: 5, global: 47, direct: 49, diffuse: 41, extraterrestrial: 0.14, cover: 5.1 }, { hour: 6, global: 153, direct: 132, diffuse: 108, extraterrestrial: 0.34, cover: 5.1 }, { hour: 7, global: 298, direct: 209, diffuse: 186, extraterrestrial: 0.53, cover: 5.1 }, { hour: 8, global: 457, direct: 296, diffuse: 249, extraterrestrial: 0.7, cover: 5.1 }, { hour: 9, global: 605, direct: 376, diffuse: 290, extraterrestrial: 0.84, cover: 5.1 }, { hour: 10, global: 742, direct: 467, diffuse: 306, extraterrestrial: 0.93, cover: 5.1 }, { hour: 11, global: 826, direct: 531, diffuse: 306, extraterrestrial: 0.98, cover: 5.1 }, { hour: 12, global: 849, direct: 568, diffuse: 295, extraterrestrial: 0.97, cover: 5.1 }, { hour: 13, global: 810, direct: 588, diffuse: 270, extraterrestrial: 0.92, cover: 5.1 }, { hour: 14, global: 704, direct: 567, diffuse: 242, extraterrestrial: 0.81, cover: 5.1 }, { hour: 15, global: 538, direct: 498, diffuse: 205, extraterrestrial: 0.67, cover: 5.1 }, { hour: 16, global: 354, direct: 411, diffuse: 152, extraterrestrial: 0.49, cover: 5.1 }, { hour: 17, global: 173, direct: 274, diffuse: 91, extraterrestrial: 0.3, cover: 5.1 }, { hour: 18, global: 39, direct: 72, diffuse: 31, extraterrestrial: 0.11, cover: 5.1 }]
        },

        /*July*/
        {
            label: "July",
            day: 182,
            hourly: [{ hour: 5, global: 36, direct: 43, diffuse: 31, extraterrestrial: 0.11, cover: 3.82 }, { hour: 6, global: 146, direct: 164, diffuse: 96, extraterrestrial: 0.31, cover: 3.82 }, { hour: 7, global: 313, direct: 292, diffuse: 167, extraterrestrial: 0.5, cover: 3.82 }, { hour: 8, global: 505, direct: 424, diffuse: 218, extraterrestrial: 0.67, cover: 3.82 }, { hour: 9, global: 686, direct: 535, diffuse: 247, extraterrestrial: 0.82, cover: 3.82 }, { hour: 10, global: 827, direct: 618, diffuse: 258, extraterrestrial: 0.92, cover: 3.82 }, { hour: 11, global: 911, direct: 673, diffuse: 257, extraterrestrial: 0.97, cover: 3.82 }, { hour: 12, global: 921, direct: 688, diffuse: 253, extraterrestrial: 0.97, cover: 3.82 }, { hour: 13, global: 865, direct: 681, diffuse: 240, extraterrestrial: 0.92, cover: 3.82 }, { hour: 14, global: 746, direct: 646, diffuse: 219, extraterrestrial: 0.81, cover: 3.82 }, { hour: 15, global: 575, direct: 574, diffuse: 189, extraterrestrial: 0.67, cover: 3.82 }, { hour: 16, global: 379, direct: 469, diffuse: 145, extraterrestrial: 0.5, cover: 3.82 }, { hour: 17, global: 183, direct: 306, diffuse: 90, extraterrestrial: 0.3, cover: 3.82 }, { hour: 18, global: 40, direct: 77, diffuse: 31, extraterrestrial: 0.11, cover: 3.82 }]
        },

        /*August*/
        {
            label: "August",
            day: 213,
            hourly: [{ hour: 5, global: 20, direct: 16, diffuse: 18, extraterrestrial: 0.11, cover: 3.68 }, { hour: 6, global: 105, direct: 128, diffuse: 73, extraterrestrial: 0.25, cover: 3.68 }, { hour: 7, global: 263, direct: 256, diffuse: 148, extraterrestrial: 0.45, cover: 3.68 }, { hour: 8, global: 454, direct: 399, diffuse: 202, extraterrestrial: 0.63, cover: 3.68 }, { hour: 9, global: 638, direct: 517, diffuse: 236, extraterrestrial: 0.78, cover: 3.68 }, { hour: 10, global: 791, direct: 621, diffuse: 243, extraterrestrial: 0.88, cover: 3.68 }, { hour: 11, global: 873, direct: 674, diffuse: 242, extraterrestrial: 0.93, cover: 3.68 }, { hour: 12, global: 884, direct: 697, diffuse: 234, extraterrestrial: 0.93, cover: 3.68 }, { hour: 13, global: 827, direct: 691, diffuse: 221, extraterrestrial: 0.87, cover: 3.68 }, { hour: 14, global: 699, direct: 642, diffuse: 204, extraterrestrial: 0.77, cover: 3.68 }, { hour: 15, global: 519, direct: 558, diffuse: 173, extraterrestrial: 0.62, cover: 3.68 }, { hour: 16, global: 318, direct: 439, diffuse: 126, extraterrestrial: 0.43, cover: 3.68 }, { hour: 17, global: 126, direct: 237, diffuse: 70, extraterrestrial: 0.23, cover: 3.68 }, { hour: 18, global: 20, direct: 26, diffuse: 17, extraterrestrial: 0.11, cover: 3.68 }]
        },

        /*September*/
        {
            label: "September",
            day: 244,
            hourly: [{ hour: 5, global: 7, direct: 5, diffuse: 6, extraterrestrial: 0.12, cover: 4.32 }, { hour: 6, global: 73, direct: 111, diffuse: 52, extraterrestrial: 0.18, cover: 4.32 }, { hour: 7, global: 215, direct: 244, diffuse: 120, extraterrestrial: 0.38, cover: 4.32 }, { hour: 8, global: 380, direct: 346, diffuse: 183, extraterrestrial: 0.57, cover: 4.32 }, { hour: 9, global: 536, direct: 432, diffuse: 227, extraterrestrial: 0.71, cover: 4.32 }, { hour: 10, global: 676, direct: 529, diffuse: 244, extraterrestrial: 0.81, cover: 4.32 }, { hour: 11, global: 751, direct: 594, diffuse: 240, extraterrestrial: 0.85, cover: 4.32 }, { hour: 12, global: 763, direct: 629, diffuse: 228, extraterrestrial: 0.84, cover: 4.32 }, { hour: 13, global: 695, direct: 622, diffuse: 208, extraterrestrial: 0.78, cover: 4.32 }, { hour: 14, global: 568, direct: 581, diffuse: 181, extraterrestrial: 0.66, cover: 4.32 }, { hour: 15, global: 388, direct: 488, diffuse: 142, extraterrestrial: 0.5, cover: 4.32 }, { hour: 16, global: 196, direct: 335, diffuse: 90, extraterrestrial: 0.31, cover: 4.32 }, { hour: 17, global: 47, direct: 101, diffuse: 33, extraterrestrial: 0.12, cover: 4.32 }, { hour: 18, global: 1, direct: 1, diffuse: 1, extraterrestrial: 0.09, cover: 4.32 }]
        },

        /*October*/
        {
            label: "October",
            day: 274,
            hourly: [{ hour: 6, global: 40, direct: 76, diffuse: 30, extraterrestrial: 0.11, cover: 4.45 }, { hour: 7, global: 165, direct: 246, diffuse: 91, extraterrestrial: 0.3, cover: 4.45 }, { hour: 8, global: 323, direct: 367, diffuse: 149, extraterrestrial: 0.47, cover: 4.45 }, { hour: 9, global: 468, direct: 449, diffuse: 194, extraterrestrial: 0.61, cover: 4.45 }, { hour: 10, global: 582, direct: 526, diffuse: 213, extraterrestrial: 0.7, cover: 4.45 }, { hour: 11, global: 645, direct: 583, diffuse: 214, extraterrestrial: 0.73, cover: 4.45 }, { hour: 12, global: 636, direct: 598, diffuse: 205, extraterrestrial: 0.72, cover: 4.45 }, { hour: 13, global: 555, direct: 576, diffuse: 182, extraterrestrial: 0.64, cover: 4.45 }, { hour: 14, global: 423, direct: 526, diffuse: 148, extraterrestrial: 0.52, cover: 4.45 }, { hour: 15, global: 250, direct: 410, diffuse: 103, extraterrestrial: 0.36, cover: 4.45 }, { hour: 16, global: 84, direct: 196, diffuse: 50, extraterrestrial: 0.16, cover: 4.45 }, { hour: 17, global: 8, direct: 11, diffuse: 7, extraterrestrial: 0.17, cover: 4.45 }]
        },

        /*November*/
        {
            label: "November",
            day: 305,
            hourly: [{ hour: 6, global: 15, direct: 27, diffuse: 12, extraterrestrial: 0.11, cover: 4.49 }, { hour: 7, global: 102, direct: 225, diffuse: 58, extraterrestrial: 0.19, cover: 4.49 }, { hour: 8, global: 245, direct: 381, diffuse: 107, extraterrestrial: 0.36, cover: 4.49 }, { hour: 9, global: 380, direct: 477, diffuse: 145, extraterrestrial: 0.49, cover: 4.49 }, { hour: 10, global: 478, direct: 534, diffuse: 168, extraterrestrial: 0.58, cover: 4.49 }, { hour: 11, global: 519, direct: 558, diffuse: 175, extraterrestrial: 0.61, cover: 4.49 }, { hour: 12, global: 499, direct: 555, diffuse: 167, extraterrestrial: 0.59, cover: 4.49 }, { hour: 13, global: 425, direct: 524, diffuse: 150, extraterrestrial: 0.52, cover: 4.49 }, { hour: 14, global: 303, direct: 456, diffuse: 117, extraterrestrial: 0.4, cover: 4.49 }, { hour: 15, global: 152, direct: 315, diffuse: 73, extraterrestrial: 0.25, cover: 4.49 }, { hour: 16, global: 33, direct: 79, diffuse: 25, extraterrestrial: 0.1, cover: 4.49 }]
        },

        /*December*/
        {
            label: "December",
            day: 335,
            hourly: [{ hour: 6, global: 1, direct: 3, diffuse: 1, extraterrestrial: 0.14, cover: 4.69 }, { hour: 7, global: 50, direct: 142, diffuse: 33, extraterrestrial: 0.11, cover: 4.69 }, { hour: 8, global: 176, direct: 341, diffuse: 81, extraterrestrial: 0.28, cover: 4.69 }, { hour: 9, global: 305, direct: 449, diffuse: 120, extraterrestrial: 0.41, cover: 4.69 }, { hour: 10, global: 402, direct: 509, diffuse: 145, extraterrestrial: 0.5, cover: 4.69 }, { hour: 11, global: 445, direct: 525, diffuse: 158, extraterrestrial: 0.54, cover: 4.69 }, { hour: 12, global: 432, direct: 514, diffuse: 155, extraterrestrial: 0.53, cover: 4.69 }, { hour: 13, global: 372, direct: 490, diffuse: 139, extraterrestrial: 0.47, cover: 4.69 }, { hour: 14, global: 264, direct: 426, diffuse: 107, extraterrestrial: 0.37, cover: 4.69 }, { hour: 15, global: 130, direct: 292, diffuse: 65, extraterrestrial: 0.22, cover: 4.69 }, { hour: 16, global: 27, direct: 65, diffuse: 21, extraterrestrial: 0.1, cover: 4.69 }]
        }]
    },
    /*Seattle*/
    {
        id: "24233",
        label: "Seattle",
        longitude: -122.18,
        latitude: 47.27,
        data: [

        /*January*/
        {
            label: "January",
            day: 1,
            hourly: [{ hour: 8, global: 3, direct: 7, diffuse: 2, extraterrestrial: 0.16, cover: 8.5 }, { hour: 9, global: 31, direct: 64, diffuse: 25, extraterrestrial: 0.09, cover: 8.5 }, { hour: 10, global: 91, direct: 119, diffuse: 66, extraterrestrial: 0.21, cover: 8.5 }, { hour: 11, global: 147, direct: 151, diffuse: 101, extraterrestrial: 0.30, cover: 8.5 }, { hour: 12, global: 187, direct: 187, diffuse: 119, extraterrestrial: 0.36, cover: 8.5 }, { hour: 13, global: 194, direct: 188, diffuse: 124, extraterrestrial: 0.37, cover: 8.5 }, { hour: 14, global: 176, direct: 181, diffuse: 114, extraterrestrial: 0.34, cover: 8.5 }, { hour: 15, global: 134, direct: 168, diffuse: 88, extraterrestrial: 0.27, cover: 8.5 }, { hour: 16, global: 71, direct: 120, diffuse: 51, extraterrestrial: 0.16, cover: 8.5 }, { hour: 17, global: 17, direct: 41, diffuse: 14, extraterrestrial: 0.08, cover: 8.5 }, { hour: 18, global: 2, direct: 1, diffuse: 1, extraterrestrial: 0.70, cover: 8.5 }]
        },

        /*February*/
        {
            label: "February",
            day: 32,
            hourly: [{ hour: 7, global: 1, direct: 2, diffuse: 0, extraterrestrial: 0.43, cover: 8.0 }, { hour: 8, global: 18, direct: 36, diffuse: 14, extraterrestrial: 0.09, cover: 8.0 }, { hour: 9, global: 80, direct: 133, diffuse: 55, extraterrestrial: 0.18, cover: 8.0 }, { hour: 10, global: 160, direct: 196, diffuse: 97, extraterrestrial: 0.32, cover: 8.0 }, { hour: 11, global: 232, direct: 227, diffuse: 137, extraterrestrial: 0.41, cover: 8.0 }, { hour: 12, global: 279, direct: 254, diffuse: 158, extraterrestrial: 0.48, cover: 8.0 }, { hour: 13, global: 295, direct: 269, diffuse: 162, extraterrestrial: 0.49, cover: 8.0 }, { hour: 14, global: 278, direct: 265, diffuse: 153, extraterrestrial: 0.47, cover: 8.0 }, { hour: 15, global: 224, direct: 243, diffuse: 128, extraterrestrial: 0.40, cover: 8.0 }, { hour: 16, global: 148, direct: 202, diffuse: 89, extraterrestrial: 0.29, cover: 8.0 }, { hour: 17, global: 65, direct: 126, diffuse: 45, extraterrestrial: 0.15, cover: 8.0 }, { hour: 18, global: 12, direct: 27, diffuse: 9, extraterrestrial: 0.11, cover: 8.0 }]
        },

        /*March*/
        {
            label: "March",
            day: 60,
            hourly: [{ hour: 6, global: 2, direct: 2, diffuse: 1, extraterrestrial: 0.28, cover: 7.8 }, { hour: 7, global: 16, direct: 29, diffuse: 13, extraterrestrial: 0.10, cover: 7.8 }, { hour: 8, global: 78, direct: 121, diffuse: 55, extraterrestrial: 0.19, cover: 7.8 }, { hour: 9, global: 179, direct: 205, diffuse: 108, extraterrestrial: 0.34, cover: 7.8 }, { hour: 10, global: 278, direct: 261, diffuse: 152, extraterrestrial: 0.48, cover: 7.8 }, { hour: 11, global: 361, direct: 293, diffuse: 191, extraterrestrial: 0.57, cover: 7.8 }, { hour: 12, global: 420, direct: 323, diffuse: 213, extraterrestrial: 0.63, cover: 7.8 }, { hour: 13, global: 433, direct: 340, diffuse: 211, extraterrestrial: 0.65, cover: 7.8 }, { hour: 14, global: 412, direct: 335, diffuse: 203, extraterrestrial: 0.62, cover: 7.8 }, { hour: 15, global: 351, direct: 312, diffuse: 181, extraterrestrial: 0.54, cover: 7.8 }, { hour: 16, global: 253, direct: 271, diffuse: 137, extraterrestrial: 0.43, cover: 7.8 }, { hour: 17, global: 148, direct: 208, diffuse: 88, extraterrestrial: 0.28, cover: 7.8 }, { hour: 18, global: 50, direct: 103, diffuse: 36, extraterrestrial: 0.12, cover: 7.8 }, { hour: 19, global: 6, direct: 12, diffuse: 5, extraterrestrial: 0.14, cover: 7.8 }]
        },

        /*April*/
        {
            label: "April",
            day: 91,
            hourly: [{ hour: 6, global: 15, direct: 26, diffuse: 13, extraterrestrial: 0.09, cover: 7.7 }, { hour: 7, global: 75, direct: 110, diffuse: 53, extraterrestrial: 0.19, cover: 7.7 }, { hour: 8, global: 180, direct: 201, diffuse: 108, extraterrestrial: 0.35, cover: 7.7 }, { hour: 9, global: 292, direct: 247, diffuse: 166, extraterrestrial: 0.51, cover: 7.7 }, { hour: 10, global: 400, direct: 301, diffuse: 207, extraterrestrial: 0.64, cover: 7.7 }, { hour: 11, global: 489, direct: 332, diffuse: 245, extraterrestrial: 0.73, cover: 7.7 }, { hour: 12, global: 546, direct: 362, diffuse: 263, extraterrestrial: 0.78, cover: 7.7 }, { hour: 13, global: 557, direct: 372, diffuse: 262, extraterrestrial: 0.79, cover: 7.7 }, { hour: 14, global: 536, direct: 379, diffuse: 250, extraterrestrial: 0.75, cover: 7.7 }, { hour: 15, global: 468, direct: 363, diffuse: 223, extraterrestrial: 0.67, cover: 7.7 }, { hour: 16, global: 359, direct: 323, diffuse: 179, extraterrestrial: 0.55, cover: 7.7 }, { hour: 17, global: 239, direct: 260, diffuse: 132, extraterrestrial: 0.40, cover: 7.7 }, { hour: 18, global: 117, direct: 174, diffuse: 75, extraterrestrial: 0.24, cover: 7.7 }, { hour: 19, global: 29, direct: 54, diffuse: 24, extraterrestrial: 0.10, cover: 7.7 }, { hour: 20, global: 2, direct: 3, diffuse: 1, extraterrestrial: 0.17, cover: 7.7 }]
        },

        /*May*/
        {
            label: "May",
            day: 121,
            hourly: [{ hour: 5, global: 7, direct: 13, diffuse: 6, extraterrestrial: 0.10, cover: 7.2 }, { hour: 6, global: 53, direct: 96, diffuse: 39, extraterrestrial: 0.14, cover: 7.2 }, { hour: 7, global: 148, direct: 183, diffuse: 91, extraterrestrial: 0.31, cover: 7.2 }, { hour: 8, global: 265, direct: 240, diffuse: 151, extraterrestrial: 0.47, cover: 7.2 }, { hour: 9, global: 384, direct: 293, diffuse: 201, extraterrestrial: 0.61, cover: 7.2 }, { hour: 10, global: 496, direct: 343, diffuse: 242, extraterrestrial: 0.73, cover: 7.2 }, { hour: 11, global: 593, direct: 386, diffuse: 273, extraterrestrial: 0.82, cover: 7.2 }, { hour: 12, global: 642, direct: 404, diffuse: 288, extraterrestrial: 0.87, cover: 7.2 }, { hour: 13, global: 661, direct: 429, diffuse: 282, extraterrestrial: 0.87, cover: 7.2 }, { hour: 14, global: 639, direct: 434, diffuse: 273, extraterrestrial: 0.84, cover: 7.2 }, { hour: 15, global: 562, direct: 414, diffuse: 246, extraterrestrial: 0.75, cover: 7.2 }, { hour: 16, global: 455, direct: 392, diffuse: 201, extraterrestrial: 0.64, cover: 7.2 }, { hour: 17, global: 330, direct: 345, diffuse: 156, extraterrestrial: 0.50, cover: 7.2 }, { hour: 18, global: 195, direct: 263, diffuse: 105, extraterrestrial: 0.34, cover: 7.2 }, { hour: 19, global: 79, direct: 149, diffuse: 52, extraterrestrial: 0.17, cover: 7.2 }, { hour: 20, global: 13, direct: 27, diffuse: 11, extraterrestrial: 0.09, cover: 7.2 }]
        },

        /*June*/
        {
            label: "June",
            day: 152,
            hourly: [{ hour: 5, global: 14, direct: 25, diffuse: 12, extraterrestrial: 0.08, cover: 6.8 }, { hour: 6, global: 74, direct: 121, diffuse: 52, extraterrestrial: 0.18, cover: 6.8 }, { hour: 7, global: 171, direct: 198, diffuse: 103, extraterrestrial: 0.35, cover: 6.8 }, { hour: 8, global: 290, direct: 261, diffuse: 158, extraterrestrial: 0.50, cover: 6.8 }, { hour: 9, global: 411, direct: 307, diffuse: 211, extraterrestrial: 0.65, cover: 6.8 }, { hour: 10, global: 521, direct: 358, diffuse: 244, extraterrestrial: 0.77, cover: 6.8 }, { hour: 11, global: 620, direct: 397, diffuse: 278, extraterrestrial: 0.85, cover: 6.8 }, { hour: 12, global: 676, direct: 423, diffuse: 291, extraterrestrial: 0.90, cover: 6.8 }, { hour: 13, global: 698, direct: 448, diffuse: 288, extraterrestrial: 0.91, cover: 6.8 }, { hour: 14, global: 673, direct: 452, diffuse: 275, extraterrestrial: 0.87, cover: 6.8 }, { hour: 15, global: 602, direct: 437, diffuse: 250, extraterrestrial: 0.80, cover: 6.8 }, { hour: 16, global: 504, direct: 420, diffuse: 212, extraterrestrial: 0.69, cover: 6.8 }, { hour: 17, global: 380, direct: 372, diffuse: 173, extraterrestrial: 0.55, cover: 6.8 }, { hour: 18, global: 242, direct: 303, diffuse: 121, extraterrestrial: 0.40, cover: 6.8 }, { hour: 19, global: 119, direct: 205, diffuse: 70, extraterrestrial: 0.23, cover: 6.8 }, { hour: 20, global: 29, direct: 70, diffuse: 22, extraterrestrial: 0.08, cover: 6.8 }, { hour: 21, global: 1, direct: 2, diffuse: 1, extraterrestrial: 0.24, cover: 6.8 }]
        },

        /*July*/
        {
            label: "July",
            day: 182,
            hourly: [{ hour: 5, global: 7, direct: 16, diffuse: 6, extraterrestrial: 0.09, cover: 5.3 }, { hour: 6, global: 57, direct: 129, diffuse: 39, extraterrestrial: 0.15, cover: 5.3 }, { hour: 7, global: 159, direct: 236, diffuse: 87, extraterrestrial: 0.31, cover: 5.3 }, { hour: 8, global: 286, direct: 318, diffuse: 137, extraterrestrial: 0.47, cover: 5.3 }, { hour: 9, global: 412, direct: 378, diffuse: 179, extraterrestrial: 0.62, cover: 5.3 }, { hour: 10, global: 538, direct: 436, diffuse: 215, extraterrestrial: 0.74, cover: 5.3 }, { hour: 11, global: 638, direct: 473, diffuse: 244, extraterrestrial: 0.83, cover: 5.3 }, { hour: 12, global: 706, direct: 509, diffuse: 256, extraterrestrial: 0.88, cover: 5.3 }, { hour: 13, global: 735, direct: 539, diffuse: 252, extraterrestrial: 0.90, cover: 5.3 }, { hour: 14, global: 716, direct: 547, diffuse: 243, extraterrestrial: 0.86, cover: 5.3 }, { hour: 15, global: 648, direct: 539, diffuse: 221, extraterrestrial: 0.79, cover: 5.3 }, { hour: 16, global: 541, direct: 516, diffuse: 188, extraterrestrial: 0.68, cover: 5.3 }, { hour: 17, global: 410, direct: 471, diffuse: 153, extraterrestrial: 0.55, cover: 5.3 }, { hour: 18, global: 263, direct: 395, diffuse: 109, extraterrestrial: 0.39, cover: 5.3 }, { hour: 19, global: 124, direct: 264, diffuse: 64, extraterrestrial: 0.23, cover: 5.3 }, { hour: 20, global: 27, direct: 75, diffuse: 20, extraterrestrial: 0.08, cover: 5.3 }, { hour: 21, global: 1, direct: 2, diffuse: 0, extraterrestrial: 0.31, cover: 5.3 }]
        },

        /*August*/
        {
            label: "August",
            day: 213,
            hourly: [{ hour: 5, global: 1, direct: 3, diffuse: 1, extraterrestrial: 0.21, cover: 5.5 }, { hour: 6, global: 23, direct: 58, diffuse: 18, extraterrestrial: 0.09, cover: 5.5 }, { hour: 7, global: 101, direct: 179, diffuse: 60, extraterrestrial: 0.22, cover: 5.5 }, { hour: 8, global: 218, direct: 269, diffuse: 112, extraterrestrial: 0.39, cover: 5.5 }, { hour: 9, global: 350, direct: 339, diffuse: 164, extraterrestrial: 0.54, cover: 5.5 }, { hour: 10, global: 468, direct: 394, diffuse: 203, extraterrestrial: 0.67, cover: 5.5 }, { hour: 11, global: 579, direct: 457, diffuse: 227, extraterrestrial: 0.77, cover: 5.5 }, { hour: 12, global: 648, direct: 498, diffuse: 238, extraterrestrial: 0.82, cover: 5.5 }, { hour: 13, global: 676, direct: 529, diffuse: 234, extraterrestrial: 0.83, cover: 5.5 }, { hour: 14, global: 650, direct: 533, diffuse: 223, extraterrestrial: 0.80, cover: 5.5 }, { hour: 15, global: 581, direct: 523, diffuse: 202, extraterrestrial: 0.72, cover: 5.5 }, { hour: 16, global: 471, direct: 491, diffuse: 171, extraterrestrial: 0.60, cover: 5.5 }, { hour: 17, global: 332, direct: 433, diffuse: 129, extraterrestrial: 0.46, cover: 5.5 }, { hour: 18, global: 185, direct: 332, diffuse: 83, extraterrestrial: 0.30, cover: 5.5 }, { hour: 19, global: 63, direct: 166, diffuse: 38, extraterrestrial: 0.13, cover: 5.5 }, { hour: 20, global: 9, direct: 20, diffuse: 7, extraterrestrial: 0.12, cover: 5.5 }]
        },

        /*September*/
        {
            label: "September",
            day: 244,
            hourly: [{ hour: 6, global: 6, direct: 13, diffuse: 4, extraterrestrial: 0.13, cover: 5.9 }, { hour: 7, global: 48, direct: 114, diffuse: 33, extraterrestrial: 0.12, cover: 5.9 }, { hour: 8, global: 147, direct: 228, diffuse: 80, extraterrestrial: 0.29, cover: 5.9 }, { hour: 9, global: 267, direct: 298, diffuse: 134, extraterrestrial: 0.44, cover: 5.9 }, { hour: 10, global: 377, direct: 368, diffuse: 166, extraterrestrial: 0.57, cover: 5.9 }, { hour: 11, global: 480, direct: 427, diffuse: 197, extraterrestrial: 0.66, cover: 5.9 }, { hour: 12, global: 538, direct: 471, diffuse: 203, extraterrestrial: 0.71, cover: 5.9 }, { hour: 13, global: 551, direct: 494, diffuse: 198, extraterrestrial: 0.71, cover: 5.9 }, { hour: 14, global: 523, direct: 499, diffuse: 187, extraterrestrial: 0.67, cover: 5.9 }, { hour: 15, global: 445, direct: 479, diffuse: 164, extraterrestrial: 0.58, cover: 5.9 }, { hour: 16, global: 328, direct: 422, diffuse: 132, extraterrestrial: 0.46, cover: 5.9 }, { hour: 17, global: 193, direct: 339, diffuse: 86, extraterrestrial: 0.31, cover: 5.9 }, { hour: 18, global: 72, direct: 183, diffuse: 42, extraterrestrial: 0.15, cover: 5.9 }, { hour: 19, global: 13, direct: 30, diffuse: 10, extraterrestrial: 0.12, cover: 5.9 }]
        },

        /*October*/
        {
            label: "October",
            day: 274,
            hourly: [{ hour: 7, global: 13, direct: 23, diffuse: 10, extraterrestrial: 0.10, cover: 7.4 }, { hour: 8, global: 67, direct: 107, diffuse: 48, extraterrestrial: 0.16, cover: 7.4 }, { hour: 9, global: 156, direct: 186, diffuse: 96, extraterrestrial: 0.31, cover: 7.4 }, { hour: 10, global: 244, direct: 238, diffuse: 139, extraterrestrial: 0.43, cover: 7.4 }, { hour: 11, global: 316, direct: 280, diffuse: 169, extraterrestrial: 0.51, cover: 7.4 }, { hour: 12, global: 358, direct: 313, diffuse: 181, extraterrestrial: 0.55, cover: 7.4 }, { hour: 13, global: 367, direct: 341, diffuse: 175, extraterrestrial: 0.55, cover: 7.4 }, { hour: 14, global: 329, direct: 340, diffuse: 154, extraterrestrial: 0.50, cover: 7.4 }, { hour: 15, global: 260, direct: 311, diffuse: 128, extraterrestrial: 0.41, cover: 7.4 }, { hour: 16, global: 162, direct: 253, diffuse: 85, extraterrestrial: 0.29, cover: 7.4 }, { hour: 17, global: 65, direct: 154, diffuse: 41, extraterrestrial: 0.14, cover: 7.4 }, { hour: 18, global: 12, direct: 29, diffuse: 9, extraterrestrial: 0.11, cover: 7.4 }]
        },

        /*November*/
        {
            label: "November",
            day: 305,
            hourly: [{ hour: 7, global: 2, direct: 3, diffuse: 1, extraterrestrial: 0.27, cover: 8.4 }, { hour: 8, global: 17, direct: 34, diffuse: 14, extraterrestrial: 0.08, cover: 8.4 }, { hour: 9, global: 72, direct: 102, diffuse: 53, extraterrestrial: 0.17, cover: 8.4 }, { hour: 10, global: 138, direct: 154, diffuse: 93, extraterrestrial: 0.29, cover: 8.4 }, { hour: 11, global: 191, direct: 179, diffuse: 124, extraterrestrial: 0.37, cover: 8.4 }, { hour: 12, global: 218, direct: 191, diffuse: 139, extraterrestrial: 0.41, cover: 8.4 }, { hour: 13, global: 214, direct: 192, diffuse: 136, extraterrestrial: 0.40, cover: 8.4 }, { hour: 14, global: 186, direct: 191, diffuse: 117, extraterrestrial: 0.36, cover: 8.4 }, { hour: 15, global: 132, direct: 161, diffuse: 87, extraterrestrial: 0.27, cover: 8.4 }, { hour: 16, global: 62, direct: 107, diffuse: 45, extraterrestrial: 0.15, cover: 8.4 }, { hour: 17, global: 12, direct: 29, diffuse: 10, extraterrestrial: 0.09, cover: 8.4 }]
        },

        /*December*/
        {
            label: "December",
            day: 335,
            hourly: [{ hour: 8, global: 3, direct: 6, diffuse: 2, extraterrestrial: 0.13, cover: 8.5 }, { hour: 9, global: 30, direct: 58, diffuse: 25, extraterrestrial: 0.09, cover: 8.5 }, { hour: 10, global: 85, direct: 114, diffuse: 62, extraterrestrial: 0.20, cover: 8.5 }, { hour: 11, global: 136, direct: 153, diffuse: 92, extraterrestrial: 0.28, cover: 8.5 }, { hour: 12, global: 163, direct: 169, diffuse: 108, extraterrestrial: 0.33, cover: 8.5 }, { hour: 13, global: 167, direct: 175, diffuse: 108, extraterrestrial: 0.33, cover: 8.5 }, { hour: 14, global: 143, direct: 165, diffuse: 94, extraterrestrial: 0.29, cover: 8.5 }, { hour: 15, global: 96, direct: 133, diffuse: 67, extraterrestrial: 0.22, cover: 8.5 }, { hour: 16, global: 39, direct: 80, diffuse: 30, extraterrestrial: 0.10, cover: 8.5 }, { hour: 17, global: 5, direct: 12, diffuse: 3, extraterrestrial: 0.10, cover: 8.5 }]
        }]
    }];
    var getCachedData = function getCachedData(locationId) {
        var length = cachedData.length;
        for (var i = 0; i < length; i++) {
            var value = cachedData[i].id;
            if (value == locationId) {
                return cachedData[i];
            }
        }
        return undefined;
    };
    var getWebData = function getWebData(location) {
        /*TODO stub*/
        return undefined;
    };
    var cachedLocations = [{
        id: "23174",
        label: "Los Angeles"
    }, {
        id: "24233",
        label: "Seattle"
    }];
    var getWebLocations = function getWebLocations() {
        /*TODO stub*/
        return [];
    };
    return {
        GetData: function GetData(locationId) {

            return getCachedData(locationId) || getWebData(locationId);
        },
        GetLocations: function GetLocations() {
            return cachedLocations.concat(getWebLocations());
        }
    };
});

