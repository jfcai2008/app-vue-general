import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/base.css'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
import './registerServiceWorker'
import './styles.scss'

Vue.use(ElementUI)
Vue.use(VXETable)
Vue.prototype.$vxe = VXETable
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  to.meta.title && (document.title = to.meta.title)
  next()
})

//使tabbed-page组件全局可用
Vue.component('tabbed-page', () => import('./components/tabbedPage'))

// router.beforeEach((to, from, next) => {
//   // 如果有token 说明该用户已登陆
//   if (sessionStorage.getItem('token')) {
//       // 在已登陆的情况下访问登陆页会重定向到首页
//       if (to.path === '/login') {
//           next({path: '/'})
//       } else {
//           next({path: to.path || '/'})
//       }
//   } else {
//       // 没有登陆则访问任何页面都重定向到登陆页
//       if (to.path === '/login') {
//           next()
//       } else {
//           next(`/login?redirect=${to.path}`)
//       }
//   }
// })

// 为了在 Vue 组件中访问 this.$store property，
// 你需要为 Vue 实例提供创建好的 store。Vuex 提供了一个从根组件向所有子组件，
// 以 store 选项的方式“注入”该 store 的机制：
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
