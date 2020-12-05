<template>
  <div>
    <top></top>
    <div class="banner">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) in imglist" :key="index">
          <img :src="item.path"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import top from "@/components/top";
import { swiper, swiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
export default {
  components: { top, swiper, swiperSlide },
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
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
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
  left: 0px;
  background: url("../../assets/images/bannerBg.png");
}
</style>