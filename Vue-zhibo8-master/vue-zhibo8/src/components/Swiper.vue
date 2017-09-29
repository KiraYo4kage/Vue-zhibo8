<template>
  <div class="swiper flex"
    :style="`transform: translate3d(${translate}px, 0, 0)`"
    @touchstart="touchStart($event)"
    @touchmove.prevent.stop="touchMove($event)"
    @touchend="touchEnd($event)"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'swiper',
  props: {
    option: {
      type: Object,
      default: {
        width: 0,//容器宽度，不传则为body宽度
        pages: 1,//轮播页数
        default: 0,//默认显示第几页
        offsetLeft: 0//初始向左偏移量
      }
    },
    dragToTranslate: Function,
    dragToChangeNav: Function
  },
  data() {
    return {
      startX: 0,
      startY: 0,
      orient: 0,//0,1,2代表初始、纵、横方向拖动
      initialPos: 0,//初始的translateX
      translate: 0
    }
  },
  computed: {
    clientWidth() {
      return this.option.width || this.$el.clientWidth
    }
  },
  mounted() {
    this.$nextTick(() => this.translate = this.initialPos -= this.option.default * this.clientWidth - this.option.offsetLeft)//初始化translateX
  },
  watch: {
    translate: function() {
      if(this.option.pages > 1) {
        let percent = (this.translate - this.initialPos) / this.clientWidth
        this.dragToTranslate && this.dragToTranslate(percent)
      }
    }
  },
  methods: {
    touchStart(e) {
      this.startX = e.touches[0].pageX
      this.startY = e.touches[0].pageY
    },
    touchMove(e) {
      let distX = e.touches[0].pageX - this.startX,
          distY = e.touches[0].pageY - this.startY

      if(!this.orient) {//首先判断拖动方向
        if(Math.abs(distX) <= Math.abs(distY)) {//竖向移动时不执行swipe
          this.orient = 1
          return
        }else{
          this.orient = 2
        }
      }

      if(this.orient === 2) {
        let translate = this.initialPos + distX
        if(translate < 0 && translate >  this.option.offsetLeft - this.clientWidth * (this.option.pages - 1))
        this.translate = translate
      }
    },
    touchEnd(e) {
      let dist = e.changedTouches[0].pageX - this.startX
      if(Math.abs(dist) * 2 <= this.clientWidth) {//拖动距离小于一半不切换
        this.translate = this.initialPos
      }else{
        if(this.translate < 0 && this.translate > this.option.offsetLeft - this.clientWidth * (this.option.pages - 1)){//切换页面
          this.initialPos = this.translate = this.initialPos + (dist > 0 ? 1 : -1) * (this.clientWidth - this.option.offsetLeft)
          this.dragToChangeNav && this.dragToChangeNav(dist < 0)
        }
      }

      this.orient = 0
      this.startX = 0
      this.startY = 0
    },
    autoSwipe(page) {
      this.initialPos = this.translate = -(this.clientWidth - this.option.offsetLeft) * (page - 1)
    }
  }
}
</script>

<style scoped>
.swiper{
  width: 100%;
  height: 100%;
  overflow: visible;
}
</style>
