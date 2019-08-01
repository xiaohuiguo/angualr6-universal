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
    BrowserModule.withServerTransition({appId: 'ng-universal-demo'}), // 打包时的id，只要保证和其它配置不重复即可。
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
