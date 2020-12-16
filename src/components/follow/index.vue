<template>
  <div class="follow-container">
    <span class="follow">+ Follow</span>
    <img class="avator" src="./images/avator.png" alt="" srcset="" />
  </div>
</template>
<style lang="scss" scoped>
.follow-container {
  display: inline-flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  z-index: 9;
  .follow {
    margin: 0 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    /* Texts / # E92F2B / Negative */

    color: #e92f2b;
  }
  .avator {
    width: 22px;
    height: 22px;
    border-radius: 50%;
  }
}
</style>