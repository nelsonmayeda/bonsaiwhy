/*Light Chart*/
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /* AMD. Register as an anonymous module.*/
        define(["chartjs"], factory);
    }else {
        /* Browser globals*/
        LightChart = factory(Chart);
    }
}( function (chartJS) {
    var myChart;
    var sunRanges;
    var newDataset = function (label, color) {
        var newLabel = label;
        var newDataset = {
            label: newLabel,
            borderColor: color,
            pointBackgroundColor: color,
            pointBorderColor: 'rgba(255,255,255,1)',
            backgroundColor: "rgba(0,0,0,0)",
            data: []
        }
        myChart.data.labels.forEach(function (element) {
            newDataset.data.push(0);
        });
        myChart.data.datasets.push(newDataset);
        myChart.update();
    };
    var updateDataset = function (index, data) {
        myChart.data.datasets[index].data = data;
        myChart.update();
    };
    var init = function (ctx1, title, xlabels) {
        var chartdata = {
            labels: xlabels,
            datasets: []
        };
        /*configure chart*/
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
                itemSort: function (a, b) {
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
        chartJS.defaults.global.defaultFontColor = "#FFF";
        myChart = new chartJS(ctx1, {
            type: 'line',
            data: chartdata,
            options: chartoptions
        });
    }
    return {
        Init: init,
        NewDataset: newDataset,
        UpdateDataset: updateDataset
    };
}));