/*
Calculating Incident Solar Radiation
http://rredc.nrel.gov/solar/pubs/bluebook/appendix.html
*/
'use strict';

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define([], factory);
    } else {
        /* Browser globals*/
        LightCalculator = factory();
    }
})(function () {
    /*calculations for fixed tracking system: Menicucci and Fernandez (1988) */
    var getIncidence = function getIncidence(solaraltitude, solarazimuth, surfaceangle, surfaceazimuth) {
        var solarzenith = Math.PI / 2 - solaraltitude;
        var sum = Math.cos(solarzenith) * Math.cos(surfaceangle) + Math.sin(solarzenith) * Math.sin(surfaceangle) * Math.cos(surfaceazimuth - solarazimuth);
        sum = Math.min(Math.max(sum, -1), 1);
        return Math.acos(sum);
    };
    /*direct from sun radiation*/
    var getRadDirect = function getRadDirect(solaraltitude, solarazimuth, surfaceangle, surfaceazimuth, data) {
        var incidenceangle = getIncidence(solaraltitude, solarazimuth, surfaceangle, surfaceazimuth);
        var rad = data.direct * Math.cos(incidenceangle);
        return Math.max(0, rad);
    };
    /*reflected off ground radiation*/
    var getRadReflect = function getRadReflect(solaraltitude, solarazimuth, surfaceangle, surfaceazimuth, data) {
        var albedo = .2;
        var rad = .5 * albedo * data.global * (1 - Math.cos(surfaceangle));
        return Math.max(0, rad);
    };
    /*values from 25degree circumsolar table in perez 1990*/
    var getSkyCoefficients = function getSkyCoefficients(cover) {
        if (cover < 1.056) {
            return [-0.011, 0.748, -0.080, -0.048, 0.073, -0.024];
        } else if (cover < 1.253) {
            return [-0.038, 1.115, -0.109, -0.023, 0.106, -0.037];
        } else if (cover < 1.586) {
            return [0.166, 0.909, -0.179, 0.062, -0.021, -0.050];
        } else if (cover < 2.134) {
            return [0.419, 0.646, -0.262, 0.140, -0.167, -0.042];
        } else if (cover < 3.230) {
            return [0.710, 0.025, -0.290, 0.243, -0.511, -0.004];
        } else if (cover < 5.980) {
            return [0.857, -0.370, -0.279, 0.267, -0.792, 0.076];
        } else if (cover < 10.080) {
            return [0.734, -0.073, -0.228, 0.231, -1.180, 0.199];
        } else {
            return [0.421, -0.661, 0.097, 0.119, -2.125, 0.446];
        }
    };
    /*diffuse radiation model developed by Perez et al. (1990)*/
    var getRadSky = function getRadSky(solaraltitude, solarazimuth, surfaceangle, surfaceazimuth, data) {
        var incidenceangle = getIncidence(solaraltitude, solarazimuth, surfaceangle, surfaceazimuth);
        var solarzenith = Math.PI / 2 - solaraltitude;
        var c = getSkyCoefficients(data.cover);
        var circumsolarcoefficient = c[0] + c[1] * data.extraterrestrial + c[2] * solarzenith;
        var horizoncoefficient = c[3] + c[4] * data.extraterrestrial + c[5] * solarzenith;
        var cloud = Math.max(0, Math.cos(incidenceangle));
        var air = Math.max(0.087, Math.cos(solarzenith));
        var rad = data.diffuse * (.5 * (1 - circumsolarcoefficient) * (1 + Math.cos(surfaceangle)) + circumsolarcoefficient * cloud / air + horizoncoefficient * Math.sin(surfaceangle));
        return Math.max(0, rad);
    };
    var getRadTotal = function getRadTotal(solaraltitude, solarazimuth, surfaceangle, surfaceazimuth, data) {
        var a = getRadDirect(solaraltitude, solarazimuth, surfaceangle, surfaceazimuth, data);
        var b = getRadReflect(solaraltitude, solarazimuth, surfaceangle, surfaceazimuth, data);
        var c = getRadSky(solaraltitude, solarazimuth, surfaceangle, surfaceazimuth, data);

        return {
            direct: a,
            diffuse: b + c
        };
    };

    var findOutsideMax = function findOutsideMax(solaraltitude, solarazimuth, surfaceangle, surfaceazimuth, data) {
        var max = 0;
        /*check angle 0-90 degrees*/
        for (var nsurfaceangle = 0; nsurfaceangle <= Math.PI / 2; nsurfaceangle += .1) {
            var d = getRadTotal(solaraltitude, solarazimuth, nsurfaceangle, surfaceazimuth, data);
            var found = d.direct + d.diffuse;
            if (found > max) {
                max = found;
            }
        }
        return max;
    };
    var findInsideMax = function findInsideMax(solaraltitude, solarazimuth, surfaceangle, surfaceazimuth, data) {
        var max = 0;
        /*check angle 0-90 degrees*/
        for (var nsurfaceangle = 0; nsurfaceangle <= Math.PI / 2; nsurfaceangle += .1) {
            /*check azimuth -90 to +90 degrees from given azimuth*/
            var minAzimuth = surfaceazimuth - Math.PI / 2;
            var maxAzimuth = surfaceazimuth + Math.PI / 2;
            for (var nsurfaceazimuth = minAzimuth; nsurfaceazimuth <= maxAzimuth; nsurfaceazimuth += .1) {
                var d = getRadTotal(solaraltitude, solarazimuth, nsurfaceangle, nsurfaceazimuth, data);
                var found = d.direct + d.diffuse / 2;
                if (found > max) {
                    max = found;
                }
            }
        }
        return max;
    };
    /*transmitted solar radiation*/
    var refract = function refract(solaraltitude, solarazimuth, surfaceangle, surfaceazimuth, data) {
        /*Bouguer's law absorption constant for fixed thickness
        about 10% lost*/
        var absorbcoefficient = Math.exp(-3.18 * .032); /*standard window glass thickness 3.18mm, extinction coefficient of glass 32 per meter*/

        /*Snells law: light refracts off glass, changes angle*/
        var n1 = 1;
        var n2 = 1.5;
        var nsolaraltitude = Math.asin(n1 * Math.sin(solaraltitude) / n2);
        var nsolarazimuth = Math.asin(n1 * Math.sin(solarazimuth) / n2);

        /*Fresnel equation for reflected and sky diffuse radiation
        about 10% lost
        simplified diffuse light given an incidence angle of 60 degrees for vertical and horizontal surfaces
        Duffie Beckman 1991*/
        var diffuseincidence = 60 * Math.PI / 180;
        var diffuserefraction = Math.asin(n1 * Math.sin(diffuseincidence) / n2);
        var diffuseminus = diffuserefraction - diffuseincidence;
        var diffuseplus = diffuserefraction + diffuseincidence;
        var diffuseratio = 1 - .5 * (Math.sin(diffuseminus) * Math.sin(diffuseminus) / (Math.sin(diffuseplus) * Math.sin(diffuseplus)) + Math.tan(diffuseminus) * Math.tan(diffuseminus) / (Math.tan(diffuseplus) * Math.tan(diffuseplus)));

        /*Fresnel equation for direct
        between 0-20% lost
        Duffie Beckman 1991*/
        var directincidence = getIncidence(solaraltitude, solarazimuth, surfaceangle, surfaceazimuth);
        var directrefraction = Math.asin(n1 * Math.sin(directincidence) / n2);
        var directminus = diffuserefraction - diffuseincidence;
        var directplus = diffuserefraction + diffuseincidence;
        var directratio = 1 - .5 * (Math.sin(directminus) * Math.sin(directminus) / (Math.sin(directplus) * Math.sin(directplus)) + Math.tan(directminus) * Math.tan(directminus) / (Math.tan(directplus) * Math.tan(directplus)));

        /*shading*/
        if (Math.cos(directincidence) < 0) {
            directratio = 0;
        }

        var ndirect = absorbcoefficient * directratio * data.direct;
        var nglobal = absorbcoefficient * diffuseratio * data.global;
        var ndiffuse = absorbcoefficient * diffuseratio * data.diffuse;
        var ne = JSON.parse(JSON.stringify(data));
        ne.direct = ndirect;
        ne.global = nglobal;
        ne.diffuse = ndiffuse;
        return {
            solaraltitude: nsolaraltitude,
            solarazimuth: nsolarazimuth,
            data: ne
        };
    };
    var calculateInside = function calculateInside(sunaltitude, sunazimuth, surfaceangle, surfaceazimuth, data) {
        var newparms = refract(sunaltitude, sunazimuth, surfaceangle, surfaceazimuth, data);
        var found = findInsideMax(newparms.solaraltitude, newparms.solarazimuth, surfaceangle, surfaceazimuth, newparms.data);
        return found;
    };
    var calculateOutside = function calculateOutside(sunaltitude, sunazimuth, surfaceangle, surfaceazimuth, data) {
        var found = findOutsideMax(sunaltitude, sunazimuth, surfaceangle, surfaceazimuth, data);
        return found;
    };
    return {
        getIncidence: getIncidence,
        getRadTotal: getRadTotal,
        calculateInside: calculateInside,
        calculateOutside: calculateOutside
    };
});

