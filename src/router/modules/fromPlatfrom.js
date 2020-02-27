/** 当你的路由表太长时，你可以把它分成小模块**/

import Layout from '@/layout'

const fromPlatfromRouter = {
    path: '/fromPlatfrom',
    component: Layout,
    redirect: 'noRedirect',
    name: 'fromPlatfrom',
    meta: {
      title: '来自平台',
      icon: 'example'
    },
    children: [{
        path: 'soldoutInfo',
        name: 'soldoutInfo',
        component: () => import('@/views/fromPlatfrom/soldoutInfo'),
        meta: {
          title: '下架通知'
        }
      },
      {
        path: 'checkProgress',
        name: 'checkProgress',
        component: () => import('@/views/fromPlatfrom/checkProgress'),
        meta: {
          title: '审核进度'
        }
      },
      {
        path: 'platformMessage',
        name: 'platformMessage',
        component: () => import('@/views/fromPlatfrom/platformMessage'),
        meta: {
          title: '消息通知'
        }
      }

    ]
  }



  export default fromPlatfromRouter
