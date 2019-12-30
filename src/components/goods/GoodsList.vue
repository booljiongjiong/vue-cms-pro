<template>
  <div>
    <div class="goods-list">
      <!-- <router-link class="goods-item" v-for="(item,index) in goodsList" :key="index" :to='"/home/goodsinfo/"+index' tag='div'>
        <img :src="item.img_url" />
        <h1 class="title">{{item.title}}</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥{{item.now}}</span>
            <span class="old">￥{{item.old}}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩余{{item.stock_quantity}}件</span>
          </p>
        </div>
      </router-link>-->

      <!-- 编程式导航 -->
      <div
        class="goods-item"
        v-for="(item,index) in goodsList"
        :key="index"
        @click="gotoInfo(index)"
      >
        <img :src="item.img_url" />
        <h1 class="title">{{item.title}}</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥{{item.now}}</span>
            <span class="old">￥{{item.old}}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩余{{item.stock_quantity}}件</span>
          </p>
        </div>
      </div>
    </div>
    <mt-button type="primary" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageIndex: 1,
      goodsList: []
    };
  },

  created() {
    //   this.getGoodsList()//没有服务器数据 用data中的数据配置模拟
    this.goodsList = [
      {
        title: "商品名称1",
        now: 899,
        old: 999,
        img_url:
          "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2668824426,2888688134&fm=26&gp=0.jpg",
        stock_quantity: 100
      },
      {
        title: "商品名称2",
        now: 899,
        old: 999,
        img_url:
          "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2668824426,2888688134&fm=26&gp=0.jpg",
        stock_quantity: 101
      },
      {
        title: "商品名称3",
        now: 899,
        old: 999,
        img_url:
          "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2668824426,2888688134&fm=26&gp=0.jpg",
        stock_quantity: 102
      }
    ];
  },

  methods: {
    getGoodsList() {
      //   this.$http.get("api/getgoods/?pageIndex=" + this.pageIndex, rlt => {
      //     if (rlt.body.status === 0) {
      //       this.goodsList = this.goodsList.concat(rlt.body.message);
      //     }
      //   });
      //没有服务器数据 使用data里面的数据配置模拟
      this.goodsList = this.goodsList.concat(
        this.goodsList[0],
        this.goodsList[1],
        this.goodsList[2]
      );
    },

    getMore() {
      this.pageIndex++;
      this.getGoodsList();
    },

    gotoInfo(id) {
      //使用js的形式進行路由导航
      // console.dir(this)

      //this.$route 是路由参数对象 所有路由中的参数 包括 params query等都属于他
      //this.$router 是路由导航对象 用它可以方便的使用 js代码实现路由的前进 后退 跳转到新的URL地址

      //使用this.$router.push前往某个页面,这个push方法在this.$router的原型对象上，在这个原型对象上还有例如go back forward等好用的方法

      //1.最简单的路由导航
      // this.$router.push("/home/goodsinfo/" + id);//等同于 :to='"/home/goodsinfo/"+item.id'
      
      // 2.传递一个对象的方法进行路由导航
      // this.$router.push({path:'/home/goodsinfo/'+id});

      // 3.使用命名路由和params传参的方式进行路由导航（使用命名路由进行路由导航 必须在路由规则里面给这个路由设置一个名字 就是设置一个name属性）
      this.$router.push({name:'goodsinfo',params:{id}})
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 7px;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin-bottom: 7px;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      width: 100%;
    }

    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 3px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 16px;
          margin-left: 10px;
        }
      }

      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
      }
    }
  }
}
</style>