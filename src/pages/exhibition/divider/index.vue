<template>
  <div class="divider">
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
      <van-divider />
      <!-- 展示文字 -->
      <div style="color: #666666">展示文字</div>
      <van-divider>文字</van-divider>
      <van-divider :hairline="false">文字</van-divider>
      <!-- 内容位置 -->
      <div style="color: #666666">内容位置</div>
      <van-divider content-position="left">文字</van-divider>
      <van-divider content-position="right">文字</van-divider>
      <!-- 虚线 -->
      <div style="color: #666666">虚线</div>
      <van-divider dashed>文字</van-divider>
      <van-divider dashed :hairline="false">文字</van-divider>
      <!-- 自定义样式 -->
      <div style="color: #666666">自定义样式</div>
      <van-divider class="divider-style">文字</van-divider>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
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

.content {
  background-color: white;
}

.divider-style {
  padding: 0 16px;
  color: #ff00ee;

  &.van-divider::before,
  &.van-divider::after {
    border-color: orange;
    border-width: 1px;
    border-style: dashed;
  }
}
</style>
