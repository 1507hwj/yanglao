/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const talentsRecruitmentRouter = {
    path: '/talentsRecruitment',
    component: Layout,
    redirect: 'noRedirect',
    name: 'talentsRecruitment',
    meta: {
      title: '人才招聘',
      icon: 'example'
    },
    children: [{
        path: 'resume',
        name: 'resume',
        component: () => import('@/views/talentsRecruitment/resume'),
        meta: {
          title: '简历/人才库'
        }
      },
      {
        path: 'jobsAvailable',
        name: 'jobsAvailable',
        component: () => import('@/views/talentsRecruitment/jobsAvailable'),
        meta: {
          title: '查看在招职位'
        }
      },
      {
        path: 'beonjob',
        name: 'beonjob',
        component: () => import('@/views/talentsRecruitment/beOnJob'),
        meta: {
          title: '查看公司职位'
        }
      },
      {
        path: 'checkClass',
        name: 'checkClass',
        component: () => import('@/views/talentsRecruitment/checkClass'),
        meta: {
          title: '查看毕业班信息'
        }
      },
    ]
  }

  export default talentsRecruitmentRouter
