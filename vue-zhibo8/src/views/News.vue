<template>
  <div class="news">
    <nav-header></nav-header>
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
  }
}
</script>

<style scoped>

</style>
