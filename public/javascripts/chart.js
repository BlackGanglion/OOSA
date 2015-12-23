var myChart = echarts.init(document.getElementById('third-chart'));
var option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['Mead Johnson/美赞臣', 'Cow Gate', 'Hipp/喜宝', 'Hero Baby/天赋力',
        'Wyeth/惠氏', 'Nutrilon/诺优能', 'Aptamil', 'Friso/美素佳儿', 'Bellamy’s/贝拉米', 'KARICARE/可瑞康']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            roseType : 'area',
            x: '50%',               // for funnel
            max: 40,                // for funnel
            sort : 'ascending',     // for funnel
            data:[
              {value:6143, name:'Mead Johnson/美赞臣'},
              {value:6405, name:'Cow Gate'},
              {value:7962, name:'Hipp/喜宝'},
              {value:8558, name:'Hero Baby/天赋力'},
              {value:11273, name:'Wyeth/惠氏'},
              {value:71303, name:'Nutrilon/诺优能'},
              {value:72232, name:'Aptamil'},
              {value:49075, name:'Friso/美素佳儿'},
              {value:14363 , name:'Bellamy’s/贝拉米'},
              {value:14153 , name:'KARICARE/可瑞康'}
            ]
        }
    ]
};
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('fourth-chart'));
var option = {
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        x: '3%',
        x2: '4%',
        y2: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['5月','6月','7月','8月','9月','10月','11月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name: 'Mead Johnson/美赞臣',
            type: 'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [600, 1600, 505, 670, 450, 1150, 1050]
        },
        {
            name:'Cow Gate',
            type:'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [1100, 910, 955, 1170, 1450, 1650, 1550]
        },
        {
            name: 'Hipp/喜宝',
            type: 'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: 'Hero Baby/天赋力',
            type: 'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [1280, 1660, 1505, 1670, 1950, 2000, 1700]
        },
        {
            name: 'Wyeth/惠氏',
            type: 'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [1500, 2320, 2010, 1540, 1900, 3300, 2100]
        }
    ]
};
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('first-chart'));
myChart.showLoading();

$.get('../api/test.json', function (data) {
    myChart.hideLoading();

    var itemStyle = {
        normal: {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    };

    var sizeFunction = function (x) {
        var y = Math.sqrt(x / 5e8) + 0.1;
        return y * 200;
    };
    // Schema:
    var schema = [
        {name: 'MonthSaleVolume', index: 0, text: '月销量', unit: '件'},
        {name: 'LifeExpectancy', index: 1, text: '价格', unit: '元'},
        {name: 'AllSaleVolume', index: 2, text: '总销量', unit: '件'},
        {name: 'BrandName', index: 3, text: '品牌名称', unit: ''}
    ];
    option = {
        backgroundColor: '#333',
        title: {
            'text': data.platform[0],
            textAlign: 'center',
            x: '63%',
            y: '55%',
            textStyle: {
                fontSize: 50,
                color: 'rgba(255, 255, 255, 0.7)'
            }
        },
        tooltip: {
            padding: 5,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            formatter: function (obj) {
                var value = obj.value;
                return schema[3].text + '：' + value[3] + '<br>'
                        + schema[1].text + '：' + value[1] + schema[1].unit + '<br>'
                        + schema[0].text + '：' + value[0] + schema[0].unit + '<br>'
                        + schema[2].text + '：' + value[2] + '<br>';
            }
        },
        grid: {
            x: '14%',
            x2: '22%'
        },
        xAxis: {
            name: '月销量',
            max: 2500,
            min: 200,
            nameGap: 5,
            nameTextStyle: {
                fontSize: 18
            },
            splitLine: {
                show: false
            },
            axisTick: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisLabel: {
                formatter: '{value} 件',
                textStyle: {
                    color: '#ccc'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '价格',
            max: 600,
            min: 200,
            nameTextStyle: {
                color: '#ccc',
                fontSize: 18
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                formatter: '{value} 元',
                textStyle: {
                    color: '#ccc'
                }
            }
        },
        dataRange: [
            {
                show: false,
                dimension: 3,
                categories: data.brand,
                calculable: true,
                precision: 0.1,
                textGap: 30,
                textStyle: {
                    color: '#ccc'
                },
                inRange: {
                    color: ['#bcd3bb', '#e88f70', '#edc1a5', '#9dc5c8', '#e1e8c8', '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a']
                }
            }
        ],
        series: [
            {
                type: 'scatter',
                itemStyle: itemStyle,
                data: data.series[0],
                symbolSize: function(val) {
                    return sizeFunction(val[2]);
                }
            }
        ],
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut'
    };

    myChart.setOption(option);

    var getOption = function(n) {
        if (!data.platform[n]) {
            return;
        }
        return {
            title: {
                show: true,
                'text': data.platform[n] + ''
            },
            series: {
                name: data.platform[n],
                type: 'scatter',
                itemStyle: itemStyle,
                data: data.series[n],
                symbolSize: function(val) {
                    return sizeFunction(val[2]);
                }
            }
        };
    };
    var n = 0;
    var duration = 20 * 1000;
    var interval = duration / data.platform.length;
    var timeTicket = setInterval(function () {
        n = (n + 1) % data.platform.length;
        var opt = getOption(n);
        if (opt) {
            myChart.setOption(opt);
        }
    }, interval);
});
