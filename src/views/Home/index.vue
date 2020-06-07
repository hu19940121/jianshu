<template>
  <div>
    <div class="home">
      <el-row :gutter="50">
        <el-col :span="16">
          <article-list />
        </el-col>
        <el-col :span="8" hidden-xs-only>
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
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 960px;
  padding-top: 20px;
  margin: 0 auto;

}
</style>
