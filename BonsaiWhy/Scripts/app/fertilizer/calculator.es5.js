'use strict';

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define([], factory);
    } else {
        /* Browser globals*/
        FertilizerCalculator = factory();
    }
})(function () {
    var equations, goal;
    /*randomize an individual
    input: individual
    output: traits mutated by drift factor*/
    var mutate = function mutate(individual) {
        var driftfactor = 0.1;
        var mutated = [];
        individual.forEach(function (trait, index) {
            var randomizer = (Math.random() - .5) * 2;
            var drift = trait * driftfactor * randomizer;
            var value = trait + drift;
            /*nonnegative only*/
            if (value < 0) {
                value = 0;
            }
            mutated.push(value);
        });
        return mutated;
    };
    /*create a new solution from existing solutions
    returns both a son and daughter in case mother and father have different number of terms
    uses random cut-and-splice technique*/
    var crossover = function crossover(father, mother) {
        var son = [];
        var daughter = [];
        var jesus = [];
        /*randomly select traits from father, average mother*/
        father.forEach(function (element, index) {
            var randomizer = (Math.random() - .5) * 2;
            if (randomizer > 0 || index > mother.length - 1) {
                son.push(element);
            } else {
                son.push(mother[index]);
            }
        });
        /*randomly select traits from mother, average father*/
        mother.forEach(function (element, index) {
            var randomizer = (Math.random() - .5) * 2;
            if (randomizer > 0 || index > father.length - 1) {
                daughter.push(element);
            } else {
                daughter.push(father[index]);
            }
        });
        return [son, daughter];
    };
    /*evaluate the error of an individual*/
    var fitness = function fitness(individual) {
        var error = 0;
        equations.forEach(function (element, goalindex) {
            var output = 0;
            element.forEach(function (coefficient, individualindex) {
                output += coefficient * individual[individualindex];
            });
            error += Math.abs(goal[goalindex] - output);
        });
        return error;
    };
    var compare = function compare(a, b) {
        var fitnessa = fitness(a);
        var fitnessb = fitness(b);
        return fitnessa - fitnessb;
    };
    /*sort and kill members of the population with low fitness*/
    var kill = function kill(population) {
        var remaining = 16;
        population.sort(compare);
        return population.slice(0, remaining);
    };
    /*repeat genetic algorithm until fitness is met or max iterations*/
    var iterate = function iterate(population, evolutions) {
        for (var i = 0; i < evolutions; i++) {
            var initiallength = population.length;
            /*mutate, double population*/
            for (var j = 0; j < initiallength; j++) {
                population.push(mutate(population[j]));
            }
            /*kill by fitness test*/
            population = kill(population);
            /*crossover, double population*/
            var parents = population.length;
            for (var j = 0; j < parents; j += 2) {
                var babies = crossover(population[j], population[j + 1]);
                population = population.concat(babies);
            }
        }
        return population;
    };
    /*create a new individual
    input: number of traits
    output: maximize lowest contributing traits to meet goal
    */
    var seed = function seed() {
        var individual = [];
        var traitsCount = equations[0].length;
        for (var i = 0; i < traitsCount; i++) {
            var coefficient = 1,
                coefficientJ = 0;
            equations.forEach(function (equation, j) {
                if (equation[i] > 0 && equation[i] < coefficient) {
                    coefficient = equation[i];
                    coefficientJ = j;
                }
            });
            individual.push(goal[coefficientJ] / coefficient);
        }
        return individual;
    };
    /*equations matrix
    Ax+By+Cz = D
    Ex+Fy+Gz = H
    Ix+Jy+Kz = L
    {{x:A,y:B,z:C},{x:E,y:F,z:G},{x:J,y:K,z:L}}
    [[A,B,C,D],[E,F,G,H],[I,J,K,L]]
    goal matrix for fitness function
    fitness = abs(M-x)+abs(N-y)+abs(O-z)
    {x:M,y:N,z:O}
    [M,N,O]
    returns solution matrix of best fit
    {x:1,y:3,z:3}
    [1,3,3]
    goal is in mg: (volume L)*(ppm mg/L)*/
    var calculate = function calculate(equationsmatrix, goalmatrix) {
        equations = equationsmatrix;
        goal = goalmatrix;
        var population = [seed()];
        population = iterate(population, 250);
        population.sort(compare);
        return population[0];
    };
    return {
        Calculate: calculate
    };
});

