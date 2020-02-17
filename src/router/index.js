import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'


export const constantRoutes = [{
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
  // 来自平台
  {
    path: '/fromPlatfrom',
    component: Layout,
    redirect: '/fromPlatfrom/soldoutInfo',
    name: 'fromPlatfrom',
    meta: {
      title: '来自平台',
      icon: 'example'
    },
    children: [{
        path: 'soldoutInfo',
        name: 'soldoutInfo',
        component: () => import('@/views/fromPlatfrom/soldoutInfo/index'),
        meta: {
          title: '下架通知',
          icon: 'tree'
        }
      },
      {
        path: 'checkProgress',
        name: 'checkProgress',
        component: () => import('@/views/fromPlatfrom/checkProgress/index'),
        meta: {
          title: '审核进度',
          icon: 'tree'
        }
      },
      {
        path: 'platformMessage',
        name: 'platformMessage',
        component: () => import('@/views/fromPlatfrom/platformMessage/index'),
        meta: {
          title: '消息通知',
          icon: 'tree'
        }
      }

    ]
  },
  //消息管理
  {
    path: '/messageManage',
    component: Layout,
    redirect: '/messageManage/infoManage',
    name: 'messageManage',
    meta: {
      title: '消息管理',
      icon: 'example'
    },
    children: [{
        path: 'infoManage',
        name: 'infoManage',
        component: () => import('@/views/messageManage/infoManage/index'),
        meta: {
          title: '消息管理',
          icon: 'tree'
        }
      },

    ]
  },
  //来自前台
  {
    path: '/fromReception',
    component: Layout,
    redirect: '/fromReception/newestOrder',
    name: 'fromReception',
    meta: {
      title: '来自前台',
      icon: 'example'
    },
    children: [{
        path: 'newestOrder',
        name: 'newestOrder',
        component: () => import('@/views/fromReception/newestOrder/index'),
        meta: {
          title: '最新订单',
          icon: 'tree'
        }
      },
      {
        path: 'userEvaluation',
        name: 'userEvaluation',
        component: () => import('@/views/fromReception/userEvaluation/index'),
        meta: {
          title: '用户评论',
          icon: 'tree'
        }
      }

    ]
  },
  {
    path: '/dealManage',
    component: Layout,
    redirect: '/dealManage/evaluteManage',
    name: 'dealManage',
    meta: {
      title: '交易管理',
      icon: 'example'
    },
    children: [
      // {
      //   path: 'evaluteManage',
      //   name: 'evaluteManage',
      //   component: () => import('@/views/dealManage/evaluteManage/index'),
      //   meta: {
      //     title: '评价管理',
      //     icon: 'tree'
      //   }
      // },
      {
        path: 'advanceGathering',
        name: 'advanceGathering',
        component: () => import('@/views/dealManage/advanceGathering/index'),
        meta: {
          title: '提前收款',
          icon: 'tree'
        }
      },
      {
        path: 'orderManage',
        name: 'orderManage',
        component: () => import('@/views/dealManage/orderManage/index'),
        meta: {
          title: '订单管理',
          icon: 'tree'
        }
      },
      {
        path: 'sellNote',
        name: 'sellNote',
        component: () => import('@/views/dealManage/sellNote/index'),
        meta: {
          title: '销售记录',
          icon: 'tree'
        }
      }
    ]
  },
  // 商品管理
  {
    path: '/commodityManage',
    component: Layout,
    redirect: '/commodityManage/GoodsList',
    name: 'commodityManage',
    meta: {
      title: '售卖房间管理',
      icon: 'example'
    },
    children: [{
        path: 'GoodsList',
        name: 'GoodsList',
        component: () => import('@/views/commodityManage/GoodsList/index'),
        meta: {
          title: '库存房间列表',
          icon: 'table'
        }
      },
      {
        path: 'shelfService',
        name: 'shelfService',
        component: () => import('@/views/commodityManage/shelfService/index'),
        meta: {
          title: '上架房间列表',
          icon: 'table'
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
        path: 'customerInfo',
        name: 'customerInfo',
        component: () => import('@/views/customerService/customerInfo/index'),
        meta: {
          title: '客户基本信息',
          icon: 'table'
        }
      },
      {
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
      },
      {
        path: 'customerComplain',
        name: 'customerComplain',
        component: () => import('@/views/customerService/customerComplain/index'),
        meta: {
          title: '客户投诉',
          icon: 'tree'
        }
      }
    ]
  },

  // 云MIS系统
  {
    path: '/yunMIS',
    component: Layout,
    redirect: '/yunMIS/oldmanFile',
    name: 'yunMIS',
    meta: {
      title: '云MIS系统',
      icon: 'example'
    },
    children: [{
        path: 'oldmanFile',
        name: 'oldmanFile',
        component: () => import('@/views/yunMIS/oldmanFile/index'),
        meta: {
          title: '老人档案',
          icon: 'table'
        }
      },
      {
        path: 'receptionManage',
        name: 'receptionManage',
        component: () => import('@/views/yunMIS/receptionManage/index'),
        meta: {
          title: '接待管理',
          icon: 'tree'
        }
      },
      {
        path: 'livingManage',
        name: 'livingManage',
        component: () => import('@/views/yunMIS/livingManage/index'),
        meta: {
          title: '居住管理',
          icon: 'tree'
        }
      },
      {
        path: 'repositoryManage',
        name: 'repositoryManage',
        component: () => import('@/views/yunMIS/repositoryManage/index'),
        meta: {
          title: '仓库管理',
          icon: 'tree'
        }
      },
      {
        path: 'nurseManage',
        name: 'nurseManage',
        component: () => import('@/views/yunMIS/nurseManage/index'),
        meta: {
          title: '护理管理',
          icon: 'tree'
        }
      },
      {
        path: 'chargeManage',
        name: 'chargeManage',
        component: () => import('@/views/yunMIS/chargeManage/index'),
        meta: {
          title: '收费管理',
          icon: 'tree'
        }
      },
      {
        path: 'nurseryManage',
        name: 'nurseryManage',
        component: () => import('@/views/yunMIS/nurseryManage/index'),
        meta: {
          title: '入托管理',
          icon: 'tree'
        }
      },
      {
        path: 'livinghomeManage',
        name: 'livinghomeManage',
        component: () => import('@/views/yunMIS/livinghomeManage/index'),
        meta: {
          title: '居家管理',
          icon: 'tree'
        }
      },
      {
        path: 'volunteerManage',
        name: 'volunteerManage',
        component: () => import('@/views/yunMIS/volunteerManage/index'),
        meta: {
          title: '志愿者管理',
          icon: 'tree'
        }
      },
      {
        path: 'drugauthManage',
        name: 'drugauthManage',
        component: () => import('@/views/yunMIS/drugauthManage/index'),
        meta: {
          title: '药政管理',
          icon: 'tree'
        }
      },
      {
        path: 'donateManage',
        name: 'donateManage',
        component: () => import('@/views/yunMIS/donateManage/index'),
        meta: {
          title: '捐赠管理',
          icon: 'tree'
        }
      },
      {
        path: 'medicalManage',
        name: 'medicalManage',
        component: () => import('@/views/yunMIS/medicalManage/index'),
        meta: {
          title: '医疗管理',
          icon: 'tree'
        }
      },
      {
        path: 'fixedEssets',
        name: 'fixedEssets',
        component: () => import('@/views/yunMIS/fixedEssets/index'),
        meta: {
          title: '固定资产',
          icon: 'tree'
        }
      },
      {
        path: 'repastManage',
        name: 'repastManage',
        component: () => import('@/views/yunMIS/repastManage/index'),
        meta: {
          title: '餐饮管理',
          icon: 'tree'
        }
      },
      {
        path: 'personnelManage',
        name: 'personnelManage',
        component: () => import('@/views/yunMIS/personnelManage/index'),
        meta: {
          title: '人事管理',
          icon: 'tree'
        }
      },
      {
        path: 'reportQuery',
        name: 'reportQuery',
        component: () => import('@/views/yunMIS/reportQuery/index'),
        meta: {
          title: '报表查询',
          icon: 'tree'
        }
      },



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
    children: [{
        path: 'resume',
        name: 'resume',
        component: () => import('@/views/talentsRecruitment/resume/index'),
        meta: {
          title: '简历/人才库',
          icon: 'table'
        }
      },
      // {
      //   path: 'resumePlan',
      //   name: 'resumePlan',
      //   component: () => import('@/views/talentsRecruitment/resumePlan/index'),
      //   meta: {
      //     title: '查看简历进度',
      //     icon: 'tree'
      //   }
      // },
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
      // {
      //   path: 'postJob',
      //   name: 'postJob',
      //   component: () => import('@/views/talentsRecruitment/postJob/index'),
      //   meta: {
      //     title: '发布职位',
      //     icon: 'table'
      //   }
      // },
      {
        path: 'checkClass',
        name: 'checkClass',
        component: () => import('@/views/talentsRecruitment/checkClass/index'),
        meta: {
          title: '查看毕业班信息',
          icon: 'table'
        }
      },
      // {
      //   path: 'checkClass',
      //   name: 'checkClass',
      //   component: () => import('@/views/talentsRecruitment/checkClass/index'),
      //   meta: {
      //     title: '委托招聘',
      //     icon: 'table'
      //   }
      // },
      // {
      //   path: 'checkClass',
      //   name: 'checkClass',
      //   component: () => import('@/views/talentsRecruitment/checkClass/index'),
      //   meta: {
      //     title: '委托培训',
      //     icon: 'table'
      //   }
      // }
    ]
  },
  // 学校招就办
  // {
  //   path: '/schoolOffice',
  //   component: Layout,
  //   redirect: '/schoolOffice/resume',
  //   name: 'schoolOffice',
  //   meta: {
  //     title: '学校招就办',
  //     icon: 'example'
  //   },
  //   children: [
  //     // {
  //     //   path: 'terminalClass',
  //     //   name: 'terminalClass',
  //     //   component: () => import('@/views/schoolOffice/terminalClass/index'),
  //     //   meta: {
  //     //     title: '上架毕业班',
  //     //     icon: 'table'
  //     //   }
  //     // },
  //     {
  //       path: 'positionRequired',
  //       name: 'positionRequired',
  //       component: () => import('@/views/schoolOffice/positionRequired/index'),
  //       meta: {
  //         title: '职位需求',
  //         icon: 'tree'
  //       }
  //     },
  //     {
  //       path: 'applyIntention',
  //       name: 'applyIntention',
  //       component: () => import('@/views/schoolOffice/applyIntention/index'),
  //       meta: {
  //         title: '报名意向',
  //         icon: 'tree'
  //       }
  //     },
  //     {
  //       path: 'terminalInfo',
  //       name: 'terminalInfo',
  //       component: () => import('@/views/schoolOffice/terminalInfo/index'),
  //       meta: {
  //         title: '毕业班信息',
  //         icon: 'tree'
  //       }
  //     },
  //     // {
  //     //   path: 'trainIntention',
  //     //   name: 'trainIntention',
  //     //   component: () => import('@/views/schoolOffice/trainIntention/index'),
  //     //   meta: {
  //     //     title: '培训意向表',
  //     //     icon: 'tree'
  //     //   }
  //     // }

  //   ]
  // },
  // 大数据
  {
    path: '/bigData',
    component: Layout,
    redirect: '/bigData/useAnalyze',
    name: 'bigData',
    meta: {
      title: '大数据统计',
      icon: 'example'
    },
    children: [{
        path: 'userAnalyze',
        name: 'userAnalyze',
        component: () => import('@/views/bigData/userAnalyze/index'),
        meta: {
          title: '用户分析',
          icon: 'tree'
        }
      },
      {
        path: 'useAnalyze',
        name: 'useAnalyze',
        component: () => import('@/views/bigData/useAnalyze/index'),
        meta: {
          title: '使用分析',
          icon: 'table'
        }
      },
      {
        path: 'flowAnalyze',
        name: 'flowAnalyze',
        component: () => import('@/views/bigData/flowAnalyze/index'),
        meta: {
          title: '流量分析',
          icon: 'table'
        }
      },
      {
        path: 'dealAnalyze',
        name: 'dealAnalyze',
        component: () => import('@/views/bigData/dealAnalyze/index'),
        meta: {
          title: '交易分析',
          icon: 'tree'
        }
      },
      {
        path: 'marketAnalyze',
        name: 'marketAnalyze',
        component: () => import('@/views/bigData/marketAnalyze/index'),
        meta: {
          title: '营销分析',
          icon: 'tree'
        }
      },
      {
        path: 'realTime',
        name: 'realTime',
        component: () => import('@/views/bigData/realTime/index'),
        meta: {
          title: '实时统计',
          icon: 'tree'
        }
      },
      {
        path: 'customAnalyze',
        name: 'customAnalyze',
        component: () => import('@/views/bigData/customAnalyze/index'),
        meta: {
          title: '自定义分析',
          icon: 'tree'
        }
      },
      {
        path: 'dataVisual',
        name: 'dataVisual',
        component: () => import('@/views/bigData/dataVisual/index'),
        meta: {
          title: '数据可视化',
          icon: 'tree'
        }
      }
    ]
  },
  {
    path: '/marketingCenter',
    component: Layout,
    redirect: '/marketingCenter/marketActivity',
    name: 'marketingCenter',
    meta: {
      title: '营销推广',
      icon: 'example'
    },
    children: [{
        path: 'marketActivity',
        name: 'marketActivity',
        component: () => import('@/views/marketingCenter/marketActivity/index'),
        meta: {
          title: '活动提报',
          icon: 'table'
        }
      },
      {
        path: 'promoteCenter',
        name: 'promoteCenter',
        component: () => import('@/views/marketingCenter/promoteCenter/index'),
        meta: {
          title: '推广中心',
          icon: 'tree'
        }
      },
      {
        path: 'distributionManage',
        name: 'distributionManage',
        component: () => import('@/views/marketingCenter/distributionManage/index'),
        meta: {
          title: '分销管理',
          icon: 'tree'
        }
      },
      {
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
  // 机构管理
  {
    path: '/organizationManage',
    component: Layout,
    redirect: '/organizationManage/viewOrganizationInfo',
    name: 'organizationManage',
    meta: {
      title: '机构中心',
      icon: 'example'
    },
    children: [{
        path: 'viewOrganizationInfo',
        name: 'viewOrganizationInfo',
        component: () => import('@/views/organizationManage/viewOrganizationInfo/index'),
        meta: {
          title: '机构基本信息',
          icon: 'table'
        },
      },
      {
        path: 'treasureCenter',
        name: 'treasureCenter',
        component: () => import('@/views/organizationManage/treasureCenter/index'),
        meta: {
          title: '机构财富中心',
          icon: 'table'
        },
      },
      {
        path: 'editOrganization',
        name: 'editOrganization',
        component: () => import('@/views/organizationManage/editOrganization/index'),
        meta: {
          title: '机构账户管理',
          icon: 'tree'
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
