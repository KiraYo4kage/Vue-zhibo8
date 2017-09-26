import { router } from '../main'

export default {
  getHeader({ commit },payload) {
    commit('avatar','http://tb.himg.baidu.com/sys/portrait/item/369ee9a1ba313339260a')
    commit('title','直播吧')
    commit('icons',[{
      src: '/icon_mall.png',
      path: ''
    },{
      src: '/z_game.png',
      path: ''
    }])
  },
  jump({ state }, path) {
    router.push(state.config.pathRoot + path)
  }
}
