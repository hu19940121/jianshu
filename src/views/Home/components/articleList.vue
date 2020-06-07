<template>
  <div>
    <article-item v-for="(item,index) in 20" :key="index" />
  </div>
</template>

<script>
import articleItem from '@/components/articleItem'
export default {
  components: {
    articleItem
  },
  data() {
    return {
      list: [1]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
