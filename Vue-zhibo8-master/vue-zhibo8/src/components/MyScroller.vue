<template>
  <scroller :style="`top: ${top}px;height: ${height}px!important`" class="myScroller"
    :on-refresh="refresh"
    :beforeRefresh="beforeRefresh"
    @touchstart.native="touchStart($event)"
    @touchmove.native="touchMove($event)"
    @touchend.native="touchEnd($event)"
  >
    <template slot="pull-spinner">
      <svg class="circleProcess" :style="`transform: rotate(${angle}deg)`" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <circle cx="50%" cy="50%" r="40%" stroke-width="1" stroke-dashoffset="30%"></circle>
      </svg>
      <span class="text">{{ text[state] }}</span>
    </template>
    <template slot="refresh-spinner">
      <svg class="circleProcess" :style="`transform: rotate(${angle}deg)`" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <circle cx="50%" cy="50%" r="40%" stroke-width="1" stroke-dashoffset="30%"></circle>
      </svg>
      <span class="text">{{ text[state] }}</span>
    </template>


    <slot></slot>
  </scroller>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'myScroller',
  props: [],
  data() {
    return {
      start: 0,//下拉起始位置
      startX: 0,
      startY: 0,
      orient: 0,//0,1,2代表初始、纵、横方向拖动
      angle: -90,//进度条起始位置
      speed: 45,//进度条转动速度
      text: ['下拉刷新','释放刷新','正在载入'],//下拉文字
      state: 0,//下拉状态
      bgColor: '#eee'//下拉区域背景色
    }
  },
  computed: {
    ...mapGetters(['header']),
    loadingDom() {//下拉区域元素
      return this.$el.getElementsByClassName('pull-to-refresh-layer')[0]
    },
    top() {//下拉组件垂直偏移量
      // return 50 + (this.header.navBar.length ? 30 : 0)
      return 0
    },
    height() {//下拉组件高度
      return document.body.clientHeight - 80
    }
  },
  methods: {
    refresh(done) {
      setTimeout(() => console.log('refreshing',done(),this.state = 0),3000)
    },
    touchStart(e) {
      if (e.target.tagName.match(/input|textarea|select/i)) {
        return
      }
      if(this.state === 2) return
      this.startX = e.touches[0].pageX
      this.startY = e.touches[0].pageY
      this.start = this.loadingDom.getBoundingClientRect().top//这里获取加载层div距离页面顶部的距离，而不是触摸拖动距离
    },
    touchMove(e) {
      e.preventDefault()
      if(this.state === 2) return

      let distX = e.touches[0].pageX - this.startX,
          distY = e.touches[0].pageY - this.startY

      if(!this.orient) {//首先判断拖动方向
        if(Math.abs(distX) <= Math.abs(distY)) {
          this.orient = 1
        }else{
          this.orient = 2//横向移动时不执行swipe
          return
        }
      }

      if(this.orient === 1) {
        let dist = this.loadingDom.getBoundingClientRect().top - this.start
        this.angle = dist/200 * 360 - 90
        this.state = dist <= 60 ? 0 : 1
      }
    },
    touchEnd(e) {
      e.preventDefault()
      let dist = this.loadingDom.getBoundingClientRect().top - this.start
      this.start = 0
      this.orient = 0
      if(dist <= 60) return//缓慢松开不刷新
      this.state = 2
      let timer = setInterval( () => {
        if(this.state !== 2){
          this.angle = -90
          clearInterval(timer)
          return
        }
        this.angle += this.speed
      }, 100)
    },
    beforeRefresh() {
      return this.orient === 1
    }
  }
}
</script>
<style scoped>
.myScroller{
  background: #eee!important;
}
.circleProcess {
  position: relative;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  stroke-dasharray: 255%;
  stroke-dashoffset: 255%;
  stroke: #239DFF;
  fill: #eee;
  vertical-align: middle;
  margin-bottom: -40px;
}
.text{
  position: relative;
  bottom: -20px;
  display: inline-block!important;
  height: 20px;
  line-height: 20px;
  font-size: 12px!important;
  color: #2c3e50!important;
}
</style>
