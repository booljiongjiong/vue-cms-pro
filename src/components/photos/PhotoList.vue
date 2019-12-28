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
            @click="getPhotoListByCateID(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <!-- 注意！！！！ ul里面的v-for渲染的li标签改成路由连接router-link时候 要使用tag指令手动修改渲染标签结果为li -->
      <router-link v-for="item in list" :key="item.id" :to="'/home/photo/'+item.id" tag='li'>
        <img v-lazy="item.img_url" />
        <div class="info">
          <div class="info-title">{{item.title}}</div>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
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
        { title: "汽 车", id: 4 }
      ],
      list: [
        {
          id: 1,
          img_url:
            "http://img0.imgtn.bdimg.com/it/u=334412438,2625016036&fm=26&gp=0.jpg",
          title: "图片标题",
          zhaiyao: "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
        },
        {
          id: 2,
          img_url:
            "http://img5.imgtn.bdimg.com/it/u=3381065558,51470907&fm=26&gp=0.jpg",
          title: "图片标题",
          zhaiyao: "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
        },
        {
          id: 3,
          img_url:
            "http://img5.imgtn.bdimg.com/it/u=3373541372,149267451&fm=26&gp=0.jpg",
          title: "图片标题",
          zhaiyao: "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
        },
        {
          id: 4,
          img_url:
            "http://img1.imgtn.bdimg.com/it/u=470169035,1270642892&fm=26&gp=0.jpg",
          title: "图片标题",
          zhaiyao: "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
        },
        {
          id: 5,
          img_url:
            "http://img4.imgtn.bdimg.com/it/u=4073455761,2994214211&fm=26&gp=0.jpg",
          title: "图片标题",
          zhaiyao: "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
        }
      ]
    };
  },

  created() {
    // this.getAllGategory();//没有服务器数据 用data中的数据配置一下模拟
    // this.getPhotoListByCateID(0);//没有服务器数据 用data中的数据配置一下模拟
  },

  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },

  methods: {
    getAllGategory() {
      this.$http.get("api/getimgcategory", rlt => {
        if (rlt.body.status === 0) {
          rlt.body.message.unshift({ title: "全部", id: 0 });
          this.cat = rlt.body.message;
        }
      });
    },

    getPhotoListByCateID(cateId) {
      // this.$http.get("api/getimages/" + cateId, rlt => {
      //   if (rlt.body.status === 0) {
      //     ths.list = rlt.body.message;
      //   }
      // });
      switch (cateId) {
        case 0: {
          this.list = [
            {
              id: 1,
              img_url:
                "http://img0.imgtn.bdimg.com/it/u=334412438,2625016036&fm=26&gp=0.jpg",
              title: "图片标题",
              zhaiyao:
                "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
            },
            {
              id: 2,
              img_url:
                "http://img5.imgtn.bdimg.com/it/u=3381065558,51470907&fm=26&gp=0.jpg",
              title: "图片标题",
              zhaiyao: "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
            },
            {
              id: 3,
              img_url:
                "http://img5.imgtn.bdimg.com/it/u=3373541372,149267451&fm=26&gp=0.jpg",
              title: "图片标题",
              zhaiyao: "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
            },
            {
              id: 4,
              img_url:
                "http://img1.imgtn.bdimg.com/it/u=470169035,1270642892&fm=26&gp=0.jpg",
              title: "图片标题",
              zhaiyao: "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
            },
            {
              id: 5,
              img_url:
                "http://img4.imgtn.bdimg.com/it/u=4073455761,2994214211&fm=26&gp=0.jpg",
              title: "图片标题",
              zhaiyao: "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
            }
          ];
          break;
        }
        case 1: {
          this.list = [
            {
              id: 2,
              img_url:
                "http://img5.imgtn.bdimg.com/it/u=3381065558,51470907&fm=26&gp=0.jpg",
              title: "图片标题",
              zhaiyao: "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
            },
            {
              id: 4,
              img_url:
                "http://img1.imgtn.bdimg.com/it/u=470169035,1270642892&fm=26&gp=0.jpg",
              title: "图片标题",
              zhaiyao: "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
            }
          ];
          break;
        }
        case 2: {
          this.list = [
            {
              id: 1,
              img_url:
                "http://img0.imgtn.bdimg.com/it/u=334412438,2625016036&fm=26&gp=0.jpg",
              title: "图片标题",
              zhaiyao: "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
            },
            {
              id: 3,
              img_url:
                "http://img0.imgtn.bdimg.com/it/u=334412438,2625016036&fm=26&gp=0.jpg",
              title: "图片标题",
              zhaiyao: "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
            },
            {
              id: 5,
              img_url:
                "http://img0.imgtn.bdimg.com/it/u=334412438,2625016036&fm=26&gp=0.jpg",
              title: "图片标题",
              zhaiyao: "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
            }
          ];
          break;
        }
        default: {
          this.list = [
            {
              id: 1,
              img_url:
                "http://img0.imgtn.bdimg.com/it/u=334412438,2625016036&fm=26&gp=0.jpg",
              title: "图片标题",
              zhaiyao: "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
            },
            {
              id: 2,
              img_url:
                "http://img5.imgtn.bdimg.com/it/u=3381065558,51470907&fm=26&gp=0.jpg",
              title: "图片标题",
              zhaiyao: "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
            },
            {
              id: 3,
              img_url:
                "http://img5.imgtn.bdimg.com/it/u=3373541372,149267451&fm=26&gp=0.jpg",
              title: "图片标题",
              zhaiyao: "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
            },
            {
              id: 4,
              img_url:
                "http://img1.imgtn.bdimg.com/it/u=470169035,1270642892&fm=26&gp=0.jpg",
              title: "图片标题",
              zhaiyao: "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
            },
            {
              id: 5,
              img_url:
                "http://img4.imgtn.bdimg.com/it/u=4073455761,2994214211&fm=26&gp=0.jpg",
              title: "图片标题",
              zhaiyao: "图片摘要图片摘要图片摘要图片摘要图片摘要图片摘要"
            }
          ];
          break;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  //解决mui的scroll无法左右拖动的问题
  touch-action: pan-y;
}

.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 6px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
  }
}

.info {
  color: white;
  text-align: left;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  max-height: 40px;
  .info-title {
    font-size: 14px;
  }
  .info-body {
    font-size: 13px;
  }
}
</style>