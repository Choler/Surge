body = JSON.parse($response.body);
body.advertisement_info = [];
body = JSON.stringify(body);
$done({body});

/**********************************************************
[Script]
http-response ^https:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad script-path=https://Choler.github.io/Surge/Script/WeChat.js,requires-body=true

[MITM]
hostname = mp.weixin.qq.com
**********************************************************/