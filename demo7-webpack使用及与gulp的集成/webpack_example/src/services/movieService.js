import config from '../js/config.js'
export default {
    getMovieListData(){
        return new Promise(function (resolve,reject) {

            var data={
                "count": 10,
                "start": 6,
                "total": 73,
                "subjects": [
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "喜剧"
                        ],
                        "title": "乘风破浪",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1274235/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/805.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/805.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/805.jpg"
                                },
                                "name": "邓超",
                                "id": "1274235"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1013782/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/1368156632.65.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/1368156632.65.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1368156632.65.jpg"
                                },
                                "name": "彭于晏",
                                "id": "1013782"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1275620/",
                                "avatars": {
                                    "small": "https://img5.doubanio.com/img/celebrity/small/1460551151.6.jpg",
                                    "large": "https://img5.doubanio.com/img/celebrity/large/1460551151.6.jpg",
                                    "medium": "https://img5.doubanio.com/img/celebrity/medium/1460551151.6.jpg"
                                },
                                "name": "赵丽颖",
                                "id": "1275620"
                            }
                        ],
                        "collect_count": 292,
                        "original_title": "乘风破浪",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1275307/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/11673.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/11673.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/11673.jpg"
                                },
                                "name": "韩寒",
                                "id": "1275307"
                            }
                        ],
                        "year": "2017",
                        "images": {
                            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2408407697.jpg",
                            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2408407697.jpg",
                            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2408407697.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26862259/",
                        "id": "26862259"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "剧情",
                            "喜剧",
                            "奇幻"
                        ],
                        "title": "健忘村",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1138320/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/1268.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/1268.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1268.jpg"
                                },
                                "name": "舒淇",
                                "id": "1138320"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1314827/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/1445948736.67.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/1445948736.67.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1445948736.67.jpg"
                                },
                                "name": "王千源",
                                "id": "1314827"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1014743/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/19418.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/19418.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/19418.jpg"
                                },
                                "name": "张孝全",
                                "id": "1014743"
                            }
                        ],
                        "collect_count": 196,
                        "original_title": "健忘村",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1280588/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/37271.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/37271.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/37271.jpg"
                                },
                                "name": "陈玉勋",
                                "id": "1280588"
                            }
                        ],
                        "year": "2017",
                        "images": {
                            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2412370372.jpg",
                            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2412370372.jpg",
                            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2412370372.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26717795/",
                        "id": "26717795"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "喜剧",
                            "动作",
                            "冒险"
                        ],
                        "title": "大闹天竺",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1274388/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/1356403251.95.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/1356403251.95.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1356403251.95.jpg"
                                },
                                "name": "王宝强",
                                "id": "1274388"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1332932/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/1408723693.25.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/1408723693.25.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1408723693.25.jpg"
                                },
                                "name": "白客",
                                "id": "1332932"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1317663/",
                                "avatars": {
                                    "small": "https://img5.doubanio.com/img/celebrity/small/40756.jpg",
                                    "large": "https://img5.doubanio.com/img/celebrity/large/40756.jpg",
                                    "medium": "https://img5.doubanio.com/img/celebrity/medium/40756.jpg"
                                },
                                "name": "岳云鹏",
                                "id": "1317663"
                            }
                        ],
                        "collect_count": 723,
                        "original_title": "大闹天竺",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1274388/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/1356403251.95.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/1356403251.95.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1356403251.95.jpg"
                                },
                                "name": "王宝强",
                                "id": "1274388"
                            }
                        ],
                        "year": "2017",
                        "images": {
                            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2408307430.jpg",
                            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2408307430.jpg",
                            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2408307430.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26389696/",
                        "id": "26389696"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "喜剧",
                            "动作",
                            "冒险"
                        ],
                        "title": "功夫瑜伽",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1054531/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/694.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/694.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/694.jpg"
                                },
                                "name": "成龙",
                                "id": "1054531"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1274292/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/10300.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/10300.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/10300.jpg"
                                },
                                "name": "李治廷",
                                "id": "1274292"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1338949/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/1445870461.85.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/1445870461.85.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1445870461.85.jpg"
                                },
                                "name": "张艺兴",
                                "id": "1338949"
                            }
                        ],
                        "collect_count": 98,
                        "original_title": "功夫瑜伽",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1299382/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/18712.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/18712.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/18712.jpg"
                                },
                                "name": "唐季礼",
                                "id": "1299382"
                            }
                        ],
                        "year": "2017",
                        "images": {
                            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2412371389.jpg",
                            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2412371389.jpg",
                            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2412371389.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26182910/",
                        "id": "26182910"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "儿童",
                            "动画"
                        ],
                        "title": "熊出没·奇幻空间",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1276093/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/13497.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/13497.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/13497.jpg"
                                },
                                "name": "尚雯婕",
                                "id": "1276093"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1319975/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/48423.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/48423.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/48423.jpg"
                                },
                                "name": "鲍春来",
                                "id": "1319975"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1358840/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/1465538991.83.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/1465538991.83.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1465538991.83.jpg"
                                },
                                "name": "孙建弘",
                                "id": "1358840"
                            }
                        ],
                        "collect_count": 151,
                        "original_title": "熊出没·奇幻空间",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1336904/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/1451195637.94.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/1451195637.94.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1451195637.94.jpg"
                                },
                                "name": "丁亮",
                                "id": "1336904"
                            }
                        ],
                        "year": "2017",
                        "images": {
                            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2399223912.jpg",
                            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2399223912.jpg",
                            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2399223912.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26831711/",
                        "id": "26831711"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "动画",
                            "奇幻"
                        ],
                        "title": "封神道：哪吒闹海",
                        "casts": [],
                        "collect_count": 13,
                        "original_title": "封神道：哪吒闹海",
                        "subtype": "movie",
                        "directors": [],
                        "year": "2017",
                        "images": {
                            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2356655309.jpg",
                            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2356655309.jpg",
                            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2356655309.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26426329/",
                        "id": "26426329"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "儿童",
                            "喜剧"
                        ],
                        "title": "老师也疯狂",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1325632/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/1355194841.9.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/1355194841.9.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1355194841.9.jpg"
                                },
                                "name": "韩立",
                                "id": "1325632"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1275005/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/1466842663.27.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/1466842663.27.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1466842663.27.jpg"
                                },
                                "name": "贡米",
                                "id": "1275005"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1314005/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/21302.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/21302.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/21302.jpg"
                                },
                                "name": "方青卓",
                                "id": "1314005"
                            }
                        ],
                        "collect_count": 13,
                        "original_title": "老师也疯狂",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": null,
                                "avatars": null,
                                "name": "赵宏丽",
                                "id": null
                            }
                        ],
                        "year": "2016",
                        "images": {
                            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2384342228.jpg",
                            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2384342228.jpg",
                            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2384342228.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26628239/",
                        "id": "26628239"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 7.5,
                            "stars": "40",
                            "min": 0
                        },
                        "genres": [
                            "喜剧",
                            "动画",
                            "冒险"
                        ],
                        "title": "了不起的菲丽西",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1025133/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/17594.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/17594.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/17594.jpg"
                                },
                                "name": "艾丽·范宁",
                                "id": "1025133"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1317646/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/40783.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/40783.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/40783.jpg"
                                },
                                "name": "戴恩·德哈恩",
                                "id": "1317646"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1363232/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/1476276708.19.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/1476276708.19.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1476276708.19.jpg"
                                },
                                "name": "麦迪·齐格勒",
                                "id": "1363232"
                            }
                        ],
                        "collect_count": 69,
                        "original_title": "Ballerina",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1363229/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                    "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                    "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                                },
                                "name": "艾瑞克·莎莫",
                                "id": "1363229"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1363230/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                    "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                    "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                                },
                                "name": "艾瑞克·韦林",
                                "id": "1363230"
                            }
                        ],
                        "year": "2016",
                        "images": {
                            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2392962019.jpg",
                            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2392962019.jpg",
                            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2392962019.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26382767/",
                        "id": "26382767"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "喜剧",
                            "动作"
                        ],
                        "title": "东北往事之破马张飞",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1276135/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/1357721264.37.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/1357721264.37.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1357721264.37.jpg"
                                },
                                "name": "贾乃亮",
                                "id": "1276135"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1316726/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/37324.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/37324.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/37324.jpg"
                                },
                                "name": "马丽",
                                "id": "1316726"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1317139/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/1371453539.51.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/1371453539.51.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1371453539.51.jpg"
                                },
                                "name": "王迅",
                                "id": "1317139"
                            }
                        ],
                        "collect_count": 79,
                        "original_title": "东北往事之破马张飞",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1352793/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/1451286288.54.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/1451286288.54.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1451286288.54.jpg"
                                },
                                "name": "郭大雷",
                                "id": "1352793"
                            }
                        ],
                        "year": "2017",
                        "images": {
                            "small": "https://img5.doubanio.com/view/movie_poster_cover/ipst/public/p2413341026.jpg",
                            "large": "https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2413341026.jpg",
                            "medium": "https://img5.doubanio.com/view/movie_poster_cover/spst/public/p2413341026.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26691509/",
                        "id": "26691509"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "喜剧",
                            "动画",
                            "家庭"
                        ],
                        "title": "冰雪大作战",
                        "casts": [
                            {
                                "alt": null,
                                "avatars": null,
                                "name": "Angela Galuppo",
                                "id": null
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1014499/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/4872.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/4872.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/4872.jpg"
                                },
                                "name": "Mariloup Wolfe",
                                "id": "1014499"
                            },
                            {
                                "alt": null,
                                "avatars": null,
                                "name": "Lucinda Davis",
                                "id": null
                            }
                        ],
                        "collect_count": 17,
                        "original_title": "Snowtime!",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1294799/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                    "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                    "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                                },
                                "name": "Jean-François Pouliot",
                                "id": "1294799"
                            },
                            {
                                "alt": null,
                                "avatars": null,
                                "name": "François Brisson",
                                "id": null
                            }
                        ],
                        "year": "2015",
                        "images": {
                            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2316440513.jpg",
                            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2316440513.jpg",
                            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2316440513.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26681656/",
                        "id": "26681656"
                    }
                ],
                "title": "即将上映的电影"
            }
            setTimeout(function () {
                resolve(data)
            },3000)




            // let url=`${config.HTTP}${config.SERVER_PATH}:${config.PORT}/getMovieListData`
            // fetch(url)
            //     .then((response) => {
            //         if (response.ok) {
            //             return response.json()
            //         } else {
            //             console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
            //         }
            //     })
            //     .then((result) => {
            //
            //     })
            //     .catch((err)=> {
            //         reject(err)
            //     })
        })
    },
    getMovieDetailData(){

    },
    SearchMovieData(){

    }
}