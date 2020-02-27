/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const dealManageRouter = {
  path: '/dealManage',
  component: Layout,
  redirect: 'noRedirect',
  name: 'dealManage',
  meta: {
    title: '交易管理',
    icon: 'example'
  },
  children: [{
      path: 'advanceGathering',
      name: 'advanceGathering',
      component: () => import('@/views/dealManage/advanceGathering'),
      meta: {
        title: '提前收款'
      }
    },
    {
      path: 'orderManage',
      name: 'orderManage',
      component: () => import('@/views/dealManage/orderManage'),
      meta: {
        title: '订单管理'
      }
    },
    {
      path: 'sellNote',
      name: 'sellNote',
      component: () => import('@/views/dealManage/sellNote'),
      meta: {
        title: '销售记录'
      }
    }
  ]
}

export default dealManageRouter
