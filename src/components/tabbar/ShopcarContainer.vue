<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 商品列表区 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img src="https://avatars2.githubusercontent.com/u/27684744?s=40&v=4" alt />
            <div class="info">
              <h1>购物车商品1</h1>
              <p>
                <span class="price">$2199</span>
                <shopcar_numbox></shopcar_numbox>
                <a href>删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 商品结算区 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">这是结算区</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shopcar_numbox from "../subcomponent/shopcar_numbox.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    shopcar_numbox
  }
};
</script>

<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;

  .goods-list{
    .mui-card-content-inner{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    img{
      width: 60px;
      height: 60px;
    }

    h1{
      font-size: 13px;
    }

    .info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price{
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>