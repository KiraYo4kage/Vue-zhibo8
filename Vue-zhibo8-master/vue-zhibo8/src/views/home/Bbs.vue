<template>
  <div class="bbs">
    <separator :text="'bbs'"></separator>
    <newsList v-for="i in 5"></newsList>

    <template v-for="i in 10">
      <separator :text="'09月22日 星期五'"></separator>
      <gameList v-for="i in 5"></gameList>
    </template>
  </div>
</template>

<script>
import separator from '@/components/Separator'
import newsList from '@/components/NewsList'
import gameList from '@/components/GameList'

export default {
  name: 'bbs',
  components: { separator, newsList, gameList }
}
</script>

<style scoped>
</style>
