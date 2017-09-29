<template>
  <div class="layout flex">
    <swiper :option="option" class="swiper">

      <div style="height: 100%;width:80%;flex-shrink:0;background: #fff;z-index:1000;" class="flex">
        asd
      </div>

      <div style="width: 100%;" class="flex">
        <router-view class="flex-1"></router-view>
        <nav-footer/>
      </div>

    </swiper>

  </div>
</template>

<script>
import router from 'vue-router'
import NavFooter from './Footer'
import Swiper from '@/components/Swiper'

export default {
  name: 'layout',
  components: { NavFooter, Swiper },
  data() {
    return {
      option: {
        pages: 2,
        default: 1,
        offsetLeft: 0
      }
    }
  },
  mounted() {
    this.option.offsetLeft = this.$el.clientWidth / 5
  }
}
</script>

<style scoped>
.layout,.swiper>div{
  flex-flow: column;
  height: 100%;
}
.swiper{
  align-items: stretch;
}
</style>
