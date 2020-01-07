import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入格式化时间的插件
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormate', function (dataStr, pattern = "YYYY_MM_DD HH:mm:ss") {
  return moment(dataStr).format("pattern")
})


//导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//设置请求的路径
Vue.http.options.root = 'http://vue.studyit.io'

//全局设置post请求时候的表单数据格式
Vue.http.options.emulateJSON = true;

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//导入自己的router.js路由模块
import router from './router.js'


import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
// var store = new Vue.Store({//注意！！！！！ 实例化vuex的时候出现了两个问题 一个是Vuex.Store 不是Vue.Store, 第二个问题是Vuex.Store中的Store的S要大写。。。。。。。
  state: {
    car:[]
  },
  mutations: {
    addToCar(state,infoObj){
      var hasIdYet = false;
      state.car.some(item=>{
        if(item.id == infoObj.id){
          item.count += infoObj.count;
          hasIdYet = true;
          return true;
        }
      });
      if(!hasIdYet){
        state.car.push(infoObj);//注意！！！！！用的是state.car 不是this.car
      }
    }
  },
  getters:{

  }
});

//导入app组件
import app from './App.vue'
// import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)

// import { Lazyload } from 'mint-ui';
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

var vm = new Vue({
  el: '#app',
  data: {},
  methods: {},
  router,
  store,
  render: e => e(app)
});