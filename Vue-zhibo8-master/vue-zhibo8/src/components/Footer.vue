<template>
  <div class="footer flex">
    <div class="nav flex-1" v-for="module in footer" @click="jump(module.path)">
      <template v-if="config.pathRoot + module.path === $route.path">
        <img :src="config.imgRoot+module.img.off"/>
        <span class="active">{{module.name}}</span>
      </template>
      <template v-else>
        <img :src="config.imgRoot+module.img.on"/>
        <span>{{module.name}}</span>
      </template>
    </div>
  </div>
</template>

<script>
import router from 'vue-router'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'footer',
  computed: {
    ...mapGetters(['config','footer'])
  },
  methods: {
    ...mapActions(['jump'])
  }
}
</script>

<style scoped>
.footer{
  height: 50px;
  border-top: 1px solid #ccc;
  background: #fff;
  z-index: 99;
}
.nav{
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #666;
  font-size: 12px;
}
.active{
  color: #239DFF;
}
.nav img{
  width: 22px;
  height: 22px;
}
</style>
