<template>
  <div class="comment-container">
    <div class="line" v-for="(item,index) in list" :key="index">
      <img class="avator" :src="item.user_avatar" alt="" />
      <div class="say">
        <span class="nickname">{{item.user_name}} </span>
        <span class="say-detail">
          This products is so nice! This products is so nice!
        </span>
      </div>
    </div>
    <div class="more" v-if="list.length>0">View all {{list.length}} comments</div>
    <div class="line">
      <img class="avator" src="./images/ac03.png" alt="" />
      <div class="comment">
        <input type="text" placeholder="Comment" />
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
}
</script>
<style lang="scss" scoped>
.comment-container {
  background: #f8f8f8;
  border-radius: 6px;
  padding-bottom: 15px;
  .line {
    display: flex;
    vertical-align: top;
  }
   .say {
     flex: 1;
    margin-top: 9px;
    // margin-right: 9px;
    text-align: left;

    // display: flex;
  }
  .avator {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 9px;
  }
  .nickname {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    /* Colors / #000000 / 0.8 */

    color: rgba(0, 0, 0, 0.8);
  }
  .say-detail {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    /* Colors / #000000 / 0.6 */

    color: rgba(0, 0, 0, 0.6);
  }
  .more {
    margin: 15px 0 15px 45px;
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    /* Texts / # E92F2B / Negative */

    color: #e92f2b;
    opacity: 0.8;
  }
  .comment {
    display: flex;
    align-content: center;
    width: 80%;
    input {
      border: 0;
      width: 100%;
      border-radius: 0px;
      background-color: transparent;
      border-bottom: 1px solid #e9e9e9;
      
      &::placeholder {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;

        /* Colors / #000000 / 0.2 */

        color: rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>
