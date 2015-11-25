// 路径配置
require.config({
  paths: {
    echarts: 'http://echarts.baidu.com/build/dist'
  }
});

// 使用
require(
  [
    'echarts',
    'echarts/chart/radar' // 使用柱状图就加载bar模块，按需加载
  ],
  function (ec) {
    // 基于准备好的dom，初始化echarts图表
    var myChart = ec.init(document.getElementById('main'));

    var option = {
      title : {
        text: 'Aptamil  VS  a2',
        subtext: '数据取自天猫国际'
      },
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        orient : 'vertical',
        x : 'right',
        y : 'bottom',
        data:['Aptamil', 'a2']
      },
      polar : [
        {
          indicator : [
            { text: '正品（Quality）', max: 100},
            { text: '包装不错（Packaging）', max: 80},
            { text: '描述一致（Description）', max: 80},
            { text: '服务好（Customer Support）', max: 30},
            { text: '物流快（Logistics）', max: 50},
            { text: '发货快（Delivery）', max: 50}
          ]
        }
      ],
      calculable : true,
      series : [
        {
          name: 'Aptamil VS a2',
          type: 'radar',
          data : [
            {
              value : [76,76,72,25,40,0],
              name : 'Aptamil'
            },
            {
              value : [80,38,54,0,25,29],
              name : 'a2'
            }
          ]
        }
      ]
    };

    // 为echarts对象加载数据
    myChart.setOption(option);
  }
);
