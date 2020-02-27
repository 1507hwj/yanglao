import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import fromPlatfromRouter from './modules/fromPlatfrom'
import fromReceptionRouter from './modules/fromReception'
import dealManageRouter from './modules/dealManage'
import commodityManageRouter from './modules/commodityManage'
import customerServiceRouter from './modules/customerService'
import yunMISRouter from './modules/yunMIS'
import talentsRecruitmentRouter from './modules/talentsRecruitment'
import bigDataRouter from './modules/bigData'
import marketingCenterRouter from './modules/marketingCenter'
import organizationManageRouter from './modules/organizationManage'


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
        icon: 'dashboard',
        affix: true
      }
    }]
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
  fromPlatfromRouter, // 来自平台
  fromReceptionRouter, //来自前台
  dealManageRouter, //交易管理
  commodityManageRouter, // 商品管理
  customerServiceRouter, // 客户服务
  yunMISRouter, // 云MIS系统

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
  talentsRecruitmentRouter, // 人才招聘
  bigDataRouter, // 大数据
  marketingCenterRouter, //营销推广
  organizationManageRouter, // 机构管理

  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]


//异步挂载的路由
//动态需要根据权限加载的路由表 
export const asyncRoutes = [{
    path: '/permission',
    component: Layout,
    alwaysShow: true, // 总是显示在根菜单
    redirect: '/permission/page',
    name: 'Permission',
    meta: {
      title: '权限管理',
      icon: 'lock',
      role: ['admin', 'editor'] //可以在根导航中设置角色
    },
    //页面需要的权限
    children: [
      //     {
      //     path: 'page',
      //     component: () => import('@/views/permission/page'),
      //     name: 'PagePermission',
      //     meta: {
      //       title: '账号一览',
      //       role: ['admin', 'editor']
      //     } //页面需要的权限
      //   },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: '切换账号'
          //如果不设置角色，意味着:此页面不需要权限
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'Role',
        meta: {
          title: '账号权限设置',
          roles: ['admin', 'yc666']
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
];

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
