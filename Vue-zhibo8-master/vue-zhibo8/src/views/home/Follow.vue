<template>
  <div class="follow">
    <separator :text="'follow'"></separator>
    <newsList v-for="i in 5" :key="i"></newsList>

    <template v-for="i in 10">
      <separator :text="'09月22日 星期五'"></separator>
      <gameList v-for="i in 5" :key="i"></gameList>
    </template>
  </div>
</template>

<script>
import separator from '@/components/Separator'
import newsList from '@/components/NewsList'
import gameList from '@/components/GameList'

export default {
  name: 'follow',
  components: { separator, newsList, gameList }
}
</script>

<style scoped>
</style>
