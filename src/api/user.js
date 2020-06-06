import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/v2/user/login',
    method: 'post',
    data
  })
}

export function getInfo(params) {
  return request({
    url: '/v2/user/getinfo',
    method: 'get',
    params
  })
}
