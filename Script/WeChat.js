/*
[Script]
http-response ^https://mp\.weixin\.qq\.com/mp/getappmsgad requires-body=1,max-size=-1,script-path=https://Choler.github.io/Surge/Script/WeChat.js

[MITM]
hostname = mp.weixin.qq.com
*/

var obj = JSON.parse($response.body);
obj.advertisement_num = 0;
obj.advertisement_info = [];
$done({body: JSON.stringify(obj)});