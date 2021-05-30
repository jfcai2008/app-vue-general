import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'
import layoutTopDown from '../layout/layoutTopDown'
import layoutLeftRight from '../layout/layoutLeftRight'

Vue.use(VueRouter)
// 放在左侧菜单的路由
const routesMenu = [
  {
    path: '/fund',
    title: '基金',
    icon: 'iconfont iconwujiaoxing',
    type:'el-icon-s-help',
    component:layoutTopDown,
    children: [{
      path: '',
      title: '基金列表',
      component: () => import('../pages/fund/list')
    }, {
      path: 'hold',
      title: '持有情况',
      component: () => import('../pages/fund/hold')
    },
    {
      path: 'attention',
      title: '关注情况',
      component: () => import('../pages/fund/attention')
    }
    ]
  },
  {
    path: '/soccer',
    component:Layout,
    title: '足球',
    icon: 'iconfont iconweibiao45127',
    type:'el-icon-film',
    children: [{
      path: '',
      component: () => import('../pages/soccer/'),
      visible:false
    },
    {
      path: 'leagues',
      title: '联赛情况',
      component: () => import('../pages/soccer/leagues')
    },
    {
      path: 'teams',
      title: '球队列表',
      component: () => import('../pages/soccer/teams')
    },
    {
      path: 'matches',
      title: '赛事列表',
      component: () => import('../pages/soccer/matches')
    }
    ]
  },
  {
    path: '/order',
    component:layoutTopDown,
    title: '订单管理',
    icon: 'iconfont iconjingwuicon-',
    type:'el-icon-document',
    children: [{
      path: '',
      component: () => import('../pages/order/'),
      visible:false
    },
    {
      path: 'list',
      title: '订单列表',
      component: () => import('../pages/order/list')
    },
    {
      path: 'orderNew',
      title: '新订单',
      component: () => import('../pages/order/orderNew')
    }
    ]
  },
  {
    path: '/test',
    component:layoutTopDown,
    title: '考核情况2',
    icon: 'iconfont iconkaohe',
    type:'el-icon-film',
    children: [
      {
        path: '',
        title:'',
        component: () => import('../pages/general/test.vue')
      }
    ]
  },
  {
    path: '/user',
    component:Layout,
    title: '用户管理',
    icon: 'iconfont iconjingwuicon-',
    type:'el-icon-user',
    children: [{
      path: '',
      component: () => import('../pages/user/'),
      visible:false,
    },
    {
      path: 'right',
      title: '用户权限',
      component: () => import('../pages/user/right')
    },
    {
      path: 'userNew',
      title: '新用户',
      component: () => import('../pages/user/userNew')
    }
    ]
  },
  {
    path: '/knowledges',
    component:layoutLeftRight,
    title: '博客坛',
    icon: 'iconfont iconzhuye1',
    type:'el-icon-s-grid',
    children: [{
      path: '',
      title: '前端',
      component: () => import('../pages/knowledges/')
    },
    {
      path: 'back',
      title: '后端',
      component: () => import('../pages/knowledges/back')
    },
    {
      path: 'ais',
      title: '人工智能',
      component: () => import('../pages/knowledges/ais')
    },
    {
      path: 'detail',
      name: 'detail',
      title: '详情',
      visible: false,
      component: () => import('../pages/knowledges/detail')
    }
    ]
  },
  {
    path: '/checks',
    component:layoutTopDown,
    title: '考核情况',
    icon: 'iconfont iconkaohe',
    type:'el-icon-watch-1',
    children: [{
      path: '',
      title: '考评办法',
      component: () => import('../pages/checks')
    },
    {
      path: 'results',
      title: '考评情况',
      component: () => import('../pages/checks/results')
    }]
  },

]
// routesMenu.forEach(p => {
//   p.component = layoutTopDown
// })

const routesCommon = [{
  path: '/dash',
  component: () => import('../pages/general/dash.vue')
},
{
  path: '',
  redirect: '/login'
},
{
  path: '/',
  redirect: '/dash'
},
{
  path: '/login',
  component: () => import('../pages/general/login.vue')
}]

const router = new VueRouter({
  mode: 'hash', // 'history',
  // base: process.env.BASE_URL,
  base: '/general/',
  routes: [...routesMenu, ...routesCommon]
})

export default router
export {
  routesMenu
}
