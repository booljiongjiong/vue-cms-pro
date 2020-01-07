<template>
  <div class="goodsinfo-container">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="flag" ref="ball"></div>
    </transition>

    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="lunbotu" :isFull="false"></swiper>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品名称</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价
            <span class="now">￥{{goodsinfo.sell_price}}</span>
          </p>
          <p>
            购买数量：
            <goodsinfo_numbox @selectedCountChangeFun='selectedCountChangeFun' :max='goodsinfo.stock_quantity'></goodsinfo_numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsinfo.goods_no}}</p>
          <p>库存情况：{{goodsinfo.stock_quantity}}</p>
          <p>上架时间：{{goodsinfo.add_time}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDec(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "../subcomponent/swiper.vue";
import goodsinfo_numbox from "../subcomponent/goodsinfo_numbox.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotu: [],
      goodsinfo: {},
      flag: false,
      selectedCount: 1
    };
  },

  created() {
    // this.getLunbotu();//没有服务器数据 用data里面的数据配置模拟
    this.lunbotu = [
      {
        id: 1,
        img_url:
          "http://img0.imgtn.bdimg.com/it/u=334412438,2625016036&fm=26&gp=0.jpg"
      },
      {
        id: 2,
        img_url:
          "http://img5.imgtn.bdimg.com/it/u=3381065558,51470907&fm=26&gp=0.jpg"
      },
      {
        id: 3,
        img_url:
          "http://img5.imgtn.bdimg.com/it/u=3373541372,149267451&fm=26&gp=0.jpg"
      },
      {
        id: 4,
        img_url:
          "http://img1.imgtn.bdimg.com/it/u=470169035,1270642892&fm=26&gp=0.jpg"
      },
      {
        id: 5,
        img_url:
          "http://img4.imgtn.bdimg.com/it/u=4073455761,2994214211&fm=26&gp=0.jpg"
      }
    ];

    // this.getGoodsInfo();//没有服务器数据 用data里面的数据配置模拟
    this.goodsinfo = {
      add_time: "2019-12-30 23:47",
      goods_no: "348382949875",
      id: 88,
      market_price: 2699,
      sell_price: 2199,
      stock_quantity: 10,
      title: "商品名称啊商品名称"
    };
  },

  methods: {
    getLunbotu() {
      this.$http.get("api/getthumimages").then(rlt => {
        if (rlt.body.status === 0) {
          this.lunbotu = rlt.body.message;
        }
      });
    },

    getGoodsInfo() {
      this.$http.get("api/goods/getinfo" + this.id).then(rlt => {
        if (rlt.body.sttaus === 0) {
          this.goodsinfo = rlt.body.message[0];
        }
      });
    },

    goDec(id) {
      //使用编程式导航跳转到图文介绍页面
      this.$router.push("/home/goodsdec/" + id);
    },
    goComment(id) {
      //使用编程式导航跳转到评论页面
      this.$router.push({ name: "goodscomment", params: { id } });
    },

    addToShopCar() {
      // 添加到购物车
      this.flag = !this.flag;

      //拼接一个商品信息
      var goodsInfo_cust = {
        id: this.id,
        count: this.selectedCount,
        price: this.goodsinfo.sell_price,
        selected: true
      };
      this.$store.commit("addToCar", goodsInfo_cust);
    },
    beforeEnter(el) {
      console.log("beforeEnter: " + el.style.transform);
      el.style.transform = "translate(50px, 130px)";
    },
    enter(el, done) {
      console.log("enter: " + el.style.transform);
      el.offsetWidth;

      const ballPos = this.$refs.ball.getBoundingClientRect();
      const badgePos = document
        .getElementById("mui-badge")
        .getBoundingClientRect();
      const xDis = badgePos.left - ballPos.left;
      const yDix = badgePos.top - ballPos.top;

      el.style.transform = `translate(${xDis}px, ${yDix}px)`;
      el.style.transition = "translate 1s ease";

      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;
      console.log("afterEnter: " + el.style.transform);
    },

    selectedCountChangeFun(count) {
      this.selectedCount = count;
    }
  },

  components: {
    swiper,
    goodsinfo_numbox
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #ccc;
  overflow: hidden; /* 解决margin高度塌陷 */

  .now {
    color: red;
  }

  .ball {
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    z-index: 99;
    top: 365px;
    left: 152px;
  }
}

.mui-card-footer {
  display: block;
  button {
    margin: 10px 0;
  }
}
</style>