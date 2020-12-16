<template>
  <div class="comp-top">
    <div class="logo">
      <img class="logo-img" src="./images/logo.png" alt="" srcset="" />
    </div>
    <div class="logo-titil">
      <span class="colorBase font20 wight400">wonabuy</span>
      <span style="color: rgba(0, 0, 0, 0.6)">Buy Smart Live Smart</span>
    </div>
    <div class="open colorBase font15">Open App</div>
  </div>
</template>
<style scoped lang="scss">
.comp-top {
  width: 100%;
  height: 57px;
  position: fixed;
  top: 0px;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(153, 153, 153, 0.2);
  z-index: 999;
}
.logo {
  margin-left: 16px;
}
.logo-titil {
  flex: 2;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 5px;
}
.open {
  flex: 1;
  width: 95px;
  height: 28px;
  line-height: 24px;
  background: #ffffff;
  border: 1px solid #e92f2b;
  box-sizing: border-box;
  border-radius: 100px;
  text-align: center;
  margin-right: 16px;
}
</style>