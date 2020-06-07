<template>
  <div class="app-wrapper">
    <sticky :z-index="10">
      <Header />
    </sticky>
    <div class="main-container">
      <app-main />
    </div>
  </div>
</template>

<script>
import { Header, AppMain } from './components'
import Sticky from '@/components/Sticky' // 粘性header组件
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Header,
    AppMain,
    Sticky
  },
  mixins: [ResizeMixin],

  computed: {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
