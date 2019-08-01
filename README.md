# Angular Universal Starter项目

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
把预编译好的AppServerModule 传入到 PlatformServer 的 renderModuleFactory() 方法中，它会帮助我们初始化应用，将结果返回给客户端。其中，AppServerModuleNgFactory，provideModuleMap和LAZY_MODULE_MAP 是经过 wepack 打包后 通过 require 进来的参数或方法，renderModuleFactory需要从@angular/platform-server的包中import进来
 
    ReferenceError: window is not defined
    app.engine('html', (_, options, callback) => {
        renderModuleFactory(AppServerModuleNgFactory, {
        document: template, // index.html
        url: options.req.url,
        // 懒加载模块配置
        extraProviders: [
            provideModuleMap(LAZY_MODULE_MAP)
        ]
       }).then(html => {
           callback(null, html);
       });
    });
    
   
在使用 express 框架的nodejs中，还可以使用更加便捷的方法---本项目就是使用这种方法；

安装依赖 
`$ npm install --save @nguniversal/express-engine`
示例代码
`import { ngExpressEngine } from '@nguniversal/express-engine';`

`app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));`

### 项目安装
* `npm install`

### 开发环境 (Client-side 客户端渲染)
*  `npm run start` 或者 `ng serve`

### 生产环境 (打包并运行ssr服务)
**`npm run build:ssr && npm run serve:ssr`** - 打包（npm run build:ssr），运行ssr服务（npm run serve:ssr）
**`http://localhost:4000`**--在浏览器访问

打包后：
dist/browser目录下的文件就是正常的打包文件 ， 和不使用SSR时是一模一样的。
dist/server下的文件就是服务端渲染所需要的代码，你写的所有代码都会被压缩到它里面。



## 常见问题
### 1. 使用浏览器 API

相信会有同学在打包的时候出现过下面的报错问题

    ReferenceError: window is not defined
或者

    ReferenceError: document is not defined

因为这些是浏览器独有的原生对象（比如 window、document、navigator 或 location），在服务器上面是没有的，因此运行的时候会报错。因此，我们需要对使用浏览器的API方法做好兼容。

方案1：在server.ts，引入domino做兼容

    const domino = require('domino');
    const win = domino.createWindow(template);
    
    global['window'] = win;
    global['document'] = win.document;
    global['DOMTokenList'] = win.DOMTokenList;
    global['Node'] = win.Node;
    global['Text'] = win.Text;
    global['HTMLElement'] = win.HTMLElement;
    global['navigator'] = win.navigator;
 
但是，domino并非兼容了所有浏览器的api，只是兼容了大部分方法（有兴趣的同学可以看，domin的源码 [https://github.com/fgnass/domino](https://github.com/fgnass/domino)）。但是如果是用到的api不多，可以考虑用这个方案。

方案2：使用Angular官方推荐的方法

通过PLATFORM_ID令牌注入的对象来检查当前平台是浏览器还是服务器，从而解决该问题。判断是浏览器环境，才执行使用到浏览器方法的代码片段。不过个人觉得有些麻烦，因为在用到浏览器独有API方法的地方都得做引入判断兼容。

    import { PLATFORM_ID } from '@angular/core';
    import { isPlatformBrowser, isPlatformServer } from '@angular/common';
     
    constructor(@Inject(PLATFORM_ID) private platformId: Object) { ... }
     
    ngOnInit() {
      if (isPlatformBrowser(this.platformId)) {
    	// 浏览器代码
		// eg:let url=window.location.href;
     ...
      }
      if (isPlatformServer(this.platformId)) {
    	// 服务器代码
    ...
      }
    }

### 2. 使用第三方库，例如jq


    ReferenceError: $ is not defined


方案1：使用Angular官方推荐的方法

和上面一样，检查当前平台是浏览器还是服务器，执行相应的代码。

    import { PLATFORM_ID } from '@angular/core';
    import { isPlatformBrowser, isPlatformServer } from '@angular/common';
     
    constructor(@Inject(PLATFORM_ID) private platformId: Object) { ... }
     
    ngOnInit() {
      if (isPlatformBrowser(this.platformId)) {
    	// 浏览器代码
		// eg:let userID =$.cookie('userID');
     ...
      }
    }
### 3. setTimeout & setInterval

使用 setTimeout 会降低服务器端渲染的速度，而使用 setInterval 可能会导致渲染失败。
如果在 AppComponent 的构造函数中使用了 setInterval ,而且没有关掉则会导致在浏览器端没有响应。推测应该是在执行定时器的时候，程序会认为渲染还没有结束，所以导致失败。
如果要非要用setTimeout & setInterval，那就跟上面一样，检查当前平台是浏览器还是服务器，执行相应的代码。

### 4. http请求重复问题（浏览器/服务器各请求一次）

方法1：使用 TransferHttpCacheModule
使用 TransferHttpCacheModule 很简单，代码不需要改动。在 app.module.ts 中导入之后，Angular自动会将服务端请求缓存到客户端，换句话说就是服务端请求到数据会自动传输到客户端，客户端接收到数据之后就不会再发送请求了。

方法2：使用 BrowserTransferStateModule
该方法稍微复杂一些，需要改动一些代码。


调整 home.component.ts 代码如下：


    import { Component, OnDestroy, OnInit } from '@angular/core';
	import { makeStateKey, TransferState } from '@angular/platform-browser';
	import { HttpClient } from '@angular/common/http';
	import { Observable } from 'rxjs/Observable';

	const KFCLIST_KEY = makeStateKey('kfcList');

	@Component({
    		selector: 'app-home',
    		templateUrl: './home.component.html',
    		styleUrls: ['./home.component.scss']
	})
	export class HomeComponent implements OnInit, OnDestroy {
    	constructor(public http: HttpClient,
                	private state: TransferState) {
    	}
    	ngOnInit() {
    
        // 采用一个标记来区分服务端是否已经拿到了数据，如果没拿到数据就在客户端请求，如果已经拿到数据就不发请求
        const kfcList：any[] = this.state.get(KFCLIST_KEY, null as any);

        if (!this.kfcList) {
            this.poiSearch(this.keyword, '北京市').subscribe((data: any) => {
                console.log(data);
                this.state.set(KFCLIST_KEY, data as any); // 存储数据
            });
        }
    }
    
    ngOnDestroy() {
        if (typeof window === 'object') {
            this.state.set(KFCLIST_KEY, null as any); // 删除数据
        }
    }
    
    poiSearch(text: string, city?: string): Observable<any> {
        return this.http.get(encodeURI(`http://restapi.amap.com/v3/place/text?keywords=${text}&city=${city}&offset=20&key=55f909211b9950837fba2c71d0488db9&extensions=all`));
    }
}

使用 const KFCLIST_KEY = makeStateKey('kfcList') 创建储存传输数据的 StateKey
在 HomeComponent 的构造函数中注入 TransferState
在 ngOnInit 中根据 this.state.get(KFCLIST_KEY, null as any) 判断数据是否存在（不管是服务端还是客户端），存在就不再请求，不存在则请求数据并通过 this.state.set(KFCLIST_KEY, data as any) 存储传输数据
在 ngOnDestroy 中根据当前是否客户端来决定是否将存储的数据进行删除

查看更多，请点击 [/angular/universal/blob/master/docs/gotchas.md](https://github.com/angular/universal/blob/master/docs/gotchas.md)

# License
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
