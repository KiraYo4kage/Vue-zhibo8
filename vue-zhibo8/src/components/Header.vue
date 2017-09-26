<template>
  <div class="header flex">
    <div class="left flex flex-1">
      <button type="button">
        <img :src="header.avatar" class="avatar">
      </button>
    </div>
    <div class="center flex flex-1">
      <span>{{ header.title }}</span>
    </div>
    <div class="right flex flex-1">
      <button type="button" v-for="icon in header.icons">
        <img :src="config.imgRoot + icon.src" class="icon">
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'header',
  components: {},
  computed: {
    ...mapGetters(['config','header'])
  },
  mounted() {
    this.$store.dispatch('getHeader')
  }
}
</script>

<style scoped>
.header{
  flex-shrink: 0;
  background: #239DFF;
  height: 50px;
  color: #fff;
  align-items: stretch;
}
.left{
  justify-content: flex-start;
  align-items: stretch;
}
button{
  background: none;
  outline: none;
  border: none;
  width: 50px;
}
button:active{
  background: #147acc;
}
.avatar{
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.icon{
  width: 25px;
  height: 25px;
}
.center{
  justify-content: center;
  align-items: center;
}
.right{
  justify-content: flex-end;
  align-items: stretch;
}
</style>
