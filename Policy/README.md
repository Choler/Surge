# Scritp Policy
Surge 代理服务器将由脚本处理，且可具有多个 IP 地址。

## 样例
配置：
```
[Proxy]
HTTP = http, custom.com, 443, username, password

[Host]
custom.com = script:server

[Script]
dns server script-path=example.js
```
脚本：
```
var server = [
  "123.123.123.0", // HK
  "123.123.123.1", // KR
  "123.123.123.2" // JP
];
$done({addresses: server, ttl: 600});
```
### 改进
一、代理服务器并发
Surge 会直接并发向所有代理服务器进行 TCP 握手，并选择最快完成握手的连接进行后续请求。

二、自定义 TTL 时间
让代理服务器获得更长久的生存时间，节省 DNS 查询浪费的时间。

三、节点异常处理
如果节点出现问题会尝试连接其他地址，且遇到问题节点能直接绕过。

四、配置更加灵活
可以把 Scritp Policy 当作是内置延迟测试策略组，可进行多层嵌套。

五、简化代理配置
同一个国家只需要写一个代理声明，再把同一个国家的代理服务器写进脚本。

#### 拓展
- 脚本中只能填入 IP 地址，可先测速后到 DNS 结果处查看。
- 使用 Scritp Policy 需除代理服务器外，其他参数都一致。

```
[Proxy]
HK = http, custom.hk, 443, username, password
KR = http, custom.kr, 443, username, password
JP = http, custom.jp, 443, username, password

[Proxy Group]
Proxy = select, HK, KR, JP
Auto = url-test, HK, KR, JP, url = http://www.gstatic.com/generate_204
Fallback = fallback, HK, KR, JP, url = http://www.gstatic.com/generate_204

[Host]
custom.hk = script:hk
custom.kr = script:kr
custom.jp = script:hk

[Script]
dns hk script-path=HK.js
dns kr script-path=KR.js
dns jp script-path=JP.js
```