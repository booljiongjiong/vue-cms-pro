<template>
  <div class="photoinfo-container">
    <h3>{{photoInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{photoInfo.add_time}}</span>
      <span>点击：{{photoInfo.click}}次</span>
    </p>

    <hr />

    <!-- 缩略图区域 -->
    <!-- 下面这种处理缩略图的方式已经是过去式啦 -->
    <!-- <img class="preview-img" v-for='(item,index) in list' :key="item.src" @click="$preview.open(index,list)" :src="item.src" height="100"> -->

    <div class="thumbs">
      <!-- 新的缩略图处理方式 -->
      <vue-preview :slides="list" @close="handleClose"></vue-preview>
    </div>

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoInfo.content"></div>

    <cmt-box :id="id"></cmt-box>
    <!-- 注意！！！！！此处不要忘记给子组件comment.vue传递一个参数 -->
  </div>
</template>

<script>
import comment from "../subcomponent/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {},
      list: []
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

    // this.getThumbs();//没有服务器数据 使用data里面的数据配置模拟
    this.list = [
      {
        src:
          "http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg",
        msrc:
          "http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg",
        alt: "第1张图片",
        w: 600,
        h: 400
      },
      {
        src:
          "http://g.hiphotos.baidu.com/zhidao/pic/item/c83d70cf3bc79f3d6e7bf85db8a1cd11738b29c0.jpg",
        msrc:
          "http://g.hiphotos.baidu.com/zhidao/pic/item/c83d70cf3bc79f3d6e7bf85db8a1cd11738b29c0.jpg",
        alt: "第2张图片",
        w: 600,
        h: 400
      },
      {
        src:
          "http://e.hiphotos.baidu.com/zhidao/pic/item/9d82d158ccbf6c81ec5127f8bc3eb13533fa40bf.jpg",
        msrc:
          "http://e.hiphotos.baidu.com/zhidao/pic/item/9d82d158ccbf6c81ec5127f8bc3eb13533fa40bf.jpg",
        alt: "第3张图片",
        w: 600,
        h: 400
      },
      {
        src: "https://icweiliimg9.pstatp.com/weili/l/259538946719219917.webp",
        msrc: "https://icweiliimg9.pstatp.com/weili/l/259538946719219917.webp",
        alt: "第4张图片",
        w: 600,
        h: 400
      },
      {
        src:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577536363583&di=c29fbdb8c3553f21b296cd4ac7aa9fc3&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180802%2F00%2F1533141345-cpVLxyligh.jpg",
        msrc:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577536363583&di=c29fbdb8c3553f21b296cd4ac7aa9fc3&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180802%2F00%2F1533141345-cpVLxyligh.jpg",
        alt: "第5张图片",
        w: 600,
        h: 400
      }
    ];
  },

  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageInfo/" + this).then(rlt => {
        if (rlt.body.status === 0) {
          this.photoInfo = rlt.body.message[0];
        }
      });
    },

    getThumbs() {
      this.$http.get("api/getthumbs/" + this.id).then(rlt => {
        if (rlt.body.status === 0) {
          rlt.body.message.forEach(element => {
            element.w = 600;
            element.h = 400;
          });
          this.list = rlt.body.message;
        }
      });
    },

    handleClose() {
      console.log("关闭缩略图");
    }
  },

  components: {
    "cmt-box": comment
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

  /*. thumbs {
    .my-gallery {
      figure {
        width: 30%;
        margin: 5px;
        img {
          width: 100%;
        }
      }
    }
  } */
  
.thumbs {
    // 注意！！！！！:
    //使用 scoped 后，父组件的样式将不会渗透到子组件中。
    //使用深度作用选择器 /deep/ 或者'>>>' ,但注意像sass、less预处理器不认三个箭头
  /deep/ .my-gallery {
    display: flex;
    flex-wrap: wrap;
    figure {
      width: 30%;
      margin: 5px;
      img {
        width: 100%;
      }
    }
  }
}


}
</style>