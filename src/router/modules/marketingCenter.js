/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const marketingCenterRouter = {
  path: '/marketingCenter',
  component: Layout,
  redirect: 'noRedirect',
  name: 'marketingCenter',
  meta: {
    title: '营销推广',
    icon: 'example'
  },
  children: [{
      path: 'marketActivity',
      name: 'marketActivity',
      component: () => import('@/views/marketingCenter/marketActivity'),
      meta: {
        title: '活动提报'
      }
    },
    {
      path: 'promoteCenter',
      name: 'promoteCenter',
      component: () => import('@/views/marketingCenter/promoteCenter'),
      meta: {
        title: '推广中心'
      }
    },
    {
      path: 'distributionManage',
      name: 'distributionManage',
      component: () => import('@/views/marketingCenter/distributionManage'),
      meta: {
        title: '分销管理'
      }
    },
    {
      path: 'advertisingManage',
      name: 'advertisingManage',
      component: () => import('@/views/marketingCenter/advertisingManage'),
      meta: {
        title: '广告管理'
      }
    }
  ]
}

export default marketingCenterRouter
