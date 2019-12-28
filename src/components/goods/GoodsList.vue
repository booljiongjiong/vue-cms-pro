<template>
  <div>
    <div class="goods-list">
      <div class="goods-item" v-for="(item,index) in goodsList" :key="index">
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
      this.goodsList = this.goodsList.concat(this.goodsList[0],this.goodsList[1],this.goodsList[2]);
    },

    getMore() {
      this.pageIndex++;
      this.getGoodsList();
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