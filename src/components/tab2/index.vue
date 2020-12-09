<template>
  <div class="tab-container">
    <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
      <el-tab-pane
        v-for="(i, index) in labels"
        :key="index"
        :label="i"
        :name="i"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "Topic",
      labels: ["Topic", "Category of The Dayee", "Flash Deals", "Common"],
    };
  },
  methods: {
    handleClick(tab, event) {
      this.activeName = tab.label;
    },
  },
};
</script>
<style scoped lang="scss">
.tab-container {
  width: 100%;
  box-sizing: border-box;
  // border-bottom: 1px solid #f0f0f0;
  overflow: auto;
  ::v-deep {
    .is-active {
      color: #e92f2b;
      // background-color: #e92f2b;
    }
    .el-tabs__active-bar {
      background-color: #e92f2b;
    }
  }
}
</style>