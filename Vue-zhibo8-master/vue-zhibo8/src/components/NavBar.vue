<template>
  <div class="navBar flex">
      <div v-for="(tab,index) in header.navBar" class="flex-1"
        :key="index"
        :class="tab.selected ? 'selected' : ''"
        @click="jump(index)"
      >
        {{ tab.name }}
      </div>
      <div class="slider flex-1" v-if="header.navBar.length" :style="`width: ${width}px;height: ${height}px;left: ${left}px`"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'navBar',
  props: ['translate','autoSwipe'],
  data() {
    return {
      dom: null,
      offsetLeft: 0
    }
  },
  computed: {
    ...mapGetters(['config', 'header']),
    width() {
      if(!this.dom) return 0
      return this.dom.clientWidth / this.header.navBar.length
    },
    height() {
      if(!this.dom) return 0
      return this.dom.clientHeight
    },
    left() {
      this.moveSlider()
      return -this.translate * this.width + this.offsetLeft
    }
  },
  mounted() {
    this.$nextTick(() => this.dom = this.$el)
    this.$nextTick(this.moveSlider)
  },
  methods: {
    moveSlider() {
      if(!this.dom) return 0
      this.offsetLeft = this.dom.getElementsByClassName('selected')[0] ? this.dom.getElementsByClassName('selected')[0].offsetLeft : 0
    },
    jump(index) {
      this.header.navBar.forEach((v,i) => {
        if(i === index) v.selected = true
        else v.selected = false
      })
      this.$nextTick(this.moveSlider)
      this.autoSwipe(index + 1)
      console.log(index+1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBar{
  height: 30px;
  line-height: 30px;
  font-weight: 500;
  flex-shrink: 0;
  font-size: 14px;
}
.tab{
  flex: 1;
}
.selected{
  color: #239DFF;
}
.slider{
  border-bottom: 3px solid #239DFF;
  position: absolute;
  align-self: stretch;
  box-sizing: border-box;
}
</style>
