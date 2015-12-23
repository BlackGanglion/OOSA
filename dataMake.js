var data = {};
var brand = ['Mead Johnson/美赞臣', 'Cow Gate', 'Hipp/喜宝', 'Hero Baby/天赋力', 'Wyeth/惠氏',
             'Nutrilon/诺优能', 'Aptamil', 'Friso/美素佳儿', 'Bellamy’s/贝拉米', 'KARICARE/可瑞康'];
var brandBase = [6143, 6405, 7962, 8558, 11273, 71303, 72232, 49075, 14363, 14153];

var platform = ['天猫国际', '网易考拉', '贝贝网', '海淘网', '亚马逊'];

/*
月销量 400 ~ 2000
实时价格 300 ~ 500
总销量
brand
platform
*/

data["brand"] = brand;
data["platform"] = platform;
data["series"] = [];

for(var i = 0; i < platform.length; i++) {
  var platformElement = [];
  for(var j = 0; j < brand.length; j++) {
    var brandElement = [];
    brandElement[4] = platform[i];
    brandElement[3] = brand[j];
    brandElement[0] = Math.floor(Math.random() * (2000 - 400) + 400);
    brandElement[1] = Math.floor(Math.random() * (500 - 300) + 300);
    brandBase[j] += brandElement[0];
    brandElement[2] = brandBase[j];
    platformElement.push(brandElement);
  }
  data["series"].push(platformElement);
}
console.log(JSON.stringify(data));
