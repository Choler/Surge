/*
[Script]
http-response ^https://sp\.kaola\.com/api/openad$ requires-body=1,max-size=-1,script-path=https://Choler.github.io/Surge/Script/Kaola.js

[MITM]
hostname = sp.kaola.com
*/

var obj = JSON.parse($response.body);
obj.body = null;
$done({body: JSON.stringify(obj)});