<template>
  <div class="menu">
    <ul class="list">
      <template v-if="isLogin">
        <li class="item pointer">退出登陆</li>
      </template>
      <template v-else>
        <router-link to="/user/login">
          <li class="item pointer">登陆</li>
        </router-link>
        <router-link to="/user/register">
          <li class="item pointer">注册</li>
        </router-link>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false
    }
  }
}
</script>

<style lang="scss" scoped>
.menu{
  width: 100%;
  max-height: 200px;
  background: #fff;
  position: relative;
  overflow: hidden;
  z-index: 10000;
  .item{
    color: #333;
    padding: 20px 0;
    text-align: center;
    border-bottom: 1px solid #eee;
    &:first-child{
      border-top: 1px solid #eee;
    }
    &:hover{
      color: #ea6f5a;
    }
  }
}
</style>
