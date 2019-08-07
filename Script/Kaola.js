/*
[Script]
http-response ^https://sp\.kaola\.com/api/openad$ requires-body=true,script-path=Kaola.js

[MITM]
hostname = sp.kaola.com
*/

var obj = JSON.parse($response.body)
obj.body = null
$done({body: JSON.stringify(obj)})