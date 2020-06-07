import request from '@/utils/request'

// export function getQiniuToken(params) {
//   return request({
//     url: '/v1/qiniu/token',
//     method: 'get',
//     params
//   })
// }

// 公司的七牛 哈哈哈
export function getQiniuToken(data = { bucketCode: 50001 }) {
  return request({
    url: '/planet/api/program/composition/getUploadToken',
    method: 'get',
    params: data
  })
}
