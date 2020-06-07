<template>
  <div class="author flex margin-tb-xs">
    <img class="avatar" src="https://upload.jianshu.io/users/upload_avatars/7289752/576548d2-cfaa-4948-bdf7-39f165131e1d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="">
    <div class="info padding-left-xs">
      <div class="flex align-center">
        <div class="margin-right-xs">梦如南笙</div>
        <el-button type="primary" round size="mini">关注</el-button>
      </div>
      <div>
        <slot name="desc" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .author{
    .avatar{
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    .info{
      div:nth-child(2){
        margin-top: 4px;
        font-size: 13px;
        color: gray;
        .zuanshi{
          color: hotpink;
        }
      }
    }
  }
</style>
