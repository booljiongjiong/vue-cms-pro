<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max='11'  style='height:25px'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      @change="countChanged"
      ref="numbox"
      type="number"
      :value="initcount"
      readonly
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  mounted() {
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
  },

  methods: {
    countChanged() {
      this.$store.commit("updateGoodsInfo", {
        id: this.goodsid,
        count: parseInt(this.$refs.numbox.value)
      });
    }
  },

  props: ["initcount", "goodsid"]
};
</script>

<style lang="scss" scoped>
</style>