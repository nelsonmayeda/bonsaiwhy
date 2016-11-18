/*
transform controlled parallax
movement done through 3D transforms
*/
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define([], factory);
    }else {
        /* Browser globals*/
        Parallax = factory();
    }
}(function () {
    var ticking = false;
    var throttle=false,fps= -1, startTime;
    var requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
    })();
    /*relative to viewport, top or bottom of an element falls on the screen*/
    var checkVisible = function (element) {
        var topOfElement = element.getBoundingClientRect().top;
        var bottomOfElement = element.getBoundingClientRect().bottom;
        return (topOfElement >= 0 && topOfElement <= document.documentElement.clientHeight) || (bottomOfElement >= 0 && bottomOfElement <= document.documentElement.clientHeight);
    };
    var forEach = function (array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
            callback.call(scope, array[i], i, array);
        }
    };
    /*optimization: static references to reduce selectors each time, makes little difference*/
    var soilpathelements;
    var containers, layers, attributes;
    /*resize canvases, trigger redraw*/
    var redraw = function () {
        ticking = true;
        forEach(containers,function (container, containerIndex) {
            if (checkVisible(container)) {
                /*note that can't check visible of each layer to restore elements translated off parallax frame*/
                forEach(layers[containerIndex], function (layer, layerIndex) {
                    /*delay*/
                    var delay =  attributes[containerIndex][layerIndex].dattr;
                    /*scroll
					0% when top of container at bottom of screen (off screen),
					50% when middle container at middle of screen,
					100% when bottom of container at top of screen*/
                    var scrollPercentage = (document.documentElement.clientHeight - container.getBoundingClientRect().top) / (document.documentElement.clientHeight + container.clientHeight) - delay;
                    if (scrollPercentage < 0) {
                        scrollPercentage = 0;
                    }
                    /*x initial position: ratio of screen width, relative to object left
					also accepts the words "center, right"*/
                    var x = 0;
                    var xattr = attributes[containerIndex][layerIndex].xattr;
                    if (xattr) {
                        if (isNaN(xattr)) {
                            if (xattr == "center") {
                                /*note that layer may be svg, clientHeight and clientWidth don't register in firefox*/
                                x = (container.clientWidth - layer.getBoundingClientRect().width) / container.clientWidth;
                                x = x / 2;
                            }
                            else if (xattr == "right") {
                                x = (container.clientWidth - layer.getBoundingClientRect().width) / container.clientWidth;
                            }
                        } else {
                            x = xattr;
                        }
                    }
                    /*translate-x: multiple of scroll speed*/
                    x += attributes[containerIndex][layerIndex].txattr * scrollPercentage;
                    x = Math.round(container.clientWidth * x);
                    /*y initial position: ratio of screen height, relative to object top
					also accepts the words "center, bottom"*/
                    var y = 0;
                    var yattr = attributes[containerIndex][layerIndex].yattr;
                    if (yattr) {
                        if (isNaN(yattr)) {
                            if (yattr == "center") {
                                /*note that layer may be svg, clientHeight and clientWidth don't register in firefox*/
                                y = (container.clientHeight - layer.getBoundingClientRect().height) / container.clientHeight;
                                y = y / 2;
                            }
                            else if (yattr == "bottom") {
                                y = (container.clientHeight - layer.getBoundingClientRect().height) / container.clientHeight;
                            }
                        } else {
                            y = yattr;
                        }
                    }
                    /*translate-y: multiple of scroll speed*/
                    y += attributes[containerIndex][layerIndex].tyattr * scrollPercentage;
                    y = Math.round(container.clientHeight * y);
                    /*y position limit*/
                    var lattr = attributes[containerIndex][layerIndex].lattr;
                    if (lattr) {
                        /*both*/
                        var min = lattr * container.clientHeight.clientHeight;
                        var max = container.clientHeight.clientHeight - layer.getBoundingClientRect().height;
                        y = Math.min(Math.max(y, min), max);
                    }
                    /*translate-z: multiple of scroll speed*/
                    var z = 0;
                    /*scale-x*/
                    var scalex = 1;
                    var sxattr = attributes[containerIndex][layerIndex].sxattr;
                    if (sxattr) {
                        scalex = sxattr * scrollPercentage;
                    }
                    /*scale-y*/
                    var scaley = 1;
                    var syattr = attributes[containerIndex][layerIndex].syattr;
                    if (syattr) {
                        scaley = syattr * scrollPercentage;
                    }
                    /*scale-z*/
                    var scalez = 1;
                    /*calculate*/
                    var translate = "translate3d(" + x + "px," + y + "px," + z + "px)";
                    var scale = "scale3d(" + scalex + "," + scaley + "," + scalez + ")";
                    /*translate: note that this overrides initial absolute styling top,left*/
                    layer.setAttribute("style", "transform:" + translate + scale + ";");

                    /*reveal a cloned element*/
                    var rattr = attributes[containerIndex][layerIndex].rattr;
                    if (rattr) {
                        var rrate = rattr * scrollPercentage;
                        var start = Math.max(0, rrate - 0.1);
                        var end = Math.min(1, rrate);
                        var drawStart = Math.round(soilpathelements.length * start);
                        var drawEnd = Math.round(soilpathelements.length * end);
                        var newpath = "";
                        for (var p = drawStart; p < drawEnd; p++) {
                            newpath += soilpathelements[p] + "Z";
                        }
                        document.querySelector(".water-path").setAttribute("d", newpath);
                    }
                });
            }
        });
        ticking = false;
    };
    var scroll = function () {
        if (!ticking ) {
            if (throttle ) {
                var elapsed = Date.now() - startTime;
                if (elapsed > fps) {
                    var start = Date.now();
                    requestAnimFrame(redraw);
                    fps = 2 * (Date.now() - start);
                    startTime = Date.now();
                }
            } else {
                requestAnimFrame(redraw);
            }
        }
    };
    var initContainers = function () {

        var soilpath = document.querySelector(".soil-path");
        soilpathelements = soilpath.getAttribute("d").split("Z");
        soilpathelements.pop();

        containers = document.querySelectorAll(".parallax");
        layers = [];
        attributes = [];
        forEach(containers, function (container) {
            var templayers = container.querySelectorAll(".layer")
            layers.push(templayers);
            var containerattributes = [];
            forEach(templayers, function (layer) {

                var dattr = layer.getAttribute("data-parallax-delay");
                dattr = parseFloat(dattr) ? parseFloat(dattr) : 0;
                var xattr = layer.getAttribute("data-position-x");
                xattr = parseFloat(xattr) ? parseFloat(xattr) : xattr;
                var txattr = layer.getAttribute("data-parallax-translatex");
                txattr = parseFloat(txattr) ? parseFloat(txattr) : 0;
                var yattr = layer.getAttribute("data-position-y");
                yattr = parseFloat(yattr) ? parseFloat(yattr) : yattr;
                var tyattr = layer.getAttribute("data-parallax-translatey");
                tyattr = parseFloat(tyattr) ? parseFloat(tyattr) : 0;
                var lattr = layer.getAttribute("data-parallax-limit");
                lattr = parseFloat(lattr) ? parseFloat(lattr) : 0;
                var sxattr = layer.getAttribute("data-parallax-scalex");
                sxattr = parseFloat(sxattr) ? parseFloat(sxattr) : 0;
                var syattr = layer.getAttribute("data-parallax-scaley");
                syattr = parseFloat(syattr) ? parseFloat(syattr) : 0;
                var rattr = layer.getAttribute("data-parallax-reveal");
                rattr = parseFloat(rattr) ? parseFloat(rattr) : 0;

                var layerattributes = {
                    dattr: dattr,
                    xattr: xattr,
                    txattr: txattr,
                    yattr: yattr,
                    tyattr: tyattr,
                    lattr: lattr,
                    sxattr: sxattr,
                    syattr: syattr,
                    rattr: rattr,
                };
                containerattributes.push(layerattributes);
            });
            attributes.push(containerattributes);
        });


    };
    var Init = function () {
        initContainers();

        startTime = Date.now();
        scroll();

        window.addEventListener("resize", function (e) {
            scroll();
        });
        window.addEventListener("orientationchange", function (e) {
            scroll();
        });
        window.addEventListener("scroll", function (e) {
            scroll();
        });
    };
    return {
        Init: Init
    };
}));