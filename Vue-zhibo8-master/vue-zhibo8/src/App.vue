<template>
  <div id="app" @touchmove.prevent>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
::-webkit-scrollbar{
  width: 5px;
  background-color: #fff;
}
::-webkit-scrollbar-thumb{
  background-color: #bbb;
}
html,body{
  margin: 0;
  height: 100%;
}
ul,li{
  margin: 0;
  padding: 0;
  list-style-type: none;
}
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.flex{
  display: flex;
}
.flex-0{
  flex: 0;
}
.flex-1{
  flex: 1;
}
.flex-2{
  flex: 2;
}
.flex-3{
  flex: 3;
}
.flex-4{
  flex: 4;
}
.flex-5{
  flex: 5;
}
.flex-6{
  flex: 6;
}
.flex-7{
  flex: 7;
}
.flex-8{
  flex: 8;
}
</style>
