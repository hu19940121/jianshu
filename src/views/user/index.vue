<template>
  <div class="user">
    <div class="main">
      <div class="tab-wrapper margin-bottom">
        <span>
          <router-link to="/user/login" active-class="active">登陆</router-link>
        </span>
        <span>
          <router-link to="/user/register" active-class="active">注册</router-link>
        </span>
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick() {

    }
  }
}
</script>

<style lang="scss" scoped>
.active{
  color: #ea6f5a;
  position: relative;
  &::after{
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ea6f5a;
    content: '';
  }
}
.user{
  height: 100%;
  width: 100%;
  background-color:#f1f1f1;
  overflow: hidden;
  .main{
    width: 400px;
    margin: 80px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    .tab-wrapper{
      font-size: 20px;
      text-align: center;
      span{
        padding: 10px;
        color: #969696
      }
    }
  }
}
</style>
