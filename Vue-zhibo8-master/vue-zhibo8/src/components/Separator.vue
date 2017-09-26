<template>
  <div class="separator">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'separator',
  props: ['text']
}
</script>

<style scoped>
.separator{
  background: #eee;
  height: 25px;
  line-height: 25px;
  flex-shrink: 0;
  font-size: 14px;
  text-align: left;
  padding-left: 14px;
}
</style>
