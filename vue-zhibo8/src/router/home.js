import Important from '@/views/home/Important'
import All from '@/views/home/All'

export default [
  {
    path: '/layout/home',
    redirect: './important'
  },
  {
    path: '/layout/home/important',
    component: Important
  },
  {
    path: '/layout/home/all',
    component: All
  }
]
