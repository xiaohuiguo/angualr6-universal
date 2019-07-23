/**
 * Description: 介绍数据中心
 * Author: chenyy
 */

import { Component, OnInit } from '@angular/core';
import { SsrService } from '../../service/Ssr.service';
import { DataService } from './services/data.service';

declare var $: any;
declare var Swiper: any;

@Component({
    selector: 'app-dc',
    templateUrl: './data-center.html',
    styleUrls: ['../css/doc-public.css', './data-center.css']
})
export class DcComponent implements OnInit {
    isShow: boolean = false; // 是否开启视频查看
    videoSrc: string; // 视频存放路径

    ifPlatformBrowser;

    dataCenter = {
        zhongshan: {
            brief: {
                title: '睿江云（中山）基地简介',
                introduction:
                    '睿江云自建华南高规格五星级云数据中心，睿江云广东C、D节点数据中心。坐落于珠江西岸，临近多条高速公路及深中跨海' +
                    '大桥，30分钟到达广州、深圳。提供华南多线BGP及大带宽优质资源，满足企业出海、容灾、混合云、私有云等部署需求。广东省重点' +
                    '项目，在省市区三级政府及运营商共同支持下建设。核心设备采用科勒、伊顿、戴尔、艾默生等高端品牌。超过10年自营机房及管理经' +
                    '验，配备超大型网管中心，管理更完善、服务更优质。自营数据中心每层预留VIP客户区域，为客户提供定制化、高质低价服务。',
                imgUrl: [
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/brief1.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/brief2.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/brief3.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/brief4.jpg'
                ],
                imgHeight: '553px',
                features: [
                    { name: '机房位置', content: '中山市火炬区东镇东二路24号', icon: 0 },
                    { name: '性质（自建/合营）', content: '自建', icon: 1 },
                    // { name: '机房所在楼层', content: '2~5层', icon: 2 },
                    { name: '机房面积', content: '41000平方米', icon: 3 },
                    { name: '地板承重', content: '1.6T/平方米', icon: 4 },
                    { name: '机柜规模', content: '4000个', icon: 5 },
                    { name: '覆盖线路', content: '电信、联通、移动、多线bgp、hk', icon: 6 },
                    { name: '出口规模', content: '500G', icon: 1 },
                    { name: '电磁防护', content: '防静电地板+等电位网', icon: 8 },
                    { name: '防水保护', content: '是', icon: 9 },
                    { name: '抗震防雷等级', content: '抗震8级，防雷3级', icon: 7 },
                    { name: '机房启用年限', content: '2016年', icon: 10 }
                ],
                videoSrc: 'https://static.eflycloud.com/V5/pc/video/zhongshan.mp4'
            },
            module1: {
                title: '电力系统',
                imgUrl: [
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/power1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/power2.jpg']
                    },
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/power3.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/power4.jpg']
                    }
                ],
                features: {
                    leftContent: [
                        { name: '双路市电', content: '是' },
                        { name: 'UPS配置', content: '2N' },
                        { name: 'UPS容量', content: '1200KVA N+1套,600KVA N+1套' },
                        { name: 'UPS品牌', content: '伊顿' },
                        { name: 'UPS满负荷可支撑时间', content: '30分钟' },
                        { name: 'UPS蓄电池组放电测试频次', content: '季度' },
                        { name: 'UPS、发电机维保频次', content: '月度' },
                        { name: '发电机带载测试频次', content: '半年' }
                    ],
                    rightContent: [
                        { name: '柴机品牌', content: '科勒1800REOZM' },
                        { name: '柴机功率', content: '1440KW*2' },
                        { name: '备用发电机', content: '是' },
                        { name: '备用燃料可支撑时间', content: '24小时' },
                        { name: '发电机油箱可支撑时间', content: '满载8小时' },
                        { name: '市电中断后发电机启动时间', content: '1分钟' },
                        { name: '机房高低压供配电系统检修频次', content: '月度' }
                    ]
                }
            },
            module2: {
                title: '空调系统',
                imgUrl: [
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/air1.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/air2.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/air3.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/air4.jpg'
                ],
                features: [
                    { name: '空调品牌', content: '佳力图' },
                    { name: '温度控制', content: '24~26℃' },
                    { name: '湿度控制', content: '40%-70%' },
                    { name: '送/回风方式', content: '下送风' },
                    { name: '精密空调制冷模式', content: '水冷' },
                    { name: '精密空调配置', content: 'N+2' },
                    { name: '精密空调单台制冷功率', content: '120KW' },
                    { name: '空调供电模式', content: '双路' },
                    { name: '空调维保频次', content: '月度' },
                    // { name: '水冷空调冷冻水管是否有冗余', content: '否' },
                    { name: '水冷空调冷水机组是否有冗余', content: '是' }
                ]
            },
            module3: {
                title: '消防系统',
                imgUrl: [
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/fire1.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/fire2.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/fire3.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/fire4.jpg'
                ],
                features: [
                    { name: '灭火系统', content: '自动' },
                    { name: '气体灭火', content: '是（七氟丙烷）' },
                    { name: '烟感报警', content: '是' },
                    { name: '温感报警', content: '是' },
                    { name: '灭火系统自动触发时间', content: '30秒' },
                    { name: '值班监控', content: '7×24小时' },
                    { name: '消防演练频次', content: '季度' },
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
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/cabinet1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/cabinet2.jpg']
                    },
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/cabinet3.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/cabinet4.jpg']
                    }
                ],
                features: {
                    leftContent: [{ name: '机柜高度', content: '47U' }, { name: '机柜尺寸', content: '2200mm*600mm*1200mm' }, { name: '机柜品牌', content: '威图' }, { name: '机柜预装托板', content: '15' }, { name: '强弱电布线', content: '分开隔离' }, { name: '光纤、网线布线', content: '分开隔离' }],
                    rightContent: [
                        { name: '机柜布局是否冷热通道', content: '是' },
                        { name: '机柜插排插孔数', content: '30' },
                        { name: '机柜额定承重', content: '1000kg' },
                        { name: '机柜插排额定电流', content: '10A可扩展' },
                        { name: '机柜额定支撑电源功率', content: '2.2KW/4.4KW' },
                        { name: '机柜隔板额定承重', content: '100kg' }
                        // { name: '独立隔笼', content: '无' }
                    ]
                }
            },
            module5: {
                leftContent: {
                    title: '安全系统',
                    imgUrl: [
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/safe1.jpg',
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/safe2.jpg',
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/safe3.jpg',
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/safe4.jpg'
                    ],
                    features: [{ name: 'IC卡门禁系统', content: '电磁卡、指纹' }, { name: '数字视频监控', content: ' 7×24小时' }, { name: '保安值守巡检', content: '7×24小时' }, { name: '出入登记', content: '7×24小时' }, { name: '日志记录存储', content: '6个月' }, { name: '安全巡检频次', content: '月度' }]
                },
                rightContent: {
                    title: '网络',
                    imgUrl: [
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/net1.jpg',
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/net2.jpg',
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/net3.jpg',
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/net4.jpg'
                    ],
                    features: [
                        // { name: '核心路由器型号', content: '否' },
                        { name: '核心交换机型号', content: '华为S7706' },
                        // { name: '核心路由器是否备份', content: '否' },
                        { name: '核心交换机是否备份', content: '是' },
                        { name: '客户链路是否备份', content: '是' },
                        { name: '', content: '' },
                        { name: '', content: '' },
                        { name: '', content: '' }
                    ]
                }
            },
            module6: {
                title: '支撑团队',
                imgUrl: [
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/team1.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/team2.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/team3.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/zhongshan/team4.jpg'
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
        },
        guangzhou: {
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
                    imgUrl: [
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/net1.jpg',
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/net2.jpg',
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/guangzhou/net3.jpg'
                    ],
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
        },
        foshan: {
            brief: {
                title: '睿江云（佛山）数据中心简介',
                introduction: '睿江云自建佛山本地大型云计算数据中心。物联网产业基地，提供在线娃娃机托管场地。适合大型互联网企业及传统企业部署私有云及混合云。',
                imgUrl: [
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/brief1.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/brief2.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/brief3.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/brief4.jpg'
                ],
                features: [
                    { name: '机房位置', content: '南海区九江镇大正路63号', icon: 0 },
                    { name: '性质（自建/合营）', content: '自建', icon: 1 },
                    // { name: '机房所在楼层', content: '7层', icon: 2 },
                    { name: '机房面积', content: '20000平方米', icon: 3 },
                    { name: '地板承重', content: '800kg/平方米', icon: 4 },
                    { name: '机柜规模', content: '2000个', icon: 5 },
                    { name: '出口规模', content: '500GB', icon: 6 },
                    { name: '电磁防护', content: '防静电地板+等电位网', icon: 8 },
                    { name: '防水保护', content: '是', icon: 9 },
                    { name: '抗震防雷等级', content: '抗震8级，防雷3级', icon: 7 },
                    { name: '机房启用年限', content: '2018年', icon: 10 }
                ]
            },
            module1: {
                title: '电力系统',
                imgUrl: [
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/power1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/power2.jpg']
                    },
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/power3.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/power4.jpg']
                    }
                ],
                features: {
                    leftContent: [
                        // { name: '双路市电', content: '否' },
                        { name: 'UPS配置', content: '2N' },
                        { name: 'UPS容量', content: '500KVA N+1套' },
                        { name: 'UPS品牌、型号', content: '华为UPS5000-E' },
                        { name: 'UPS满负荷可支撑时间', content: '30分钟' },
                        { name: 'UPS蓄电池组放电测试频次', content: '季度' },
                        { name: 'UPS、发电机维保频次', content: '月度' },
                        { name: '发电机带载测试频次', content: '年度' }
                    ],
                    rightContent: [
                        { name: '柴机品牌', content: '康明斯' },
                        { name: '柴机功率', content: '800KW*2' },
                        { name: '备用发电机', content: '是' },
                        { name: '备用燃料可支撑时间', content: '无备用燃料，自助加油' },
                        { name: '发电机油箱可支撑时间', content: '满载8小时' },
                        { name: '市电中断后发电机启动时间', content: '1分钟' },
                        { name: '机房高低压供配电系统检修频次', content: '月度' }
                    ]
                }
            },
            module2: {
                title: '空调系统',
                imgUrl: [
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/air1.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/air2.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/air3.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/air4.jpg'
                ],
                features: [
                    { name: '空调品牌', content: '佳力图' },
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
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/fire1.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/fire2.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/fire3.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/fire4.jpg'
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
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/cabinet1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/cabinet2.jpg']
                    },
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/cabinet3.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/cabinet1.jpg']
                    }
                ],
                features: {
                    leftContent: [{ name: '机柜高度', content: '47U' }, { name: '机柜尺寸', content: '1200mm*600mm*2200mm' }, { name: '机柜品牌', content: '威图' }, { name: '机柜预装托板', content: '15' }, { name: '强弱电布线', content: '分开隔离' }, { name: '光纤、网线布线', content: '分开隔离' }],
                    rightContent: [
                        { name: '机柜布局是否冷热通道', content: '是' },
                        { name: '机柜插排插孔数', content: '30' },
                        { name: '机柜额定承重', content: '1000kg' },
                        { name: '机柜插排额定电流', content: '10A可扩展' },
                        { name: '机柜额定支撑电源功率', content: '2.2KW' },
                        { name: '机柜隔板额定承重', content: '100kg' }
                        // { name: '独立隔笼', content: '无' }
                    ]
                }
            },
            module5: {
                leftContent: {
                    title: '安全系统',
                    imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/safe1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/safe2.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/safe3.jpg'],
                    features: [
                        // { name: 'IC卡门禁系统', content: '否' },
                        // { name: '数字视频监控', content: '否' },
                        { name: '保安值守巡检', content: '7×24小时' },
                        { name: '出入登记', content: '7×24小时' },
                        { name: '日志记录存储', content: '6个月' },
                        { name: '安全巡检频次', content: '月度' }
                    ]
                },
                rightContent: {
                    title: '网络',
                    imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/net1.jpg'],
                    features: [
                        // { name: '核心路由器型号', content: '否' },
                        { name: '核心交换机型号', content: 'H3C S6800-54QF' },
                        // { name: '核心路由器是否备份', content: '否' },
                        { name: '核心交换机是否备份', content: '是' },
                        { name: '客户链路是否备份', content: '是' },
                        { name: '', content: '' }
                    ]
                }
            },
            module6: {
                title: '支撑团队',
                imgUrl: [
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/team1.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/team2.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/team3.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/foshan/team4.jpg'
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
        },
        shenzhen: {
            brief: {
                title: '睿江云（深圳）数据中心简介',
                introduction: '睿江云自建四星级数据中心。位于珠三角经济特区深圳，临近坂田华为基地、富士康园区及粤港澳大湾区。提供华南多线BGP优质资源，众多企业级用户及合作伙伴已进驻该数据中心。',
                imgUrl: [
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/brief1.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/brief2.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/brief3.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/brief4.jpg'
                ],
                features: [
                    { name: '机房位置', content: '龙岗区坂田街道吉华路新天下华赛工业区', icon: 0 },
                    { name: '性质（自建/合营）', content: '自建', icon: 1 },
                    // { name: '机房所在楼层', content: '4层', icon: 2 },
                    { name: '机房面积', content: '2500平方米', icon: 3 },
                    { name: '地板承重', content: '1.0T', icon: 4 },
                    { name: '机柜规模', content: '600个', icon: 5 },
                    // { name: '出口规模', content: '10GB', icon: 6 },
                    { name: '电磁防护', content: '防静电地板+等电位网', icon: 8 },
                    { name: '防水保护', content: '是', icon: 9 },
                    { name: '抗震防雷等级', content: '抗震8级，防雷3级', icon: 7 },
                    { name: '机房启用年限', content: '2012年', icon: 10 }
                ]
            },
            module1: {
                title: '电力系统',
                imgUrl: [
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/power1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/power2.jpg']
                    },
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/power3.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/power4.jpg']
                    }
                ],
                features: {
                    leftContent: [
                        // { name: '双路市电', content: '否' },
                        { name: 'UPS配置', content: 'N+X' },
                        { name: 'UPS容量', content: '960KVA N+1套' },
                        { name: 'UPS品牌、型号', content: '华为5000-E' },
                        { name: 'UPS满负荷可支撑时间', content: '30分钟' },
                        { name: 'UPS蓄电池组放电测试频次', content: '季度' },
                        { name: 'UPS、发电机维保频次', content: '月度' },
                        { name: '发电机带载测试频次', content: '年度' }
                    ],
                    rightContent: [
                        { name: '柴机品牌', content: '康明斯' },
                        { name: '柴机功率', content: '800KW*2' },
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
                imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/air1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/air2.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/air3.jpg'],
                features: [
                    { name: '空调品牌', content: '佳力图' },
                    { name: '温度控制', content: '24~26℃' },
                    { name: '湿度控制', content: '40%-70%' },
                    { name: '送/回风方式', content: '下送风' },
                    { name: '精密空调制冷模式', content: '水冷' },
                    { name: '精密空调配置', content: 'N+2' },
                    { name: '精密空调单台制冷功率', content: '101.2KW' },
                    { name: '空调供电模式', content: '单路' },
                    { name: '空调维保频次', content: '月度' },
                    // { name: '水冷空调冷冻水管是否有冗余', content: '否' },
                    { name: '水冷空调冷水机组是否有冗余', content: '是' }
                ]
            },
            module3: {
                title: '消防系统',
                imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/fire1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/fire2.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/fire3.jpg'],
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
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/cabinet1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/cabinet2.jpg']
                    }
                ],
                features: {
                    leftContent: [{ name: '机柜高度', content: '42U' }, { name: '机柜尺寸', content: '1100mm*600mm*2200mm' }, { name: '机柜品牌', content: '普天' }, { name: '机柜预装托板', content: '13' }, { name: '强弱电布线', content: '分开隔离' }, { name: '光纤、网线布线', content: '分开隔离' }],
                    rightContent: [
                        // { name: '机柜布局是否冷热通道', content: '否'},
                        { name: '机柜插排插孔数', content: '20' },
                        { name: '机柜额定承重', content: '1000kg' },
                        { name: '机柜插排额定电流', content: '10A可扩展' },
                        { name: '机柜额定支撑电源功率', content: '2.2KW' },
                        { name: '机柜隔板额定承重', content: '100kg' }
                        // { name: '独立隔笼', content: '无' }
                    ]
                }
            },
            module5: {
                leftContent: {
                    title: '安全系统',
                    imgUrl: [
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/safe1.jpg',
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/safe2.jpg',
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/safe3.jpg',
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/safe4.jpg'
                    ],
                    features: [{ name: 'IC卡门禁系统', content: '电磁卡' }, { name: '数字视频监控', content: '7×24小时' }, { name: '保安值守巡检', content: '7×24小时' }, { name: '出入登记', content: '7×24小时' }, { name: '日志记录存储', content: '6个月' }, { name: '安全巡检频次', content: '月度' }]
                },
                rightContent: {
                    title: '网络',
                    imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/net1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/net2.jpg'],
                    features: [{ name: '核心路由器型号', content: 'H3C S7606-S' }, { name: '核心交换机型号', content: '华为 S7706' }, { name: '核心路由器是否备份', content: '是' }, { name: '核心交换机是否备份', content: '是' }, { name: '客户链路是否备份', content: '是' }, { name: '', content: '' }]
                }
            },
            module6: {
                title: '支撑团队',
                imgUrl: [
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/team1.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/team2.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/team3.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shenzhen/team4.jpg'
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
        },

        changzhou: {
            brief: {
                title: '中国电信常州数据中心简介',
                introduction: '江苏省内设施完善大规模四星级数据中心，睿江云江苏B节点所在数据中心。位于长三角城市群，常州市中心腹地，武进区政府旁。提供华东多线BGP优质资源，可满足游戏、移动互联网等企业需求。',
                imgUrl: [
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/brief1.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/brief2.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/brief3.jpg'
                ],
                features: [
                    { name: '机房位置', content: '常州市府东路108号', icon: 0 },
                    { name: '性质（自建/合营）', content: '自建', icon: 1 },
                    // { name: '机房所在楼层', content: '6层', icon: 2 },
                    { name: '机房面积', content: '780平方米', icon: 3 },
                    { name: '地板承重', content: '600kg/平方米', icon: 4 },
                    { name: '机柜规模', content: '171个', icon: 5 },
                    { name: '覆盖线路', content: '电信', icon: 6 },
                    { name: '电磁防护', content: '防静电地板+等电位网', icon: 8 },
                    { name: '防水保护', content: '是', icon: 9 },
                    { name: '抗震防雷等级', content: '7级抗震', icon: 7 },
                    { name: '机房启用年限', content: '2009年', icon: 10 }
                ]
            },
            module1: {
                title: '电力系统',
                imgUrl: [
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/power1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/power2.jpg']
                    },
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/power3.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/power4.jpg']
                    }
                ],
                features: {
                    leftContent: [
                        { name: '双路市电', content: '是' },
                        { name: 'UPS配置', content: 'N+1' },
                        { name: 'UPS容量', content: '800KVA' },
                        { name: 'UPS品牌、型号', content: 'GES-HIFT120C' },
                        { name: 'UPS满负荷可支撑时间', content: '1小时' },
                        { name: 'UPS蓄电池组放电测试频次', content: '半年' },
                        { name: 'UPS、发电机维保频次', content: '月度' },
                        { name: '发电机带载测试频次', content: '半年' }
                    ],
                    rightContent: [
                        { name: '柴机品牌', content: '移动油机' },
                        { name: '柴机功率', content: '500KW' },
                        { name: '备用发电机', content: '是' },
                        { name: '备用燃料可支撑时间', content: '8小时' },
                        { name: '发电机油箱可支撑时间', content: '满载8小时' },
                        { name: '市电中断后发电机启动时间', content: '3分钟内' },
                        { name: '机房高低压供配电系统检修频次', content: '月度' }
                    ]
                }
            },
            module2: {
                title: '空调系统',
                imgUrl: [
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/air1.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/air2.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/air3.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/air4.jpg'
                ],
                features: [
                    { name: '空调品牌', content: '艾默生' },
                    { name: '温度控制', content: '24~26℃' },
                    { name: '湿度控制', content: '40%-70%' },
                    { name: '送/回风方式', content: '下送风' },
                    { name: '精密空调制冷模式', content: '风冷' },
                    { name: '精密空调配置', content: 'N+1' },
                    { name: '精密空调单台制冷功率', content: '101.2KW' },
                    { name: '空调供电模式', content: '双路' },
                    { name: '空调维保频次', content: '季度' },
                    { name: '水冷空调冷冻水管是否有冗余', content: '是' },
                    { name: '水冷空调冷水机组是否有冗余', content: '是' }
                ]
            },
            module3: {
                title: '消防系统',
                imgUrl: [
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/fire1.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/fire2.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/fire3.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/fire4.jpg'
                ],
                features: [
                    { name: '灭火系统', content: '自动' },
                    { name: '气体灭火', content: '是（七氟丙烷）' },
                    { name: '烟感报警', content: '是' },
                    { name: '温感报警', content: '是' },
                    { name: '灭火系统自动触发时间', content: '30秒' },
                    { name: '值班监控', content: '7×24小时' },
                    { name: '消防演练频次', content: '季度' },
                    { name: '手持气体灭火器配备', content: '有' },
                    { name: '防毒面具配备', content: '有' },
                    { name: '应急通道', content: '有' },
                    { name: '消防车通道', content: '畅通' }
                ]
            },
            module4: {
                title: '机柜',
                imgUrl: [
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/cabinet1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/cabinet2.jpg']
                    },
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/cabinet3.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/cabinet4.jpg']
                    }
                ],
                features: {
                    leftContent: [{ name: '机柜高度', content: '42U' }, { name: '机柜尺寸', content: '1100mm*600mm*2200mm' }, { name: '机柜品牌', content: '定制' }, { name: '机柜预装托板', content: '13' }, { name: '强弱电布线', content: '分开隔离' }, { name: '光纤、网线布线', content: '分开隔离' }],
                    rightContent: [
                        { name: '机柜布局是否冷热通道', content: '是' },
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
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/safe1.jpg',
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/safe2.jpg',
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/safe3.jpg',
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/safe4.jpg'
                    ],
                    features: [{ name: 'IC卡门禁系统', content: '电磁卡' }, { name: '数字视频监控', content: ' 7×24小时' }, { name: '保安值守巡检', content: '7×24小时' }, { name: '出入登记', content: '7×24小时' }, { name: '日志记录存储', content: '6个月' }, { name: '安全巡检频次', content: '月度' }]
                },
                rightContent: {
                    title: '网络',
                    imgUrl: [
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/net1.jpg',
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/net2.jpg',
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/net3.jpg',
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/net4.jpg'
                    ],
                    features: [{ name: '核心路由器型号', content: '华为NE5000E' }, { name: '核心交换机型号', content: '华为S9306' }, { name: '核心路由器是否备份', content: '是' }, { name: '核心交换机是否备份', content: '是' }, { name: '客户链路是否备份', content: '是' }, { name: '', content: '' }]
                }
            },
            module6: {
                title: '支撑团队',
                imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/changzhou/team1.jpg'],
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
        },
        ningbo: {
            brief: {
                title: '睿江云（宁波）数据中心简介',
                introduction: '睿江云自建T4级数据中心，睿江云浙江B节点所在数据中心。位于宁波高新区，紧邻杭州湾跨海大桥，深度服务环杭州湾大湾区。提供华东多线BGP及大带宽资源，可满足游戏、视频、移动互联网、大型门户网站等企业需求。',
                imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/brief1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/brief2.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/brief3.jpg'],
                features: [
                    { name: '机房位置', content: '宁波市高新区凌云路98号', icon: 0 },
                    { name: '性质（自建/合营）', content: '自建', icon: 1 },
                    // { name: '机房所在楼层', content: '4层', icon: 2 },
                    { name: '机房面积', content: '1000平方米', icon: 3 },
                    { name: '地板承重', content: '1T/平方米', icon: 4 },
                    { name: '机柜规模', content: '234个', icon: 5 },
                    { name: '出口规模', content: '50GB', icon: 1 },
                    { name: '覆盖线路', content: '电信、联通、移动', icon: 6 },
                    { name: '电磁防护', content: '防静电地板+等电位网', icon: 8 },
                    { name: '防水保护', content: '是', icon: 9 },
                    { name: '抗震防雷等级', content: '抗震8级，防雷3级', icon: 7 },
                    { name: '机房启用年限', content: '2014年', icon: 10 }
                ]
            },
            module1: {
                title: '电力系统',
                imgUrl: [
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/power1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/power2.jpg']
                    },
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/power3.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/power4.jpg']
                    }
                ],
                features: {
                    leftContent: [
                        { name: '双路市电', content: '是' },
                        { name: 'UPS配置', content: 'N+X' },
                        { name: 'UPS容量', content: '800KVA N+1套' },
                        { name: 'UPS品牌、型号', content: '中达电通DPH25000' },
                        { name: 'UPS满负荷可支撑时间', content: '30分钟' },
                        { name: 'UPS蓄电池组放电测试频次', content: '季度' },
                        { name: 'UPS、发电机维保频次', content: '月度' },
                        { name: '发电机带载测试频次', content: '年度' }
                    ],
                    rightContent: [
                        { name: '柴机品牌', content: '运营商提供' },
                        { name: '柴机功率', content: '运营商提供' },
                        { name: '备用发电机', content: '是' },
                        { name: '备用燃料可支撑时间', content: '24小时' },
                        { name: '发电机油箱可支撑时间', content: '满载8小时' },
                        { name: '市电中断后发电机启动时间', content: '1分钟' },
                        { name: '机房高低压供配电系统检修频次', content: '月度' }
                    ]
                }
            },
            module2: {
                title: '空调系统',
                imgUrl: [
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/air1.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/air2.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/air3.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/air4.jpg'
                ],
                features: [
                    { name: '空调品牌', content: '佳力图' },
                    { name: '温度控制', content: '24~26℃' },
                    { name: '湿度控制', content: '40%-70%' },
                    { name: '送/回风方式', content: '下送风' },
                    { name: '精密空调制冷模式', content: '风冷' },
                    { name: '精密空调配置', content: 'N+2' },
                    { name: '精密空调单台制冷功率', content: '101.2KW' },
                    { name: '空调供电模式', content: '双路' },
                    { name: '空调维保频次', content: '月度' }
                    // { name: '水冷空调冷冻水管是否有冗余', content: '无' },
                    // { name: '水冷空调冷水机组是否有冗余', content: '无' }
                ]
            },
            module3: {
                title: '消防系统',
                imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/fire1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/fire2.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/fire3.jpg'],
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
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/cabinet1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/cabinet2.jpg']
                    },
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/cabinet3.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/cabinet4.jpg']
                    }
                ],
                features: {
                    leftContent: [{ name: '机柜高度', content: '46U' }, { name: '机柜尺寸', content: '1100mm*600mm*2200mm' }, { name: '机柜品牌', content: '隆兴' }, { name: '机柜预装托板', content: '17' }, { name: '强弱电布线', content: '分开隔离' }, { name: '光纤、网线布线', content: '分开隔离' }],
                    rightContent: [
                        // { name: '机柜布局是否冷热通道', content: '否'},
                        { name: '机柜插排插孔数', content: '24' },
                        { name: '机柜额定承重', content: '1000kg' },
                        { name: '机柜插排额定电流', content: '10A可扩展' },
                        { name: '机柜额定支撑电源功率', content: '2.2KW' },
                        { name: '机柜隔板额定承重', content: '100kg' }
                        // { name: '独立隔笼', content: '无' }
                    ]
                }
            },
            module5: {
                leftContent: {
                    title: '安全系统',
                    imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/safe1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/safe2.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/safe3.jpg'],
                    features: [{ name: 'IC卡门禁系统', content: '指纹+密码' }, { name: '数字视频监控', content: ' 7×24小时' }, { name: '保安值守巡检', content: '7×24小时' }, { name: '出入登记', content: '7×24小时' }, { name: '日志记录存储', content: '6个月' }, { name: '安全巡检频次', content: '月度' }]
                },
                rightContent: {
                    title: '网络',
                    imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/net1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/net2.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/net3.jpg'],
                    features: [{ name: '核心路由器型号', content: 'H3C/S7606-S' }, { name: '核心交换机型号', content: '华为/S7706' }, { name: '核心路由器是否备份', content: '是' }, { name: '核心交换机是否备份', content: '是' }, { name: '客户链路是否备份', content: '是' }, { name: '', content: '' }]
                }
            },
            module6: {
                title: '支撑团队',
                imgUrl: [
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/team1.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/team2.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/team3.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/ningbo/team4.jpg'
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
        },

        beijing: {
            brief: {
                title: '睿江云北京亦庄（大族）数据中心简介',
                introduction: 'T4级别数据中心，睿江云北京B节点所在数据中心。位于北京亦庄经济开发区，提供华北多线BGP及HK带宽资源，适合游戏、视频、跨境电商、移动互联网等企业用户。',
                imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/brief1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/brief2.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/brief3.jpg'],
                features: [
                    { name: '机房位置', content: '大兴区亦庄经济开发区凉水河二街企业湾', icon: 0 },
                    { name: '性质（自建/合营）', content: '自建', icon: 1 },
                    // { name: '机房所在楼层', content: '5~6层', icon: 2 },
                    { name: '机房面积', content: '11000平方米', icon: 3 },
                    { name: '地板承重', content: '1000kg/平方米', icon: 4 },
                    { name: '机柜规模', content: '2000个', icon: 5 },
                    { name: '覆盖线路', content: '电信/联通/移动/铁通/教育/科技', icon: 6 },
                    { name: '电磁防护', content: '防静电地板+等电位网', icon: 8 },
                    { name: '防水保护', content: '是', icon: 9 },
                    { name: '抗震防雷等级', content: '8级防震', icon: 7 },
                    { name: '机房启用年限', content: '2015年', icon: 10 }
                ]
            },
            module1: {
                title: '电力系统',
                imgUrl: [
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/power1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/power2.jpg']
                    },
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/power3.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/power4.jpg']
                    }
                ],
                features: {
                    leftContent: [
                        { name: '双路市电', content: '是' },
                        { name: 'UPS配置', content: ' 2（N+2）' },
                        { name: 'UPS容量', content: '625KVA 3套' },
                        { name: 'UPS品牌、型号', content: 'GES-HIFT120C' },
                        { name: 'UPS满负荷可支撑时间', content: '30分钟' },
                        { name: 'UPS蓄电池组放电测试频次', content: '半年' },
                        { name: 'UPS、发电机维保频次', content: '月度' },
                        { name: '发电机带载测试频次', content: '半年' }
                    ],
                    rightContent: [
                        { name: '柴机品牌', content: '华东动力' },
                        { name: '柴机功率', content: '1800KW' },
                        { name: '备用发电机', content: '是' },
                        { name: '备用燃料可支撑时间', content: '8小时' },
                        { name: '发电机油箱可支撑时间', content: '满载8小时' },
                        { name: '市电中断后发电机启动时间', content: '1分钟' },
                        { name: '机房高低压供配电系统检修频次', content: '月度' }
                    ]
                }
            },
            module2: {
                title: '空调系统',
                imgUrl: [
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/air1.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/air2.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/air3.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/air4.jpg'
                ],
                features: [
                    { name: '空调品牌', content: 'kelong' },
                    { name: '温度控制', content: '24~26℃' },
                    { name: '湿度控制', content: '40%-70%' },
                    { name: '送/回风方式', content: '下送风' },
                    { name: '精密空调制冷模式', content: '风冷' },
                    { name: '精密空调配置', content: 'N+1' },
                    { name: '精密空调单台制冷功率', content: '101.2KW' },
                    { name: '空调供电模式', content: '双路' },
                    { name: '空调维保频次', content: '季度' },
                    { name: '水冷空调冷冻水管是否有冗余', content: '是' },
                    { name: '水冷空调冷水机组是否有冗余', content: '是' }
                ]
            },
            module3: {
                title: '消防系统',
                imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/fire1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/fire2.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/fire3.jpg'],
                features: [
                    { name: '灭火系统', content: '自动' },
                    { name: '气体灭火', content: '是（七氟丙烷）' },
                    { name: '烟感报警', content: '是' },
                    { name: '温感报警', content: '是' },
                    { name: '灭火系统自动触发时间', content: '30秒' },
                    { name: '值班监控', content: '7×24小时' },
                    { name: '消防演练频次', content: '季度' },
                    { name: '手持气体灭火器配备', content: '有' },
                    { name: '防毒面具配备', content: '有' },
                    { name: '应急通道', content: '有' },
                    { name: '消防车通道', content: '畅通' }
                ]
            },
            module4: {
                title: '机柜',
                imgUrl: [
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/cabinet1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/cabinet2.jpg']
                    },
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/cabinet3.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/cabinet4.jpg']
                    }
                ],
                features: {
                    leftContent: [{ name: '机柜高度', content: '42U' }, { name: '机柜尺寸', content: '1100mm*600mm*2200mm' }, { name: '机柜品牌', content: '定制' }, { name: '机柜预装托板', content: '13' }, { name: '强弱电布线', content: '分开隔离' }, { name: '光纤、网线布线', content: '分开隔离' }],
                    rightContent: [
                        { name: '机柜布局是否冷热通道', content: '是' },
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
                    imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/safe1.jpg'],
                    features: [{ name: 'IC卡门禁系统', content: '电磁卡' }, { name: '数字视频监控', content: '7×24小时' }, { name: '保安值守巡检', content: '7×24小时' }, { name: '出入登记', content: '7×24小时' }, { name: '日志记录存储', content: '6个月' }, { name: '安全巡检频次', content: '月度' }]
                },
                rightContent: {
                    title: '网络',
                    imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/net1.jpg'],
                    features: [
                        { name: '核心路由器型号', content: '两台华为Quidway S9306' },
                        { name: '核心交换机型号', content: 'H3C S6800-54QF' },
                        // { name: '核心路由器是否备份', content: '否' },
                        { name: '核心交换机是否备份', content: '是' },
                        { name: '客户链路是否备份', content: '是' },
                        { name: '', content: '' },
                        { name: '', content: '' }
                    ]
                }
            },
            module6: {
                title: '支撑团队',
                imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/beijing/team1.jpg'],
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
        },
        shandong: {
            brief: {
                title: '睿江云（山东）数据中心简介',
                introduction: '睿江云自建T3级数据中心，睿江云山东B节点所在数据中心。提供联通、电信双线优质资源，适合视频、电商、大数据等企业用户。',
                imgUrl: [
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/brief1.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/brief2.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/brief3.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/brief4.jpg'
                ],
                features: [
                    { name: '机房位置', content: '山东省潍坊市潍城区东风西街联通西局大楼', icon: 0 },
                    { name: '性质（自建/合营）', content: '自建', icon: 1 },
                    // { name: '机房所在楼层', content: '3层和7层', icon: 2 },
                    { name: '机房面积', content: '660平方米', icon: 3 },
                    { name: '地板承重', content: '800kg/平方米', icon: 4 },
                    { name: '机柜规模', content: '256个', icon: 5 },
                    { name: '覆盖线路', content: '联通电信双线', icon: 6 },
                    { name: '出口规模', content: '50GB', icon: 1 },
                    { name: '电磁防护', content: '防静电地板+等电位网', icon: 8 },
                    { name: '防水保护', content: '是', icon: 9 },
                    { name: '抗震防雷等级', content: '抗震8级，防雷3级', icon: 7 },
                    { name: '机房启用年限', content: '2012年', icon: 10 }
                ]
            },
            module1: {
                title: '电力系统',
                imgUrl: [
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/power1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/power2.jpg']
                    },
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/power3.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/power4.jpg']
                    }
                ],
                features: {
                    leftContent: [
                        { name: '双路市电', content: '是' },
                        { name: 'UPS配置', content: 'N+X' },
                        { name: 'UPS容量', content: '960KVA 1套' },
                        { name: 'UPS品牌、型号', content: '华为5000-E' },
                        { name: 'UPS满负荷可支撑时间', content: '30分钟' },
                        { name: 'UPS蓄电池组放电测试频次', content: '季度' },
                        { name: 'UPS、发电机维保频次', content: '月度' }
                    ],
                    rightContent: [
                        { name: '柴机品牌', content: '康明斯' },
                        { name: '柴机功率', content: '1200KW*1' },
                        // { name: '备用发电机', content: '无' },
                        { name: '备用燃料可支撑时间', content: '无备用燃料，自助加油' },
                        { name: '发电机油箱可支撑时间', content: '满载8小时' },
                        { name: '市电中断后发电机启动时间', content: '1分钟' },
                        { name: '机房高低压供配电系统检修频次', content: '月度' },
                        { name: '发电机带载测试频次', content: '年度' }
                    ]
                }
            },
            module2: {
                title: '空调系统',
                imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/air1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/air2.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/air3.jpg'],
                features: [
                    { name: '空调品牌', content: '佳力图' },
                    { name: '温度控制', content: '24~26℃' },
                    { name: '湿度控制', content: '40%-70%' },
                    { name: '送/回风方式', content: '下送风' },
                    { name: '精密空调制冷模式', content: '风冷' },
                    { name: '精密空调配置', content: 'N+2' },
                    { name: '精密空调单台制冷功率', content: '101.2KW' },
                    { name: '空调供电模式', content: '单路' },
                    { name: '空调维保频次', content: '月度' }
                    // { name: '水冷空调冷冻水管是否有冗余', content: '无' },
                    // { name: '水冷空调冷水机组是否有冗余', content: '无' }
                ]
            },
            module3: {
                title: '消防系统',
                imgUrl: [
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/fire1.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/fire2.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/fire3.jpg',
                    'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/fire4.jpg'
                ],
                features: [
                    { name: '灭火系统', content: '手提式人工灭火' },
                    // { name: '气体灭火', content: '否' },
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
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/cabinet1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/cabinet2.jpg']
                    },
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/cabinet3.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/cabinet4.jpg']
                    }
                ],
                features: {
                    leftContent: [{ name: '机柜高度', content: '42U' }, { name: '机柜尺寸', content: '1100mm*600mm*2200mm' }, { name: '机柜品牌', content: '隆兴' }, { name: '机柜预装托板', content: '13' }, { name: '强弱电布线', content: '分开隔离' }, { name: '光纤、网线布线', content: '分开隔离' }],
                    rightContent: [
                        // { name: '机柜布局是否冷热通道', content: '否'},
                        { name: '机柜插排插孔数', content: '20' },
                        { name: '机柜额定承重', content: '1000kg' },
                        { name: '机柜插排额定电流', content: '10A可扩展' },
                        { name: '机柜额定支撑电源功率', content: '2.2KW' },
                        { name: '机柜隔板额定承重', content: '100kg' }
                        // { name: '独立隔笼', content: '无' }
                    ]
                }
            },
            module5: {
                leftContent: {
                    title: '安全系统',
                    imgUrl: [
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/safe1.jpg',
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/safe2.jpg',
                        'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/safe3.jpg'
                    ],
                    features: [{ name: 'IC卡门禁系统', content: '电磁卡' }, { name: '数字视频监控', content: '7×24小时' }, { name: '保安值守巡检', content: '7×24小时' }, { name: '出入登记', content: '7×24小时' }, { name: '日志记录存储', content: '6个月' }, { name: '安全巡检频次', content: '月度' }]
                },
                rightContent: {
                    title: '网络',
                    imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/net1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/net2.jpg'],
                    features: [
                        { name: '核心路由器型号', content: ' H3C 5800-32F' },
                        { name: '核心交换机型号', content: 'H3C 5800s' },
                        // { name: '核心路由器是否备份', content: '否' },
                        // { name: '核心交换机是否备份', content: '否' },
                        // { name: '客户链路是否备份', content: '否' },
                        { name: '', content: '' },
                        { name: '', content: '' },
                        { name: '', content: '' },
                        { name: '', content: '' }
                    ]
                }
            },
            module6: {
                title: '支撑团队',
                imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/team1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/team2.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/shandong/team3.jpg'],
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
        },

        jiangjun: {
            brief: {
                title: '香港将军澳HKT/NTT/HGC数据中心简介',
                introduction: '香港旗舰数据中心，睿江云香港B节点所在数据中心。将军澳光纤骨干，与HKIX、香港本地及国际运营商互联互通。利用中港网络及全球网络，帮助中企拓展国际业务，同时担当跨国企业进入内地市场门户。',
                imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/jiangjun/brief1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/jiangjun/brief2.jpg'],
                features: [
                    { name: '机房位置', content: '香港新界將軍澳工業邨駿昌街22號', icon: 0 },
                    { name: '地板承重', content: '750kg/平方米', icon: 4 },
                    { name: '机柜规模', content: '1200个', icon: 5 },
                    { name: '电磁防护', content: '防静电地板+等电位网', icon: 8 },
                    { name: '防水保护', content: '是', icon: 9 },
                    { name: '覆盖线路', content: '覆盖全球：中国电信、中国联通、中国移动、PCCW Global、HKIX、各大云厂商、全球互联', icon: 6 }
                ]
            },
            module1: {
                title: '电力系统',
                imgUrl: [
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/jiangjun/power1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/jiangjun/power2.jpg']
                    },
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/jiangjun/power3.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/jiangjun/power1.jpg']
                    }
                ],
                features: {
                    leftContent: [{ name: '双路市电', content: '是' }, { name: 'UPS配置', content: 'N+1' }, { name: 'UPS满负荷可支撑时间', content: '10分钟' }, { name: 'UPS蓄电池组放电测试频次', content: '半年' }, { name: 'UPS、发电机维保频次', content: '月度' }],
                    rightContent: [{ name: '备用发电机', content: '是' }, { name: '发电机油箱可支撑时间', content: '满载8小时' }, { name: '发电机带载测试频次', content: '月度' }, { name: '市电中断后发电机启动时间', content: '1分钟' }, { name: '机房高低压供配电系统检修频次', content: '月度' }]
                }
            },
            module2: {
                title: '空调系统',
                imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/jiangjun/air1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/jiangjun/air2.jpg'],
                features: [
                    { name: '温度控制', content: '24~26℃' },
                    { name: '湿度控制', content: '40%-70%' },
                    { name: '送/回风方式', content: '下送风' },
                    { name: '精密空调制冷模式', content: '冷水机组及精密空调 CRAC' },
                    { name: '精密空调配置', content: 'N+1' },
                    { name: '空调供电模式', content: '双路' },
                    { name: '空调维保频次', content: '季度' },
                    { name: '水冷空调冷冻水管是否有冗余', content: '是' },
                    { name: '水冷空调冷水机组是否有冗余', content: '是' }
                ]
            },
            module3: {
                title: '消防系统',
                imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/jiangjun/fire1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/jiangjun/fire2.jpg'],
                features: [
                    { name: '灭火系统', content: '自动' },
                    { name: '气体灭火', content: '是（七氟丙烷）' },
                    { name: '烟感报警', content: '是' },
                    { name: '温感报警', content: '是' },
                    { name: '灭火系统自动触发时间', content: '30秒' },
                    { name: '值班监控', content: '7×24小时' },
                    { name: '消防演练频次', content: '季度' },
                    { name: '手持气体灭火器配备', content: '有' },
                    { name: '防毒面具配备', content: '有' },
                    { name: '应急通道', content: '有' },
                    { name: '消防车通道', content: '畅通' }
                ]
            },
            module4: {
                title: '机柜',
                imgUrl: [
                    {
                        imgWidth: 'short',
                        url: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/jiangjun/cabinet1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/jiangjun/cabinet2.jpg']
                    }
                ],
                features: {
                    leftContent: [
                        { name: '机柜高度', content: '42U' },
                        { name: '机柜尺寸', content: '1100mm*600mm*2200mm' },
                        { name: '机柜预装托板', content: '3' },
                        { name: '机柜插排插孔数', content: '20' },
                        { name: '强弱电布线', content: '分开隔离' },
                        { name: '光纤、网线布线', content: '分开隔离' }
                    ],
                    rightContent: [
                        { name: '机柜布局是否冷热通道', content: '是' },
                        { name: '机柜额定承重', content: '1000kg' },
                        { name: '机柜插排额定电流', content: '10A可扩展' },
                        { name: '机柜额定支撑电源功率', content: '4KVA' },
                        { name: '机柜隔板额定承重', content: '100kg' },
                        { name: '独立隔笼', content: '是' }
                    ]
                }
            },
            module5: {
                leftContent: {
                    title: '安全系统',
                    imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/jiangjun/safe1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/jiangjun/safe2.jpg'],
                    features: [{ name: 'IC卡门禁系统', content: '电磁卡' }, { name: '数字视频监控', content: '7×24小时' }, { name: '保安值守巡检', content: '7×24小时' }, { name: '出入登记', content: '7×24小时' }, { name: '日志记录存储', content: '1个月' }, { name: '安全巡检频次', content: '月度' }]
                },
                rightContent: {
                    title: '网络',
                    imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/jiangjun/net1.jpg'],
                    features: [{ name: '核心交换机是否备份', content: '是' }, { name: '客户链路是否备份', content: '可提供' }, { name: '', content: '' }, { name: '', content: '' }, { name: '', content: '' }, { name: '', content: '' }]
                }
            },
            module6: {
                title: '支撑团队',
                imgUrl: ['https://static.eflycloud.com/V5/pc/image/doc/dataCenter/jiangjun/team1.jpg', 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/jiangjun/team2.jpg'],
                features: [
                    { name: '设备重启服务', content: '7×24小时，收费' },
                    { name: '设备故障检测', content: '7×24小时，收费' },
                    { name: '系统维护检测', content: '7×24小时，收费' },
                    { name: '业务开通服务', content: '7×24小时，收费' },
                    { name: '现场支撑服务', content: '7×24小时，收费' },
                    { name: '网络监控/优化服务', content: '7×24小时' },
                    // { name: '域名解析（DNS）服务', content: '无' },
                    // { name: '流量分析服务', content: '无' },
                    { name: '服务响应时间', content: '10分钟' },
                    // { name: '备案服务', content: '无' },
                    { name: '办公位、物品存储空间是否有提供', content: '是' }
                ]
            }
        }
    };

    pageData: any = this.dataCenter['zhongshan'];
    navObj: any = {
        region: 'huanan',
        address: 'zhongshan'
    };
    navTitle;
    navList;

    constructor(private dataService: DataService, private ssrServe: SsrService) {}
    ngOnInit() {
        this.resetData();
        // this.initSwiper();
    }

    getData(): string {
        let oWindowUrl = window && window.location && window.location.href ? window.location.href : '';
        let str = oWindowUrl.substring(oWindowUrl.indexOf('/dataCenter/') + 12);
        let arr = str ? str.split('/') : [];
        let address = arr.length > 1 ? arr[1] : 'ruijiang';
        if (this.dataCenter[address]) {
            return this.dataCenter[address];
        } else {
            return this.dataCenter['ruijiang'];
        }
    }

    /**
     * Description: 获取数据中心名称
     * @return {Object} [description]
     */
    getTitle(): Object {
        let obj;
        let oWindowUrl = window && window.location && window.location.href ? window.location.href : '';
        let str = oWindowUrl.substring(oWindowUrl.indexOf('/dataCenter/') + 12);
        let arr = str ? str.split('/') : [];
        let region = arr.length > 0 ? arr[0] : 'huanan';
        let address = arr.length > 1 ? arr[1] : 'ruijiang';
        if (this.dataCenter[address]) {
            obj = {
                region: region,
                address: address
            };
            return obj;
        } else {
            obj = {
                region: 'huanan',
                address: 'ruijiang'
            };
            return obj;
        }
    }

    /**
     * Description: 转化url
     * @param  {[type]} url [description]
     * @return {Object}     [description]
     */
    getUrlData(url): Object {
        // 存储到对象中
        let args = {
            address: ''
        };
        // 获取？位置
        let num = url.indexOf('?');
        // 截取参数信息string
        url = url.substr(num + 1);
        // 以&分割字符串并保存到数组中
        let arr = url.split('&');
        for (let i = 0; i < arr.length; i++) {
            // 以等号分割key=val保存到数组中
            let pair = arr[i].split('=');
            // 获取val值
            args[pair[0]] = pair[1];
            args[pair[0]] = decodeURI(args[pair[0]]);
        }
        return args;
    }

    /**
     * Description: 切换数据中心时重置数据
     * return void
     */
    resetData(): void {
        this.pageData = this.getData();
        // this.navObj = this.dataService.getTitle();

        // this.pageData = this.getData();
        // this.navObj = this.getTitle();

        console.log('111');
        console.log(this.dataCenter);
        console.log(this.dataCenter['ruijiang']);
        console.log(this.getData());
        console.log(this.pageData);
        console.log(this.navObj);

        if (this.navObj.region === 'huanan') {
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
        } else if (this.navObj.region === 'huadong') {
            this.navTitle = {
                name: '华东地区数据中心',
                content: '坐落常州宁波两地，交通四通八达，<br/>运维团队、客服支撑团队7*24小时受理报障。',
                imgUrl: 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/huadong.png',
                bannerBg: 'banner-outer-huadong'
            };
            this.navList = [
                {
                    name: '常州电信',
                    engLishName: 'changzhou',
                    url: '/dataCenter?region=huadong&address=changzhou'
                },
                {
                    name: '宁波',
                    engLishName: 'ningbo',
                    url: '/dataCenter?region=huadong&address=ningbo'
                }
            ];
        } else if (this.navObj.region === 'huabei') {
            this.navTitle = {
                name: '华北地区数据中心',
                content: '坐落北京亦庄、山东两地，<br/>专业机房监控系统提供全智能化管理，<br/>全套进口气体火灾预警及灭火系统；烟雾探测报警系统。',
                imgUrl: 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/huabei.png',
                bannerBg: 'banner-outer-huabei'
            };
            this.navList = [
                {
                    name: '北京亦庄',
                    engLishName: 'beijing',
                    url: '/dataCenter?region=huabei&address=beijing'
                },
                {
                    name: '山东',
                    engLishName: 'shandong',
                    url: '/dataCenter?region=huabei&address=shandong'
                }
            ];
        } else if (this.navObj.region === 'xianggang') {
            this.navTitle = {
                name: '香港地区数据中心',
                content: '坐落香港将军澳，将军澳光纤骨干，<br/>配合该区域唯一运营商设立双通讯节点，<br/>与全港其他通讯节点互联，提供快速且可靠的网络连接。',
                imgUrl: 'https://static.eflycloud.com/V5/pc/image/doc/dataCenter/xianggang.png',
                bannerBg: 'banner-outer-xianggang'
            };
            this.navList = [
                {
                    name: '香港将军澳',
                    engLishName: 'jiangjun',
                    url: '/dataCenter?region=xianggang&address=jiangjun'
                }
            ];
        }
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
