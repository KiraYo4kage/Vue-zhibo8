<template>
  <div class="gameList flex">
    <div class="time flex-1">
      <span>19:30</span>
    </div>
    <div class="game flex flex-5">
      <div class="team flex flex-1">
        <img src="/static/xibanyaren.png">
        <span>西班牙人</span>
      </div>
      <div class="content flex flex-3">
        <div class="title">
          <span>西甲第5轮</span>
        </div>
        <div class="source">
          <div>PPTV</div>
        </div>
      </div>
      <div class="team flex flex-1">
        <img src="/static/biliyaleiyaer.png">
        <span>维拉利尔</span>
      </div>
    </div>
    <div class="clock flex flex-1">
      <img src="/static/ic_clock.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'gameList'
}
</script>

<style scoped>
.gameList{
  height: 100px;
  font-size: 14px;
  border-bottom: 1px solid #eee;
  align-items: center;
}
.time{
  line-height: 100px;
}
.game{
  align-items: flex-start;
}
.content{
  font-size: 12px;
  align-self: center;
  flex-direction: column;
  justify-content: center;
}
.source{
  margin-top: 14px;
  color: #999;
}
.team{
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.team img{
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
}
.clock{
  justify-content: center;
  align-items: center;
}
.clock img{
  width: 25px;
  height: 25px;
}
</style>
