<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max='max'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      @change="countChanged"
      ref="numbox"
      type="number"
      value="1"
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
    console.log("子组件max"+this.max)
  },
  methods: {
    countChanged() {
      console.log('this.$refs.numbox.value = '+parseInt(this.$refs.numbox.value))
      this.$emit("getCount", parseInt(this.$refs.numbox.value));
    },
  },
  props: ["max"],
  watch: {
    max: function(newVal, oldVal) {
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
      console.log("max = " + this.max);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>