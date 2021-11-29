// 引入Vue和App
import Vue from 'vue'
import App from './App.vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router/index'
Vue.config.productionTip = false // 关闭Vue的生产提示
    // 应用VueRouter
Vue.use(VueRouter)

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})