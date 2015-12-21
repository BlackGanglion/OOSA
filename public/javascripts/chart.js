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
