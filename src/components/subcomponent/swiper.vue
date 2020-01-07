<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <!-- 注意！！！！！主要学习vue中添加类名的方式 参照第一天的笔记 -->
        <!-- 有三种 -->
        <!-- 第1种：直接添加数组 数组里面都是字符串类名 :class="['clsStyle1','clsStyle12']" -->
        <!-- 第2种：数组里面使用三元表达式 :class="['clsStyle1',isactive?'clsStyle12':'']" -->
        <!-- 第3种：数组里面嵌套对象 :class="['clsStyle1',{'clsStyle12':isactive'}]" -->
        <!-- 第4种：直接使用对象 :class="{'clsStyle1':true,'clsStyle12':false}" -->
        <img :src="item.img_url" :class="[{'full':isFull}]"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ["lunbotuList", "isFull"]
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

.full{
  width: 100%;
}
</style>