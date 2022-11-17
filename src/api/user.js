import request from '@/utils/request'
// import store from '@/store'

/**
 * 发送验证码
 * 注意：每手机号每分钟1次
 */
export const sendCodeAPI = mobile => {
  return request({
    method: 'GET',
    url: `/v1_0/sms/codes/${mobile}`
  })
}
/**
 * 登录
 */
export const loginAPI = data => request({
  method: 'POST',
  url: '/v1_0/authorizations',
  data
})

/**
 * 获取用户信息
 */
export const getUserInfoAPI = () => {
  return request({
    method: 'GET',
    url: '/v1_0/user'
    // headers: {
    //   Authorization:`Bearer ${store.state.user.token}`
    // }
  })
}
