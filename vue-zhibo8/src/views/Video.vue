<template>
  <div class="video">
    <nav-header></nav-header>
  </div>
</template>

<script>
import navHeader from '../components/Header'

export default {
  name: 'video',
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
