<template>
  <div class="card-container">
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="card-img">
        <img :src="item.imgSrc" alt="" />
      </div>
      <div class="card-title">{{ item.title }}</div>
      <div class="card-other">
        <div class="avator">
          <img src="./images/avator.png" alt="" srcset="" />
        </div>
        <div class="nickname">Lewis</div>
        <div class="fontGrey vote-comment">
          <img src="./images/vote.png" alt="" />
          <span>999</span>
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
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.card-container {
  display: inline-flex;
  flex-wrap: wrap;
  height: 100vh;
  .item {
    margin: 9px;
    width: calc(100% / 2 - 20px);
    background-color: #fff;
  }
  .item .card-img>img {
    width: 100%;
    height: 100%;
  }
  .card-title {
  }
  .card-other {
    display: flex;
  }
  .vote-comment {
    display: flex;
    justify-content: center;
    align-content: center;
  }
}
</style>
