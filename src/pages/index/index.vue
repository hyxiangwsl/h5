<template>
  <div class="index-container">
    <top></top>
    <div class="banner">
      <div class="desc">
        The 1st shopping community in SEA,
        <br />
        aiming to help users to make smarter choice
      </div>
      <div class="item-swiper">
        <swiper :options="swiperOption" class="ms-swiper">
          <swiper-slide v-for="(item, index) in imglist" :key="index">
            <div class="swiper-img">
              <img :src="item.path" alt="" class="swiper-img" />
            </div>
          </swiper-slide>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- 如果需要导航按钮 -->
          <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
          <!-- <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
      </div>
    </div>
    <div>
      <tab></tab>
    </div>
    <div class="product-container">
      <product-list :list="productList"></product-list>
    </div>
    <div class="pro-btn">view-more</div>
    <div class="waterfall-container">
      <div class="community">Community</div>
      <div class="waterfallList">
        <card :list="cardList"></card>
      </div>
    </div>
  </div>
</template>
<script>
import top from "@/components/top";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import tab from "@/components/tab";
import productList from "@/components/productList";
import card from "@/components/card";
import "swiper/dist/css/swiper.css";
export default {
  components: { top, swiper, swiperSlide, tab, productList, card },
  data() {
    return {
      imglist: [
        {
          path: require("../../../mock/image/iphone.png"),
        },
        {
          path: require("../../../mock/image/iphone.png"),
        },
        {
          path: require("../../../mock/image/iphone.png"),
        },
        {
          path: require("../../../mock/image/iphone.png"),
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
      },
      active: 0,
      productList: [
        {
          imgSrc: require("../../../mock/image/product/01.png"),
          title:
            "Hot ! ! Originality LED Table lamp Touch Bedside Lamp Bedroom... ",
          cost: "15.00",
          save: "10.00",
          costOld: "25.00",
          place: "Lazada | 14:50",
          vote: 10,
          comment: 10,
          tips: [],
        },
        {
          imgSrc: require("../../../mock/image/product/02.png"),
          title: "Tddler Edituon 100.000 Whys a full set of 30 volumes",
          cost: "25.00",
          save: "10.00",
          costOld: "25.00",
          place: "Lazada | 14:50",
          vote: 10,
          comment: 10,
          tips: ["Voucher", "Cashback"],
        },
        {
          imgSrc: require("../../../mock/image/product/03.png"),
          title:
            "50pcs Disposable Mask Pad Isolation Filter Anti-haze Dustpr...",
          cost: "25.00",
          save: "",
          costOld: "40.00 (-50%)",
          place: "Lazada | 4-5",
          vote: 10,
          comment: 10,
          tips: ["Voucher"],
        },
        {
          imgSrc: require("../../../mock/image/product/04.png"),
          title: "AHC Premium Hydra Soother Cellulose Mask",
          cost: "25,000,000",
          save: "",
          costOld: "",
          place: "Shoppee | 4-2",
          vote: 10,
          comment: 10,
          tips: ["Cashback"],
        },
      ],
      cardList: [
        {
          imgSrc: require("../../../mock/image/waterfall/01.png"),
          title: "Noice cancelling is a secret weapon",
        },
        {
          imgSrc: require("../../../mock/image/waterfall/02.png"),
          title: "Work from home is so boring",
        },
        {
          imgSrc: require("../../../mock/image/waterfall/03.png"),
          title: "Let’s run together",
        },
        {
          imgSrc: require("../../../mock/image/waterfall/04.png"),
          title: "",
        },
        {
          imgSrc: require("../../../mock/image/waterfall/05.png"),
          title: "Go out for the good sunset",
        },
        {
          imgSrc: require("../../../mock/image/waterfall/06.png"),
          title: "New Sneaker has just arrived",
        },
        {
          imgSrc: require("../../../mock/image/waterfall/07.png"),
          title: "Good smart charger ",
        },
        {
          imgSrc: require("../../../mock/image/waterfall/08.png"),
          title: "Good smart charger ",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/common.scss";
.banner {
  height: 247px;
  width: 375px;
  background: url("../../assets/images/bannerBg.png");
}
.desc {
  color: #fff;
  font-size: 15px;
  padding: 22px 0;
  line-height: 23px;
}
.swiper-img {
  border-radius: 6px;
}
.index-container {
  background-color: #f8f8f8;
}
.pro-btn {
  width: 357px;
  height: 44px;
  background: #e9e9e9;
  border-radius: 6px;
  text-align: center;
  line-height: 44px;
  margin: 0 9px;
}
.community {
  text-align: left;
  margin-top: 27px;
  margin-bottom: 6px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-left: 9px;
}

</style>