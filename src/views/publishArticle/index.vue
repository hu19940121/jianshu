<template>
  <div>
    <sticky :z-index="10" :class-name="'sub-navbar draft'">
      <el-button
        v-loading="loading"
        style="margin-left: 10px;"
        type="success"
        @click="submitForm"
      >
        {{ isEdit ? '保存' : '发布' }}
      </el-button>
    </sticky>
    <div class="publish">
      <el-form ref="form" :rules="rules" :model="postForm">

        <div class="createPost-main-container admin-page-container">
          <el-row>
            <el-col :span="24">
              <el-form-item style="margin-bottom: 40px;" prop="title">
                <MDinput
                  v-model="postForm.title"
                  :maxlength="100"
                  name="name"
                  required
                >
                  文章标题
                </MDinput>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item prop="detail" label="详情:" style="margin-bottom: 30px;">
            <Tinymce ref="editor" v-model="postForm.detail" :height="400" />
          </el-form-item>
          <el-form-item
            prop="poster"
            style="margin-bottom: 30px;"
            label="文章封面:"
          >
            <Upload v-model="postForm.poster" />
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>

</template>

<script>
import Tinymce from '@/components/Tinymce'
import sticky from '@/components/Sticky'
import MDinput from '@/components/MDinput'
import Upload from '@/components/Upload/SingleImage'

const defaultForm = {
  title: '', // 标题
  // publishTime: '', // 发布时间
  detail: '', // 详情
  poster: ''// 封面
}
export default {
  components: {
    Tinymce,
    sticky,
    MDinput,
    Upload
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        // this.$message({
        //   message: rule.field + '为必传项',
        //   type: 'error'
        // })
        callback(new Error(rule.field + '为必传项'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      isEdit: false, // 编辑还是新增
      postForm: Object.assign({}, defaultForm),
      rules: {
        title: [{ validator: validateRequire }],
        detail: [{ validator: validateRequire }],
        poster: [{ validator: validateRequire }]
      }
    }
  },
  methods: {
    submitForm() {
      console.log(this.postForm.detail)

      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true

          setTimeout(() => {
            this.loading = false
            this.$message.success('发布成功')
          }, 2000)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.publish{
  max-width: 1280px;
  margin: 90px auto;
}
</style>
