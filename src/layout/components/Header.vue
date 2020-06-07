<template>
  <div class="fixed-header">
    <div class="header">
      <template v-if="device!=='mobile'">
        <div class="left flex align-center">
          <router-link to="/">
            <span class="margin-left pointer">首页</span>
          </router-link>
          <span class="margin-left pointer">下载App</span>
          <search-com class="margin-left" />
        </div>
        <div class="right flex align-center">
          <router-link v-if="noLogin" to="/user/login" class="margin-right-sm">
            <el-button type="text" style="font-size:15px;color:#969696;">登陆</el-button>
          </router-link>
          <router-link v-if="noLogin" to="/user/register" class="margin-right-sm">
            <el-button round plain>注册</el-button>
          </router-link>
          <el-dropdown v-if="!noLogin">
            <div class="flex align-center margin-right-sm">
              <img class="margin-right-xs avatar" src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg" alt=""><i class="el-icon-arrow-down el-icon--right" />
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <router-link to="/publishArticle">
            <el-button icon="el-icon-edit" round type="primary">写文章</el-button>

          </router-link>
        </div>
      </template>
      <el-button v-if="device==='mobile'" style="height:40px;" @click="showMobileMenu = !showMobileMenu">
        <svg-icon icon-class="menu" class-name="mymenu" />
      </el-button>

    </div>
    <transition name="myT">

      <mobile-menu v-if="showMobileMenu" />
    </transition>

  </div>
</template>

<script>
import searchCom from '@/components/searchCom'
import mobileMenu from './mobileMenu'
export default {
  components: {
    searchCom,
    mobileMenu
  },
  data() {
    return {
      showMobileMenu: false,
      noLogin: true // 是否登陆
    }
  },
  computed: {
    device() {
      return this.$store.state.app.device
    }
  }
}
</script>
<style>

</style>
<style lang="scss" scoped>
.myT-enter,.myT-leave-to{
  max-height: 20px
}
.myT-enter-to,.my-leave{
  max-height: 200px;
}
.myT-enter-active,.myT-leave-active{
  transition: all .4s ease;
}
.fixed-header{
  height: 58px;
  width: 100%;
  border-bottom: 1px solid #e7e7e7;
  background-color: #fff;
  .header{
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    max-width:1440px;
    height: 100%;
    margin: 0 auto;
    .left{
      font-size: 17px;
      :first-child{
        color: #ea6f5a;
      }
    }
    .right{
      .avatar{
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }

  }
}
</style>
