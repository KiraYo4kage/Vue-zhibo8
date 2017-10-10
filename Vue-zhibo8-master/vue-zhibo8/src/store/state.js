export default {
  config: {
    pathRoot: '/layout',
    imgRoot: '../static/',
  },
  lefter: {
    show: false
  },
  header: {
    avatar: '',
    title: '',
    icon: [],
    navBar: []
  },
  footer: [{
    name: '主页',
    img: {off:'home_off.png',on:'home_on.png'},
    path: '/home'
  },{
    name: '视频',
    img: {off:'video_off.png',on:'video_on.png'},
    path: '/video'
  },{
    name: '新闻',
    img: {off:'news_off.png',on:'news_on.png'},
    path: '/news'
  },{
    name: '论坛',
    img: {off:'bbs_off.png',on:'bbs_on.png'},
    path: '/bbs'
  },{
    name: '数据',
    img: {off:'grade_off.png',on:'grade_on.png'},
    path: '/grade'
  }]
}
