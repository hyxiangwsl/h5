<template>
  <div class="index-container">
    <top></top>

    <div class="banner">
      <img src="../../assets/images/ad.png" alt="" />
    </div>
    <!-- <div class="details-bottom">
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
    </div> -->
  </div>
</template>
<script>
import top from "@/components/top";
// import comment from "@/components/comment";
export default {
  components: { top },
  data() {
    return {
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/common.scss";
</style>