import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';



const apiUrl = environment.host;

declare const $: any;

@Injectable()
export class CommonService {


    public host = environment.host;
    public protocol = environment.protocol;
    
    constructor() {}
    /**
     * 获取游客token
     * userID：用户名
     * password：密码
     * */
    /**
     * 从cookie中获取token信息
     */
    getTokenFromCookie() {
        return $.cookie('token');
    }
    /**
     * 从cookie中获取userID信息
     */
    getUserIDFromCookie() {
        return $.cookie('userID');
    }
}
