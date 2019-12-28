<template>
  <div class="photoinfo-container">
    <h3>{{photoInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{photoInfo.add_time}}</span>
      <span>点击：{{photoInfo.click}}次</span>
    </p>

    <hr />

    <!-- 缩略图区域 -->
    <!-- 图片内容区域 -->
    <div class="content" v-html="photoInfo.content"></div>

    <cmt-box :id='id'></cmt-box><!-- 注意！！！！！此处不要忘记给子组件comment.vue传递一个参数 -->
  </div>
</template>

<script>
import comment from '../subcomponent/comment.vue'

export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {}
    };
  },

  created() {
    // this.getPhotoInfo();//没有服务器数据 用data里面的数据配置模拟
    this.photoInfo = {
      title: "图片标题啊",
      click: 333,
      add_time: "2019-12-28 17:03",
      content:
        "图片详情描述图片详情描述图片详情描述图片详情描述图片详情描述图片详情描述"
    };
  },

  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageInfo/" + this).then(rlt => {
        if (rlt.body.status === 0) {
          this.photoInfo = rlt.body.message[0];
        }
      });
    }
  },

  components:{
      'cmt-box':comment
  }
};
</script>

<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
  }
  .content {
      font-size: 13px;
      line-height: 30px;
  }
}
</style>