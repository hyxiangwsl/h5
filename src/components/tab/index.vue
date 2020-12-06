<template>
  <div class="tab">
    <div :class="activIndex == 0 ? 'active' : ''" @click="doChange(0)">
      Deals
    </div>
    <div :class="activIndex == 1 ? 'active' : ''" @click="doChange(1)">
      Community
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activIndex: 0,
    };
  },
  methods: {
    doChange(index) {
      this.activIndex = index;
    },
  },
};
</script>
<style scoped lang="scss">
.tab {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: rgba(0, 0, 0, 0.4);
  background-color: #fff;
  div {
    position: relative;
    height: 35px;
    line-height: 35px;
    box-sizing: border-box;
    cursor: pointer;
    // background-color: pink;
    &:hover {
      &:after {
        content: "";
        position: absolute;
        left: 0px;
        top: auto;
        bottom: 0;
        right: auto;
        height: 2px;
        width: 100%;
        background-color: #e92f2b;
      }
    }
  }
}
.active {
  color: #e92f2b;
}
.active::after {
  content: "";
  position: absolute;
  left: 0px;
  top: auto;
  bottom: 0;
  right: auto;
  height: 2px;
  width: 100%;
  color: #e92f2b;
  background-color: #e92f2b;
}
</style>