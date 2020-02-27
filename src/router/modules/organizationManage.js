/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const organizationManageRouter = {
  path: '/organizationManage',
  component: Layout,
  redirect: 'noRedirect',
  name: 'organizationManage',
  meta: {
    title: '机构中心',
    icon: 'example'
  },
  children: [{
      path: 'viewOrganizationInfo',
      name: 'viewOrganizationInfo',
      component: () => import('@/views/organizationManage/viewOrganizationInfo'),
      meta: {
        title: '机构基本信息'
      },
    },
    {
      path: 'treasureCenter',
      name: 'treasureCenter',
      component: () => import('@/views/organizationManage/treasureCenter'),
      meta: {
        title: '机构财富中心'
      },
    },
    {
      path: 'editOrganization',
      name: 'editOrganization',
      component: () => import('@/views/organizationManage/editOrganization'),
      meta: {
        title: '机构账户管理'
      }
    }
  ]
}

export default organizationManageRouter
