const path1 = "/user/profile";
const path2 = "/v3plus/medal/getAll";
const path3 = "/v3plus/index/channel";
const path4 = "/v3plus/video/getTopFeed";
const path5 = "/v3plus/index/todayChoice";

var result = body;

if (url.indexOf(path1) != -1) {
  var obj = JSON.parse(result);
  obj.data.user.medalList = JSON.parse(
    '[{"name":"看剧必备","endTime":"2022-01-01 00:00:00","imgUrl":"http://img.rr.tv/screenshot/20171108/o_1510128764030.png","id":1}]'
  );
  obj.data.user.privilegeList = JSON.parse(
    '[{"effectObject":"danmu","action":"send","func":"superBarrageBlue","description":"超级弹幕","icon":"chaojidanmu","endTime":1640966400000},{"effectObject":"video","action":"play","func":"noLimit","description":"看剧无限制","icon":"kanjuwuxianzhi","endTime":1640966400000},{"effectObject":"video","action":"play","func":"noAd","description":"看剧无广告","icon":"kanjuwuguanggao","endTime":1640966400000},{"effectObject":"growth","action":"play","func":"0.4","description":"经验值加成+40%","icon":"jingyanzhijiacheng","endTime":1640966400000},{"effectObject":"video","action":"play","func":"originalPainting","description":"解锁原画","icon":"jiesuoyuanhua","endTime":1640966400000}]'
  );
  result = JSON.stringify(obj);
}

if (url.indexOf(path2) != -1) {
  var obj = JSON.parse(result);
  obj.data.medalList.forEach((element, index) => {
    if (element.medal.id === 1) {
      obj.data.medalList[index].medal.endTime = "2022-01-01 00:00:00";
    }
  });
  result = JSON.stringify(obj);
}

if (url.indexOf(path3) != -1) {
  var obj = JSON.parse(result);
  obj.data.sections.forEach((element, index) => {
    if (element.sectionType === "AD") {
      obj.data.sections.splice(index, 1);
    }
  });
  result = JSON.stringify(obj);
}

if (url.indexOf(path4) != -1) {
  var obj = JSON.parse(result);
  delete obj.data.notice;
  obj.data.indexView.interestingList.splice(3, 1);
  result = JSON.stringify(obj);
}

if (url.indexOf(path5) != -1) {
  var obj = JSON.parse(result);
  delete obj.data.notice;
  obj.data.sections.splice(-1, 1);
  obj.data.sections.forEach((element, index) => {
    if (element.sectionType === "AD") {
      obj.data.sections.splice(index, 1);
    }
  });
  result = JSON.stringify(obj);
}

result;
