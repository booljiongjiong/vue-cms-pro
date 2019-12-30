<template>
  <div class="goodsinfo-container">
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList='lunbotu' :isFull='false'></swiper>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>
  </div>
</template>

<script>
import swiper from '../subcomponent/swiper.vue'

export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotu: []
    };
  },
  created() {
    // this.getLunbotu();
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
  },
  methods: {
    getLunbotu() {
      this.$http.get("api/getthumimages").then(rlt => {
        if (rlt.body.status === 0) {
          this.lunbotu = rlt.body.message;
        }
      });
    }
  },

  components:{
    swiper
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #ccc;
  overflow: hidden; /* 解决margin高度塌陷 */
}
</style>