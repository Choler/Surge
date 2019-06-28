body = JSON.parse($response.body);
body['advertisement_num'] = 0;
body['advertisement_info'] = [];
result = JSON.stringify(body);
$done({body: result});


/**********************************************************
[Script]
http-response ^https:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad script-path=https://Choler.github.io/Surge/Script/WeChat.js,requires-body=true

[MITM]
hostname = mp.weixin.qq.com
**********************************************************/