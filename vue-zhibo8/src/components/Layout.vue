<template>
  <div class="layout flex">
    <router-view class="flex-1"></router-view>
    <nav-footer/>
  </div>
</template>

<script>
import router from 'vue-router'
import NavFooter from './Footer'

export default {
  name: 'layout',
  components: { NavFooter }
}
</script>

<style scoped>
.layout{
  flex-flow: column;
  height: 100%;
}

</style>
