var basetime;
//tr之间的间隔
var spacing = 36;
//第一个tr与浏览器顶部的距离
var existTop = 62;

//将时间戳换成正常时间
var timeChange = function(unix){
  var now = new Date(parseInt(unix) * 1000);
  return now.toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
};

//表格变换
var tableChange = function(comparetime){
  var nowMap = new Map();
  $('tr').each(function(i, e){
    var id = parseInt($(e).attr('id'));
    var sales = parseInt($(e).find('td').eq(2).text());
    var top = parseInt($(e).css('top'));
    if(id){
      nowMap.set(id, {
        nowSpace: (top - existTop) / spacing,
        sales: sales
      });
    }
  });
  //console.log(nowMap);

  //读取comparetime的json
  $.getJSON('api/' + comparetime + '.json', function(content){
    var compareData = content[0]['data'];
    var compareList = [];

    $.each(compareData, function(i, element){
      var id = element['id'];
      var brandName = element['brandName'];
      var nowSales = element['sales'];

      var oldSpace = nowMap.get(id)['nowSpace'];
      var oldSales = nowMap.get(id)['sales'];

      compareList.push({
        id: id,
        brandName: brandName,
        oldSales: oldSales,
        nowSales: nowSales,
        changeSales: nowSales - oldSales,
        oldSpace: oldSpace
      });
    });
    //console.log(compareList);

    //根据changeSales从大到小排序
    compareList.sort(function(a, b){
      return b.changeSales - a.changeSales;
    });

    //再遍历一次，计算排名变化与移动定位
    $.each(compareList, function(i, e){
      compareList[i]['nowSpace'] = i + 1;
      compareList[i]['changeSpace'] = compareList[i]['oldSpace'] - (i + 1);

      var dis = (i + 1) * spacing + existTop;

      $('#' + compareList[i]['id']).find('td:eq(2)').text(compareList[i]['nowSales']);
      $('#' + compareList[i]['id']).find('td:eq(3)').text(compareList[i]['changeSales']);
      if(compareList[i]['changeSpace'] > 0){
        $('#' + compareList[i]['id'])
            .find('td:eq(4)')
            .html('<span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>' + compareList[i]['changeSpace']);
      }else{
        $('#' + compareList[i]['id'])
            .find('td:eq(4)')
            .html('<span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>' + (-compareList[i]['changeSpace']));
      }

      $('#' + compareList[i]['id']).animate({
        top: dis + 'px'
      },"slow");
    });

    //console.log(compareList);

    nowMap.clear();
  })
};

$.ajaxSettings.async = false;
$.getJSON('api/time.json', function(content){
  var timeList = content[0];
  $.each(timeList, function(i, e){
    if(i == 0){
      basetime = e;
    }
    $('.timeselect').append(
      '<a class="btn btn-xs btn-success" id="' + e + '">' + timeChange(e) + '</a>'
    );
    $('#' + e).on('click', function(){
      tableChange(e);
    });
  });
})

$.getJSON('api/' + basetime + '.json', function(content){
  var time = content[0]['time'];
  var nowData = content[0]['data'];

  $.each(nowData, function(i, element){
    var id = element['id'];
    var brandName = element['brandName'];
    var sales = element['sales'];

    $('tbody').append(
      '<tr id = "'+ id +'" style="top: '+ ((i + 1) * spacing + existTop) +'px">'+
      '<td>'+ id +'</td>'+
      '<td><a href="product' + id +'.html">'+ brandName +'</a></td>'+
      '<td>'+ sales +'</td>'+
      '<td>'+ ' - ' +'</td>'+
      '<td>'+ ' - ' +'</td>'+
      '</tr>'
    )
  });
});
