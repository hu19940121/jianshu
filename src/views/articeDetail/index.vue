<template>
  <div>
    <div class="articeDetail">
      <el-row :gutter="10">
        <el-col :span="device!=='mobile' ? 16 : 24">
          <el-card class="box-card">
            <h1>《纸短情长》民国60余封情书，教我明白什么是真正的爱情</h1>
            <author>
              <template slot="desc">
                <span class="zuanshi">
                  <svg-icon style="font-size:16px;vertical-align: bottom;" icon-class="zuanshi" /> 12.3
                </span>
                <span class="margin-right-xs">2020.05.05 13:06:30</span>
                <span class="margin-right-xs">字数 1800</span>
                <span class="margin-right-xs">阅读 47,078</span>
              </template>
            </author>
            <div class="detail">
              <div v-html="htmlcontent" />
            </div>
          </el-card>
        </el-col>
        <el-col v-show="device!=='mobile'" :span="8">
          <right />

        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import author from '@/components/author'
import right from './right'
export default {
  components: {
    author,
    right
  },
  data() {
    return {
      htmlcontent: '<h1 style="text-align: center;"><span style="background-color: #ffffff;"><strong>有那么几本书是我一直很喜欢的。</strong></span></h1> <p>我收集整理了一些我读过的书里，强烈推荐这4本给你，保证看书前的你，内心是平静的，看书时的你，是心潮起伏的，看完后的你，是百感交集的。</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>最重要，最重要，最重要的是（重要的事情说三遍）这些书都是通俗易懂小说体，一看你就会进入状态的那种。</p> <p>&nbsp;</p> <p><img src="http://img5.imgtn.bdimg.com/it/u=3548224741,81470878&amp;fm=11&amp;gp=0.jpg" /></p> <p>&nbsp;</p> <p>1、《你当像鸟飞往你的山》</p> <p>&nbsp;</p> <p>这是塔拉&middot;韦斯特弗的自传，也是一部处女作，上市第一周即登上《纽约时报》畅销榜，至今仍高居Top1；</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>全美销量破百万册，被《时代周刊》评为&ldquo;年度影响力人物&rdquo;，同时该书还得到了比尔&bull;盖茨推荐。</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>主要讲述了一个十七岁前从未上过学的大山女孩（作者），生活周围都是废铜烂铁，没有读书声，只有起重机的轰鸣，不上学，不看医生，这是父亲让他们坚持的忠诚和真理。</p> <p>由于对父亲，对家庭的不满，以及对未来生活的向往，通过自学考取杨百翰大学，剑桥大学，最后进入了哈佛大学深造，随后便出版了这一惊人的著作。</p> <p><strong>教育给了她全新的看待家人，看待世界的视角，重新审视了父亲的精神疾病，母亲的懦弱以及哥哥对她的暴力。</strong></p> <p>​</p> <p>&nbsp;</p>'
    }
  },
  computed: {
    device() {
      return this.$store.state.app.device
    }
  }
}
</script>

<style lang="scss" scoped>
.articeDetail{
  max-width: 1000px;
  padding-top: 20px;
  margin: 0 auto;
  .zuanshi{
    color: hotpink;
  }
}
</style>
