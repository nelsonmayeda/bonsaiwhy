'use strict';

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define(["chartjs"], factory);
    } else {
        /* Browser globals*/
        SoilChart = factory(Chart);
    }
})(function (chartJS) {
    var myChart;
    var newDataset = function newDataset(label, color) {
        var newLabel = label;
        var newDataset = {
            label: newLabel,
            borderColor: color,
            pointBackgroundColor: color,
            pointBorderColor: 'rgba(255,255,255,1)',
            backgroundColor: "rgba(0,0,0,0)",
            data: []
        };
        myChart.data.labels.forEach(function (element) {
            newDataset.data.push(0);
        });
        myChart.data.datasets.unshift(newDataset);
        myChart.update();
    };
    var updateDataset = function updateDataset(index, data) {
        myChart.data.datasets[index].data = data;
        myChart.update();
    };
    var init = function init(ctx1, title, xlabels) {
        var chartdata = {
            labels: xlabels,
            datasets: []
        };
        var chartoptions = {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: title
            },
            tooltips: {
                mode: 'index',
                intersect: false,
                itemSort: function itemSort(a, b) {
                    if (a.y < b.y) {
                        return -1;
                    }
                    if (a.y > b.y) {
                        return 1;
                    }
                    return 0;
                }
            },
            hover: {
                mode: 'index',
                intersect: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };
        Chart.defaults.global.defaultFontColor = "#FFF";
        myChart = new Chart(ctx1, {
            type: 'line',
            data: chartdata,
            options: chartoptions
        });
    };
    return {
        Init: init,
        NewDataset: newDataset,
        UpdateDataset: updateDataset
    };
});

