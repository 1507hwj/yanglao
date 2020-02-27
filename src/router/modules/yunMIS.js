/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const yunMISRouter = {
  path: '/yunMIS',
  component: Layout,
  redirect: 'noRedirect',
  name: 'yunMIS',
  meta: {
    title: '云MIS系统',
    icon: 'example'
  },
  children: [{
      path: 'oldmanFile',
      name: 'oldmanFile',
      component: () => import('@/views/yunMIS/oldmanFile'),
      meta: {
        title: '老人档案'
      }
    },
    {
      path: 'receptionManage',
      name: 'receptionManage',
      component: () => import('@/views/yunMIS/receptionManage'),
      meta: {
        title: '接待管理'
      }
    },
    {
      path: 'livingManage',
      name: 'livingManage',
      component: () => import('@/views/yunMIS/livingManage'),
      meta: {
        title: '居住管理'
      }
    },
    {
      path: 'repositoryManage',
      name: 'repositoryManage',
      component: () => import('@/views/yunMIS/repositoryManage'),
      meta: {
        title: '仓库管理'
      }
    },
    {
      path: 'nurseManage',
      name: 'nurseManage',
      component: () => import('@/views/yunMIS/nurseManage'),
      meta: {
        title: '护理管理'
      }
    },
    {
      path: 'chargeManage',
      name: 'chargeManage',
      component: () => import('@/views/yunMIS/chargeManage'),
      meta: {
        title: '收费管理'
      }
    },
    {
      path: 'nurseryManage',
      name: 'nurseryManage',
      component: () => import('@/views/yunMIS/nurseryManage'),
      meta: {
        title: '入托管理'
      }
    },
    {
      path: 'livinghomeManage',
      name: 'livinghomeManage',
      component: () => import('@/views/yunMIS/livinghomeManage'),
      meta: {
        title: '居家管理'
      }
    },
    {
      path: 'volunteerManage',
      name: 'volunteerManage',
      component: () => import('@/views/yunMIS/volunteerManage'),
      meta: {
        title: '志愿者管理'
      }
    },
    {
      path: 'drugauthManage',
      name: 'drugauthManage',
      component: () => import('@/views/yunMIS/drugauthManage'),
      meta: {
        title: '药政管理'
      }
    },
    {
      path: 'donateManage',
      name: 'donateManage',
      component: () => import('@/views/yunMIS/donateManage'),
      meta: {
        title: '捐赠管理'
      }
    },
    {
      path: 'medicalManage',
      name: 'medicalManage',
      component: () => import('@/views/yunMIS/medicalManage'),
      meta: {
        title: '医疗管理'
      }
    },
    {
      path: 'fixedEssets',
      name: 'fixedEssets',
      component: () => import('@/views/yunMIS/fixedEssets'),
      meta: {
        title: '固定资产'
      }
    },
    {
      path: 'repastManage',
      name: 'repastManage',
      component: () => import('@/views/yunMIS/repastManage'),
      meta: {
        title: '餐饮管理'
      }
    },
    {
      path: 'personnelManage',
      name: 'personnelManage',
      component: () => import('@/views/yunMIS/personnelManage'),
      meta: {
        title: '人事管理'
      }
    },
    {
      path: 'reportQuery',
      name: 'reportQuery',
      component: () => import('@/views/yunMIS/reportQuery'),
      meta: {
        title: '报表查询'
      }
    },



  ]
}

  export default yunMISRouter
