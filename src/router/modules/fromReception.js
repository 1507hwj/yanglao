/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const fromReceptionRouter = {
  path: '/fromReception',
  component: Layout,
  redirect: 'noRedirect',
  name: 'fromReception',
  meta: {
    title: '来自前台',
    icon: 'example'
  },
  children: [{
      path: 'newestOrder',
      name: 'newestOrder',
      component: () => import('@/views/fromReception/newestOrder'),
      meta: {
        title: '最新订单'
      }
    },
    {
      path: 'userEvaluation',
      name: 'userEvaluation',
      component: () => import('@/views/fromReception/userEvaluation'),
      meta: {
        title: '用户评论'
      }
    }

  ]
}

export default fromReceptionRouter
