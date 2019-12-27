<template>
  <div class="cmt-container">
    <h3>输入评论</h3>
    <hr />
    <textarea placeholder="评论，不超过120字" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in coments" :key="i">
        <div
          class="cmt-title"
        >第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time}}</div>
        <div
          class="cmt-body"
        >{{item.content==='undefined' || item.content===''?'此用户很懒，什么也没留下,哭唧唧~~~':item.content}}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1, //默认第一页
      coments: [
        {
          user_name: "小明1",
          add_time: "20179-12-27 18:21",
          content: "小明1的评论啦啦啦啦啦"
        },
        { user_name: "小明2", add_time: "20179-12-27 18:22", content: "" },
        {
          user_name: "小明3",
          add_time: "20179-12-27 18:23",
          content: "小明3的评论啦啦啦啦啦"
        },
        {
          user_name: "小明4",
          add_time: "20179-12-27 18:24",
          content: "小明4的评论啦啦啦啦啦"
        },
        {
          user_name: "小明5",
          add_time: "20179-12-27 18:25",
          content: "小明5的评论啦啦啦啦啦"
        },
        {
          user_name: "小明6",
          add_time: "20179-12-27 18:26",
          content: "小明6的评论啦啦啦啦啦"
        },
        {
          user_name: "小明7",
          add_time: "20179-12-27 18:27",
          content: "小明7的评论啦啦啦啦啦"
        }
      ],
      msg: ""
    };
  },
  created() {
    // this.getComments();//没有服务器 用本地的data配置数据进行模拟
  },
  methods: {
    getComments() {
      this.$http.get(
        "api/getcomments/:" + this.id + "?pageindex=" + this.pageIndex,
        rlt => {
          if (rlt.body.status === 0) {
            this.coments = this.coments.concat(rlt.body.message);
          } else {
            Toast("获取评论失败");
          }
        }
      );
    },
    getMore() {
      this.pageIndex++;
      // this.getComments();//没有服务器数据 使用data中的数据模拟
      this.coments = this.coments.concat([
        {
          user_name: "小明7",
          add_time: "20179-12-27 18:27",
          content: "小明7的评论啦啦啦啦啦"
        },
        {
          user_name: "小明8",
          add_time: "20179-12-27 18:28",
          content: "小明8的评论啦啦啦啦啦"
        },
        {
          user_name: "小明9",
          add_time: "20179-12-27 18:29",
          content: "小明9的评论啦啦啦啦啦"
        },
        {
          user_name: "小明10",
          add_time: "20179-12-27 18:10",
          content: "小明10的评论啦啦啦啦啦"
        }
      ]);
    },
    postComment() {
      if (this.msg.trim().length === 0) {
        return Toast("评论不能为空");
      }
      //没有服务器数据 自己模拟一下
      /* this.$http
        .post("api/postcomment/:" + this.$route.params.id, {
          content: this.msg.trim()
        })
        .then(function(rlt) { 
          if (rlt.body.status === 0) {*/
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };
            this.coments.unshift(cmt);
            this.msg = '';
          /*}
         }); */
    }
  },
  props: ["id"]
};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    .cmt-item {
      margin-top: 5px;
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>