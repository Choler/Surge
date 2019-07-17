const list = {
  "endTime": "2022-01-01 00:00:00",
  "id": 25,
  "imgUrl": "http://img.rr.tv/medal/20180607/o_1528365641950.png",
  "name": "1080P"
};
if ($request.method === 'OPTIONS') {
  $done({});
} else {
  let body = JSON.parse($response.body);
  if ($request.url.indexOf('profile') > 0) {
    body.data.user.medalList.splice(0, 0, list)
    body.data.user.privilegeList = JSON.parse('[{"id":null,"createTime":null,"updateTime":null,"effectObject":"video","action":"play","function":"originalPainting","func":"originalPainting","description":"解锁原画","icon":"jiesuoyuanhua","endTime":1640966400000}]');
  }
  if ($request.url.indexOf('medal') > 0) {
    body.data.medalList.forEach((element, index) => {
    if (element['medal']['id'] === 25) {
      body.data.medalList[index].medal.endTime = "2022-01-01 00:00:00";
      }
    });
  }
  $done({body: JSON.stringify(body)});
}
