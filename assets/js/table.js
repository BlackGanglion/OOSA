var width = 400;//SVG绘制区域的宽度
var height = 500;	//SVG绘制区域的高度

var svg = d3.select("#first")			//选择<body>
      .append("svg")			//在<body>中添加<svg>
      .attr("width", width)	//设定<svg>的宽度属性
      .attr("height", height);//设定<svg>的高度属性

//1.确定初始数据
//var dataset = [ ["Nutrilon",60.8] , ["Hipp",58.4] , ["联想",47.3] , ["苹果",46.6] ,
        //["华为",41.3] , ["酷派",40.1] , ["其它",111.5] ];
var dataset = [
  ["Nutrilon/诺优能",71303],
  ["Hipp/喜宝",7962],
  ["Wyeth/惠氏",11273],
  ["Hero Baby/天赋力",8558],
  ["Mead Johnson/美赞臣",6143],
  ["Cow  Gate",6405],
  ["Bellamy’s/贝拉米",14363],
  ["KARICARE/可瑞康",14153],
  ["Friso/美素佳儿",49075],
  ["Aptamil",72232],
  ];

//2.转换数据
var pie = d3.layout.pie()
      .value(function(d){ return d[1]; });

var piedata = pie(dataset);

//3.绘制
//字体大小
var fontsize = 14;

//外半径和内半径
var outerRadius = 600 / 3;
var innerRadius = 0;

//创建弧生成器
var arc = d3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);

var color = d3.scale.category20();

//添加对应数目的弧组，即<g>元素
var arcs = svg.selectAll("g")
        .data(piedata)		//绑定转换后的数据piedata
        .enter()
        .append("g")
        .attr("transform","translate("+( outerRadius )+","+ ( outerRadius ) +")");

//绘制弧
arcs.append("path")
  .attr("fill",function(d,i){
    return color(i);	//设定弧的颜色
  })
  .attr("d",function(d){
    return arc(d);	//使用弧生成器
  });


//绘制弧内的文字
arcs.append("text")
  .attr("transform",function(d){
    var x = arc.centroid(d)[0] * 1.4;		//文字的x坐标
    var y = arc.centroid(d)[1] * 1.4;		//文字的y坐标
    return "translate(" + x + "," + y + ")";
  })
  .attr("text-anchor","middle")
  .style("font-size",fontsize)
  .text(function(d){
    //计算市场份额的百分比
    var percent = Number(d.value)/d3.sum(dataset,function(d){ return d[1]; }) * 100;

    //保留1位小数点，末尾加一个百分号返回
    return percent.toFixed(1) + "%";
  });


//添加一个提示框
var tooltip = d3.select("body")
          .append("div")
          .attr("class","tooltip")
          .style("opacity",0.0);

arcs.on("mouseover",function(d){
    /*
    鼠标移入时，
    （1）通过 selection.html() 来更改提示框的文字
    （2）通过更改样式 left 和 top 来设定提示框的位置
    （3）设定提示框的透明度为1.0（完全不透明）
    */

    tooltip.html(d.data[0] + "的月销量为" + "<br />" + d.data[1] )
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY + 20) + "px")
      .style("opacity",1.0);
  })
  .on("mousemove",function(d){
    /* 鼠标移动时，更改样式 left 和 top 来改变提示框的位置 */

    tooltip.style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY + 20) + "px");
  })
  .on("mouseout",function(d){
    /* 鼠标移出时，将透明度设定为0.0（完全透明）*/

    tooltip.style("opacity",0.0);
  });



var svg = d3.select("#second")
        .append("svg")
  			.attr("width", width)
  			.attr("height", height);

// 1. 读取文件
d3.json("/OOSA/api/table.json", function(error, jsondata){
  if(error) console.log(error);

  var xmax = d3.max(jsondata.data, function(d){
    return d.productid;
  });

  var ymax = d3.max(jsondata.data, function(d){
    return d.monthsale;
  });

  var xScale = d3.scale.linear()
  					.domain([0, xmax])
  					.range([0, 300]);

  var yScale = d3.scale.linear()
  					.domain([0, 70000])
  					.range([300, 0]);

  var xAxis = d3.svg.axis()
  				.scale(xScale)
  				.orient("bottom");

  var gxAxis = svg.append("g")
  					.attr("class","axis")
  					.attr("transform","translate(60,400)")
  					.call(xAxis);

  var yAxis = d3.svg.axis()
  					.scale(yScale)
  					.orient("left");

  var gyAxis = svg.append("g")
  					.attr("class","axis")
  					.attr("transform","translate(60,100)")
  					.call(yAxis);

  // 2. 线段生成器
  var line = d3.svg.line()
  			.x( function(d){ return xScale(d.productid); } )
  			.y( function(d){ return yScale(d.monthsale); } )
  			.interpolate("cardinal");

  // 3. 折线图
  svg.append("path")
  		.attr("class","MyPath")
  		.attr("d", line(jsondata.data) )
  		.attr("transform","translate(25,120)");
});
