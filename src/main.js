import Vue from 'vue'
import './lib/mui/css/mui.css'

//导入app组件
import app from './App.vue'
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)
 
var vm = new Vue({
  el: '#app',
  data: {},
  methods: {},
  render: e => e(app)
});
