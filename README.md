# Angular Universal Starter

![Angular Universal](https://angular.io/generated/images/marketing/concept-icons/universal.png)

## 入门

在开始之前，下列包是必须安装的（示例项目均已配置好，只需 npm install 即可）：
@angular/platform-server - Universal 的服务端元件。
@nguniversal/module-map-ngfactory-loader - 用于处理服务端渲染环境下的惰性加载。
@nguniversal/express-engine - Universal 应用的 Express 引擎。
ts-loader - 用于对服务端应用进行转译。
express - Node Express 服务器

---

### 服务器端渲染（SSR）
* 在运行时发生
* 用于ngExpressEngine在请求的URL上动态呈现您的应用程序

---

### 安装
* `npm install`

### 开发环境 (Client-side 客户端渲染)
*  `npm run start` 或者 `ng serve`

### 生产环境 (打包运行ssr服务)
**`npm run build:ssr && npm run serve:ssr`** - 打包（npm run build:ssr），运行ssr服务（npm run serve:ssr）
**`http://localhost:4000`**--在浏览器访问



## 常见问题
Moved to [/angular/universal/blob/master/docs/gotchas.md](https://github.com/angular/universal/blob/master/docs/gotchas.md)

# License
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
