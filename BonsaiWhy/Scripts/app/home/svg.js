/*<use> does not properly format css 
ajax load svg for caching
inserts inline <svg> code, replaces <use> code*/
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define([], factory);
    } else {
        /* Browser globals*/
        SVGLoad = factory();
    }
}(function () {
    var Init = function () {
        Array.prototype.forEach.call(document.querySelectorAll("use"), function (use) {
            var svg = use.parentNode;
            var src = use.getAttribute('xlink:href');
            var srcSplit = src.split('#');
            var url = srcSplit.shift();
            var id = srcSplit.join('#');
            if (url.length) {
                var xhr = new XMLHttpRequest;
                xhr.open('GET', url, false);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        var element = xhr.responseXML.getElementById(id);
                        svg.removeChild(use);
                        svg.appendChild(element);
                    }
                };
                xhr.send();
            }

        });
    };

    return {
        Init: Init
    };
}));