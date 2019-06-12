## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/Choler/Surge/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

### 人人视频

Removed the ad and can now play it with the original.

```
[Script]
http-response ^https:\/\/api\.rr\.tv[\s\S]*(channel|Feed|Choice|profile|Medal) script-path=https://raw.githubusercontent.com/Choler/Surge/master/Script/RRtv.js,max-size=524288

[MITM]
hostname = api.rr.tv
```

### 抖音短视频

Remove the ad, remove download restrictions and annoying shopping promotions, you can now download videos without watermarks.

```
[Script]
http-response ^https:\/\/[\s\S]*\/v1\/(aweme\/)?(feed|post)\/\? script-path=https://raw.githubusercontent.com/Choler/Surge/master/Script/Aweme.js,max-size=524288

[MITM]
hostname = aweme*.snssdk.com
```


If you have any problems, you can find me through the link. [@Bigbig_Choler](https://t.me/Bigbig_Choler)
