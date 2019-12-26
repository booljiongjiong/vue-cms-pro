import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//导入自己的router.js路由模块
import router from './router.js'

//导入app组件
import app from './App.vue'
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

var vm = new Vue({
  el: '#app',
  data: {},
  methods: {},
  router,
  render: e => e(app)
});