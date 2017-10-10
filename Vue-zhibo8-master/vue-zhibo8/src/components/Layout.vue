<template>
  <div class="layout flex">
    <swiper :option="option" class="swiper" ref="swiper">

      <div style="height: 100%;width:80%;flex-shrink:0;background: #fff;z-index:1000;" class="flex">
        asd
      </div>

      <div style="width: 100%;" class="flex">
        <div class="modal" :style="`display: ${modal ? 'block' : 'none'};`" @click="closeInfo"></div>
        <router-view class="flex-1" :doInfo="doInfo"></router-view>
        <nav-footer/>
      </div>

    </swiper>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import router from 'vue-router'
import NavFooter from './Footer'
import Swiper from '@/components/Swiper'

export default {
  name: 'layout',
  components: { NavFooter, Swiper },
  computed: {
    ...mapGetters(['lefter'])
  },
  watch: {

  },
  data() {
    return {
      option: {
        pages: 2,
        default: 1,
        offsetLeft: 0
      },
      modal: false
    }
  },
  mounted() {
    this.option.offsetLeft = this.$el.clientWidth / 5
  },
  methods: {
    doInfo() {
      this.$refs.swiper.autoSwipe(1)
      this.modal = true
    },
    closeInfo() {
      this.$refs.swiper.autoSwipe(2)
      this.modal = false
    }
  }
}
</script>

<style scoped>
.layout,.swiper>div{
  flex-flow: column;
  flex-shrink: 0;
  height: 100%;
}
.swiper{
  align-items: stretch;
}
.modal{
  background: #000;
  z-index: 1001;
  position: absolute;
  height: 100%;
  width: 100%;
  filter: opacity(0.7);
}
</style>
