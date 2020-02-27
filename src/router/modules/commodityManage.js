/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const commodityManageRouter = {
  path: '/commodityManage',
  component: Layout,
  redirect: 'noRedirect',
  name: 'commodityManage',
  meta: {
    title: '售卖房间管理',
    icon: 'example'
  },
  children: [{
      path: 'GoodsList',
      name: 'GoodsList',
      component: () => import('@/views/commodityManage/GoodsList'),
      meta: {
        title: '库存房间列表'
      }
    },
    {
      path: 'shelfService',
      name: 'shelfService',
      component: () => import('@/views/commodityManage/shelfService'),
      meta: {
        title: '上架房间列表'
      }
    }
  ]
}

export default commodityManageRouter
