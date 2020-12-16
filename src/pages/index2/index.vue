<template>
  <div class="index-container">
    <top></top>
    <div class="banner">
      <div class="item-swiper">
        <swiper :options="swiperOption" class="ms-swiper">
          <swiper-slide v-for="(item, index) in imglist" :key="index">
            <div>
              <img :src="item" alt="" class="swiper-img" />
            </div>
          </swiper-slide>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- 如果需要导航按钮 -->
          <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
          <!-- <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
        <div class="follow">
          <follow></follow>
        </div>
        <div class="box">{{ current }}/{{ imglist.length }}</div>
      </div>
    </div>
    <div class="details-bottom">
      <div class="desc">
        {{ dealsDetailObj.deals_title }}
      </div>
      <div class="details-money">
        <div class="money-left">
          <div>
            <span class="money-cost">${{ dealsDetailObj.deals_price }}</span>
            <span class="money-costOld fontGrey"
              >${{ dealsDetailObj.deals_price_old }}</span
            >
          </div>
          <div
            class="money-save"
            v-if="
              dealsDetailObj.deals_price_old - dealsDetailObj.deals_price > 0
            "
          >
            Save ${{
              (dealsDetailObj.deals_price_old - dealsDetailObj.deals_price).toFixed(2)
            }}
          </div>
        </div>
        <div class="money-right"><span> Buy Now</span></div>
      </div>

      <div class="comment-container-top">
        <div>
          <span>Shopee</span> has
          <span>Kronenbourg 1664 Blanc Wheat Beer Can 320ml</span> on sale for
          special price <span>$67.90.</span> With
          <span>$5 off Min. Spend $60</span> voucher, Additional
          <span>10% off</span> coin cashback voucher, Lowest price
          <span>$24.80</span>. Enjoy <span>Free shipping</span>.
        </div>
      </div>
      <div class="info">
        <div class="info-left">
          <div class="lable">
            <span>Voucher:</span>
            <span>Code: </span>
          </div>
          <div class="code">
            <span>{{ dealsDetailObj.deals_voucherlink }}</span>
            <span>{{ dealsDetailObj.deals_discountvouchercode }}</span>
          </div>
        </div>
        <div class="info-right">Copy</div>
      </div>
      <div class="desc-details">
        LUNA 3 is the ultimate addition to your cleansing ritual Featuring
        upgraded T-Sonic pulsations at 16 different intensities, LUNA 3 blasts
        away dirt, oil and makeup residue in only one minute
      </div>
      <div class="desc-time">4-19</div>
      <div>
        <comment :list='dealsDetailObj.report'></comment>
      </div>
      <div class="community">Recommend for you</div>
      <div class="product-container">
        <product-list :list="productList"></product-list>
      </div>
      <div class="pro-btn-bottom">Open App to view more</div>
      <div class="fixed-logo">
        <div class="fix-logo-container">
          <img src="../../assets/logo.png" alt="" />
        </div>
        <div class="fix-open">Open</div>
      </div>
    </div>
  </div>
</template>
<script>
import top from "@/components/top";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import comment from "@/components/comment";
import productList from "@/components/productList";
import follow from "@/components/follow";
// import card from "@/components/card";
import "swiper/dist/css/swiper.css";
let vm = null;
export default {
  components: { top, swiper, swiperSlide, comment, productList, follow },
  data() {
    return {
      imglist: [],
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 导航
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          slideChange: function () {
            vm.current = this.realIndex + 1;
          },
        },
        //页码
      },
      active: 0,
      productList: [],
      current: 1, //轮播图当前页
      dealsDetailObj: {},
    };
  },
  created() {
    vm = this;
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // let params = {
      //   access_token: "",
      //   plat: "user",
      //   version: "1",
      //   lang: "cn",
      //   deals_categoryid: "1",
      //   deals_title: "a",
      //   region: "2",
      // };
      // this.getDealList(params).then((res) => {
      //   console.log(res);
      //   this.productList = res.data;
      // });
      let params2 = {
        access_token: "",
        plat: "web",
        version: "1",
        lang: "cn",
        deals_id: "61732",
      };
      this.getDealDetails(params2).then((res) => {
        console.log(res, "商品详情");
        //轮播图
        this.imglist = res.deals_images.split(",");
        this.dealsDetailObj = res;
        this.productList = res.recommend;
      });
       let params3 = {
        access_token: "",
        plat: "web",
        version: "1",
        lang: "cn",
        deals_categoryid: "1",
        deals_title: "a",
        region: "2",
      };
      this.getCommentList(params3).then((res) => {
        // console.log(res);
        // this.productList = res.data;
      });
    },
    async getDealList(params) {
      let res = await this.$api.getDealList(params);
      return res.data.data;
    },
    async getDealDetails(params) {
      let res = await this.$api.getDealDetails(params);
      return res.data.data;
    },
    async getCommentList(params) {
      let res = await this.$api.getCommentList(params);
       console.log('评论',res);
      return res.data.data;
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/common.scss";
.swiper-img {
  height: 385px;
  width: 100%;
}
.desc {
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 20px;
  text-align: left;
  /* Colors / #000000 / 1.0 */

  color: #000000;
}

.comment-container-top {
  height: auto;
  width: 99%;
  margin: 15px auto;
  margin-top: 24px;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.comment-container-top > div {
  width: 100%;
  height: auto;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  text-align: left;
  padding: 12px 12px;
  background-image: url("../../assets/images/Group 88.png");
  background-size: 100%;
  background-repeat: no-repeat;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
}
.comment-container-top > div > :first-child {
  color: #e92f2b;
}
.comment-container-top > div > span {
  font-weight: 400;
  color: #000000;
}
.details-bottom {
  padding: 0 10px;

  .details-money {
    display: flex;
    margin-top: 15px;
    align-items: center;
    justify-content: space-between;
  }

  .money-left {
    text-align: left;
  }

  .money-cost {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    color: #f11515;
  }
  .money-costOld {
    margin-left: 9px;
    text-decoration: line-through;
  }
  .money-save {
    display: inline-block;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    padding: 3px;
    margin-top: 3px;
    /* Colors / #FFFFFF / 1.0 */
    background-color: #f11515;
    color: #ffffff;
    border-radius: 3px;
  }
  .money-right {
    width: 156px;
    height: 34px;
    background: #e92f2b;
    border-radius: 3px;
    color: #ffffff;
    text-align: center;
    line-height: 34px;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f8f8f8;
    border-radius: 6px;
    //margin-top: 190px;
    padding: 12px;
  }
  .info-left {
    display: flex;
    .lable {
      text-align: right;
      display: flex;
      flex-direction: column;
      font-family: SF Pro Display;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 18px;
      /* identical to box height, or 112% */

      /* Colors / #000000 / 0.4 */

      color: rgba(0, 0, 0, 0.4);
    }
    .code {
      text-align: left;
      display: flex;
      flex-direction: column;
      font-family: SF Pro Display;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 18px;
      /* identical to box height, or 112% */

      /* Colors / #000000 / 0.8 */

      color: rgba(0, 0, 0, 0.8);
      margin-left: 8px;
    }
  }
  .info-right {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    /* or 112% */

    color: #f11515;
  }
  .desc-details {
    margin-top: 15px;
    text-align: left;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    /* Colors / #000000 / 0.6 */

    color: rgba(0, 0, 0, 0.6);
  }
  .desc-time {
    margin: 15px 0;
    text-align: left;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    /* Colors / #000000 / 0.4 */

    color: rgba(0, 0, 0, 0.4);
  }
  .product-container {
    width: 100%;
  }
  .pro-btn-bottom {
    // width: 357px;
    height: 44px;
    background: #e92f2b;
    border-radius: 6px;
    text-align: center;
    line-height: 44px;
    // margin: 0 9px;
    margin-bottom: 100px;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    /* identical to box height, or 112% */

    /* Colors / #FFFFFF / 1.0 */

    color: #ffffff;
  }
  .fixed-logo {
    position: fixed;
    right: 14px;
    bottom: 10px;
    z-index: 100;

    .fix-logo-container {
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      background-color: #fff;
      border-radius: 10px;
    }
    .fix-open {
      width: 57px;
      height: 20px;
      line-height: 20px;
      background-color: #e92f2b;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      margin-top: 6px;
      font-size: 10px;
      color: #fff;
    }
  }
}
.banner {
  position: relative;
  margin-top: 58px;
}
.box {
  display: inline-block;
  position: absolute;
  z-index: 100;
  right: 12px;
  bottom: 36px;
  width: 27px;
  height: 20px;
  line-height: 20px;
  padding: 0 2px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 100px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;

  /* Colors / #FFFFFF / 1.0 */

  color: #ffffff;
}
.follow {
  position: absolute;
  z-index: 100;
  right: 12px;
  top: 36px;
}
</style>