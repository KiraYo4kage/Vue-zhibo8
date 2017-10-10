<template>
  <div class="news">
    <nav-header :doInfo="doInfo"></nav-header>
  </div>
</template>

<script>
import navHeader from '../components/Header'

export default {
  name: 'news',
  components: { navHeader },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){

  },
  methods: {
    doInfo() {

    }
  }
}
</script>

<style scoped>
.news{
  flex-direction: column;
}
</style>
