const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  },
  yc666: {
    token: 'yc666-token'
  },
  yq666: {
    token: 'yq666-token'
  }
}


const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: '我是编辑者',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'editor'
  },
  'yc666-token': {
    roles: ['yc666'],
    introduction: '我是编辑者yc',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'yc666'
  },
  'yq666-token': {
    roles: ['yq666'],
    introduction: '我是编辑者yq',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'yq666'
  }
}

export default [
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      console.log('config',config)
      const {
        username
      } = config.body
      const token = tokens[username]
      // const token = tokens
      console.log('token',token)

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: '账号或密码错误'
        }
      }

//       return {
//         code: 20000,
//         data: token
//       }
//     }
//   },

<<<<<<< HEAD
  // get user info
  {
    url: '/user/info\.*',
    type: 'get',
    response: config => {
      const {
        token
      } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: '登录失败，无法获取用户详细信息。'
        }
      }
=======
//   // get user info
//   {
//     url: '/user/info\.*',
//     type: 'get',
//     response: config => {
//       const { token } = config.query
//       const info = users[token]

//       // mock error
//       if (!info) {
//         return {
//           code: 50008,
//           message: 'Login failed, unable to get user details.'
//         }
//       }
>>>>>>> f2a3f4c6e8681fb8c9b4358da21a834a26db8150

//       return {
//         code: 20000,
//         data: info
//       }
//     }
//   },

//   // user logout
//   {
//     url: '/user/logout',
//     type: 'post',
//     response: _ => {
//       return {
//         code: 20000,
//         data: 'success'
//       }
//     }
//   }
// ]
