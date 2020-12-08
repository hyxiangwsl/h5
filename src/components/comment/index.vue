<template>
  <div class="comment-container">
    <div class="line">
      <img class="avator" src="./images/ac01.png" alt="" />
      <div class="say">
        <span class="nickname">Lucia: </span>
        <span class="say-detail">
          This products is so nice! This products is so nice!
        </span>
      </div>
    </div>
    <div class="line">
      <img class="avator" src="./images/ac02.png" alt="" />
      <div class="say">
        <span class="nickname">Lucia: </span>
        <span class="say-detail">
          This products is so nice! This products is so nice! This products is
          so good! 😄
        </span>
      </div>
    </div>
    <div class="more">View all 3 comments</div>
    <div class="line">
      <img class="avator" src="./images/ac03.png" alt="" />
      <div class="comment">
        <input type="text" placeholder="Comment" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.comment-container {
  background: #f8f8f8;
  border-radius: 6px;
  .say {
    margin-top: 19px;
    margin-right: 9px;
    text-align: left;
  }
  .line {
    display: flex;
    align-items: center;
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
    input {
      border: 0;
      border-radius: 0px;
      background-color:transparent;
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