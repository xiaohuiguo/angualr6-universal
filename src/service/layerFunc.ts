declare var layer: any;

export class LayerFunc {
    /**
     * 关闭某所有弹窗
     */
    static layerCloseAll(): void {
        layer.closeAll();
    }

    /**
     * 关闭某一个窗口弹窗
     */
    static layerClose(index: any): void {
        layer.close(index);
    }
    /**
     * 加载弹窗层
     */
    static loadLayer(msg: string) {
        return layer.msg(msg, { time: 24 * 60 * 60 * 1000, icon: 16, shade: [0.1, '#fff'] });
    }
    /**
     * 警告弹窗
     */
    static warnLayer(msg: string, time?: number, closeBtn?: number, area?: any): void {
        return layer.msg(msg, { time: time ? time : 2000, icon: 7, closeBtn: closeBtn ? closeBtn : 0, area: area ? area : 'auto' });
    }
    /**
     * 成功弹窗
     */
    static successLayer(msg: string, time?: number, closeBtn?: number): void {
        return layer.msg(msg, { time: time ? time : 2000, icon: 1, closeBtn: closeBtn ? closeBtn : 0 });
    }
    /**
     * 错误提示弹窗
     */
    static errorLayer(msg: string, time?: number, closeBtn?: number) {
        layer.msg(msg, { time: time ? time : 2000, icon: 2, closeBtn: closeBtn ? closeBtn : 0 });
    }
    /**
     * 回调错误提示弹窗
     */
    static callbackErrorLayer(obj: any, time?: number, closeBtn?: number) {
        layer.msg(obj.errorMsg, { time: time ? time : 4000, icon: 2, closeBtn: closeBtn ? closeBtn : 0 });
    }
    /**
     * 提示框
     */
    static tipLayerRight(msg: string, id: string) {
        return layer.tips(msg, id);
    }
    /**
	 * layer open
	 * @param {object}  option      [the config of layer open]
	 * @param {string}  iconClass   [the icon class]
	 * @param {string}  titleName   [the title name]
	 * @param {boolean} isEditTitle [is allow edit title or not, 'true': allow, 'false': not allow]
	 */
    static layerOpen(option: object, iconClass: string, titleName: string, isEditTitle?: boolean) {
        let _default = {
            type: 1,
            title: `<i class="icon ${iconClass} icon-css icon-css-right-inside"></i>${titleName}`,
            area: ['60%', '66%'],
            shadeClose: false
        };
        for (const i in option) {
            if (i === 'title' && !isEditTitle) {
                continue;
            }
            if (!!_default[i]) {
                if (_default[i] !== '') {
                    _default[i] = option[i];
                } else {
                    try {
                        throw new Error(`layer open option '${i}' have empty value`);
                    } catch (error) {
                        console.error(error);
                        return;
                    }
                }
            } else {
                _default[i] = option[i];
            }
        }
        return layer.open(_default);
    }

/**
 * 询问框
 * @param msg 
 * @param iconClass 
 * @param func 
 */
    static confirm(msg:string,iconClass:object,yesCallback,cancelCallback){
        layer.confirm(msg, iconClass, function(){
            yesCallback()
         
          },function(){
            cancelCallback()
          });
    }
}
