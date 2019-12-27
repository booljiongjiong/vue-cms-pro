<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',item.id===0?'mui-active':'']"
            href="#item5mobile"
            data-wid="tab-top-subpage-5.html"
            v-for="item in cates"
            :key="item.id"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 1.导入mui.js
import mui from "../../lib/mui/js/mui.min.js";
// 2.初始化mui-scroll
// mui('.mui-scroll-wrapper').scroll({
// 	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
// });
export default {
  data() {
    return {
      cates: [
        { title: "全 部", id: 0 },
        { title: "家居生活", id: 1 },
        { title: "摄影设计", id: 2 },
        { title: "明星美女", id: 3 },
        { title: "全部", id: 4 }
      ]
    };
  },

  created() {
    // this.getAllGategory();//没有服务器数据 用data中的数据配置一下模拟
  },

  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },

  getAllGategory() {
    this.$http.get("api/getimgcategory", rlt => {
      if (rlt.body.status === 0) {
        rlt.body.message.unshift({ title: "全部", id: 0 });
        this.cat = rlt.body.message;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
* {
  //解决mui的scroll无法左右拖动的问题
  touch-action: pan-y;
}
</style>