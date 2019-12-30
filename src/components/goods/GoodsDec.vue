<template>
  <div class="goodsdec-container">
      <h3>{{data.title}}</h3>
      <hr>
      <p v-html="data.content"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {}
    };
  },

  created() {
    // this.getGoodsDec();//没有服务器数据 用data里面的数据配置模拟
    this.data = {
      title: "商品详情标题",
      content: "<p>商品详情图文描述商品详情图文描述商品详情图文描述商品商品详情图文描述商品详情图文描述商品详情图文描述商品商品详情图文描述商品详情图文描述商品详情图文描述商品商品详情图文描述商品详情图文描述商品详情图文描述商品商品详情图文描述商品详情图文描述商品详情图文描述商品详情图文描述商品详情图文描述商品详情图文描述商品详情图文描述商品详情图文描述</p><p align='center'><img src='https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3727098289,2033687312&fm=26&gp=0.jpg'></p><p>商品详情图文描述商品详情图文描述商品详情图文描述商品详情图文描述商品详情图文描述商品详情图文描述</p>"
    };
  },

  methods: {
    getGoodsDec() {
      this.$http.get("api/goods/getdesc/" + this.$route.params.id).then(rlt => {
        if (rlt.body.status === 0) {
          this.data = rlt.body.message[0];
        }
      });
    }
  }
};
</script>

<style lang="scss">
.goodsdec-container{
    padding: 3px;
    h3{
        font-size: 16px;
        color: #226aff;
        text-align: center;
        margin: 15px 0;
    }

    img{
        width: 100%;//注意！！！！！这里图片要想使用宽度100%这种样式，那么外面的scoped作用域标志要删掉 否则不生效
    }
}
</style>