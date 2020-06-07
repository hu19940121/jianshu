<template>
  <div class="right">
    <el-card>
      <div class="auth-article">
        <author>
          <template slot="desc">
            <span>总资产342 (约32.34元)</span>
          </template>
        </author>
        <el-divider />
      </div>
      <div class="article-list">
        <div v-for="(item,index) in 3" :key="index" class="item pointer margin-bottom-xs">
          <p class="margin-bottom-xs">日常段子 | 说别人的话，让别人无话可说别人的话，</p>
          <span>阅读 193</span>
        </div>
      </div>
    </el-card>
    <el-card class="margin-top-sm">
      <h4>推荐阅读</h4>
      <div class="article-list">
        <div v-for="(item,index) in 3" :key="index" class="item pointer margin-bottom-xs">
          <p class="margin-bottom-xs">日常段子 | 说别人的话，让别人无话可说别人的话，</p>
          <span>阅读 193</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import author from '@/components/author'
export default {
  components: {
    author
  }
}
</script>

<style lang="scss" scoped>
.article-list{
  font-size: 14px;
  .item{
    p{
      &:hover{
        text-decoration: underline;
      }
    }
    span{
      color: gray;
    }
  }
}
</style>
