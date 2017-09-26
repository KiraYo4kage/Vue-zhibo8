<template>
  <div class="navBar flex">
      <div v-for="tab in header.navBar" :class="`flex-1 ${config.pathRoot + tab.path === $route.path ? 'selected' : ''}`" @click="jump(tab.path)">{{ tab.name }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'navBar',
  computed: {
    ...mapGetters(['config', 'header'])
  },
  methods: {
    ...mapActions(['jump'])
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
.selected{
  border-bottom: 3px solid #239DFF;
  color: #239DFF;
}
</style>
