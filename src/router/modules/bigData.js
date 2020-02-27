/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const bigDataRouter = {
  path: '/bigData',
  component: Layout,
  redirect: 'noRedirect',
  name: 'bigData',
  meta: {
    title: '大数据统计',
    icon: 'example'
  },
  children: [{
      path: 'userAnalyze',
      name: 'userAnalyze',
      component: () => import('@/views/bigData/userAnalyze'),
      meta: {
        title: '用户分析'
      }
    },
    {
      path: 'useAnalyze',
      name: 'useAnalyze',
      component: () => import('@/views/bigData/useAnalyze'),
      meta: {
        title: '使用分析'
      }
    },
    {
      path: 'flowAnalyze',
      name: 'flowAnalyze',
      component: () => import('@/views/bigData/flowAnalyze'),
      meta: {
        title: '流量分析'
      }
    },
    {
      path: 'dealAnalyze',
      name: 'dealAnalyze',
      component: () => import('@/views/bigData/dealAnalyze'),
      meta: {
        title: '交易分析'
      }
    },
    {
      path: 'marketAnalyze',
      name: 'marketAnalyze',
      component: () => import('@/views/bigData/marketAnalyze'),
      meta: {
        title: '营销分析'
      }
    },
    {
      path: 'realTime',
      name: 'realTime',
      component: () => import('@/views/bigData/realTime'),
      meta: {
        title: '实时统计'
      }
    },
    {
      path: 'customAnalyze',
      name: 'customAnalyze',
      component: () => import('@/views/bigData/customAnalyze'),
      meta: {
        title: '自定义分析'
      }
    },
    {
      path: 'dataVisual',
      name: 'dataVisual',
      component: () => import('@/views/bigData/dataVisual'),
      meta: {
        title: '数据可视化'
      }
    }
  ]
}

export default bigDataRouter
