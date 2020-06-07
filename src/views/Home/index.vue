<template>
  <div>
    <div class="home">
      <el-row :gutter="50">
        <el-col :span="device!=='mobile' ? 16 : 24">
          <article-list />
        </el-col>
        <el-col v-show="device!=='mobile'" :span="8">
          <recommend-list />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import articleList from './components/articleList'
import recommendList from './components/recommendList'
export default {
  components: {
    articleList,
    recommendList
  },
  computed: {
    device() {
      return this.$store.state.app.device
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  max-width: 960px;
  padding: 20px;
  margin: 0 auto;

}
</style>
