<template>
  <div class="buy-container">
    <img class="buy-left" :src="obj.src" alt="" srcset="" />
    <div class="buy-right">
      <div class="title">{{ obj.text }}</div>
      <div class="other">
        <div class="cost">¥ {{ obj.price }}</div>
        <div class="buy-btn">Buy</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    obj: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
.buy-container {
  width: 100%;
  background: #f8f8f8;
  overflow: hidden;
  border-radius: 6px;
  display: flex;
  //   align-items: center;
  // justify-content: space-between;
  .buy-left {
    width: 97px;
    height: 97px;
    margin: 9px;
    border-radius: 6px;
  }
  .buy-right {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .title {
    width: 250px;
    margin-top: 12px;
    font-family: SF Pro Display;
    text-align: left;
     overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    /* or 112% */

    /* Colors / #000000 / 0.8 */

    color: rgba(0, 0, 0, 0.8);
  }
  .other {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    .cost {
      font-family: SF Pro Display;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      color: #e92f2b;
    }
    .buy-btn {
      margin-right: 12px;
      text-align: center;
      width: 56px;
      height: 24px;
      background: #e92f2b;
      border-radius: 3px;
      font-family: SF Pro Display;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 24px;
      color: #ffffff;
    }
  }
}
</style>
