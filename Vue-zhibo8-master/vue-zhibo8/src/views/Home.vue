<template>
  <div class="home flex">
    <nav-header></nav-header>
    <nav-bar></nav-bar>
    <my-scroller class="list-content">
      <router-view :style="'background:#fff;'"></router-view>
    </my-scroller>
  </div>
</template>

<script>
import router from 'vue-router'
import { mapGetters, mapActions } from 'vuex'
import NavHeader from '@/components/Header'
import NavBar from '@/components/NavBar'
import MyScroller from '@/components/MyScroller'


export default {
  name: 'home',
  components: { NavHeader, NavBar, MyScroller },
  computed: {
    ...mapGetters(['header']),
    top() {
      return 50 + (this.header.navBar.length ? 30 : 0);
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.header.navBar = [{
      name: '论坛',
      path: '/home/bbs',
      selected: false
    },{
      name: '新闻',
      path: '/home/news',
      selected: false
    },{
      name: '关注',
      path: '/home/follow',
      selected: false
    },{
      name: '重要',
      path: '/home/important',
      selected: true
    },{
      name: '全部',
      path: '/home/all',
      selected: false
    },{
      name: '完赛',
      path: '/home/finish',
      selected: false
    }]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  flex-direction: column;
}
.list-content{
  overflow: auto;
}
</style>
