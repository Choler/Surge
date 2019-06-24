body = JSON.parse($response.body);
body.advertisement_info = [];
body = JSON.stringify(body);
$done({body});

/**********************************************************
[Script]
http-response ^https:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad script-path=https://raw.githubusercontent.com/Choler/Surge/master/Script/WeChat.js,requires-body=true,max-size=131072

[MITM]
hostname = mp.weixin.qq.com
**********************************************************/