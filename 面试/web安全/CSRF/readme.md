## 登录
cookie 保存用户信息，后续一段都不用在登录了
api.juejin.cn

另一个 黑客域名下面 请求 api.juejin.cn
1. xhr fetch 跨域不能伪造这个请求
2. GET: script img link POST:form 就能伪造出来了

api.juejin.cn/delete/01 验证用户身份 (后端无法拿到 cookie)

cookie不能跨域: 最新 chrome 提出来的 sameSite 为strict

1. sameSite 设为 strict、lax
2. 用户登录成功时给他一个token，之后前端每一个请求都带上这个token，黑客网站时拿不到token，它的请求没token就拒绝它