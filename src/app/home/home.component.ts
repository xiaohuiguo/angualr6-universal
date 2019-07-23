import { Component, OnInit } from '@angular/core';
import { TransferState, makeStateKey, Title, Meta } from '@angular/platform-browser';
declare var $: any;
@Component({
    selector: 'app-home',
    template: `
    <h3>{{ message }}</h3>
    <img [src]="image">
  `
})
export class HomeComponent implements OnInit {
    public message = `Angular Universal`;
    // tslint:disable-next-line:max-line-length
    public image = 'https://camo.githubusercontent.com/81f72f2fdf98aa1d30b5b215bc8ca9420b249e81/68747470733a2f2f616e67756c61722e696f2f67656e6572617465642f696d616765732f6d61726b6574696e672f636f6e636570742d69636f6e732f756e6976657273616c2e706e67';

    lala;
    userID;

    constructor(private state: TransferState, private titleService: Title, private metaService: Meta) {}
    ngOnInit() {
        this.titleService.setTitle('My server side rendered title!');
        this.metaService.addTag({ name: 'description', content: 'My server side rendered description' });
        // this.lala = window.location.href;
        // if (isPlatformBrowser(this.platformId)) {
        // $.cookie('userID', 'lalla');

        // this.userID = $.cookie('userID');

        // }
    }
}
