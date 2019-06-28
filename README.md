### 抖音短视频


```
[Script]
http-request ^https:\/\/[\s\S]*/aweme\/v1\/play\/\?video_id=\w{32} script-path=https://Choler.github.io/Surge/Script/Amark.js
http-response ^https:\/\/[\s\S]*\/v1\/(aweme\/)?(feed|post)\/ script-path=https://Choler.github.io/Surge/Script/Aweme.js,requires-body=true,max-size=524288

[MITM]
hostname = aweme*.snssdk.com, api.amemv.com
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




