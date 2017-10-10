<template>
  <div class="important">
    <separator :text="'头条'"></separator>
    <newsList v-for="i in 5" :key="i"></newsList>

    <template v-for="i in 10">
      <separator :text="'09月22日 星期五'"></separator>
      <gameList v-for="i in 5" :key="i"></gameList>
    </template>
  </div>
</template>

<script>
import Separator from '@/components/Separator'
import NewsList from '@/components/NewsList'
import GameList from '@/components/GameList'

export default {
  name: 'important',
  components: { Separator, NewsList, GameList }
}
</script>

<style scoped>
</style>
