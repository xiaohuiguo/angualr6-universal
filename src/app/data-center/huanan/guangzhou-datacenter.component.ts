/**
 * Description: 介绍数据中心
 * Author: chenyy
 */

import { Component, OnInit } from '@angular/core';
import { SsrService } from '../../../service/Ssr.service';
import { DataService } from '../services/data.service';

declare var $: any;
declare var Swiper: any;

@Component({
    selector: 'app-dc',
    templateUrl: '../data-center.html',
    styleUrls: ['../../css/doc-public.css', '../data-center.css']
})
export class GuangzhouDatacenterComponent implements OnInit {
    isShow: boolean = false; // 是否开启视频查看
    videoSrc: string; // 视频存放路径

    ifPlatformBrowser;

    pageData: any = {
        brief: {
            title: '睿江云（广州）数据中心简介',
            introduction: '位于广州市区腹地，天河软件园旁。国家商务部下属中国国际电子商务中心容灾中心。提供华南多线BGP优质资源，适用游戏、移动互联网、跨境电商等行业客户，中企出海好选择。',
            imgUrl: [
                'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/brief1.jpg',
                'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/brief2.jpg',
                'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/brief3.jpg?v=20190325',
                'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/brief4.jpg'
            ],
            features: [
                { name: '机房位置', content: '天河区科韵路16号信息港C2座', icon: 0 },
                { name: '性质（自建/合营）', content: '自建', icon: 1 },
                // { name: '机房所在楼层', content: '2~3层', icon: 2 },
                { name: '机房面积', content: '1600平方米', icon: 3 },
                { name: '地板承重', content: '1000kg', icon: 4 },
                { name: '机柜规模', content: '288个', icon: 5 },
                { name: '覆盖线路', content: '电信、联通、移动', icon: 6 },
                { name: '电磁防护', content: '防静电地板+等电位网', icon: 8 },
                { name: '防水保护', content: '是', icon: 9 },
                { name: '抗震防雷等级', content: '8级防震', icon: 7 },
                { name: '机房启用年限', content: '2012年', icon: 10 }
            ]
        },
        module1: {
            title: '电力系统',
            imgUrl: [
                {
                    imgWidth: 'short',
                    url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/power1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/power2.jpg']
                },
                {
                    imgWidth: 'short',
                    url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/power3.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/power4.jpg']
                }
            ],
            features: {
                leftContent: [
                    { name: '双路市电', content: '是' },
                    { name: 'UPS配置', content: 'N+X' },
                    { name: 'UPS容量', content: '360KVA N+1套/240KVA N+1套' },
                    { name: 'UPS品牌、型号', content: '台达GES-HIFT120C' },
                    { name: 'UPS满负荷可支撑时间', content: '30分钟' },
                    { name: 'UPS蓄电池组放电测试频次', content: '季度' },
                    { name: 'UPS、发电机维保频次', content: '月度' },
                    { name: '发电机带载测试频次', content: '年度' }
                ],
                rightContent: [
                    { name: '柴机品牌', content: '赛瓦特' },
                    { name: '柴机功率', content: '1275KVA*1' },
                    { name: '备用发电机', content: '是' },
                    { name: '备用燃料可支撑时间', content: '无备用燃料，自助加油' },
                    { name: '发电机油箱可支撑时间', content: '满载12小时' },
                    { name: '市电中断后发电机启动时间', content: '1分钟' },
                    { name: '机房高低压供配电系统检修频次', content: '月度' }
                ]
            }
        },
        module2: {
            title: '空调系统',
            imgUrl: [
                'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/air1.jpg',
                'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/air2.jpg',
                'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/air3.jpg',
                'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/air4.jpg'
            ],
            features: [
                { name: '温度控制', content: '24~26℃' },
                { name: '湿度控制', content: '40%-70%' },
                { name: '送/回风方式', content: '下送风' },
                { name: '精密空调制冷模式', content: '风冷' },
                { name: '精密空调配置', content: 'N+2' },
                { name: '精密空调单台制冷功率', content: '101.2KW' },
                { name: '空调供电模式', content: '单路' },
                { name: '空调维保频次', content: '月度' }
                // { name: '水冷空调冷冻水管是否有冗余', content: '否' },
                // { name: '水冷空调冷水机组是否有冗余', content: '否' }
            ]
        },
        module3: {
            title: '消防系统',
            imgUrl: [
                'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/fire1.jpg',
                'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/fire2.jpg',
                'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/fire3.jpg',
                'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/fire4.jpg'
            ],
            features: [
                { name: '灭火系统', content: '自动' },
                { name: '气体灭火', content: '是（七氟丙烷）' },
                { name: '烟感报警', content: '是' },
                { name: '温感报警', content: '是' },
                { name: '灭火系统自动触发时间', content: '30秒' },
                { name: '值班监控', content: '7×24小时' },
                { name: '消防演练频次', content: '年度' },
                { name: '手持气体灭火器配备', content: '有' },
                { name: '防毒面具配备', content: '有' },
                { name: '应急通道', content: '有' },
                { name: '消防车通道', content: '有' }
            ]
        },
        module4: {
            title: '机柜',
            imgUrl: [
                {
                    imgWidth: 'short',
                    url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/cabinet1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/cabinet2.jpg']
                },
                {
                    imgWidth: 'short',
                    url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/cabinet3.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/cabinet4.jpg']
                }
            ],
            features: {
                leftContent: [{ name: '机柜高度', content: '42U' }, { name: '机柜尺寸', content: '1100mm*600mm*2200mm' }, { name: '机柜品牌', content: '鍎腾' }, { name: '机柜预装托板', content: '13' }, { name: '强弱电布线', content: '分开隔离' }, { name: '光纤、网线布线', content: '分开隔离' }],
                rightContent: [
                    // { name: '机柜布局是否冷热通道', content: '否'},
                    { name: '机柜插排插孔数', content: '20' },
                    { name: '机柜额定承重', content: '1000kg' },
                    { name: '机柜插排额定电流', content: '10A可扩展' },
                    { name: '机柜额定支撑电源功率', content: '2.5KW' },
                    { name: '机柜隔板额定承重', content: '100kg' }
                    // { name: '独立隔笼', content: '无' }
                ]
            }
        },
        module5: {
            leftContent: {
                title: '安全系统',
                imgUrl: [
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/safe1.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/safe2.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/safe3.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/safe4.jpg'
                ],
                features: [{ name: 'IC卡门禁系统', content: '电磁卡' }, { name: '数字视频监控', content: ' 7×24小时' }, { name: '保安值守巡检', content: '7×24小时' }, { name: '出入登记', content: '7×24小时' }, { name: '日志记录存储', content: '6个月' }, { name: '安全巡检频次', content: '月度' }]
            },
            rightContent: {
                title: '网络',
                imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/net1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/net2.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/net3.jpg'],
                features: [{ name: '核心路由器型号', content: '华为NE40E-X3' }, { name: '核心交换机型号', content: 'H3C S6800-54QF' }, { name: '核心路由器是否备份', content: '是' }, { name: '核心交换机是否备份', content: '是' }, { name: '客户链路是否备份', content: '是' }, { name: '', content: '' }]
            }
        },
        module6: {
            title: '支撑团队',
            imgUrl: [
                'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/team1.jpg',
                'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/team2.jpg',
                'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/team3.jpg',
                'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/team4.jpg'
            ],
            features: [
                { name: '设备重启服务', content: '7×24小时' },
                { name: '设备故障检测', content: '7×24小时' },
                { name: '系统维护检测', content: '7×24小时' },
                { name: '业务开通服务', content: '7×24小时' },
                { name: '现场支撑服务', content: '7×24小时' },
                { name: '网络监控/优化服务', content: '7×24小时' },
                { name: '域名解析（DNS）服务', content: '7×24小时' },
                { name: '流量分析服务', content: '7×24小时' },
                { name: '服务响应时间', content: '10分钟' },
                { name: '备案服务', content: '5×8小时' },
                { name: '办公位、物品存储空间是否有提供', content: '是' }
            ]
        }
    };
    navObj: any = {
        region: 'huanan',
        address: 'zhongshan'
    };
    navTitle = {
        name: '华南地区数据中心',
        content: '分布中山、广州、佛山、深圳四市，<br/>千万级网络安全设备投入，<br/>拥有国内3大运营商的互联网骨干出口接入、中小型运营商的内网互访接入。',
        imgUrl: 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/huanan.png',
        bannerBg: 'banner-outer-huanan'
    };
    navList = [
        {
            name: '中山',
            engLishName: 'zhongshan',
            // url: '/dataCenter?region=huanan&address=zhongshan'
            url: '/dataCenter/huanan/zhongshan'
        },
        {
            name: '广州',
            engLishName: 'guangzhou',
            // url: '/dataCenter?region=huanan&address=guangzhou'
            url: '/dataCenter/huanan/guangzhou'
        },
        {
            name: '佛山',
            engLishName: 'foshan',
            url: '/dataCenter?region=huanan&address=foshan'
        },
        {
            name: '深圳',
            engLishName: 'shenzhen',
            url: '/dataCenter?region=huanan&address=shenzhen'
        }
    ];

    constructor(private dataService: DataService, private ssrServe: SsrService) {}
    ngOnInit() {
        // this.resetData();
        // this.initSwiper();
    }

    /**
     * Description: 切换数据中心时重置数据
     * return void
     */
    resetData(): void {
        this.navTitle = {
            name: '华南地区数据中心',
            content: '分布中山、广州、佛山、深圳四市，<br/>千万级网络安全设备投入，<br/>拥有国内3大运营商的互联网骨干出口接入、中小型运营商的内网互访接入。',
            imgUrl: 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/huanan.png',
            bannerBg: 'banner-outer-huanan'
        };
        this.navList = [
            {
                name: '中山',
                engLishName: 'zhongshan',
                // url: '/dataCenter?region=huanan&address=zhongshan'
                url: '/dataCenter/huanan/zhongshan'
            },
            {
                name: '广州',
                engLishName: 'guangzhou',
                // url: '/dataCenter?region=huanan&address=guangzhou'
                url: '/dataCenter/huanan/guangzhou'
            },
            {
                name: '佛山',
                engLishName: 'foshan',
                url: '/dataCenter?region=huanan&address=foshan'
            },
            {
                name: '深圳',
                engLishName: 'shenzhen',
                url: '/dataCenter?region=huanan&address=shenzhen'
            }
        ];
    }

    /**
     * Description: 刷新数据
     * return void
     */
    productNav(): void {
        let _this = this;
        if (this.ssrServe.ifPlatformBrowser) {
            setTimeout(function() {
                _this.resetData();
                // for (let i = 0; i < $('.swiper-container').length; i++) {
                //     $('.swiper-container')[i].swiper.slideTo(0, 0, false); // 切换到第一个slide;
                // }
            }, 30);
        }
    }

    /**
     * Description: 开启、关闭视频
     * @param {Boolean} isShow true,开启
     */
    // isShowVideo(isShow) {
    //     if (this.pageData && this.pageData['brief'] && this.videoSrc !== this.pageData['brief']['videoSrc']) {
    //         this.videoSrc = this.pageData['brief']['videoSrc'];
    //     }
    //     this.isShow = isShow;
    // }

    /**
     * Description: 初始化swiper
     * return void
     */
    // initSwiper(): void {
    //     if (this.ssrServe.ifPlatformBrowser) {
    //         let mySwiper = new Swiper('.swiper-container', {
    //             loop: true,
    //             observer: true,
    //             observeParents: true,
    //             allowTouchMove: false,

    //             isPreLoop: true,
    //             isNextLoop: false,

    //             pagination: {
    //                 el: '.swiper-pagination',
    //                 clickable: true
    //             },

    //             navigation: {
    //                 nextEl: '.swiper-button-next',
    //                 prevEl: '.swiper-button-prev'
    //             },

    //             lazy: {
    //                 loadPrevNext: true // 暂时简介部分应用
    //             }
    //         });

    //         $('.swiper-button-next').click(function() {
    //             let _this = this;
    //             setTimeout(function() {
    //                 let swiper = $(_this).parent('.swiper-container')[0].swiper;

    //                 if (swiper.isNextLoop) {
    //                     swiper.slideToLoop(0, 300, false);
    //                     swiper.isNextLoop = false;
    //                 } else {
    //                     if (swiper.slides.length === swiper.activeIndex + 1) {
    //                         swiper.isNextLoop = true;
    //                     } else {
    //                         swiper.isNextLoop = false;
    //                     }
    //                 }
    //             }, 300);
    //         });
    //         $('.swiper-button-prev').click(function() {
    //             let _this = this;
    //             setTimeout(function() {
    //                 let swiper = $(_this).parent('.swiper-container')[0].swiper;

    //                 if (swiper.isPreLoop || swiper.isPreLoop === undefined) {
    //                     swiper.slideToLoop(swiper.slides.length - 1, 300, false);
    //                     swiper.isPreLoop = false;
    //                 } else {
    //                     if (swiper.activeIndex === 0) {
    //                         swiper.isPreLoop = true;
    //                     } else {
    //                         swiper.isPreLoop = false;
    //                     }
    //                 }
    //             }, 300);
    //         });
    //     }
    // }
}
