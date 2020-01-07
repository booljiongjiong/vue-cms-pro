<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 商品列表区 -->
      <!-- <div class="mui-card" v-for="item in goodslist" :key="item.id" tag='div'> -->
      <!-- 注意！！！！！因为购物车界面用的是配置数据 有可能配置的id对应的商品还没有点击过添加到购物车 所以这里要过滤一下 但是v-for跟v-if一般不建议在一起使用 所以借助computed属性过滤一下 -->
      <div
        class="mui-card"
        v-for="(item,i) in getFilterArrCuzDataIsHandConfig()"
        :key="item.id"
        tag="div"
      >
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch
              v-model="$store.getters.getGoodsSelected[item.id]"
              @change="selectedChange(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
            <img :src="item.thumb_path" />
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">${{item.sell_price}}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 商品结算区 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner jiesuan">
            <div class="left">
              <p>总计（不含运费）</p>
              <p>已勾选商品<span class="red">{{this.$store.getters.getGoodsCountAndAmount.count}}</span>件，总价￥<span class="red">{{this.$store.getters.getGoodsCountAndAmount.amount}}</span>）</p>
            </div>
            <mt-button type='danger'>去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "../subcomponent/shopcar_numbox.vue";
export default {
  data() {
    return {
      goodslist: []
    };
  },

  created() {
    // this.getGoodsList();//没有服务器数据 使用data中的数据配置模拟
    this.goodslist = [
      {
        cou: 1,
        id: 0,
        sell_price: 2999,
        thumb_path:
          "https://avatars2.githubusercontent.com/u/27684744?s=40&v=4",
        title: "商品标题和简略介绍000000"
      },
      {
        cou: 2,
        id: 1,
        sell_price: 3999,
        thumb_path:
          "https://icweiliimg9.pstatp.com/weili/l/259538946719219917.webp",
        title: "商品标题和简略介绍1111111111"
      },
      {
        cou: 1,
        id: 2,
        sell_price: 4999,
        thumb_path:
          "http://e.hiphotos.baidu.com/zhidao/pic/item/9d82d158ccbf6c81ec5127f8bc3eb13533fa40bf.jpg",
        title: "商品标题和简略介绍2222222222"
      }
    ];
  },

  methods: {
    getGoodsList() {
      var idArr = [];
      this.$store.state.car.forEach(item => {
        idArr.push(item.id);
      });
      if (idArr.length <= 0) {
        return;
      }
      this.$http.get("api/goods/getshopcarlist" + idArr.join(",")).then(rlt => {
        if (rlt.body.status === 0) {
          this.goodslist = rlt.body.message;
        }
      });
    },

    remove(id, i) {
      this.goodslist.splice(i, 1);
      this.$store.commit("removeFromCar", id);
    },

    selectedChange(id,seletState){
      this.$store.commit('selectedChange',{id,selected:seletState});
    }
  },
  components: {
    numbox
  },

  computed: {
    getFilterArrCuzDataIsHandConfig() {
      //注意！！！！！这里返回的是一个函数 如果不返回函数 直接返回里面过滤出来的数组的话 会报错 找不到这个函数的
      return () => {
        var that = this;
        var arr = that.goodslist.filter(
          item => that.$store.getters.getGoodsCount[item.id] !== undefined //注意！！！！！1.时刻注意箭头函数里面的this的指向问题(箭头函数的this是定义时候就定下来的)！！！！ 2.undefined这里是要用来判断值用的 不要加引号变成字符串啊啊啊啊啊啊！！！
        );
        return arr;
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;

  .goods-list {
    .mui-card-content-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    img {
      width: 60px;
      height: 60px;
    }

    h1 {
      font-size: 13px;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }

  .jiesuan{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .red{
      color: red;
      font-weight: 700;
    }
  }
}
</style>