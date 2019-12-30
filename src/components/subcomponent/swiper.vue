<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img_url" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
    props:['lunbotuList']
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  //注意！！！！！！！！！！！！  这里是mint-swipe  不是上面的标签名字mt-swipe
  height: 200px;
  color: pink;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>