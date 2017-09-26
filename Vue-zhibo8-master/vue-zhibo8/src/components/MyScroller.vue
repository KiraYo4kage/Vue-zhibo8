<template>
  <scroller :style="`top: ${top}px`" class="myScroller"
    :on-refresh="refresh"
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
      start: 0,
      end: 0,
      angle: -90,
      text: ['下拉刷新','释放刷新','正在载入'],
      state: 0,
      bgColor: '#eee'
    }
  },
  computed: {
    ...mapGetters(['header']),
    top() {
      return 50 + (this.header.navBar.length ? 30 : 0);
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
      this.start = e.touches[0].pageY
    },
    touchMove(e) {
      e.preventDefault()
      if(this.state === 2) return
      let dist = e.touches[0].pageY - this.start
      this.angle = dist/200 * 360 - 90
      this.state = dist <= 100 ? 0 : 1
    },
    touchEnd(e) {
      e.preventDefault()
      let dist = e.changedTouches[0].pageY - this.start
      if(dist <= 100) return//缓慢松开不刷新
      this.state = 2
      let timer = setInterval( () => {
        if(this.state !== 2){
          this.angle = -90
          clearInterval(timer)
          return
        }
        this.angle -= 45
      }, 100)
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
