import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TransferHttpCacheModule} from '@nguniversal/common';
// import { NgUniversalModule } from '@trilon/ng-universal';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {DcComponent} from './data-center/data-center.component';
import {GuangzhouDatacenterComponent} from './data-center/huanan/guangzhou-datacenter.component';

import { CommonService } from '../service/common.service';
import { SsrService } from '../service/Ssr.service';
import { DataService } from './data-center/services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DcComponent,
    GuangzhouDatacenterComponent
  ],
  imports: [
    //Angular 会把 appId 值（它可以是任何字符串）添加到服务端渲染页面的样式名中，以便它们在客户端应用启动时可以被找到并移除。
    //此时，我们可以通过依赖注入（@Inject(PLATFORM_ID) 及 @Inject(APP_ID)）取得关于当前平台和 appId 的运行时信息，以此来判断运行的是什么环境
    //isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';通过判断platformId如果存在则是在浏览器中运行，如果是false则是服务器环境
    BrowserModule.withServerTransition({appId: 'ng-universal-demo'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'dataCenter', component: DcComponent},
      // { path: 'dataCenter/:region/:address', component: DcComponent},
      { path: 'dataCenter/huanan/guangzhou', component: GuangzhouDatacenterComponent}
    ]),
    TransferHttpCacheModule, // 用于实现服务器到客户端的请求传输缓存，防止客户端重复请求服务端已完成的请求
    // NgUniversalModule
  ],
  providers: [CommonService, SsrService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
