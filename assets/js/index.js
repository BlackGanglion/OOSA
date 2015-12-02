$(document).ready(function(){
  $('.show-element img').animate({
    opacity: 0.8
  }, "slow");
  $('.data-word-show-1').animate({
    left: "37%",
    opacity: 1
  }, "slow");
  $('.data-word-show-2').animate({
    right: "49%",
    opacity: 1
  }, "slow");

  $('#select-brand').on('click', function(){
    $('#select-shop').removeClass('active');
    $('#submit-shop').addClass('hide');

    $('#select-brand').addClass('active');
    $('#submit-brand').removeClass('hide');
  });

  $('#select-shop').on('click', function(){
    $('#select-brand').removeClass('active');
    $('#submit-brand').addClass('hide');

    $('#select-shop').addClass('active');
    $('#submit-shop').removeClass('hide');
  })
});

require.config({
  paths: {
    echarts: 'http://echarts.baidu.com/build/dist'
  }
});

require(
  [
    'echarts',
    'echarts/chart/chord'
  ],
  function (ec){
    var myChart = ec.init(document.getElementById('pic-1'));

    var option = {
      color : [
        '#FBB367','#80B1D2','#FB8070','#CC99FF','#B0D961',
        '#99CCCC','#BEBBD8','#FFCC99','#8DD3C8','#FF9999',
        '#CCEAC4','#BB81BC','#FBCCEC','#CCFF66','#99CC66',
        '#66CC66','#FF6666','#FFED6F','#ff7f50','#87cefa',
      ],
      tooltip : {
        trigger: 'item',
        formatter : function (params) {
            if (params.name && params.name.indexOf('-') != -1) {
                return params.name.replace('-', ' ' + params.seriesName + ' ')
            }
            else {
                return params.name ? params.name : params.data.id
            }
        }
      },
      legend : {
        data : [
            '美国',
            '叙利亚反对派',
            '阿萨德',
            '伊朗',
            '塞西',
            '哈马斯',
            '以色列',
            '穆斯林兄弟会',
            '基地组织',
            '俄罗斯',
            '黎巴嫩什叶派',
            '土耳其',
            '卡塔尔',
            '沙特',
            '黎巴嫩逊尼派',
            '',
            '支持',
            '反对',
            '未表态'
        ],
        orient : 'vertical',
        x : 'left'
      },
      series : [
        {
            "name": "支持",
            "type": "chord",
            "showScaleText": false,
            "clockWise": false,
            "data": [
                {"name": "美国"},
                {"name": "叙利亚反对派"},
                {"name": "阿萨德"},
                {"name": "伊朗"},
                {"name": "塞西"},
                {"name": "哈马斯"},
                {"name": "以色列"},
                {"name": "穆斯林兄弟会"},
                {"name": "基地组织"},
                {"name": "俄罗斯"},
                {"name": "黎巴嫩什叶派"},
                {"name": "土耳其"},
                {"name": "卡塔尔"},
                {"name": "沙特"},
                {"name": "黎巴嫩逊尼派"}
            ],
            "matrix": [
                [0,100,0,0,0,0,100,0,0,0,0,0,0,0,0],
                [10,0,0,0,0,10,10,0,10,0,0,10,10,10,10],
                [0,0,0,10,0,0,0,0,0,10,10,0,0,0,0],
                [0,0,100,0,0,100,0,0,0,0,100,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,10,0],
                [0,100,0,10,0,0,0,0,0,0,0,0,10,0,0],
                [10,100,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,10,10,0,0],
                [0,100,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,100,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,100,10,0,0,0,0,0,0,0,0,0,0,0],
                [0,100,0,0,0,0,0,100,0,0,0,0,0,0,0],
                [0,100,0,0,0,100,0,100,0,0,0,0,0,0,0],
                [0,100,0,0,100,0,0,0,0,0,0,0,0,0,100],
                [0,100,0,0,0,0,0,0,0,0,0,0,0,10,0]
            ]
        },
        {
            "name": "反对",
            "type": "chord",
            "insertToSerie": "支持",
            "data": [
                {"name": "美国"},
                {"name": "叙利亚反对派"},
                {"name": "阿萨德"},
                {"name": "伊朗"},
                {"name": "塞西"},
                {"name": "哈马斯"},
                {"name": "以色列"},
                {"name": "穆斯林兄弟会"},
                {"name": "基地组织"},
                {"name": "俄罗斯"},
                {"name": "黎巴嫩什叶派"},
                {"name": "土耳其"},
                {"name": "卡塔尔"},
                {"name": "沙特"},
                {"name": "黎巴嫩逊尼派"}
            ],
            "matrix": [
                [0,0,100,100,0,100,0,0,100,0,0,0,0,0,0],
                [0,0,0,10,0,0,0,0,0,10,10,0,0,0,0],
                [10,0,0,0,0,0,10,10,10,0,0,10,10,0,10],
                [10,100,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,10,0,100,0,0,0,10,10,0,0],
                [10,0,0,0,100,0,10,0,0,0,0,0,0,0,0],
                [0,0,100,0,0,100,0,0,0,0,0,0,0,0,0],
                [0,0,100,0,10,0,0,0,0,0,0,0,0,10,0],
                [10,0,100,0,0,0,0,0,0,0,0,0,0,100,0],
                [0,100,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,100,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,100,0,100,0,0,0,0,0,0,0,0,0,0],
                [0,0,100,0,100,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,100,10,0,0,0,0,0,0],
                [0,0,100,0,0,0,0,0,0,0,0,0,0,0,0]
            ]
        },
        {
            "name": "未表态",
            "type": "chord",
            "insertToSerie": "支持",
            "data": [
                {"name": "美国"},
                {"name": "叙利亚反对派"},
                {"name": "阿萨德"},
                {"name": "伊朗"},
                {"name": "塞西"},
                {"name": "哈马斯"},
                {"name": "以色列"},
                {"name": "穆斯林兄弟会"},
                {"name": "基地组织"},
                {"name": "俄罗斯"},
                {"name": "黎巴嫩什叶派"},
                {"name": "土耳其"},
                {"name": "卡塔尔"},
                {"name": "沙特"},
                {"name": "黎巴嫩逊尼派"}
            ],
            "matrix": [
                [0,0,0,0,100,0,0,100,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
              ]
            }
          ]
        };
        myChart.setOption(option);
      }
    );

require(
  [
    'echarts',
    'echarts/chart/bar'
  ],
  function (ec){
    var myChart = ec.init(document.getElementById('pic-2'));

    var option = {
      title: {
        x: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      calculable: true,
      grid: {
        borderWidth: 0,
        y: 80,
        y2: 60
      },
      xAxis: [
        {
          type: 'category',
          show: false,
          data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
        }
      ],
      yAxis: [
        {
          type: 'value',
          show: false
        }
      ],
      series: [
        {
          type: 'bar',
          itemStyle: {
            normal: {
              color: function(params) {
                var colorList = [
                  '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                  '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                  '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                ];
                return colorList[params.dataIndex]
              },
              label: {
                show: true,
                position: 'top',
                formatter: '{b}\n{c}'
              }
            }
          },
          data: [12,21,10,4,12,5,6,5,25,23,7],
          markPoint: {
            tooltip: {
              trigger: 'item',
              backgroundColor: 'rgba(0,0,0,0)',
              formatter: function(params){
                return '<img src="'
                + params.data.symbol.replace('image://', '')
                + '"/>';
              }
            },
            data: [
              {xAxis:0, y: 350, name:'Line', symbolSize:20, symbol: 'image://../asset/ico/折线图.png'},
              {xAxis:1, y: 350, name:'Bar', symbolSize:20, symbol: 'image://../asset/ico/柱状图.png'},
              {xAxis:2, y: 350, name:'Scatter', symbolSize:20, symbol: 'image://../asset/ico/散点图.png'},
              {xAxis:3, y: 350, name:'K', symbolSize:20, symbol: 'image://../asset/ico/K线图.png'},
              {xAxis:4, y: 350, name:'Pie', symbolSize:20, symbol: 'image://../asset/ico/饼状图.png'},
              {xAxis:5, y: 350, name:'Radar', symbolSize:20, symbol: 'image://../asset/ico/雷达图.png'},
              {xAxis:6, y: 350, name:'Chord', symbolSize:20, symbol: 'image://../asset/ico/和弦图.png'},
              {xAxis:7, y: 350, name:'Force', symbolSize:20, symbol: 'image://../asset/ico/力导向图.png'},
              {xAxis:8, y: 350, name:'Map', symbolSize:20, symbol: 'image://../asset/ico/地图.png'},
              {xAxis:9, y: 350, name:'Gauge', symbolSize:20, symbol: 'image://../asset/ico/仪表盘.png'},
              {xAxis:10, y: 350, name:'Funnel', symbolSize:20, symbol: 'image://../asset/ico/漏斗图.png'},
            ]
          }
        }
      ]
    };
    myChart.setOption(option);
  }
);
