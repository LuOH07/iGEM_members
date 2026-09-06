// 创建地图外层容器，作为相对定位坐标系
const mapContainer = document.createElement('div');
mapContainer.className = 'map-container';

// 创建长图 img 标签
const underlay = document.createElement('img');
underlay.className = 'map-underlay';
underlay.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/map.svg';
underlay.alt = 'Map';

// 创建 STING.svg 标签
const stingImg = document.createElement('img');
stingImg.className = 'sting-overlay';
stingImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/sting.svg';
stingImg.alt = 'STING';

// 创建 Video.svg 标签
const videoImg = document.createElement('img');
videoImg.className = 'video-overlay';
videoImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/video.svg';
videoImg.alt = 'Video';

// 创建 members/title.svg 标签
const membersTitleImg = document.createElement('img');
membersTitleImg.className = 'members-title-overlay';
membersTitleImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/title.svg';
membersTitleImg.alt = 'Members Title';

// 创建 members/CAI_Chenlin.svg 标签
const membersCard1 = document.createElement('div');
membersCard1.className = 'members-card-overlay-1';

const membersCardImg1 = document.createElement('img');
membersCardImg1.className = 'members-card-bg1';
membersCardImg1.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/card.svg';
membersCardImg1.alt = 'Members Card 1';

const CAI_ChenlinImg = document.createElement('img');
CAI_ChenlinImg.className = 'CAI_Chenlin';
CAI_ChenlinImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/cai-chenlin.svg';
CAI_ChenlinImg.alt = 'CAI_Chenlin';

const CAI_ChenlinText = document.createElement('div');
CAI_ChenlinText.className = 'CAI_Chenlin-text';
CAI_ChenlinText.innerHTML = `CAI<br>Chenlin`;

membersCard1.appendChild(membersCardImg1);
membersCard1.appendChild(CAI_ChenlinImg);
membersCard1.appendChild(CAI_ChenlinText);

// 创建 members/CHEN_Zaiyang.svg 标签
const membersCard2 = document.createElement('div');
membersCard2.className = 'members-card-overlay-2';

const membersCardImg2 = document.createElement('img');
membersCardImg2.className = 'members-card-bg2';
membersCardImg2.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/card.svg';
membersCardImg2.alt = 'Members Card 2';

const CHEN_ZaiyangImg = document.createElement('img');
CHEN_ZaiyangImg.className = 'CHEN_Zaiyang';
CHEN_ZaiyangImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/chen-zaiyang.svg';
CHEN_ZaiyangImg.alt = 'CHEN_Zaiyang';

const CHEN_ZaiyangText = document.createElement('div');
CHEN_ZaiyangText.className = 'CHEN_Zaiyang-text';
CHEN_ZaiyangText.innerHTML = `CHEN<br>Zaiyang`;

membersCard2.appendChild(membersCardImg2);
membersCard2.appendChild(CHEN_ZaiyangImg);
membersCard2.appendChild(CHEN_ZaiyangText);

// 创建 members/GAO_Mandi.svg 标签
const membersCard3 = document.createElement('div');
membersCard3.className = 'members-card-overlay-3';

const membersCardImg3 = document.createElement('img');
membersCardImg3.className = 'members-card-bg3';
membersCardImg3.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/card.svg';
membersCardImg3.alt = 'Members Card 3';

const GAO_MandiImg = document.createElement('img');
GAO_MandiImg.className = 'GAO_Mandi';
GAO_MandiImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/gao-mandi.svg';
GAO_MandiImg.alt = 'GAO_Mandi';

const GAO_MandiText = document.createElement('div');
GAO_MandiText.className = 'GAO_Mandi-text';
GAO_MandiText.innerHTML = `GAO<br>Mandi`;

membersCard3.appendChild(membersCardImg3);
membersCard3.appendChild(GAO_MandiImg);
membersCard3.appendChild(GAO_MandiText);

// 创建 members/GUO_Junhong.svg 标签
const membersCard4 = document.createElement('div');
membersCard4.className = 'members-card-overlay-4';

const membersCardImg4 = document.createElement('img');
membersCardImg4.className = 'members-card-bg4';
membersCardImg4.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/card.svg';
membersCardImg4.alt = 'Members Card 4';

const GUO_JunhongImg = document.createElement('img');
GUO_JunhongImg.className = 'GUO_Junhong';
GUO_JunhongImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/guo-junhong.svg';
GUO_JunhongImg.alt = 'GUO_Junhong';

const GUO_JunhongText = document.createElement('div');
GUO_JunhongText.className = 'GUO_Junhong-text';
GUO_JunhongText.innerHTML = `GUO<br>Junhong`;

membersCard4.appendChild(membersCardImg4);
membersCard4.appendChild(GUO_JunhongImg);
membersCard4.appendChild(GUO_JunhongText);

// 创建 members/LU_Yuzhi.svg 标签
const membersCard5 = document.createElement('div');
membersCard5.className = 'members-card-overlay-5';

const membersCardImg5 = document.createElement('img');
membersCardImg5.className = 'members-card-bg5';
membersCardImg5.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/card.svg';
membersCardImg5.alt = 'Members Card 5';

const LU_YuzhiImg = document.createElement('img');
LU_YuzhiImg.className = 'LU_Yuzhi';
LU_YuzhiImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/lu-yuzhi.svg';
LU_YuzhiImg.alt = 'LU_Yuzhi';

const LU_YuzhiText = document.createElement('div');
LU_YuzhiText.className = 'LU_Yuzhi-text';
LU_YuzhiText.innerHTML = `LU<br>Yuzhi`;

membersCard5.appendChild(membersCardImg5);
membersCard5.appendChild(LU_YuzhiImg);
membersCard5.appendChild(LU_YuzhiText);

// 创建 members/LI_Wenyu.svg 标签
const membersCard6 = document.createElement('div');
membersCard6.className = 'members-card-overlay-6';

const membersCardImg6 = document.createElement('img');
membersCardImg6.className = 'members-card-bg6';
membersCardImg6.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/card1.svg';
membersCardImg6.alt = 'Members Card 6';

const LI_WenyuImg = document.createElement('img');
LI_WenyuImg.className = 'LI_Wenyu';
LI_WenyuImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/li-wenyu.svg';
LI_WenyuImg.alt = 'LI_Wenyu';

const LI_WenyuText = document.createElement('div');
LI_WenyuText.className = 'LI_Wenyu-text';
LI_WenyuText.innerHTML = `LI<br>Wenyu`;

membersCard6.appendChild(membersCardImg6);
membersCard6.appendChild(LI_WenyuImg);
membersCard6.appendChild(LI_WenyuText);

// 创建 members/LIN_Zhijun.svg 标签
const membersCard7 = document.createElement('div');
membersCard7.className = 'members-card-overlay-7';

const membersCardImg7 = document.createElement('img');
membersCardImg7.className = 'members-card-bg7';
membersCardImg7.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/card.svg';
membersCardImg7.alt = 'Members Card 7';

const LIN_ZhijunImg = document.createElement('img');
LIN_ZhijunImg.className = 'LIN_Zhijun';
LIN_ZhijunImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/lin-zhijun.svg';
LIN_ZhijunImg.alt = 'LIN_Zhijun';

const LIN_ZhijunText = document.createElement('div');
LIN_ZhijunText.className = 'LIN_Zhijun-text';
LIN_ZhijunText.innerHTML = `LIN<br>Zhijun`;

membersCard7.appendChild(membersCardImg7);
membersCard7.appendChild(LIN_ZhijunImg);
membersCard7.appendChild(LIN_ZhijunText);

// 创建 members/LI_Wanxin.svg 标签
const membersCard8 = document.createElement('div');
membersCard8.className = 'members-card-overlay-8';

const membersCardImg8 = document.createElement('img');
membersCardImg8.className = 'members-card-bg8';
membersCardImg8.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/card1.svg';
membersCardImg8.alt = 'Members Card 8';

const LI_WanxinImg = document.createElement('img');
LI_WanxinImg.className = 'LI_Wanxin';
LI_WanxinImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/li-wanxin.svg';
LI_WanxinImg.alt = 'LI_Wanxin';

const LI_WanxinText = document.createElement('div');
LI_WanxinText.className = 'LI_Wanxin-text';
LI_WanxinText.innerHTML = `LI<br>Wanxin`;

membersCard8.appendChild(membersCardImg8);
membersCard8.appendChild(LI_WanxinImg);
membersCard8.appendChild(LI_WanxinText);

// 创建 members/REN_Moye.svg 标签
const membersCard9 = document.createElement('div');
membersCard9.className = 'members-card-overlay-9';

const membersCardImg9 = document.createElement('img');
membersCardImg9.className = 'members-card-bg9';
membersCardImg9.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/card.svg';
membersCardImg9.alt = 'Members Card 9';

const REN_MoyeImg = document.createElement('img');
REN_MoyeImg.className = 'REN_Moye';
REN_MoyeImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/ren-moye.svg';
REN_MoyeImg.alt = 'REN_Moye';

const REN_MoyeText = document.createElement('div');
REN_MoyeText.className = 'REN_Moye-text';
REN_MoyeText.innerHTML = `REN<br>Moye`;

membersCard9.appendChild(membersCardImg9);
membersCard9.appendChild(REN_MoyeImg);
membersCard9.appendChild(REN_MoyeText);

// 创建 members/WANG _Kexin.svg 标签
const membersCard10 = document.createElement('div');
membersCard10.className = 'members-card-overlay-10';

const membersCardImg10 = document.createElement('img');
membersCardImg10.className = 'members-card-bg10';
membersCardImg10.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/card1.svg';
membersCardImg10.alt = 'Members Card 10';

const WANG_KexinImg = document.createElement('img');
WANG_KexinImg.className = 'WANG_Kexin';
WANG_KexinImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/wang-kexin.svg';
WANG_KexinImg.alt = 'WANG_Kexin';

const WANG_KexinText = document.createElement('div');
WANG_KexinText.className = 'WANG_Kexin-text';
WANG_KexinText.innerHTML = `WANG<br>Kexin`;

membersCard10.appendChild(membersCardImg10);
membersCard10.appendChild(WANG_KexinImg);
membersCard10.appendChild(WANG_KexinText);

// 创建 members/WANG_Guanzhe.svg 标签
const membersCard11 = document.createElement('div');
membersCard11.className = 'members-card-overlay-11';

const membersCardImg11 = document.createElement('img');
membersCardImg11.className = 'members-card-bg11';
membersCardImg11.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/card.svg';
membersCardImg11.alt = 'Members Card 11';

const WANG_GuanzheImg = document.createElement('img');
WANG_GuanzheImg.className = 'WANG_Guanzhe';
WANG_GuanzheImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/wang-guanzhe.svg';
WANG_GuanzheImg.alt = 'WANG_Guanzhe';

const WANG_GuanzheText = document.createElement('div');
WANG_GuanzheText.className = 'WANG_Guanzhe-text';
WANG_GuanzheText.innerHTML = `WANG<br>Guanzhe`;

membersCard11.appendChild(membersCardImg11);
membersCard11.appendChild(WANG_GuanzheImg);
membersCard11.appendChild(WANG_GuanzheText);

// 创建 members/WANG_Qingyu.svg 标签
const membersCard12 = document.createElement('div');
membersCard12.className = 'members-card-overlay-12';

const membersCardImg12 = document.createElement('img');
membersCardImg12.className = 'members-card-bg12';
membersCardImg12.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/card1.svg';
membersCardImg12.alt = 'Members Card 12';

const WANG_QingyuImg = document.createElement('img');
WANG_QingyuImg.className = 'WANG_Qingyu';
WANG_QingyuImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/zhang-jingxuan.svg';
WANG_QingyuImg.alt = 'WANG_Qingyu';

const WANG_QingyuText = document.createElement('div');
WANG_QingyuText.className = 'WANG_Qingyu-text';
WANG_QingyuText.innerHTML = `WANG<br>Qingyu`;

membersCard12.appendChild(membersCardImg12);
membersCard12.appendChild(WANG_QingyuImg);
membersCard12.appendChild(WANG_QingyuText);

// 创建 members/ZHANG _Ke.svg 标签
const membersCard13 = document.createElement('div');
membersCard13.className = 'members-card-overlay-13';

const membersCardImg13 = document.createElement('img');
membersCardImg13.className = 'members-card-bg13';
membersCardImg13.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/card.svg';
membersCardImg13.alt = 'Members Card 13';

const ZHANG_KeImg = document.createElement('img');
ZHANG_KeImg.className = 'ZHANG_Ke';
ZHANG_KeImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/zhang-ke.svg';
ZHANG_KeImg.alt = 'ZHANG_Ke';

const ZHANG_KeText = document.createElement('div');
ZHANG_KeText.className = 'ZHANG_Ke-text';
ZHANG_KeText.innerHTML = `ZHANG<br>Ke`;

membersCard13.appendChild(membersCardImg13);
membersCard13.appendChild(ZHANG_KeImg);
membersCard13.appendChild(ZHANG_KeText);

// 创建 members/ZHANG_Jingxuan.svg 标签
const membersCard14 = document.createElement('div');
membersCard14.className = 'members-card-overlay-14';

const membersCardImg14 = document.createElement('img');
membersCardImg14.className = 'members-card-bg14';
membersCardImg14.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/card.svg';
membersCardImg14.alt = 'Members Card 14';

const ZHANG_JingxuanImg = document.createElement('img');
ZHANG_JingxuanImg.className = 'ZHANG_Jingxuan';
ZHANG_JingxuanImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/zhang-jingxuan.svg';
ZHANG_JingxuanImg.alt = 'ZHANG_Jingxuan';

const ZHANG_JingxuanText = document.createElement('div');
ZHANG_JingxuanText.className = 'ZHANG_Jingxuan-text';
ZHANG_JingxuanText.innerHTML = `ZHANG<br>Jingxuan`;

membersCard14.appendChild(membersCardImg14);
membersCard14.appendChild(ZHANG_JingxuanImg);
membersCard14.appendChild(ZHANG_JingxuanText);

// 创建 members/ZHANG_Xiwen.svg 标签
const membersCard15 = document.createElement('div');
membersCard15.className = 'members-card-overlay-15';

const membersCardImg15 = document.createElement('img');
membersCardImg15.className = 'members-card-bg15';
membersCardImg15.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/card.svg';
membersCardImg15.alt = 'Members Card 15';

const ZHANG_XiwenImg = document.createElement('img');
ZHANG_XiwenImg.className = 'ZHANG_Xiwen';
ZHANG_XiwenImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/zhang-xiwen.svg';
ZHANG_XiwenImg.alt = 'ZHANG_Xiwen';

const ZHANG_XiwenText = document.createElement('div');
ZHANG_XiwenText.className = 'ZHANG_Xiwen-text';
ZHANG_XiwenText.innerHTML = `ZHANG<br>Xiwen`;

membersCard15.appendChild(membersCardImg15);
membersCard15.appendChild(ZHANG_XiwenImg);
membersCard15.appendChild(ZHANG_XiwenText);

// 创建 student_leaders/title.svg 标签
const studentleadersTitleImg = document.createElement('img');
studentleadersTitleImg.className = 'studentleaders-title-overlay';
studentleadersTitleImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/student-leaders/title.svg';
studentleadersTitleImg.alt = 'studentleaders Title';

// 创建 student_leaders/ZHENG_Keshuo.svg 标签
const ZHENG_KeshuoImg = document.createElement('img');
ZHENG_KeshuoImg.className = 'ZHENG_Keshuo-overlay';
ZHENG_KeshuoImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/student-leaders/zheng-keshuo.svg';
ZHENG_KeshuoImg.alt = 'ZHENG_Keshuo';

// 创建 student_leaders/LI_Meihan.svg 标签
const LI_MeihanImg = document.createElement('img');
LI_MeihanImg.className = 'LI_Meihan-overlay';
LI_MeihanImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/student-leaders/li-meihan.svg';
LI_MeihanImg.alt = 'LI_Meihan';

// 创建 student_leaders/QU_Jiayue.svg 标签
const QU_JiayueImg = document.createElement('img');
QU_JiayueImg.className = 'QU_Jiayue-overlay';
QU_JiayueImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/student-leaders/qu-jiayue.svg';
QU_JiayueImg.alt = 'QU_Jiayue';

// 创建 advisors/title.svg 标签
const advisorsTitleImg = document.createElement('img');
advisorsTitleImg.className = 'advisors-title-overlay';
advisorsTitleImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/advisors/title.svg';
advisorsTitleImg.alt = 'advisors Title';

// 创建 advisors/Ettrium_Han.svg 标签
const Ettrium_HanImg = document.createElement('img');
Ettrium_HanImg.className = 'Ettrium_Han-overlay';
Ettrium_HanImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/advisors/ettrium-han.svg';
Ettrium_HanImg.alt = 'Ettrium_Han';

// 创建 advisors/CHEN_Yanhao.svg 标签
const CHEN_YanhaoImg = document.createElement('img');
CHEN_YanhaoImg.className = 'CHEN_Yanhao-overlay';
CHEN_YanhaoImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/advisors/chen-yanhao.svg';
CHEN_YanhaoImg.alt = 'CHEN_Yanhao';

// 创建 advisors/LIAO_Yijie.svg 标签
const LIAO_YijieImg = document.createElement('img');
LIAO_YijieImg.className = 'LIAO_Yijie-overlay';
LIAO_YijieImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/advisors/liao-yijie.svg';
LIAO_YijieImg.alt = 'LIAO_Yijie';

// 创建 advisors/PENG_Jiaxuan.svg 标签
const PENG_JiaxuanImg = document.createElement('img');
PENG_JiaxuanImg.className = 'PENG_Jiaxuan-overlay';
PENG_JiaxuanImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/advisors/peng-jiaxuan.svg';
PENG_JiaxuanImg.alt = 'PENG_Jiaxuan';

// 创建 advisors/LIN_Nanqin.svg 标签
const LIN_NanqinImg = document.createElement('img');
LIN_NanqinImg.className = 'LIN_Nanqin-overlay';
LIN_NanqinImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/advisors/lin-nanqin.svg';
LIN_NanqinImg.alt = 'LIN_Nanqin';

// 创建 advisors/SHEN_Ruichen.svg 标签
const SHEN_RuichenImg = document.createElement('img');
SHEN_RuichenImg.className = 'SHEN_Ruichen-overlay';
SHEN_RuichenImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/advisors/shen-ruichen.svg';
SHEN_RuichenImg.alt = 'SHEN_Ruichen';

// 创建 advisors/Enduo_Kim.svg 标签
const Enduo_KimImg = document.createElement('img');
Enduo_KimImg.className = 'Enduo_Kim-overlay';
Enduo_KimImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/advisors/enduo-kim.svg';
Enduo_KimImg.alt = 'Enduo_Kim';

// 创建 advisors/GUO_Yanlinxing.svg 标签
const GUO_YanlinxingImg = document.createElement('img');
GUO_YanlinxingImg.className = 'GUO_Yanlinxing-overlay';
GUO_YanlinxingImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/advisors/guo-yanlinxing.svg';
GUO_YanlinxingImg.alt = 'GUO_Yanlinxing';

// 创建 advisors/TANG_Ziyan.svg 标签
const TANG_ZiyanImg = document.createElement('img');
TANG_ZiyanImg.className = 'TANG_Ziyan-overlay';
TANG_ZiyanImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/advisors/tang-ziyan.svg';
TANG_ZiyanImg.alt = 'TANG_Ziyan';

// 创建 instructors/title.svg 标签
const instructorsTitleImg = document.createElement('img');
instructorsTitleImg.className = 'instructors-title-overlay';
instructorsTitleImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/instructors/title.svg';
instructorsTitleImg.alt = 'instructors Title';

// 创建 instructors/TANG_Ziyan.svg 标签
const YANG_NanImg = document.createElement('img');
YANG_NanImg.className = 'YANG_Nan-overlay';
YANG_NanImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/instructors/yang-nan.svg';
YANG_NanImg.alt = 'YANG_Nan';

// 创建 PIs/title.svg 标签
const PIsTitleImg = document.createElement('img');
PIsTitleImg.className = 'PIs-title-overlay';
PIsTitleImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/pis/title.svg';
PIsTitleImg.alt = 'PIs Title';

// 创建 PIs/HONG_Wenjing.svg 标签
const HONG_WenjingImg = document.createElement('img');
HONG_WenjingImg.className = 'HONG_Wenjing-overlay';
HONG_WenjingImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/pis/hong-wenjing.svg';
HONG_WenjingImg.alt = 'HONG_Wenjing';

// 创建 PIs/ZHANG_Aihui.svg 标签
const ZHANG_AihuiImg = document.createElement('img');
ZHANG_AihuiImg.className = 'ZHANG_Aihui-overlay';
ZHANG_AihuiImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/pis/zhang-aihui.svg';
ZHANG_AihuiImg.alt = 'ZHANG_Aihui';

// 创建 PIs/LING_Chen.svg 标签
const LING_ChenImg = document.createElement('img');
LING_ChenImg.className = 'LING_Chen-overlay';
LING_ChenImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/pis/ling-chen.svg';
LING_ChenImg.alt = 'LING_Chen';

// 创建 PIs/CHEN_Junhong.svg 标签
const CHEN_JunhongImg = document.createElement('img');
CHEN_JunhongImg.className = 'CHEN_Junhong-overlay';
CHEN_JunhongImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/pis/chen-junhong.svg';
CHEN_JunhongImg.alt = 'CHEN_Junhong';

// 创建 PIs/HUANG_Jiacheng.svg 标签
const HUANG_JiachengImg = document.createElement('img');
HUANG_JiachengImg.className = 'HUANG_Jiacheng-overlay';
HUANG_JiachengImg.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/pis/huang-jiacheng.svg';
HUANG_JiachengImg.alt = 'HUANG_Jiacheng';

// 创建 members/tape.svg 标签
const tape1Img = document.createElement('img');
tape1Img.className = 'tape1-overlay';
tape1Img.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/tape.svg';
tape1Img.alt = 'Tape1';

// 创建 members/tape.svg 标签
const tape2Img = document.createElement('img');
tape2Img.className = 'tape2-overlay';
tape2Img.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/tape.svg';
tape2Img.alt = 'Tape2';

// 创建 members/tape.svg 标签
const tape3Img = document.createElement('img');
tape3Img.className = 'tape3-overlay';
tape3Img.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/tape.svg';
tape3Img.alt = 'Tape3';

// 创建 members/tape.svg 标签
const tape4Img = document.createElement('img');
tape4Img.className = 'tape4-overlay';
tape4Img.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/tape.svg';
tape4Img.alt = 'Tape4';

// 创建 members/tape.svg 标签
const tape5Img = document.createElement('img');
tape5Img.className = 'tape5-overlay';
tape5Img.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/tape.svg';
tape5Img.alt = 'Tape5';

// 创建 members/tape.svg 标签
const tape6Img = document.createElement('img');
tape6Img.className = 'tape6-overlay';
tape6Img.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/tape.svg';
tape6Img.alt = 'Tape6';

// 创建 members/pin.svg 标签
const pin1Img = document.createElement('img');
pin1Img.className = 'pin1-overlay';
pin1Img.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/pin.svg';
pin1Img.alt = 'PIN1';

// 创建 members/pin.svg 标签
const pin2Img = document.createElement('img');
pin2Img.className = 'pin2-overlay';
pin2Img.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/pin.svg';
pin2Img.alt = 'PIN2';

// 创建 members/line.svg 标签
const line1Img = document.createElement('img');
line1Img.className = 'line1-overlay';
line1Img.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/line.svg';
line1Img.alt = 'Line1';

// 创建 members/line.svg 标签
const line2Img = document.createElement('img');
line2Img.className = 'line2-overlay';
line2Img.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/line.svg';
line2Img.alt = 'Line2';

// 创建 members/line.svg 标签
const line3Img = document.createElement('img');
line3Img.className = 'line3-overlay';
line3Img.src = 'https://static.igem.wiki/teams/6059/wiki/members/body/members/line.svg';
line3Img.alt = 'Line3';

// 创建 title 文字
const title1TextImg = document.createElement('div');
title1TextImg.className = 'title1-text-overlay';
title1TextImg.textContent = 'Member Archive';

// 创建 title 文字
const title2TextImg = document.createElement('div');
title2TextImg.className = 'title2-text-overlay';
title2TextImg.textContent = 'Mapping the people behind the project.';

// 创建 title 文字
const title3TextImg = document.createElement('div');
title3TextImg.className = 'title3-text-overlay';
title3TextImg.innerHTML = `STING is shaped by multiple disciplines working<br>toward one shared goal. Follow the archive to<br>explore the roles, responsibilities, and<br>contributions that connect our team.`;

// 创建 video 文字
const videoTextImg = document.createElement('div');
videoTextImg.className = 'video-text-overlay';
videoTextImg.textContent = 'Team Video';

// 创建 archive 文字
const archive1TextImg = document.createElement('div');
archive1TextImg.className = 'archive1-text-overlay';
archive1TextImg.textContent = 'ARCHIVE 01';

// 创建 archive 文字
const archive2TextImg = document.createElement('div');
archive2TextImg.className = 'archive2-text-overlay';
archive2TextImg.textContent = 'ARCHIVE 02';

// 创建 archive 文字
const archive3TextImg = document.createElement('div');
archive3TextImg.className = 'archive3-text-overlay';
archive3TextImg.textContent = 'ARCHIVE 03';

// 创建 archive 文字
const archive4TextImg = document.createElement('div');
archive4TextImg.className = 'archive4-text-overlay';
archive4TextImg.textContent = 'ARCHIVE 04';

// 创建 archive 文字
const archive5TextImg = document.createElement('div');
archive5TextImg.className = 'archive5-text-overlay';
archive5TextImg.textContent = 'ARCHIVE 05';

// 创建 members 文字
const membersTextImg = document.createElement('div');
membersTextImg.className = 'members-text-overlay';
membersTextImg.textContent = 'Members';

// 创建 student_leader 文字
const studentleaderTextImg = document.createElement('div');
studentleaderTextImg.className = 'student_leader-text-overlay';
studentleaderTextImg.textContent = 'Student Leader';

// 创建 advisors 文字
const advisorsTextImg = document.createElement('div');
advisorsTextImg.className = 'advisors-text-overlay';
advisorsTextImg.textContent = 'Advisors';

// 创建 instructors 文字
const instructorsTextImg = document.createElement('div');
instructorsTextImg.className = 'instructors-text-overlay';
instructorsTextImg.textContent = 'Instructors';

// 创建 PIs 文字
const pisTextImg = document.createElement('div');
pisTextImg.className = 'pis-text-overlay';
pisTextImg.textContent = 'Principal Investigators';

// 将底图与所有叠加 SVG 元素统一装入地图容器中，实现位置与缩放联动
mapContainer.appendChild(underlay);
mapContainer.appendChild(stingImg);
mapContainer.appendChild(videoImg);
mapContainer.appendChild(membersTitleImg);
mapContainer.appendChild(membersCard1);
mapContainer.appendChild(membersCard2);
mapContainer.appendChild(membersCard3);
mapContainer.appendChild(membersCard4);
mapContainer.appendChild(membersCard5);
mapContainer.appendChild(membersCard6);
mapContainer.appendChild(membersCard7);
mapContainer.appendChild(membersCard8);
mapContainer.appendChild(membersCard9);
mapContainer.appendChild(membersCard10);
mapContainer.appendChild(membersCard11);
mapContainer.appendChild(membersCard12);
mapContainer.appendChild(membersCard13);
mapContainer.appendChild(membersCard14);
mapContainer.appendChild(membersCard15);
mapContainer.appendChild(studentleadersTitleImg);
mapContainer.appendChild(ZHENG_KeshuoImg);
mapContainer.appendChild(LI_MeihanImg);
mapContainer.appendChild(QU_JiayueImg);
mapContainer.appendChild(advisorsTitleImg);
mapContainer.appendChild(Ettrium_HanImg);
mapContainer.appendChild(CHEN_YanhaoImg);
mapContainer.appendChild(LIAO_YijieImg);
mapContainer.appendChild(PENG_JiaxuanImg);
mapContainer.appendChild(LIN_NanqinImg);
mapContainer.appendChild(SHEN_RuichenImg);
mapContainer.appendChild(Enduo_KimImg);
mapContainer.appendChild(GUO_YanlinxingImg);
mapContainer.appendChild(TANG_ZiyanImg);
mapContainer.appendChild(instructorsTitleImg);
mapContainer.appendChild(YANG_NanImg);
mapContainer.appendChild(PIsTitleImg);
mapContainer.appendChild(HONG_WenjingImg);
mapContainer.appendChild(ZHANG_AihuiImg);
mapContainer.appendChild(LING_ChenImg);
mapContainer.appendChild(CHEN_JunhongImg);
mapContainer.appendChild(HUANG_JiachengImg);
mapContainer.appendChild(tape1Img);
mapContainer.appendChild(tape2Img);
mapContainer.appendChild(tape3Img);
mapContainer.appendChild(tape4Img);
mapContainer.appendChild(tape5Img);
mapContainer.appendChild(tape6Img);
mapContainer.appendChild(pin1Img);
mapContainer.appendChild(pin2Img);
mapContainer.appendChild(line1Img);
mapContainer.appendChild(line2Img);
mapContainer.appendChild(line3Img);
mapContainer.appendChild(title1TextImg);
mapContainer.appendChild(title2TextImg);
mapContainer.appendChild(title3TextImg);
mapContainer.appendChild(videoTextImg);
mapContainer.appendChild(archive1TextImg);
mapContainer.appendChild(archive2TextImg);
mapContainer.appendChild(archive3TextImg);
mapContainer.appendChild(archive4TextImg);
mapContainer.appendChild(archive5TextImg);
mapContainer.appendChild(membersTextImg);
mapContainer.appendChild(studentleaderTextImg);
mapContainer.appendChild(advisorsTextImg);
mapContainer.appendChild(instructorsTextImg);
mapContainer.appendChild(pisTextImg);

// 将包装好的地图容器插入页面最顶端
document.body.prepend(mapContainer);