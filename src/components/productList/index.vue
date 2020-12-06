<template>
  <div>
    <div class="container" v-for="(item, index) in list" :key="index">
      <div>
        <img :src="item.imgSrc" alt="" srcset="" />
      </div>
      <div>
        <div class="pro-title">{{item.title}}</div>
        <div class="moneyList">
          <div class="cost">${{item.cost}}</div>
          <div class="save">Save ${{item.save}}</div>
          <div class="costOld">${{item.costOld}}</div>
        </div>
        <div>
          <div class="place"></div>
          <div class="comment">
            <div>{{item.vote}}</div>
            <div>{{item.comment}}</div>
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
  methods: {
    doChange(index) {
      this.activIndex = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.container{
    display: flex;
}
</style>
