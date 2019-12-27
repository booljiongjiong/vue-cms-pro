<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src='item.img_url' alt />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
         <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
         <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      lunbotuList: [
        //注意！！！！！本地模拟数据时候，因为要放在v-for里面的img标签里面渲染，
        //img标签的src属性做了v-bind绑定，所以必须使用require引入图片路径
        {url:1,img_url:require('../../images/homeLunbotu/1.jpg')},
        {url:2,img_url:require('../../images/homeLunbotu/2.jpg')},
        {url:3,img_url:require('../../images/homeLunbotu/3.jpg')},
        {url:4,img_url:require('../../images/homeLunbotu/4.jpg')},
        {url:5,img_url:require('../../images/homeLunbotu/5.jpg')}
      ]
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      // this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
      //   if (result.body.status === 0) {
      //     console.log("createsdddddd111111");
      //     ths.lunbotuList = result.body.message;
      //   } else {
      //     Toast("获取轮播图失败");
      //   }
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  //注意！！！！！！！！！！！！  这里是mint-swipe  不是上面的标签名字mt-swipe
  height: 200px;
  color: pink;
  img {
    width: 100%;
    height: 100%;
  }
}

.mui-grid-view.mui-grid-9 {
    border: 0;
    background: #fff;
    img {
      width: 60px;
      height: 60px;
    }
    .mui-media-body {
      font-size: 12px;
    }
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
  }
</style>