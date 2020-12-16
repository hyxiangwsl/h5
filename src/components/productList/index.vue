<template>
  <div>
    <div class="container" v-for="(item, index) in list" :key="index">
      <div class="pro-img">
        <img :src="item.deals_image" alt="" srcset="" />
      </div>
      <div class="pro-right">
        <div class="pro-title weight400">{{ item.deals_title }}</div>
        <div class="tips">
          <div
            v-for="(i, idx) in item.tips"
            :key="idx"
            class="pro-tip colorBase"
          >
            {{ i }}
          </div>
        </div>
        <div class="moneyList">
          <div class="cost colorBase">${{ item.deals_price }}</div>
          <div class="save" v-if="item.deals_price_old - item.deals_price > 0">
            Save ${{ item.deals_price_old - item.deals_price }}
          </div>
          <div class="costOld fontGrey" v-if="item.costOld !== ''">
            ${{ item.deals_price_old }}
          </div>
        </div>
        <div class="pro-other">
          <div class="place fontGrey">
            {{ item.deals_type }} |
            {{ item.deals_flashstarttime | filterTime }}
          </div>
          <div class="pro-other-right">
            <div class="fontGrey vote-comment">
              <img src="./images/vote.png" alt="" />
              <span>{{ item.like_num }} </span>
            </div>
            <div class="pro-comment fontGrey vote-comment">
              <img src="./images/comment.png" alt="" />
              <span>{{ item.report_num }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activIndex: 0,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  height: 117px;
  // width: 100%;
  border-radius: 6px;
  background-color: #fff;
  margin: 9px;
  .pro-img {
    width: 117px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 117px;
    }
  }
  .pro-right {
    margin-left: 9px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .pro-title {
    //styleName: Texts / 14;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 9px;
  }
  .moneyList,
  .pro-other,
  .pro-other-right {
    display: flex;
  }
  .moneyList {
    display: flex;
    align-items: center;
  }
  .cost {
    font-weight: 500;
    font-size: 16px;
    //styleName: Texts / Title / 16;
    font-family: SF Pro Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
  }
  .save {
    background-color: #e92f2b;
    color: #fff;
    margin-left: 11px;
    border: 0.5px solid #e92f2b;
    box-sizing: border-box;
    border-radius: 2px;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    padding: 3px;
  }
  .costOld {
    margin-left: 9px;
    text-decoration: line-through;
  }
  .pro-other-right {
    margin-right: 8px;
  }
  .pro-other {
    margin-top: 9px;
    text-align: center;
    justify-content: space-between;
  }
  .pro-comment {
    margin-left: 16px;
  }
  .tips {
    width: 100%;
    height: 16px;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 6px;
    margin-bottom: 5px;
  }

  .pro-tip {
    border: 0.5px solid #e92f2b;
    box-sizing: border-box;
    border-radius: 2px;
    font-family: SF Pro Display;
    margin-right: 6px;
    font-size: 10px;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vote-comment {
    display: flex;
    justify-content: center;
    align-content: center;

    img {
      width: 14px;
      height: 14px;
    }
  }
}
</style>
