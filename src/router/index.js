import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'


export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '首页',
        icon: 'dashboard'
      }
    }]
  },

  {
    path: '/dealManage',
    component: Layout,
    redirect: '/dealManage/merchandiseSold',
    name: 'dealManage',
    meta: {
      title: '交易管理',
      icon: 'example'
    },
    children: [{
        path: 'merchandiseSold',
        name: 'merchandiseSold',
        component: () => import('@/views/dealManage/merchandiseSold/index'),
        meta: {
          title: '已卖出的商品',
          icon: 'table'
        }
      },
      {
        path: 'evaluteManage',
        name: 'evaluteManage',
        component: () => import('@/views/dealManage/evaluteManage/index'),
        meta: {
          title: '评价管理',
          icon: 'tree'
        }
      },
      {
        path: 'advanceGathering',
        name: 'advanceGathering',
        component: () => import('@/views/dealManage/advanceGathering/index'),
        meta: {
          title: '提前收款',
          icon: 'tree'
        }
      }
    ]
  },
  // 物流管理
  {
    path: '/logisticsManage',
    component: Layout,
    redirect: '/logisticsManage/shipments',
    name: 'logisticsManage',
    meta: {
      title: '物流管理',
      icon: 'example'
    },
    children: [{
        path: 'shipments',
        name: 'shipments',
        component: () => import('@/views/logisticsManage/shipments/index'),
        meta: {
          title: '发货',
          icon: 'table'
        }
      },
      {
        path: 'logisticsTools',
        name: 'logisticsTools',
        component: () => import('@/views/logisticsManage/logisticsTools/index'),
        meta: {
          title: '物流工具',
          icon: 'tree'
        }
      },
      {
        path: 'logisticsService',
        name: 'logisticsService',
        component: () => import('@/views/logisticsManage/logisticsService/index'),
        meta: {
          title: '物流服务',
          icon: 'tree'
        }
      },
      {
        path: 'expressDelivery',
        name: 'expressDelivery',
        component: () => import('@/views/logisticsManage/expressDelivery/index'),
        meta: {
          title: '我要寄快递',
          icon: 'tree'
        }
      }
    ]
  },
  // 商品管理
  {
    path: '/commodityManage',
    component: Layout,
    redirect: '/commodityManage/shelfService',
    name: 'commodityManage',
    meta: {
      title: '商品管理',
      icon: 'example'
    },
    children: [{
        path: 'GoodsList',
        name: 'GoodsList',
        component: () => import('@/views/commodityManage/GoodsList/index'),
        meta: {
          title: '商品库存列表',
          icon: 'table'
        }
      },
      {
        path: 'shelfService',
        name: 'shelfService',
        component: () => import('@/views/commodityManage/shelfService/index'),
        meta: {
          title: '上架商品列表',
          icon: 'table'
        }
      },
      // {
      //   path: 'rackingService',
      //   name: 'rackingService',
      //   component: () => import('@/views/commodityManage/rackingService/index'),
      //   meta: {
      //     title: '上架商品',
      //     icon: 'tree'
      //   }
      // }

    ]
  },
  // 营销中心
  {
    path: '/marketingCenter',
    component: Layout,
    redirect: '/marketingCenter/advertisingManage',
    name: 'marketingCenter',
    meta: {
      title: '营销中心',
      icon: 'example'
    },
    children: [{
        path: 'advertisingManage',
        name: 'advertisingManage',
        component: () => import('@/views/marketingCenter/advertisingManage/index'),
        meta: {
          title: '广告管理',
          icon: 'table'
        }
      }

    ]
  },
  // 进销存
  {
    path: '/buySaleBase',
    component: Layout,
    redirect: '/buySaleBase/sourcingManage',
    name: 'buySaleBase',
    meta: {
      title: '进销存',
      icon: 'example'
    },
    children: [{
        path: 'sourcingManage',
        name: 'sourcingManage',
        component: () => import('@/views/buySaleBase/sourcingManage/index'),
        meta: {
          title: '货源管理',
          icon: 'table'
        }
      },
      {
        path: 'purchaseManage',
        name: 'purchaseManage',
        component: () => import('@/views/buySaleBase/purchaseManage/index'),
        meta: {
          title: '采购管理',
          icon: 'tree'
        }
      },
      {
        path: 'repertoryManage',
        name: 'repertoryManage',
        component: () => import('@/views/buySaleBase/repertoryManage/index'),
        meta: {
          title: '库存管理',
          icon: 'tree'
        }
      },
      {
        path: 'distributionManage',
        name: 'distributionManage',
        component: () => import('@/views/buySaleBase/distributionManage/index'),
        meta: {
          title: '分销管理',
          icon: 'tree'
        }
      },
      {
        path: 'sellManage',
        name: 'sellManage',
        component: () => import('@/views/buySaleBase/sellManage/index'),
        meta: {
          title: '销售管理',
          icon: 'tree'
        }
      }
    ]
  },
  // 客户服务
  {
    path: '/customerService',
    component: Layout,
    redirect: '/customerService/refundManage',
    name: 'customerService',
    meta: {
      title: '客户服务',
      icon: 'example'
    },
    children: [{
        path: 'refundManage',
        name: 'refundManage',
        component: () => import('@/views/customerService/refundManage/index'),
        meta: {
          title: '退款管理',
          icon: 'table'
        }
      },
      {
        path: 'criminalRecords',
        name: 'criminalRecords',
        component: () => import('@/views/customerService/criminalRecords/index'),
        meta: {
          title: '违规记录',
          icon: 'tree'
        }
      },
      {
        path: 'chattingRecords',
        name: 'chattingRecords',
        component: () => import('@/views/customerService/chattingRecords/index'),
        meta: {
          title: '聊天记录',
          icon: 'tree'
        }
      }
    ]
  },
  // 机构管理
  {
    path: '/organizationManage',
    component: Layout,
    redirect: '/organizationManage/viewOrganizationInfo',
    name: 'organizationManage',
    meta: {
      title: '机构管理',
      icon: 'example'
    },
    children: [{
        path: 'viewOrganizationInfo',
        name: 'viewOrganizationInfo',
        component: () => import('@/views/organizationManage/viewOrganizationInfo/index'),
        meta: {
          title: '查看机构基本信息',
          icon: 'table'
        }
      },
      {
        path: 'editOrganization',
        name: 'editOrganization',
        component: () => import('@/views/organizationManage/editOrganization/index'),
        meta: {
          title: '编辑机构',
          icon: 'tree'
        }
      }
    ]
  },
  // 机构管理子系统
  {
    path: '/organizationManageSubsystem',
    component: Layout,
    // redirect: '/organizationManageSubsystem/shipments',
    name: 'organizationManageSubsystem',
    meta: {
      title: '机构管理子系统',
      icon: 'example'
    },
    children: [{
        path: 'shipments',
        name: 'shipments',
        component: () => import('@/views/logisticsManage/shipments/index'),
        meta: {
          title: '发货',
          icon: 'table'
        }
      },
      {
        path: 'logisticsTools',
        name: 'logisticsTools',
        component: () => import('@/views/logisticsManage/logisticsTools/index'),
        meta: {
          title: '物流工具',
          icon: 'tree'
        }
      },
      {
        path: 'logisticsService',
        name: 'logisticsService',
        component: () => import('@/views/logisticsManage/logisticsService/index'),
        meta: {
          title: '物流服务',
          icon: 'tree'
        }
      },
      {
        path: 'expressDelivery',
        name: 'expressDelivery',
        component: () => import('@/views/logisticsManage/expressDelivery/index'),
        meta: {
          title: '我要寄快递',
          icon: 'tree'
        }
      }
    ]
  },
  // 用户管理
  {
    path: '/userManage',
    component: Layout,
    redirect: '/userManage/consumerManage',
    name: 'userManage',
    meta: {
      title: '用户管理',
      icon: 'example'
    },
    children: [{
      path: 'consumerManage',
      name: 'consumerManage',
      component: () => import('@/views/userManage/consumerManage/index'),
      meta: {
        title: '用户管理',
        icon: 'table'
      }
    }]
  },
  // 人才招聘
  {
    path: '/talentsRecruitment',
    component: Layout,
    redirect: '/talentsRecruitment/resume',
    name: 'talentsRecruitment',
    meta: {
      title: '人才招聘',
      icon: 'example'
    },
    // children: [

    // {
    //   path: 'viewResume',
    //   name: 'viewResume',
    //   component: () => import('@/views/talentsRecruitment/viewResume/index'),
    //   meta: {
    //     title: '查看简历',
    //     icon: 'tree'
    //   }
    // },
    // {
    //   path: 'resumePlan',
    //   name: 'resumePlan',
    //   component: () => import('@/views/talentsRecruitment/resumePlan/index'),
    //   meta: {
    //     title: '简历进度',
    //     icon: 'tree'
    //   }
    // },
    // {
    //   path: 'checkPosition',
    //   name: 'checkPosition',
    //   component: () => import('@/views/talentsRecruitment/checkPosition/index'),
    //   meta: {
    //     title: '查看公司职位列表',
    //     icon: 'tree'
    //   }
    // },
    // {
    //   path: 'checkRecruitmentPosition',
    //   name: 'checkRecruitmentPosition',
    //   component: () => import('@/views/talentsRecruitment/checkRecruitmentPosition/index'),
    //   meta: {
    //     title: '查看公司在招职位',
    //     icon: 'tree'
    //   }
    // }
    // ]
    children: [{
        path: 'talentsRecruitment',
        name: 'talentsRecruitment',
        component: () => import('@/views/talentsRecruitment/resume/index'),
        meta: {
          title: '简历/人才库',
          icon: 'table'
        }
      },
      {
        path: 'jobsAvailable',
        name: 'jobsAvailable',
        component: () => import('@/views/talentsRecruitment/jobsAvailable/index'),
        meta: {
          title: '查看在招职位',
          icon: 'tree'
        }
      },

      {
        path: 'beonjob',
        name: 'beonjob',
        component: () => import('@/views/talentsRecruitment/beOnJob/index'),
        meta: {
          title: '查看公司职位',
          icon: 'tree'
        }
      },
      {
        path: 'postJob',
        name: 'postJob',
        component: () => import('@/views/talentsRecruitment/postJob/index'),
        meta: {
          title: '发布职位',
          icon: 'table'
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
