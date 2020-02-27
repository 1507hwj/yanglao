/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const customerServiceRouter = {
    path: '/customerService',
    component: Layout,
    redirect: 'noRedirect',
    name: 'customerService',
    meta: {
      title: '客户服务',
      icon: 'example'
    },
    children: [{
        path: 'customerInfo',
        name: 'customerInfo',
        component: () => import('@/views/customerService/customerInfo'),
        meta: {
          title: '客户基本信息'
        }
      },
      {
        path: 'refundManage',
        name: 'refundManage',
        component: () => import('@/views/customerService/refundManage'),
        meta: {
          title: '退款管理'
        }
      },
      {
        path: 'criminalRecords',
        name: 'criminalRecords',
        component: () => import('@/views/customerService/criminalRecords'),
        meta: {
          title: '违规记录'
        }
      },
      {
        path: 'chattingRecords',
        name: 'chattingRecords',
        component: () => import('@/views/customerService/chattingRecords'),
        meta: {
          title: '聊天记录'
        }
      },
      {
        path: 'customerComplain',
        name: 'customerComplain',
        component: () => import('@/views/customerService/customerComplain'),
        meta: {
          title: '客户投诉'
        }
      }
    ]
  }


  export default customerServiceRouter
