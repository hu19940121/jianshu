<template>
  <div class="auth-list">
    <div class="title padding-tb-sm flex justify-between align-center">
      <span>推荐作者</span>
      <div class="flex align-center pointer" @click="search ">
        <svg-icon style="font-size:32px;" :class-name="flag ? 'rotate':'' " icon-class="shauxin" />换一批
      </div>
    </div>
    <div v-for="(item,index) in 8" :key="index" class="auth margin-bottom-sm flex justify-between align-center ">
      <div class="flex">
        <img class="avatar pointer" src="http://img0.imgtn.bdimg.com/it/u=1388647394,240988450&fm=11&gp=0.jpg" alt="">
        <div class="cen padding-left-xs">
          <p class="pointer">梦如南笙、</p>
          <p>写了987.1k字 · 3.9k喜欢</p>
        </div>
      </div>
      <span class="guanzhu pointer">+关注</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    }
  },
  methods: {
    search() {
      if (this.flag) {
        return
      }
      this.flag = true
      setTimeout(() => {
        this.flag = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes zhuan {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.rotate{
  animation: zhuan 2s ease infinite;
}
.auth-list{
  .title{
    font-size: 14px;
    color:#969696;
  }
  .auth{
    font-size: 14px;
    .avatar{
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    .cen{
      :first-child{
        color: #333;
      }
      p{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
      }
    }
    .guanzhu{
      color: #42c02e;
    }
  }
}
</style>
