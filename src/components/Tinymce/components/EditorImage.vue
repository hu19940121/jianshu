<template>
  <div class="upload-container">
    <el-button
      :style="{ background: color, borderColor: color }"
      icon="el-icon-upload"
      size="mini"
      type="primary"
      @click="dialogVisible = true"
    >
      上传图片
    </el-button>
    <el-dialog :visible.sync="dialogVisible">
      <el-upload
        :data="dataObj"
        :multiple="true"
        :file-list="fileList"
        :show-file-list="true"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :before-upload="beforeUpload"
        class="editor-slide-upload"
        action="//upload.qiniup.com/"
        list-type="picture-card"
      >
        <el-button size="small" type="primary">
          Click upload
        </el-button>
      </el-upload>
      <el-button @click="dialogVisible = false">
        Cancel
      </el-button>
      <el-button type="primary" @click="handleSubmit">
        Confirm
      </el-button>
    </el-dialog>
  </div>
</template>

<script>
import { getQiniuToken as getToken } from '@/api/qiniu'

export default {
  name: 'EditorSlideUpload',
  props: {
    color: {
      type: String,
      default: '#1890ff'
    }
  },
  data() {
    return {
      dialogVisible: false,
      listObj: {},
      fileList: [],
      dataObj: { token: '', key: '' }
    }
  },
  methods: {
    checkAllSuccess() {
      return Object.keys(this.listObj).every(
        item => this.listObj[item].hasSuccess
      )
    },
    handleSubmit() {
      const arr = Object.keys(this.listObj).map(v => this.listObj[v])
      if (!this.checkAllSuccess()) {
        this.$message(
          'Please wait for all images to be uploaded successfully. If there is a network problem, please refresh the page and upload again!'
        )
        return
      }
      this.$emit('successCBK', arr)
      this.listObj = {}
      this.fileList = []
      this.dialogVisible = false
    },
    handleSuccess(response, file) {
      console.log('listObj', this.listObj)

      const uid = file.uid
      const objKeyArr = Object.keys(this.listObj)
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          // this.listObj[objKeyArr[i]].url = response.files.file
          this.listObj[objKeyArr[i]].url =
            this.tempUrl + '/' + file.response.key
          this.listObj[objKeyArr[i]].hasSuccess = true
          return
        }
      }
    },
    handleRemove(file) {
      const uid = file.uid
      const objKeyArr = Object.keys(this.listObj)
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          delete this.listObj[objKeyArr[i]]
          return
        }
      }
    },
    beforeUpload(file) {
      const _self = this
      return new Promise((resolve, reject) => {
        getToken()
          .then(response => {
            console.log('response', response)

            // const _URL = window.URL || window.webkitURL
            const fileName = file.name
            // const key = response.data.qiniu_key
            const token = response.data.token
            console.log('token', token)

            _self._data.dataObj.token = token
            // _self._data.dataObj.key = key
            _self._data.dataObj.key = fileName // 设置key就是文件名
            _self.listObj[fileName] = {
              hasSuccess: false,
              uid: file.uid
              // width: this.width,
              // height: this.height
            }
            this.tempUrl = response.data.bucketUrl
            resolve(true)
          })
          .catch(err => {
            console.log(err)
            reject(false)
          })
      })
      // const _self = this
      // const _URL = window.URL || window.webkitURL
      // const fileName = file.uid
      // this.listObj[fileName] = {}
      // return new Promise((resolve, reject) => {
      //   const img = new Image()
      //   img.src = _URL.createObjectURL(file)
      //   img.onload = function() {
      //     _self.listObj[fileName] = {
      //       hasSuccess: false,
      //       uid: file.uid,
      //       width: this.width,
      //       height: this.height
      //     }
      //   }
      //   resolve(true)
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.editor-slide-upload {
  margin-bottom: 20px;
  /deep/ .el-upload--picture-card {
    width: 100%;
  }
}
</style>
