<template>
  <div>

    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item prop="nickname">
        <el-input v-model="form.nickname" placeholder="昵称">
          <i slot="prefix" class="el-input__icon el-icon-user" />
        </el-input>
      </el-form-item>
      <el-form-item prop="phone">
        <el-input v-model="form.phone" placeholder="手机号">
          <i slot="prefix" class="el-input__icon el-icon-phone" />
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" placeholder="密码">
          <i slot="prefix" class="el-input__icon el-icon-lock" />

        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" round @click="register">注册</el-button>
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
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    register() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$message.success('register')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
