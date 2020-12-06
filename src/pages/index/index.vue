<template>
  <div>
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
    <div>
      <product-list :list="productList"></product-list>
    </div>
  </div>
</template>
<script>
import top from "@/components/top";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import tab from "@/components/tab";
import productList from "@/components/productList";
import "swiper/dist/css/swiper.css";
export default {
  components: { top, swiper, swiperSlide, tab, productList },
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
          cost: 15.0,
          save: 10.0,
          costOld: 25.0,
          place: "Lazada | 14:50",
          vote: 10,
          comment: 10,
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
</style>