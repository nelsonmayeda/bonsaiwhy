/*insert rain drops*/
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define([], factory);
    }else {
        /* Browser globals*/
        Rain = factory();
    }
}(function () {
    var Init = function () {
        var p = document.querySelector('#Fertilizer');
        var img = document.getElementById("firstdrop");
        for (var i = 0 ; i < 50; i++) {
            var clone = img.cloneNode(true);
            clone.id = "";
            clone.setAttribute("data-parallax-translatey", 2*Math.random());
            clone.setAttribute("data-parallax-scalex", "1.5");
            clone.setAttribute("data-parallax-scaley", "1.5");
            clone.setAttribute("data-position-x", Math.random());
            /*clone.setAttribute("data-position-y", Math.random());*/
            p.appendChild(clone);
        }
    };
    return {
        Init: Init
    };
}));