<template>
  <div>

    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="手机号或者邮箱">
          <i slot="prefix" class="el-input__icon el-icon-user" />
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" placeholder="密码">
          <i slot="prefix" class="el-input__icon el-icon-lock" />

        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" round @click="submit">立即登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$message.success('登陆成功！')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
