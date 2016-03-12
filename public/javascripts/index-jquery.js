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

  setInterval("getResultList()",1000);
});

var keyCache;
var getResultList = function(){
  var key = $('.search-input').val();
  if(key !== keyCache){
    keyCache = key;
  }else{
    return;
  }
  if(key === ''){
    clear();
    return;
  }
  clear();
  $.getJSON('../api/index.json', function(result){
    if(result.status == 1) return;
    var allResult = '',
        list = [{0: '产品', 1: 'product'},
                {0: '品牌', 1: 'brand'},
                {0: '类别', 1: 'type'},
                {0: '店铺', 1: 'shop'}],
        i = 0;
    $.each(result, function(key, element){
      if(key == 'status') return;
      var elementResult = '<ul>' + '<li>' + list[i][0] + '</li>';
      $.each(element, function(index, e){
        elementResult += '<li><a href="' + list[i][1] + '/' + e.id + '">' + e.name + '</a></li>';
      })
      elementResult += '</ul>';
      allResult += elementResult;
      i++;
    });
    $('#result').append(allResult);
  });
}

var clear = function(){
  $('#result').empty();
}
