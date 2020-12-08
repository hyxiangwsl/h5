<template>
  <div class="index-container">
    <top></top>
    <div class="banner">
      <img src="../../assets/images/super.png" alt="" />
    </div>
    <div>
      <tab2></tab2>
    </div>
    <div class="details-bottom">
      <div class="desc-titile">
        Super Tech Expo 2020: Get Your Hands On Timed Flash Deals, Million $
        Discount
      </div>
      <div class="desc">
        There are always a couple of Tech Fairs to look forward to when the new
        year comes along, because techies can anticipate the latest gadgets
        going on big discounts, or even snag sme awesome deals at the cheapest
        prices for other electronics products. While this year might be a little
        different because we cannot physically head down to these fairs, don’t
        worry because our upcoming Super Tech Expo will ensure that you are not
        missing out on much at all!
      </div>
      <div class="info">
        <div class="info-detail">
          Happening from 23 – 28 May, expect timed flash deals, daily markdowns
          on electronic products, brand box madness and so much more!
        </div>
      </div>
      <div class="info2">
        <div class="info-detail">You stay at home, we have you covered.</div>
      </div>
    </div>
    <div class="movie">
      <img src="../../assets/images/movie.png" alt="" />
    </div>
    <div class="details-bottom">
      <div class="movie-desc">
        Shop some of the most popular tech brands, according to the category of
        the day at the lowest priced guaranteed daily, proudly subsidised by
        Shopee!
      </div>
    </div>
    <div class="movie">
      <img src="../../assets/images/movie2.png" alt="" />
    </div>
    <div class="details-bottom">
      <div class="movie-title">Category of The Day</div>
      <div class="movie-desc">
        Narrow down your search by browsing our featured collections to find
        exactly what you need for your home. Some deals that you can look
        forward to include the ECOVACS robotic vacuum cleaner going at 53% off,
        or the Europace Tower Fan at 46% off and so much more!
      </div>
      <div>
        <buy-product :obj="obj1"></buy-product>
      </div>
      <div class="movie-title">Flash Deals</div>
      <div class="movie-desc">
        Our sales are never complete without our signature flash deals! From 23
        – 28 May, look forward to up to 8 time slots daily where you can grab
        amazing deals at discounted prices.
        <br /><br />
        Our popular $0.99 Flash Deals Relay will also be making a comeback at
        selected timings, so make sure you jot them down in your calendar and
        don’t miss out.
      </div>
      <div>
        <buy-product :obj="obj2"></buy-product>
      </div>
      <div style="margin-top: 15px">
        <buy-product :obj="obj3"></buy-product>
      </div>
      <div class="desc-time">
        <div>4-19</div>
        <div class="report">
          <span>Report</span>
          <span>∨</span>
        </div>
      </div>
      <div>
        <comment></comment>
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
      obj1: {
        imgSrc: require("../../../mock/image/buy/01.png"),
        title: "50pcs 3ply Face Mask Disposable Earloop Civilian F…",
        cost: "25.00",
      },
      obj2: {
        imgSrc: require("../../../mock/image/buy/02.png"),
        title: "50pcs 3ply Face Mask Disposable Earloop Civilian F…",
        cost: "25.00",
      },
      obj3: {
        imgSrc: require("../../../mock/image/buy/03.png"),
        title: "50pcs 3ply Face Mask Disposable Earloop Civilian F…",
        cost: "25.00",
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/common.scss";
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
    span{
        margin: 2px;
    }
  }
}
</style>