"use client"

import Image from "next/image"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import { useState } from 'react'


export default function HomePage() {
    const [readerUrl, setReaderUrl] = useState<string | null>(null)

    const provincialNews = [
        {
            id: 1,
            date: "5月14日 浙江卫视",
            title: "封面故事：算力上天记 一箭十二星 记者现场直击",
            image: "/省级媒体报道/5月14日 浙江卫视 封面故事 算力上天记.png?height=200&width=300",
            pic_pos:"",
            link:"http://wap.cztv.com/tv/34/2487271.html"
        },
        {
            id: 2,
            date: "5月14日 浙江卫视",
            title: "对话之江实验室“三体计算星座”总师李超",
            image: "/省级媒体报道/5月14日 浙江卫视 对话之江实验室“三体计算星座”总师李超.png?height=200&width=300",
            pic_pos:"",
            link:"https://www.cztv.com/newsDetail/787903"
        },
        {
            id: 3,
            date: "5月14日 浙江卫视",
            title: "新闻链接：人工智能不能因为缺失算力而缺席太空",
            image: "/省级媒体报道/5月14日 浙江卫视 新闻链接 人工智能不能因为缺失算力而缺席太空.png?height=200&width=300",
            pic_pos:"",
            link:"http://wap.cztv.com/tv/34/2487283.html"
        },
        {
            id: 4,
            date: "5月14日 浙江卫视",
            title: "Vlog:我们都是探索天空的人",
            image: "/省级媒体报道/5月14日 浙江卫视 Vlog我们都是探索天空的人.png?height=200&width=300",
            pic_pos:"",
            link:"https://www.cztv.com/video/20019196/wh/horizontal_vod?id=20019196"
        },
        {
            id: 5,
            date: "5月14日 浙江新闻联播",
            title: "一箭十二星！太空计算卫星星座即将发射，中国蓝新闻记者直击发射现场",
            image: "/省级媒体报道/5月14日 浙江新闻联播 一箭十二星 太空计算卫星星座即将发射 中国蓝新闻记者直击发射现场.png?height=200&width=300",
            pic_pos:"",
            link:"https://www.cztv.com/newsDetail/787775"
        },
        {
            id: 6,
            date: "5月14日 新蓝网",
            title: "全球首个太空计算星座发射入轨 12颗智星把人工智能送上天",
            image: "/省级媒体报道/5月14日 新蓝网 全球首个太空计算星座发射入轨 12颗智星把人工智能送上天.png?height=200&width=300",
            pic_pos:"",
            link:"https://www.cztv.com/newsDetail/787796"
        },
        {
            id: 7,
            date: "5月14日 浙江在线",
            title: "算力上天！首批12星成功入轨，“三体计算星座”开启太空计算新时代",
            image: "/省级媒体报道/5月14日 浙江在线 算力上天 首批12星成功入轨.jpg?height=200&width=300",
            pic_pos:"",
            link:"https://zjnews.zjol.com.cn/yc/qmt/202505/t20250514_30994148.shtml"
        },
        {
            id: 8,
            date: "5月14日 潮新闻App",
            title: "一箭十二星！太空计算卫星星座成功发射",
            image: "/省级媒体报道/5月14日 潮新闻App 一箭十二星 太空计算卫星星座成功发射.png?height=200&width=300",
            pic_pos:"",
            link:"https://tidenews.com.cn/news.html?id=3123994"
        },
        {
            id: 9,
            date: "5月14日 浙江之声",
            title: "一箭十二星！太空计算卫星星座成功发射",
            image: "/省级媒体报道/5月14日 浙江之声 一箭十二星 太空计算卫星星座成功发射.png?height=200&width=300",
            pic_pos:"",
            link:"https://mp.weixin.qq.com/s?__biz=MTYzNTI5ODEwMQ==&mid=2652784249&idx=1&sn=b60fd653b2dd345d609399bdc7763a7d"
        },
        {
            id: 10,
            date: "5月15日 浙江日报",
            title: "我国首个整轨互联太空计算星座开始组网",
            image: "/省级媒体报道/5月15日 浙江日报 我国首个整轨互联太空计算星座开始组网.jpg?height=200&width=300",
            pic_pos:"",
            link:"https://zjrb.zjol.com.cn/html/2025-05/15/node_18.htm"
        },
        {
            id: 11,
            date: "5月16日 南方都市报",
            title: "算力和AI上天！三体计算星座“天数天算”，太空算力有啥用",
            image: "/省级媒体报道/5月16日 南方都市报 算力和AI上天.png?height=200&width=300",
            pic_pos:"",
            link:"https://baijiahao.baidu.com/s?id=1832238728486664752&wfr=spider&for=pc"
        },
        {
            id: 12,
            date: "5月17日 新蓝网",
            title: "中国蓝观察丨“三体计算星座”发射升空 之江实验室为太空装上“AI大脑”",
            image: "/省级媒体报道/5月17日 新蓝网 中国蓝观察.png?height=200&width=300",
            pic_pos:"",
            link:"https://baijiahao.baidu.com/s?id=1832365243618790181&wfr=spider&for=pc"
        },
        {
            id: 13,
            date: "5月17日 浙江日报",
            title: "把人工智能送上太空 之江实验室牵头组建我国首个整轨互联太空计算星座",
            image: "/省级媒体报道/5月17日 浙江日报 把人工智能送上太空.jpg?height=200&width=300",
            pic_pos:"",
            link:"https://zjrb.zjol.com.cn/html/2025-05/17/content_3822706.htm?div=-1"
        },
        {
            id: 14,
            date: "6月12日 四川在线",
            title: "之江实验室主任王坚：未来可能会把人工智能运用到太空中",
            image: "/省级媒体报道/6月12日 四川在线 之江实验室主任王坚.png?height=200&width=300",
            pic_pos:"",
            link:"https://sichuan.scol.com.cn/ggxw/202506/83063371.html"
        },
        {
            id: 15,
            date: "6月18日 浙江日报",
            title: "之江实验室“三体计算星座”上天满月太空算网，如何织造",
            image: "/省级媒体报道/6月18日 浙江日报 之江实验室三体计算星座上天满月太空算网.jpg?height=200&width=300",
            pic_pos:"",
            link:"https://zjrb.zjol.com.cn/html/2025-06/18/content_3829850.htm?div=-1"
        },
    ]

    const nationalNews = [
        {
            id: 1,
            date: "5月14日 新华社",
            title: "将人工智能送上太空！我国太空计算卫星星座成功发射",
            image: "/国家级媒体报道/5月14日新华社将人工智能送上太空.png?height=200&width=300",
            pic_pos: "center_-2.5rem",
            link: "https://xhpfmapi.xinhuaxmt.com/vh512/share/12540062",
        },
        {
            id: 2,
            date: "5月14日 东方时空",
            title: "太空算力“高”在哪儿？技术突破 12颗卫星“各怀绝技”",
            image: "/国家级媒体报道/5月14日 东方时空 太空算力高在哪儿.png?height=200&width=300",
            pic_pos: "",
            link: "https://tv.cctv.com/2025/05/14/VIDEGYdvkgbU9lMKko2sZgZk250514.shtml",
        },
        {
            id: 3,
            date: "5月14日 中国新闻网",
            title: "中国成功发射太空计算卫星星座",
            image: "/国家级媒体报道/5月14日 中国新闻网 中国成功发射太空计算卫星星座.jpg?height=200&width=300",
            pic_pos: "",
            link: "https://www.chinanews.com.cn/gn/2025/05-14/10415282.shtml",
        },
        {
            id: 4,
            date: "5月14日 央视新闻",
            title: "将AI送上太空 我国成功发射全球首个太空计算卫星星座",
            image: "/国家级媒体报道/5月14日 央视新闻 将AI送上太空 我国成功发射全球首个太空计算卫星星座.jpg?height=200&width=300",
            pic_pos: "",
            link: "https://news.cctv.cn/2025/05/14/ARTIUZdgvS22TlXHq8tT9YP9250514.shtml",
        },
        {
            id: 5,
            date: "5月15日 中国科学报",
            title: "把人工智能送上天！“三体计算星座”首发奏凯",
            image: "/国家级媒体报道/5月15日 中国科学报 把人工智能送上天.png?height=200&width=300",
            pic_pos: "",
            link: "https://baijiahao.baidu.com/s?id=1832268525217580154&wfr=spider&for=pc",
        }
        ,
        {
            id: 6,
            date: "5月15日 人民日报",
            title: "我国整轨互联太空计算星座正式进入组网阶段",
            image: "/国家级媒体报道/5月15日 人民日报 我国整轨互联太空计算星座正式进入组网阶段.png?height=200&width=300",
            pic_pos: "",
            link: "https://paper.people.com.cn/rmrb/pc/content/202505/15/content_30073253.html",
        }
        ,
        {
            id: 7,
            date: "5月15日 人民日报海外版",
            title: "中国首个太空计算星座进入组网阶段",
            image: "/国家级媒体报道/5月15日 人民日报 我国整轨互联太空计算星座正式进入组网阶段.png?height=200&width=300",
            pic_pos: "",
            link: "https://paper.people.com.cn/rmrbhwb/pc/content/202505/15/content_30073159.html",
        }
        ,
        {
            id: 8,
            date: "5月15日 光明日报",
            title: "一箭十二星，把算力送到太空——太空计算卫星星座成功发射",
            image: "/国家级媒体报道/5月15日 光明日报 一箭十二星 把算力送到太空.png?height=200&width=300",
            pic_pos: "",
            link: "https://epaper.gmw.cn/gmrb/html/2025-05/15/nw.D110000gmrb_20250515_1-08.htm",
        }
        ,
        {
            id: 9,
            date: "5月15日 央视新闻",
            title: "首个太空计算卫星星座成功入轨 中国星座点亮“AI”星云",
            image: "/国家级媒体报道/5月15日 央视新闻 首个太空计算卫星星座成功入轨.png?height=200&width=300",
            pic_pos: "",
            link: "https://news.cctv.cn/2025/05/14/ARTIUZdgvS22TlXHq8tT9YP9250514.shtml",
        }
        ,
        {
            id: 10,
            date: "5月15日 新华每日电讯",
            title: "首个太空计算卫星星座成功入轨 中国星座点亮“AI”星云",
            image: "/国家级媒体报道/5月15日 新华每日电讯 具备太空在轨计算能力.png?height=200&width=300",
            pic_pos: "",
            link: "https://h.xinhuaxmt.com/vh512/share/12540405?docid=12540405&newstype=1001&d=134ff92&channel=weixin&time=1747217982931",
        }
        ,
        {
            id: 11,
            date: "5月15日 环球时报",
            title: "把人工智能送上天， 我国发射首个太空计算星座",
            image: "/国家级媒体报道/5月15日 环球时报 把人工智能送上天.jpg?height=200&width=300",
            pic_pos: "",
            link: "https://china.huanqiu.com/article/4MgHWUO34As",
        }
        ,
        {
            id: 12,
            date: "5月16日 经济参考报",
            title: "太空计算星座成功入轨，意味着什么？",
            image: "/国家级媒体报道/5月16日 经济参考报 太空计算星座成功入轨 意味着什么.png?height=200&width=300",
            pic_pos: "",
            link: "https://www.xinhuanet.com/tech/20250516/3cbe4b97134542a49ddd696d491119c3/c.html",
        }
        ,
        {
            id: 13,
            date: "5月18日 经济日报",
            title: "人工智能开启太空经济新格局",
            image: "/国家级媒体报道/5月18日 经济日报 人工智能开启太空经济新格局.png?height=200&width=300",
            pic_pos: "",
            link: "http://www.ce.cn/xwzx/gnsz/gdxw/202505/18/t20250518_39360861.shtml",
        },
        {
            id: 14,
            date: "5月19日 中国青年报",
            title: "算力飞上天——记浙江省之江实验室三体计算星座科研团队",
            image: "/国家级媒体报道/5月19日 中国青年报 算力飞上天.png?height=200&width=300",
            pic_pos: "",
            link: "https://zqb.cyol.com/pc/content/202505/19/content_411109.html",
        }
        ,
        {
            id: 15,
            date: "5月19日 科技日报",
            title: "“三体计算星座”为啥把计算送上天",
            image: "/国家级媒体报道/5月19日 科技日报 三体计算星座为啥把计算送上天.png?height=200&width=300",
            pic_pos: "",
            link: "https://digitalpaper.stdaily.com/http_www.kjrb.com/kjrb/html/2025-05/19/content_588771.htm?div=-1",
        }
        ,
        {
            id: 16,
            date: "5月20日 中国新闻网",
            title: "探秘之江实验室“三体计算星座”：展示国际协作生态",
            image: "/国家级媒体报道/5月20日 中国新闻网 揭秘之江实验室三体计算星座.png?height=200&width=300",
            pic_pos: "",
            link: "https://www.chinanews.com.cn/sh/shipin/cns/2025/05-23/news1021200.shtml",
        }
    ]

    const timeline = [
        {
            date: "5月14日",
            event: "太空计算卫星星座成功发射，一箭十二星，将人工智能送上太空",
        },
        {
            date: "5月15日",
            event: "我国整轨互联太空计算卫星星座正式进入组网阶段",
        },
        {
            date: "5月17日",
            event: "之江实验室牵头组建我国首个整轨互联太空计算星座",
        },
        {
            date: "6月18日",
            event: '之江实验室"三体计算星座"上天满月太空算网',
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
            {/* Hero Section */}
            <section
                className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 lg:min-h-screen">
                {/*<section className="relative overflow-hidden*/}
                {/*       bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900*/}
                {/*        /!*min-h-[1000rpx]*!/*/}
                {/*        lg:min-h-screen">*/}
                <div className="absolute inset-0">
                    <div
                        className="
                          absolute inset-0
                          bg-[url('/封面图片/背景.jpg')]
                          bg-cover bg-center
                          opacity-50
                        "
                    />
                </div>

                <div className="relative container mx-auto px-4 sm:px-6 py-20 lg:py-36">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/*<div className="relative container mx-auto px-4 py-36">*/}
                {/*    <div className="grid lg:grid-cols-2 gap-12 items-center">*/}
                        {/*<div className="space-y-8 text-white">*/}
                        {/*<div className="flex flex-col items-center space-y-4 lg:space-y-6 text-white">*/}
                        <div className="flex flex-col items-center space-y-2 sm:space-y-4 lg:space-y-6 text-white">
                            {/*<div className="flex flex-col items-center space-y-8 text-white">*/}
                            <h1 className="text-2xl sm:text-[2.6rem] lg:text-[4.3rem] font-bold leading-tight whitespace-normal sm:whitespace-nowrap text-center">
                                “三体计算星座”首次发射
                            </h1>
                            <h1 className="text-2xl sm:text-[2.6rem] lg:text-[4.3rem] font-bold leading-tight whitespace-normal sm:whitespace-nowrap text-center">
                                媒体相关报道
                            </h1>

                            <h1 className="text-base sm:text-[1.8rem] lg:text-[2rem] font-bold leading-tight text-center">
                                “三体计算星座” 目标：1000颗计算卫星或E规模的算力
                            </h1>
                            <div className="!mt-10 !mb-5 flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-24">
                                <Button
                                    size="lg"
                                    className="transform scale-100 sm:scale-[1.15] lg:scale-[1.35] bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-4 text-sm sm:text-lg"
                                    onClick={() => document.getElementById("national")?.scrollIntoView({behavior: "smooth"})}
                                >
                                    国家级媒体报道
                                </Button>
                                <Button
                                    size="lg"
                                    className="transform scale-100 sm:scale-[1.15] lg:scale-[1.35] bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-4 text-sm sm:text-lg"
                                    onClick={() => document.getElementById("provincial")?.scrollIntoView({behavior: "smooth"})}
                                >
                                    省级媒体报道
                                </Button>
                            </div>
                            <h3 className="text-base sm:text-[1.25rem] lg:text-[1.4rem] font-bold leading-tight text-center">
                                诚邀全球伙伴共建“三体计算星座”
                            </h3>
                            <h3 className="text-base sm:text-[1.25rem] lg:text-[1.4rem] font-bold leading-tight text-center">
                                共同探索太空计算的无限可能
                            </h3>
                            {/* 联系我们 */}
                            <div className="flex flex-col items-center lg:ml-4">
                                {/* 二维码 */}
                                <div className="w-24 h-24 mt-10">
                                    <Image
                                        src="/homepage_qrcode.png"
                                        alt="联系我们二维码"
                                        width={80} height={80}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                {/* 文字 */}
                                <p className="mt-2 text-white text-lg">联系我们</p>
                            </div>
                        </div>
                        <div className="relative w-full lg:w-4/5 mx-auto mt-8 lg:mt-0">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/封面图片/前景.jpg"
                                    alt="太空计算星座发射场景"
                                    width={700}
                                    height={500}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* National Media Section */}
            <section id="national" className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">国家级媒体报道</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/*{nationalNews.map(item => (*/}
                        {/*    <div*/}
                        {/*        key={item.id}*/}
                        {/*        className="block group hover:shadow-xl … cursor-pointer"*/}
                        {/*        onClick={e => {*/}
                        {/*            e.preventDefault()*/}
                        {/*            setReaderUrl(item.link)*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*    </div>*/}
                        {/*))}*/}
                        {nationalNews.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                <Card key={item.id}
                                      className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                                    <CardContent className="p-0">
                                        <div className="relative overflow-hidden rounded-t-lg">
                                            <Image
                                                src={item.image || "/placeholder.svg"}
                                                alt={item.title}
                                                width={300}
                                                height={200}
                                                style={{
                                                    // 把 pic_pos 中的 "_" 换成空格，得到 "center 1rem"
                                                    objectPosition: item?.pic_pos.replace(/_/g, ' ')
                                                }}
                                                className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4 space-y-3 h-[6rem]">
                                            <p className="text-sm text-blue-600 font-medium">{item.date}</p>
                                            <h3 className="max-h-[2.5rem] text-sm font-medium text-gray-900 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </CardContent>
                                </Card>
                            </a>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button variant="outline" size="lg"
                                onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
                            返回首页
                        </Button>
                    </div>
                </div>
            </section>

            {/* Provincial Media Section */}
            <section id="provincial" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">省级媒体报道</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {provincialNews.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                <Card key={item.id}
                                      className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                                    <CardContent className="p-0">
                                        <div className="relative overflow-hidden rounded-t-lg">
                                            <Image
                                                src={item.image || "/placeholder.svg"}
                                                alt={item.title}
                                                width={300}
                                                height={200}
                                                style={{
                                                    // 把 pic_pos 中的 "_" 换成空格，得到 "center 1rem"
                                                    objectPosition: item?.pic_pos.replace(/_/g, ' ')
                                                }}
                                                className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4 space-y-3 h-[6rem]">
                                            <p className="text-sm text-blue-600 font-medium">{item.date}</p>
                                            <h3 className="max-h-[2.5rem] text-sm font-medium text-gray-900 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </CardContent>
                                </Card>
                            </a>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button variant="outline" size="lg"
                                onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
                            返回首页
                        </Button>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            {/*<section id="timeline" className="py-20 bg-white">*/}
            {/*  <div className="container mx-auto px-4">*/}
            {/*    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">三体计算星座时间线</h2>*/}

            {/*    /!* Timeline Image *!/*/}
            {/*    <div className="mb-16 text-center">*/}
            {/*      <Image*/}
            {/*        src="/placeholder.svg?height=400&width=800"*/}
            {/*        alt="三体计算星座技术示意图"*/}
            {/*        width={800}*/}
            {/*        height={400}*/}
            {/*        className="mx-auto rounded-lg shadow-lg"*/}
            {/*      />*/}
            {/*    </div>*/}

            {/*    /!* Timeline Steps *!/*/}
            {/*    <div className="max-w-4xl mx-auto">*/}
            {/*      <div className="relative">*/}
            {/*        /!* Timeline Line *!/*/}
            {/*        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>*/}

            {/*        {timeline.map((item, index) => (*/}
            {/*          <div key={index} className="relative flex items-start mb-12">*/}
            {/*            /!* Timeline Dot *!/*/}
            {/*            <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">*/}
            {/*              {index + 1}*/}
            {/*            </div>*/}

            {/*            /!* Timeline Content *!/*/}
            {/*            <div className="ml-8 bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 flex-1">*/}
            {/*              <h3 className="text-xl font-bold text-blue-600 mb-2">{item.date}</h3>*/}
            {/*              <p className="text-gray-700 leading-relaxed">{item.event}</p>*/}
            {/*            </div>*/}
            {/*          </div>*/}
            {/*        ))}*/}
            {/*      </div>*/}
            {/*    </div>*/}

            {/*    <div className="text-center mt-12">*/}
            {/*      <Button variant="outline" size="lg" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>*/}
            {/*        返回首页*/}
            {/*      </Button>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</section>*/}

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">三体计算星座</h3>
                        <p className="text-gray-400 mb-6">推动太空计算技术发展，开启人工智能太空新时代</p>
                        <div className="flex justify-center space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                关于我们
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                新闻中心
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                技术支持
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                联系我们
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            {/*{readerUrl && (*/}
            {/*    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">*/}
            {/*        <div className="relative w-[90vw] h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl">*/}
            {/*            <button*/}
            {/*                onClick={() => setReaderUrl(null)}*/}
            {/*                className="absolute top-2 right-2 z-10 p-2 bg-black/30 rounded-full text-white"*/}
            {/*            >*/}
            {/*                ✕*/}
            {/*            </button>*/}
            {/*            <iframe*/}
            {/*                src={readerUrl}*/}
            {/*                className="w-full h-full"*/}
            {/*                sandbox="allow-scripts allow-same-origin allow-forms"*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    )
}
