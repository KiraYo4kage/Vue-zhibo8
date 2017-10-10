<template>
  <div class="home flex">
    <nav-header :doInfo="doInfo"></nav-header>
    <nav-bar :translate="translate" :autoSwipe="autoSwipe"></nav-bar>
    <swiper :option="option" :dragToTranslate="dragToTranslate" :dragToChangeNav="dragToChangeNav" ref="swiper">
      <template v-for="item in header.navBar">

        <template v-if="!item.scroller">
          <my-scroller class="list-content">
            <router-view :style="'background:#fff;'" :name="item.path"></router-view>
          </my-scroller>
        </template>

        <template v-else>
          <router-view :style="'background:#fff;'"></router-view>
        </template>

      </template>
    </swiper>
  </div>
</template>

<script>
import router from 'vue-router'
import { mapGetters, mapActions } from 'vuex'
import NavHeader from '@/components/Header'
import NavBar from '@/components/NavBar'
import Swiper from '@/components/Swiper'
import MyScroller from '@/components/MyScroller'


export default {
  name: 'home',
  components: { NavHeader, NavBar, MyScroller, Swiper },
  props: ['doInfo'],
  data() {
    return {
      option: {
        pages: 6,
        default: 3,
        offsetLeft: 0
      },
      translate: 0
    }
  },
  computed: {
    ...mapGetters(['header']),
    top() {
      return 50 + (this.header.navBar.length ? 30 : 0);
    }
  },
  mounted(){
    this.header.navBar = [{
      name: '论坛',
      path: 'bbs',
      selected: false
    },{
      name: '新闻',
      path: 'news',
      selected: false
    },{
      name: '关注',
      path: 'follow',
      selected: false
    },{
      name: '重要',
      path: 'important',
      selected: true
    },{
      name: '全部',
      path: 'all',
      selected: false
    },{
      name: '完赛',
      path: 'finish',
      selected: false
    }]
  },
  methods: {
    autoSwipe(page) {
      this.$refs.swiper.autoSwipe(page)
    },
    dragToTranslate(percent) {//根据当前swiper拖动位置改变navbar显示
      this.translate = percent
    },
    dragToChangeNav(boolean) {
      let next = boolean ? 1 : -1
      for(let [index,item] of this.header.navBar.entries()){
        if(item.selected){
          item.selected = false
          this.header.navBar[ index + next ].selected = true
          break
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  flex-direction: column;
}
.list-content{
  /*overflow: auto;*/
  flex-shrink: 0;
  position: relative;
}
</style>
