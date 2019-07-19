## Scripting
脚本功能需要 Surge iOS TF/Surge Mac 3.3.0 版本。

### 抖音
- 移除插播广告
- 移除电商推广
- 移除视频投票
- 下载权限视频
- 视频去水印保存

```
[Script]
http-response ^https://aweme(-eagle)?.snssdk.com/aweme/v\d/(.*/)?(feed|post)/ requires-body=1,max-size=-1,script-path=https://Choler.github.io/Surge/Script/Aweme.js

[MITM]
hostname = aweme*.snssdk.com
```

### 皮皮虾
- 去除应用内广告

```
[Script]
http-response ^https?://[a-z]+.snssdk.com/bds/feed/stream/ requires-body=1,max-size=-1,script-path=https://Choler.github.io/Surge/Script/Super.js

[MITM]
hostname = ??.snssdk.com
```

### 人人视频
- 点亮活动勋章
- 激活原画权限
- 拦截启动广告
- 屏蔽版本检测

```
[Rule]
URL-REGEX,^https?:\/\/api\.rr\.tv\/(ad|getLastest),REJECT

[Script]
http-response ^https://api.rr.tv/.*(profile|Piece)$ requires-body=1,max-size=-1,script-path=https://Choler.github.io/Surge/Script/RRtv.js

[MITM]
hostname = api.rr.tv
```
### 南瓜电影
- 激活会员权限
- 拦截启动广告
- 去除应用内横幅

```
[Script]
http-response ^https://p.doras.api.vcinema.cn/v5.0/(user|splash|activity)/\w+(/)?$ requires-body=1,max-size=-1,script-path=https://Choler.github.io/Surge/Script/Vcinema.js

[MITM]
hostname = p.doras.api.vcinema.cn
```
### 微信公众号
- 移除文章底部推广

```
[Script]
http-response ^https://mp.weixin.qq.com/mp/getappmsgad requires-body=1,max-size=-1,script-path=https://Choler.github.io/Surge/Script/WeChat.js

[MITM]
hostname = mp.weixin.qq.com
```

### DNS 污染
- 缓解 DNS 污染问题

```
[Rule]
SCRIPT,falied,PROXY,requires-resolve

[Script]
rule falied script-path=https://Choler.github.io/Surge/Script/failed.js
```

### App Store
- 解决应用下载异常缓慢问题

```
[Host]
iosapps.itunes.apple.com = script:stored

[Script]
dns stored script-path=https://Choler.github.io/Surge/Script/stored.js
```
#### 声明
可以拷贝、转发，但不得用于任何商业用途。
