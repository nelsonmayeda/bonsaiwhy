"use strict";

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define([], factory);
    } else {
        /* Browser globals*/
        MolarMass = factory();
    }
})(function () {
    var atom = {
        H: 1.00794,
        He: 4.0026,
        Li: 6.941,
        Be: 9.01218,
        B: 10.811,
        C: 12.011,
        N: 14.0067,
        O: 15.9994,
        F: 18.9984,
        Ne: 20.1797,
        Na: 22.98977,
        Mg: 24.305,
        Al: 26.98154,
        Si: 28.0855,
        P: 30.97376,
        S: 32.066,
        Cl: 35.4527,
        Ar: 39.948,
        K: 39.0983,
        Ca: 40.078,
        Sc: 44.9559,
        Ti: 47.88,
        V: 50.9415,
        Cr: 51.996,
        Mn: 54.938,
        Fe: 55.847,
        Co: 58.9332,
        Ni: 58.6934,
        Cu: 63.546,
        Zn: 65.39,
        Ga: 69.723,
        Ge: 72.61,
        As: 74.9216,
        Se: 78.96,
        Br: 79.904,
        Kr: 83.8,
        Rb: 85.4678,
        Sr: 87.62,
        Y: 88.9059,
        Zr: 91.224,
        Nb: 92.9064,
        Mo: 95.94,
        Tc: 98,
        Ru: 101.07,
        Rh: 102.9055,
        Pd: 106.42,
        Ag: 107.868,
        Cd: 112.41,
        In: 114.82,
        Sn: 118.71,
        Sb: 121.757,
        Te: 127.6,
        I: 126.9045,
        Xe: 131.29,
        Cs: 132.9054,
        Ba: 137.33,
        La: 138.9055,
        Hf: 178.49,
        Ta: 180.9479,
        W: 183.85,
        Re: 186.207,
        Os: 190.2,
        Ir: 192.22,
        Pt: 195.08,
        Au: 196.9665,
        Hg: 200.59,
        Tl: 204.383,
        Pb: 207.2,
        Bi: 208.9804,
        Po: 209,
        At: 210,
        Rn: 222,
        Fr: 223,
        Ra: 226.0254,
        Ac: 227,
        Rf: 261,
        Db: 262,
        Sg: 263,
        Bh: 262,
        Hs: 265,
        Mt: 266,
        Uun: 269,
        Uuu: 272,
        Uub: 277,
        Ce: 140.12,
        Pr: 140.9077,
        Nd: 144.24,
        Pm: 145,
        Sm: 150.36,
        Eu: 151.965,
        Gd: 157.25,
        Tb: 158.9253,
        Dy: 162.5,
        Ho: 164.9303,
        Er: 167.26,
        Tm: 168.9342,
        Yb: 173.04,
        Lu: 174.967,
        Th: 232.0381,
        Pa: 231.0359,
        U: 238.029,
        Np: 237.0482,
        Pu: 244,
        Am: 243,
        Cm: 247,
        Bk: 247,
        Cf: 251,
        Es: 252,
        Fm: 257,
        Md: 258,
        No: 259,
        Lr: 262
    };
    var calculate = function calculate(formula) {
        var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lowercase = "abcdefghijklmnopqrstuvwxyz";
        var number = "0123456789";
        var total = new Array();var level = 0;total[0] = 0;var i = 0;var mass = 0;var name = '';var percision = 8;
        var elmass = new Array();

        for (i = 0; i < elmass.length; i++) {
            elmass[i] = null;
        }
        elmass[0] = new Array();
        for (i = 0; i < elmass[0].length; i++) {
            elmass[0][i] = 0;
        }
        i = 0;
        while (formula.charAt(i) != "") {
            if ((uppercase + lowercase + number + "()").indexOf(formula.charAt(i)) == -1) i++;
            while (formula.charAt(i) == "(") {
                level++;
                i++;
                total[level] = 0;
                elmass[level] = new Array();
                for (var h = 0; i < elmass[level].length; h++) {
                    elmass[level][i] = 0;
                }
            }
            if (formula.charAt(i) == ")") {
                mass = total[level];
                name = '';
                level--;
            } else if (uppercase.indexOf(formula.charAt(i)) != -1) {
                name = formula.charAt(i);
                while (lowercase.indexOf(formula.charAt(i + 1)) != -1 && formula.charAt(i + 1) != "") name += formula.charAt(++i);
                mass = atom[name];
                var massStr = mass + "";
                var masspercis;
                if (massStr.indexOf(".") != -1) masspercis = massStr.substring(massStr.indexOf(".") + 1, massStr.length).length;else masspercis = 0;
                percision = percision == 8 || percision > masspercis ? masspercis : percision;
            }
            var amount = "";
            while (number.indexOf(formula.charAt(i + 1)) != -1 && formula.charAt(i + 1) != "") amount += formula.charAt(++i);
            if (amount == "") amount = "1";
            total[level] += mass * parseInt(amount);
            if (name == "") {
                for (var ele in elmass[level + 1]) {
                    var totalnumber = parseInt(elmass[level + 1][ele]) * amount;
                    if (elmass[level][ele] == null) elmass[level][ele] = totalnumber;else elmass[level][ele] = totalnumber + parseInt(elmass[level][ele]);
                }
            } else {
                if (elmass[level][name] == null) elmass[level][name] = amount;else elmass[level][name] = parseInt(elmass[level][name]) + parseInt(amount);
            }
            i++;
        }
        var retval = {};
        retval.elmass = elmass[0];
        retval.total = total[0];
        return retval;
    };
    var calculateNPK = function calculateNPK(formula) {
        var elements = calculate(formula);
        var retval = {};
        for (var ele in elements.elmass) {
            if (ele == "P") {
                retval[ele] = elements.elmass[ele] * 0.44 / 100;
            } else if (ele == "K") {
                retval[ele] = elements.elmass[ele] * 0.83 / 100;
            } else {
                retval[ele] = elements.elmass[ele] / 100;
            }
        }
        return retval;
    };
    var calculateMM = function calculateMM(formula) {
        var elements = calculate(formula);
        var retval = {};
        for (var ele in elements.elmass) {
            var eltotal = elements.elmass[ele] * atom[ele];
            retval[ele] = eltotal / elements.total;
        }
        return retval;
    };
    return {
        Calculate: calculate,
        CalculateNPK: calculateNPK,
        CalculateMM: calculateMM
    };
});

