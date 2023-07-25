<template>
  <div class="overlay">
    <van-nav-bar
      style="background-color: lightblue"
      left-arrow
      fixed
      border
      safe-area-inset-top
      :title="title"
      @click-left="goBack()"
    >
    </van-nav-bar>
    <div class="content">
      <!-- 基础用法 -->
      <div style="color: #666666">基础用法</div>
      <div class="cell-box">
        <van-cell is-link @click="showOverlay1 = true">显示遮罩层</van-cell>
      </div>
      <van-overlay :show="showOverlay1" @click="showOverlay1 = false" />
      <!-- 嵌入内容 -->
      <div style="color: #666666">嵌入内容</div>
      <div class="cell-box">
        <van-cell is-link @click="showOverlay2 = true">嵌入内容</van-cell>
      </div>
      <van-overlay :show="showOverlay2" @click="showOverlay2 = false">
        <div class="wrapper">
          <div class="block" @click.stop></div>
        </div>
      </van-overlay>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      showOverlay1: false,
      showOverlay2: false,
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.cell-box {
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
  padding: 0.625rem;
  background-color: white;
  border-radius: 0.625rem;
}

.wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #ffffff;
}
</style>
