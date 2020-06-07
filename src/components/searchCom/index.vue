<template>
  <div>
    <el-input
      v-model="input1"
      suffix-icon="el-icon-search"
      placeholder="请输入内容"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
