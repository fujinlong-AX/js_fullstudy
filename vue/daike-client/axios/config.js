export default {
  method: 'post',
  baseURL: 'http://localhost:3000',
  header: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data: {},
  timeout: 10000,
  // 携带凭证
  withCredentials: false,
  responseType: 'json', // 响应类型
}