/*
[Script]
cron "* 1-2 * * 1-5" script-path=https://Choler.github.io/Surge/Script/DBer.js
*/

$httpClient.get('https://api.lynne.ink/release/?v=0.2&m=s', function(error, response, data) {
  if (error) {
    console.log(error);
  } else {
    var obj = JSON.parse(data).detail;
    var cache = $persistentStore.read();
    for (var i = obj.iOS.length -1; i >= 0 ; i--) {
      if (obj.iOS[i].betaVersion != false) {
        if (cache == null) {
          $persistentStore.write(obj.iOS[i].buildID);
        } else if (obj.iOS[i].buildID != cache && cache != null) {
          $persistentStore.write(obj.iOS[i].buildID);
          $notification.post("系统更新  (" + obj.iOS[i].buildID + ")", "iOS " + obj.iOS[i].version + " Developer Beta " + obj.iOS[i].betaVersion + " 已由Apple发布！", "");
        }
      }
    }
  }
})
$done();