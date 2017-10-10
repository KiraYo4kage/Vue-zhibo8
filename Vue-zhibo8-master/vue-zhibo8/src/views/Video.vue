<template>
  <div class="video">
    <nav-header :doInfo="doInfo"></nav-header>
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

  },
  methods: {
    doInfo() {

    }
  }
}
</script>

<style scoped>

</style>
