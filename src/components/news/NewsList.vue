<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to='"/home/newslist/"+item.id'>
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{item.add_time}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      newslist: []
    };
  },
  created() {
    //   this.getNewsList();
    this.newsList = [
      {
        id: 1,
        title: "新闻资讯1",
        add_time: "2019-12-27 15:06:11",
        click: 1,
        img_url: "https://avatars2.githubusercontent.com/u/27684744?s=40&v=4"
      },
      {
        id: 2,
        title: "新闻资讯2",
        add_time: "2019-12-27 15:06:12",
        click: 12,
        img_url: "https://avatars2.githubusercontent.com/u/27684744?s=40&v=4"
      },
      {
        id: 3,
        title: "新闻资讯3",
        add_time: "2019-12-27 15:06:13",
        click: 13,
        img_url: "https://avatars2.githubusercontent.com/u/27684744?s=40&v=4"
      },
      {
        id: 4,
        title: "新闻资讯4",
        add_time: "2019-12-27 15:06:14",
        click: 14,
        img_url: "https://avatars2.githubusercontent.com/u/27684744?s=40&v=4"
      },
      {
        id: 5,
        title: "新闻资讯5",
        add_time: "2019-12-27 15:06:15",
        click: 15,
        img_url: "https://avatars2.githubusercontent.com/u/27684744?s=40&v=4"
      },
      {
        id: 6,
        title: "新闻资讯6",
        add_time: "2019-12-27 15:06:16",
        click: 16,
        img_url: "https://avatars2.githubusercontent.com/u/27684744?s=40&v=4"
      },
      {
        id: 7,
        title: "新闻资讯7",
        add_time: "2019-12-27 15:06:17",
        click: 17,
        img_url: "https://avatars2.githubusercontent.com/u/27684744?s=40&v=4"
      },
      {
        id: 8,
        title: "新闻资讯8",
        add_time: "2019-12-27 15:06:18",
        click: 18,
        img_url: "https://avatars2.githubusercontent.com/u/27684744?s=40&v=4"
      },
      {
        id: 9,
        title: "新闻资讯9",
        add_time: "2019-12-27 15:06:19",
        click: 19,
        img_url: "https://avatars2.githubusercontent.com/u/27684744?s=40&v=4"
      }
    ];
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(result => {
        /*注意！！！！！ vue_resource地址前面不能带斜杠 */
        if (result.body.status == 0) {
          this.newsList = result.body.message;
        } else {
          Toast("获取新闻列表失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>