import Vue from 'vue'
import Vuex from 'vuex'

// 使用require.context实现前端工程自动化
// let modules = []
Vue.use(Vuex)
const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
// modulesFiles.keys().forEach(key => {
//   if (key === './index.js') return
//   modules = modules.concat(modulesFiles(key).default)
// })
const getters = {
  buttons: state => state['layout'].buttons
}
// console.log(modules)
const store = new Vuex.Store({
  modules,
  getters
})

export default store
