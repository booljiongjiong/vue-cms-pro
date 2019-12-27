<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{newsInfo.add_time}}</span>
      <span>点击：{{newsInfo.click}}次</span>
    </p>

    <hr />

    <div class="content" v-html="newsInfo.content"></div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfo: {
          id:1,
          title:'新闻资讯1的title',
          click:2,
          add_time:'2019-12-27-17:03',
          content:'<h4>新闻详情文本<i>新闻详情文本</i>新闻详情文本新闻详情文本新闻详情文本新闻详情文本新闻详情文本</h4>'
      }
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.$http.get("api/getnew/:" + this.id, rlt => {
        if (rlt.body.status === 0) {
          this.newsInfo = rlt.body.message;
        } else {
          Toast("获取新闻失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 14px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
  }
}
</style>