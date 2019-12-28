import VueRouter from 'vue-router'
//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from "./components/news/NewsList.vue"
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'



// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newslist', component: NewsList },
    // 这里面需要的参数id前面要加个: 代表传参，在路由界面想要获取这个id 可以使用$route.param.id获取
    { path: '/home/newslist/:id', component: NewsInfo },
    { path: '/home/photolist', component: PhotoList },
    { path: '/home/photo/:id', component: PhotoInfo },

    {path:'/home/goodslist',component:GoodsList}
  ],
  linkActiveClass: 'mui-active'//覆盖默认的路由高亮的类router-lik-active
})

// 把路由对象暴露出去
export default router