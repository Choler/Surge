## JavaScript


### 短视频去水印

抖音去水印 `api.amemv.com`   
TikTok 去水印 `api*.musical.ly` `api*.tiktokv.com`
```
http-request ^https:\/\/[\s\S]*/aweme\/v1\/play\/\?video script-path=https://Choler.github.io/Surge/Script/Amark.js
```

火山去水印 `api.huoshan.com`
```
http-request ^https:\/\/api\.huoshan\.com\/hotsoon\/item\/video\/_source\/\?video script-path=https://Choler.github.io/Surge/Script/Amark.js
```

微视去水印 `null`
```
http-request ^http:\/\/v\.weishi\.qq\.com/\w+\.f7\d{2}\.mp4 script-path=https://Choler.github.io/Surge/Script/Amark.js
```

### 抖音短视频


```
[Script]
http-response ^https:\/\/[\s\S]*\/v1\/(aweme\/)?(feed|post)\/ script-path=https://Choler.github.io/Surge/Script/Aweme.js,requires-body=true,max-size=524288

[MITM]
hostname = aweme*.snssdk.com
```

### 人人视频

```
[Script]
http-response ^https:\/\/api\.rr\.tv\/.*(profile|Medal) script-path=https://Choler.github.io/Surge/Script/RRtv.js,requires-body=true
http-response ^https:\/\/api\.rr\.tv\/.*(channel|Choice|Feed) script-path=https://Choler.github.io/Surge/Script/RRtv-ad.js,requires-body=true,max-size=524288

[MITM]
hostname = api.rr.tv
```

### 微信公众号
```
[Script]
http-response ^https:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad script-path=https://Choler.github.io/Surge/Script/WeChat.js,requires-body=true

[MITM]
hostname = mp.weixin.qq.com
```

#### 许可
转载需注明作者及项目地址




