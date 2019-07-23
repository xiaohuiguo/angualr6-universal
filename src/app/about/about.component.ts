import { Component, OnInit , Inject, PLATFORM_ID} from '@angular/core';
import { TransferState, makeStateKey, Title, Meta } from '@angular/platform-browser';
import { CommonService } from '../../service/common.service';
import { LayerFunc } from '../../service/LayerFunc';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
// import { PlatformService } from '@trilon/ng-universal';

declare var $: any;
@Component({
    selector: 'app-home',
    template: `
    <h3>About</h3>
    <p>about content</p>
    <p>lala:{{ lala }}</p>
    <p>haha:{{ haha }}</p>
    <p>protocol:{{ protocol }}</p>
    <p id="tipId">提示</p>
    <button (click)="layerFunc('msg')">弹窗msg</button>
    <button (click)="layerFunc('tip')">弹窗tip</button>
    <button (click)="layerFunc('layerCloseAll')">关闭弹出</button>
  `
})
export class AboutComponent implements OnInit {
    lala;
    userID;
    haha;
    protocol;

    // constructor(private platformService: PlatformService, private state: TransferState, private titleService: Title, private metaService: Meta) {}
    constructor(private state: TransferState, private titleService: Title, private metaService: Meta, private commonService: CommonService, @Inject(PLATFORM_ID) private platformId: Object) {}
    ngOnInit() {
        this.titleService.setTitle('about title!');
        this.metaService.addTag({ name: 'description', content: 'about description' });
        this.lala = isPlatformBrowser(this.platformId) ? window.location.href : '';

        this.haha=this.commonService.host;
        this.protocol=this.commonService.protocol;
        // if (this.platformService.isBrowser) {
        //     $.cookie('userID', 'lalla');

        //     this.userID = $.cookie('userID');
        // }
    }
    layerFunc(type){
        switch(type){
            case 'msg':
            LayerFunc.warnLayer('msg弹出',2000,1);
            break;
            case 'tip':
            LayerFunc.tipLayerRight('tip弹出','#tipId');
            break;
            case 'layerCloseAll':
            LayerFunc.layerCloseAll();
            break;
        }
    }
}
