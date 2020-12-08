<template>
  <div class="card-container">
    <div class="left">
      <div class="item" v-for="(item, index) in list1" :key="index">
        <div class="card-img">
          <img :src="item.imgSrc" alt="" />
        </div>
        <div class="card-title">{{ item.title }}</div>
        <div class="card-other">
          <div class="avator">
            <img src="./images/avator.png" alt="" srcset="" />
            <div class="nickname">Lewis</div>
          </div>
          <div class="fontGrey vote-comment">
            <img src="./images/vote.png" alt="" />
            <span>999</span>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="item" v-for="(item, index) in list2" :key="index">
        <div class="card-img">
          <img :src="item.imgSrc" alt="" />
        </div>
        <div class="card-title">{{ item.title }}</div>
        <div class="card-other">
          <div class="avator">
            <img src="./images/avator.png" alt="" srcset="" />
            <div class="nickname">Lewis</div>
          </div>
          <div class="fontGrey vote-comment">
            <img src="./images/vote.png" alt="" />
            <span>999</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list1: {
      type: Array,
      default: () => [],
    },
    list2: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.card-container {
  display: flex;
  // flex-wrap: wrap;
  // height: 100vh;
  .left,.right{
    flex: 1;
  }
  .item {
    margin: 9px;
    background-color: #fff;
    // height: 100%;
  }
  .item .card-img > img {
    width: 100%;
    height: 100%;
  }
  .card-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    margin: 9px;
  }
  .avator {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 22px;
      height: 22px;
      border-radius: 50%;
    }
  }
  .card-other {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 9px;
    padding-bottom: 9px;;
    // justify-content: center;
    .nickname {
      margin-left: 9px;
      font-family: SF Pro Display;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      color: rgba(0, 0, 0, 0.6);
    }
  }
  .vote-comment {
    display: flex;
    justify-content: center;
    align-content: center;
  }
}
</style>
