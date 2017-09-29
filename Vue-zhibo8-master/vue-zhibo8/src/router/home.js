import Bbs from '@/views/home/Bbs'
import News from '@/views/home/News'
import Follow from '@/views/home/Follow'
import Important from '@/views/home/Important'
import All from '@/views/home/All'
import Finish from '@/views/home/Finish'

export default [
  {
    path: '/layout/home',
    components:{
      bbs: Bbs,
      news: News,
      follow: Follow,
      important: Important,
      all: All,
      finish: Finish
    }
    // redirect: './important'
  },
  // {
  //   path: '/layout/home/important',
  //   component: Important
  // },
  // {
  //   path: '/layout/home/all',
  //   component: All
  // }
]
