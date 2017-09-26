<template>
  <scroller :style="`top: ${top}px`" class="myScroller" :on-refresh="refresh">
    <template>
      
    </template>


    <slot></slot>
  </scroller>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'myScroller',
  props: [],
  computed: {
    ...mapGetters(['header']),
    top() {
      return 50 + (this.header.navBar.length ? 30 : 0);
    }
  },
  methods: {
    refresh(done) {
      setTimeout(() => console.log('refreshing',done()),1000)
    }
  }
}
</script>
<style scoped>

</style>
