const list1 = {
    "name":"1080P",
    "endTime":"2022-01-01 00:00:00",
    "imgUrl": "http://img.rr.tv/medal/20180607/o_1528365641950.png",
    "id":25
    };
const list2 = {
    "description": "解锁原画",
    "icon": "jiesuoyuanhua",
    "endTime": 1640966400000,
    "effectObject": "video",
    "func": "originalPainting",
    "action": "play"
    };

let result = $response.body;
if ($request.url.indexOf('profile') != -1) {
  obj = JSON.parse(result);
  obj.data.user.medalList.splice(0, 0, list1);
  obj.data.user.privilegeList.splice(0, 0, list2);
  body = JSON.stringify(obj);
  $done({body});
}

if($request.method == 'OPTIONS'){
  $done({})
} else {
  if ($request.url.indexOf('medal') != -1) {
    obj = JSON.parse(result);
    obj.data.medalList.forEach((element, index) => {
    if (element['medal']['id'] === 25) {
      obj.data.medalList[index].medal.endTime = "2022-01-01 00:00:00";
      }
    });
  };
  body = JSON.stringify(obj);
  $done({body});
}
