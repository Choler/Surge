/*
[Script]
http-response ^https?://cards\.iqiyi\.com/views_home/\d.0/qy_home requires-body=1,max-size=-1,script-path=https://Choler.github.io/Surge/Script/iQIYI.js

[MITM]
hostname = cards.iqiyi.com
*/

var obj = JSON.parse($response.body);
if (obj.cards) {
  obj.cards[0].blocks.splice(1, 1);
  obj.cards[0].blocks.splice(-1, 1);
  for (var i = obj.cards.length - 1; i >= 0; i--) {
    if (obj.cards[i].alias_name == null || obj.cards[i].alias_name == "service" || obj.cards[i].alias_name == "tv-qiangxianjutou" || obj.cards[i].alias_name == "feed") {
      obj.cards.splice(i, 1);
    }
  }
}
$done({body: JSON.stringify(obj)});