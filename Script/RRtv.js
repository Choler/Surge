const medalList = {
  endTime: "2022-01-01 00:00:00",
  id: 25,
  imgUrl: "http://img.rr.tv/medal/20180607/o_1528365641950.png",
  name: "1080P"
}
const privilegeList = [
  {
    id: null,
    createTime: null,
    updateTime: null,
    effectObject: "video",
    action: "play",
    function: "originalPainting",
    func: "originalPainting",
    description: "解锁原画",
    icon: "jiesuoyuanhua",
    endTime: 1993478399000
  }
]

if ($request.method === "OPTIONS") {
  $done({})
} else {
  var obj = JSON.parse($response.body)
  if ($request.url.indexOf("profile") > 0) {
    obj.data.user.privilegeList = privilegeList
    obj.data.user.medalList.splice(0, 0, medalList)
  }
  if ($request.url.indexOf("medal") > 0) {
    obj.data.medalList.forEach((item) => {
      if (item.medal.id == 25) {
        item.medal.endTime = "2033-03-03 23:59:59"
      }
    })
  }
  $done({body: JSON.stringify(obj)})
}