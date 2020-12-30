// geo_location_checker=http://ip-api.com/json/, https://raw.githubusercontent.com/SavileLee/FilterRules/Rules/Scripts/IP_API.js

if ($response.statusCode != 200) {
    $done(null);
}

var default_regionName = "Oops!!!";
var default_city = "Oh No!!!";
var default_org = "Cross Utility Ltd";

function RegionName_Check(para) {
    if (para) {
        return para;
    } else {
        return default_regionName;
    }
}

function City_Check(para) {
    if (para) {
        return para;
    } else {
        return default_city;
    }
}

function Org_Check(para) {
    if (para) {
        return para;
    } else {
        return default_org;
    }
}

function Area_Check(para) {
  if(para=="中華民國"){
  return "台湾"
  } else
  {
  return para
  }
}

var flags = new Map([  [ "南非" , "🇦🇫" ] , [ "安吉拉" , "🇦🇮" ] , [ "阿尔巴尼亚" , "🇦🇱" ] , [ "亚美尼亚" , "🇦🇲" ] , [ "南极洲" , "🇦🇶" ] , [ "阿根廷" , "🇦🇷" ] , [ "美属萨尼亚" , "🇦🇸" ] , [ "奥地利" , "🇦🇹" ] , [ "澳大利亚" , "🇦🇺" ] , [ "阿鲁巴" , "🇦🇼" ] , [ "奥兰" , "🇦🇽" ] , [ "阿塞拜疆" , "🇦🇿" ] , [ "巴巴多斯" , "🇧🇧" ] , [ "孟加拉" , "🇧🇩" ] , [ "比利时" , "🇧🇪" ] , [ "布基纳法索" , "🇧🇫" ] , [ "保加利亚" , "🇧🇬" ] , [ "巴林" , "🇧🇭" ] , [ "布隆迪" , "🇧🇮" ] , [ "贝宁" , "🇧🇯" ] , [ "百慕大" , "🇧🇲" ] , [ "文莱" , "🇧🇳" ] , [ "玻利维亚" , "🇧🇴" ] , [ "巴西" , "🇧🇷" ] , [ "巴哈马" , "🇧🇸" ] , [ "不丹" , "🇧🇹" ] , [ "挪威" , "🇧🇻" ] , [ "博茨瓦纳" , "🇧🇼" ] , [ "白俄罗斯" , "🇧🇾" ] , [ "伯利兹" , "🇧🇿" ] , [ "加拿大" , "🇨🇦" ] , [ "中非共和国" , "🇨🇫" ] , [ "瑞士" , "🇨🇭" ] , [ "库克群岛" , "🇨🇰" ] , [ "智利" , "🇨🇱" ] , [ "喀麦隆" , "🇨🇲" ] , [ "中国" , "🇨🇳" ] , [ "哥伦比亚" , "🇨🇴" ] , [ "CP" , "🇨🇵" ] , [ "哥斯达黎加" , "🇨🇷" ] , [ "古巴" , "🇨🇺" ] , [ "佛得角" , "🇨🇻" ] , [ "库拉索" , "🇨🇼" ] , [ "圣诞岛" , "🇨🇽" ] , [ "塞浦路斯" , "🇨🇾" ] , [ "捷克" , "🇨🇿" ] , [ "德国" , "🇩🇪" ] , [ "DG" , "🇩🇬" ] , [ "吉布提" , "🇩🇯" ] , [ "丹麦" , "🇩🇰" ] , [ "多米尼克" , "🇩🇲" ] , [ "多米尼加" , "🇩🇴" ] , [ "阿尔及利亚" , "🇩🇿" ] , [ "西班牙" , "🇪🇦" ] , [ "厄瓜多尔" , "🇪🇨" ] , [ "爱沙尼亚" , "🇪🇪" ] , [ "埃及" , "🇪🇬" ] , [ "西撒哈拉" , "🇪🇭" ] , [ "厄立特里亚" , "🇪🇷" ] , [ "西班牙" , "🇪🇸" ] , [ "埃塞俄比亚" , "🇪🇹" ] , [ "欧盟" , "🇪🇺" ] , [ "芬兰" , "🇫🇮" ] , [ "斐济" , "🇫🇯" ] , [ "福克兰群岛" , "🇫🇰" ] , [ "密克罗尼西亚联邦" , "🇫🇲" ] , [ "法罗群岛" , "🇫🇴" ] , [ "法国" , "🇫🇷" ] , [ "加蓬" , "🇬🇦" ] , [ "英国" , "🇬🇧" ] , [ "香港" , "🇭🇰" ] ,["匈牙利","🇭🇺"], [ "印度尼西亚" , "🇮🇩" ] , [ "爱尔兰" , "🇮🇪" ] , [ "以色列" , "🇮🇱" ] , [ "曼岛" , "🇮🇲" ] , [ "印度" , "🇮🇳" ] , [ "冰岛" , "🇮🇸" ] , [ "意大利" , "🇮🇹" ] , [ "日本" , "🇯🇵" ] , [ "韩国" , "🇰🇷" ] , [ "卢森堡" , "🇱🇺" ] , [ "澳门" , "🇲🇴" ] , [ "墨西哥" , "🇲🇽" ] , [ "马来西亚" , "🇲🇾" ] , [ "荷兰" , "🇳🇱" ] , [ "菲律宾" , "🇵🇭" ] , [ "罗马尼亚" , "🇷🇴" ] , [ "塞尔维亚" , "🇷🇸" ] , [ "俄罗斯" , "🇷🇺" ] , [ "卢旺达" , "🇷🇼" ] , [ "沙特阿拉伯" , "🇸🇦" ] , [ "所罗门群岛" , "🇸🇧" ] , [ "塞舌尔" , "🇸🇨" ] , [ "苏丹" , "🇸🇩" ] , [ "瑞典" , "🇸🇪" ] , [ "新加坡" , "🇸🇬" ] , [ "泰国" , "🇹🇭" ] , [ "突尼西亚" , "🇹🇳" ] , [ "汤加" , "🇹🇴" ] , [ "土耳其" , "🇹🇷" ] , [ "图瓦卢" , "🇹🇻" ] , [ "台湾" , "🇨🇳" ] , [ "英国" , "🇬🇧" ] , [ "美属离岛" , "🇺🇲" ] , [ "美国" , "🇺🇸" ] , [ "乌拉圭" , "🇺🇾" ] , [ "乌兹别克" , "🇺🇿" ] , [ "梵蒂冈" , "🇻🇦" ] , [ "委内瑞拉" , "🇻🇪" ] , [ "英属维京群岛" , "🇻🇬" ] , [ "美属维京群岛" , "🇻🇮" ] , [ "越南" , "🇻🇳" ] , [ "南非" , "🇿🇦"]])

var body = $response.body;
var obj = JSON.parse(body);
var title = flags.get(obj['countryCode']) + ' '+obj['country'];
var subtitle = default_regionName + default_org;

var index = obj['org'].indexOf('(');
if (index != -1) {
    subtitle = RegionName_Check(obj['regionName']) + ' ➠ ' + Org_Check(obj['org'].substring(0, index).trim());
} else {
    subtitle = RegionName_Check(obj['regionName']) + ' ➠ ' + Org_Check(obj['org']);
}

var ip = obj['query'];

var description = "国家" + ":" + obj['country'] + '\n'+'地区:' + (obj['regionName']) + '\n' + "城市" + ":" + (obj['city']) + '\n' + "运营商" + ":" + (obj['isp']) + '\n' + "数据中心" + ":" + (obj['org']) + '\n' + "IP" + ":" + obj['query'] + '\n' + "时区" + ":" + obj['timezone'] + '\n' + "经度" + ":" + obj['lon'] + '\n' + "纬度" + ":" + obj['lat'];

$done({title, subtitle, ip, description});
