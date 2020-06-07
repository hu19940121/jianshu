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
          <router-link to="/login" class="margin-right-sm">
            <el-button type="text" style="font-size:15px;color:#969696;">登陆</el-button>
          </router-link>
          <el-button round plain>注册</el-button>
          <el-button icon="el-icon-edit" round type="primary">写文章</el-button>
        </div>
      </template>
      <el-button v-else style="height:40px;">
        <svg-icon icon-class="menu" class-name="mymenu" />
      </el-button>
    </div>
  </div>
</template>

<script>
import searchCom from '@/components/searchCom'
export default {
  components: {
    searchCom
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

  }
}
</style>
