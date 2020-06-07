<template>
  <div class="acticle-item">
    <router-link to="/articeDetail">
      <a class="title">真正的孤独（经典好文）</a>

    </router-link>
    <div class="desc margin-bottom-xs">
      文：贾平凹 好多人在说自己孤独，说自己孤独的人其实并不孤独。孤独不是受到了冷落和遗弃，而是无知己，不被理解。真正的孤独者不言孤独，偶尔做些长啸好多人在说自己孤独，说自己孤独的人其实并不孤独。孤独不是受到了冷落和遗弃，而是无知己，不被理解。真正的孤独者不言孤独，偶尔做些长啸好多人在说自己孤独，说自己孤独的人其实并不孤独。孤独不是受到了冷落和遗弃，而是无知己，不被理解。真正的孤独者不言孤独，偶尔做些长啸
    </div>
    <div class="info">
      <span class="zuanshi">
        <svg-icon style="font-size:16px;vertical-align: bottom;" icon-class="zuanshi" /> 12.3
      </span>
      <span class="g username margin-left-xs pointer">
        梦如男生
      </span>
      <span class="g pinglun margin-left-xs">
        <i class="el-icon-chat-round" />33
      </span>
      <span class="g collect margin-left-xs">
        <i class="el-icon-star-off" />133
      </span>
    </div>
    <el-divider />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@mixin textOverflowMulti($line: 2, $bg: #fff) {
  position: relative;
  max-height: $line * 1.5em;
  margin-right: -1em;
  padding-right: 1em;
  overflow: hidden;
  line-height: 1.5em;
  text-align: justify;
  &::before {
    position: absolute;
    right: 14px;
    bottom: 0;
    padding: 0 1px;
    background:$bg;
    content: '...';
  }
  &::after {
    position: absolute;
    right: 14px;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    background: white;
    content: '';
  }
}
.acticle-item{
  .title{
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    color: #969696;
    &:hover{
      text-decoration: underline;
    }
  }
  .desc{
    font-size: 13px;
    line-height: 24px;
    color: #999;
    @include textOverflowMulti()

  }
  .info{
    font-size: 12px;
    .g{
      color:#b4b4b4;
    }
    .zuanshi{
      color: #ea6f5a;
    }
    .username{
      &:hover{
        color: black;
      }
    }
  }
}
</style>
