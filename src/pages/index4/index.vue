<template>
  <div class="index-container">
    <top></top>
    <div class="banner">
      <img :src="manageObj.campaignpage_image" alt="" />
    </div>
    <div>
      <tab2></tab2>
    </div>
    <div class="details-bottom">
      <div class="desc-titile">
        {{ manageObj.campaignpage_title }}
      </div>
    </div>
    <div v-for="(item, index) in manageObj.campaignpage_content" :key="index">
      <div class="details-bottom">
        <div class="desc-titile" v-if="item.type == 'title'">
          <span></span>
        </div>
        <div class="desc" v-if="item.type == 'text'">
          <span v-html="item.text">{{ item.text }}</span>
        </div>
        <div class="info" v-if="item.type == 'quote'">
          <div class="info-detail">
            {{ item.text }}
          </div>
        </div>
      </div>
      <div class="movie" v-if="item.type == 'video'">
        <video :src="item.src"></video>
        <img :src="item.src" alt="" />
      </div>
      <div class="movie" v-if="item.type == 'images'">
        <img :src="item.src" alt="" />
      </div>
      <div v-if="item.type == 'dealscard'">
        <buy-product :obj="item"></buy-product>
      </div>
    </div>
    <div class="details-bottom">
      <div class="desc-time">
        <div>{{manageObj.campaignpage_updatetime | filterTime}}</div>
        <div class="report">
          <span>Report</span>
          <span>∨</span>
        </div>
      </div>
      <div>
        <comment :list="manageObj.report"></comment>
      </div>
    </div>
  </div>
</template>
<script>
import top from "@/components/top";
import tab2 from "@/components/tab2";
import buyProduct from "@/components/buyProduct";
import comment from "@/components/comment";
export default {
  components: { top, tab2, comment, buyProduct },
  data() {
    return {
      manageObj: {}, //文章对象
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let params = {
        access_token: "",
        plat: "web",
        version: "1",
        lang: "cn",
        campaignpage_id: "127",
      };
      this.getPostDetails(params).then((res) => {
        console.log("数据", res);
        this.manageObj = res;
      });
    },
    async getPostDetails(params) {
      let res = await this.$api.getPostDetails(params);
      return res.data.data;
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/common.scss";
.banner img {
  height: 304px;
  width: 100%;
}
.details-bottom {
  padding: 0 10px;
  text-align: left;
  .desc-titile {
    margin: 15px 0;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.8);
  }
  .desc {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.6);
  }
  .info {
    border-radius: 6px;
    background: url("../../assets/images/markbg.png") no-repeat #f8f8f8;
    margin: 15px 0;
    padding: 12px;
  }
  .info2 {
    border-radius: 6px;
    background: url("../../assets/images/markbg2.png") no-repeat #f8f8f8;
    margin: 15px 0;
    padding: 12px;
  }
  .info-detail {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  .movie-desc {
    margin: 15px 0;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.6);
  }
  .movie-title {
    margin: 15px 0;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.8);
  }
}
.movie {
  text-align: left;
  img {
    width: 100%;
  }
}
.desc-time {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  text-align: left;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  /* Colors / #000000 / 0.4 */

  color: rgba(0, 0, 0, 0.4);
  .report {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
    span {
      margin: 2px;
    }
  }
}
</style>