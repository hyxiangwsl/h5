<template>
  <div class="index-container">
    <top></top>
    <div class="banner">
      <div class="item-swiper">
        <swiper :options="swiperOption" class="ms-swiper">
          <swiper-slide v-for="(item, index) in imglist" :key="index">
            <div>
              <img :src="item.path" alt="" class="swiper-img" />
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
        Life is beautiful, you just need to find your place in this big world
      </div>
      <div class="desc2">
        We know how hard it can be to choose your location , hotel , villa or
        itinerary. That’s why we have created The Bali Life Community to help
        you save both time and money for your Bali Trip .
      </div>
      <div class="tip-list">
        <span># Bali</span>
        <span># Newtrip</span>
        <span># Vacation</span>
      </div>
      <!---->
      <ul class="info-list">
        <li v-for="i in 4" :key="i">
          <div class="info">
            <img
              class="info-left"
              src="../../assets/images/info01.png"
              alt=""
            />
            <div class="info-right">
              <span class="top">
                50pcs 3ply Face Mask Disposable Earloop Civilian
              </span>
              <span class="bottom"> ¥ 25.000 </span>
            </div>
          </div>
        </li>
      </ul>

      <div class="desc-time">4-19</div>
      <div>
        <comment></comment>
      </div>
      <div class="community">Recommend for you</div>
      <div class="waterfallList">
        <card :list1="cardList" :list2="cardList2"></card>
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
import card from "@/components/card";
import "swiper/dist/css/swiper.css";
let vm = null;
export default {
  components: { top, swiper, swiperSlide, comment, card, follow },
  data() {
    return {
      imglist: [
        {
          path: require("../../../mock/image/waterfall/02.png"),
        },
        {
          path: require("../../../mock/image/waterfall/02.png"),
        },
        {
          path: require("../../../mock/image/waterfall/02.png"),
        },
        {
          path: require("../../../mock/image/waterfall/02.png"),
        },
        {
          path: require("../../../mock/image/waterfall/02.png"),
        },
        {
          path: require("../../../mock/image/waterfall/02.png"),
        },
        {
          path: require("../../../mock/image/waterfall/02.png"),
        },
        {
          path: require("../../../mock/image/waterfall/02.png"),
        },
        {
          path: require("../../../mock/image/waterfall/02.png"),
        },
      ],
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
      cardList: [
        {
          imgSrc: require("../../../mock/image/waterfall/01.png"),
          title: "Noice cancelling is a secret weapon",
        },
        {
          imgSrc: require("../../../mock/image/waterfall/03.png"),
          title: "Let’s run together",
        },
        {
          imgSrc: require("../../../mock/image/waterfall/05.png"),
          title: "Go out for the good sunset",
        },
        {
          imgSrc: require("../../../mock/image/waterfall/07.png"),
          title: "Good smart charger ",
        },
      ],
      cardList2: [
        {
          imgSrc: require("../../../mock/image/waterfall/02.png"),
          title: "Work from home is so boring",
        },
        {
          imgSrc: require("../../../mock/image/waterfall/04.png"),
          title: "",
        },
        {
          imgSrc: require("../../../mock/image/waterfall/06.png"),
          title: "New Sneaker has just arrived",
        },
        {
          imgSrc: require("../../../mock/image/waterfall/08.png"),
          title: "Good smart charger ",
        },
      ],
      current: 1, //轮播图当前页
    };
  },
  created() {
    vm = this;
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/common.scss";
.desc {
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin: 15px 0;
  /* Colors / #000000 / 0.8 */

  color: rgba(0, 0, 0, 0.8);

  text-align: left;
  /* Colors / #000000 / 1.0 */
}
.swiper-img {
  width: 100%;
  height: 100%;
}
.desc2 {
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  color: rgba(0, 0, 0, 0.6);
}
.details-bottom {
  padding: 0 10px;
  .tip-list {
    margin: 15px 0;
    text-align: left;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: #e92f2b;
    span {
      margin-right: 12px;
    }
  }
  .info-list {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    li {
      margin-right: 7px;
    }
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 302px;
    background: #f8f8f8;
    border-radius: 6px;
    padding: 12px;
  }
  .info-left {
    display: flex;
    background: #c4c4c4;
    border-radius: 6px;
    margin-right: 12px;
  }
  .info-right {
    display: flex;
    flex-direction: column;
    text-align: left;
    .top {
      margin: 6px;
      font-family: SF Pro Display;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      color: rgba(0, 0, 0, 0.8);
    }
    .bottom {
      font-family: SF Pro Display;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      color: #e92f2b;
    }
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
    width: 357px;
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