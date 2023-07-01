<template>
  <div class="sticky">
    <van-nav-bar
      style="background-color: lightblue;"
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
      <div style="color: #666666;margin: 10px 0;">基础用法</div>
      <van-sticky>
        <van-button style="margin-left: 10px;" type="primary"
          >基础用法</van-button
        >
      </van-sticky>
      <!-- 吸顶距离 -->
      <div style="color: #666666;margin: 10px 0;">吸顶距离</div>
      <van-sticky offset-top="2.75rem">
        <van-button style="margin-left: 120px;" type="info"
          >吸顶距离</van-button
        >
      </van-sticky>
      <!-- 指定容器 -->
      <div style="color: #666666;margin: 10px 0;">指定容器</div>
      <div ref="container" style="height: 150px;background-color: white;">
        <van-sticky :container="container">
          <van-button style="margin-left: 220px;" type="warning"
            >指定容器</van-button
          >
        </van-sticky>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      container: null,
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  mounted() {
    this.container = this.$refs.container;
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
  height: 200%;
  margin-top: 2.75rem;
  padding: 0.625rem;
  background-color: #f8f8f8;
  text-align: left;
}
</style>
