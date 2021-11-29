// 引入Vue和App
import Vue from 'vue'
import App from './App.vue'
// 引入插件
import plugins from './plugin'
Vue.config.productionTip = false // 关闭Vue的生产提示

// 使用插件
Vue.use(plugins)
    // 创建vm
new Vue({
    el: '#app',
    render: h => h(App)
})