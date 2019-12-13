// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
// 引入轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 重置元素初始样式
import 'styles/reset.css'
// 解决1px像素在不同手机中展现效果不同问题
import 'styles/border.css'
import 'styles/iconfont/iconfont.css'
// 轮播样式
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// 解决移动端点击事件300毫秒延迟问题
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
