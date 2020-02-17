import {
  getToken
} from '@/utils/auth' // get token from cookie

let token = getToken()
console.log('token', token)

axios.defaults.headers.common['token'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; //配置请求头



//添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  // let user = JSON.parse(window.sessionStorage.getItem('access-user'));
  let user = getToken()
  console.log(user)
  if (user) {
    token = user.token;
  }
  config.headers.common['token'] = token;
  //console.dir(config);
  return config;
}, function (error) {
  // Do something with request error
  console.info("error: ");
  console.info(error);
  return Promise.reject(error);
});


// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  if (response.data && response.data.code) {
    if (parseInt(response.data.code) === 108 || parseInt(response.data.code) === 109 || response.data.msg === 'TOKEN失效，请重新登录' || response.data.msg === 'TOKEN不存在') {
      //未登录
      response.data.msg = "登录信息已失效，请重新登录";
      // road.$message.error(response.data.msg);
      this.$message({
        message: response.data.msg,
        type: 'success'
      })
      // routerIndex.push('/login');
      this.$router.push({
        path: "login"
      })
    }
    if (parseInt(response.data.code) === -1) {
      road.$message.error("请求失败");
    }
  }
  return response;
}, function (error) {
  // Do something with response error
  console.dir(error);
  // road.$message.error("服务器连接失败");
  this.$message({
    message: "服务器连接失败",
    type: 'success'
  })
  return Promise.reject(error);
})
