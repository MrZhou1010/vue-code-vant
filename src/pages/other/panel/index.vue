<template>
  <div class="panel">
    <van-nav-bar
      style="background-color: lightblue"
      left-arrow
      fixed
      border
      safe-area-inset-top
      :title="title"
      :z-index="101"
      @click-left="goBack()"
    >
    </van-nav-bar>
    <div class="content">
      <!-- 基础用法 -->
      <div style="color: #666666; margin: 0.5rem">基础用法</div>
      <van-panel title="标题" desc="描述信息" icon="shop-o" status="状态">
        <div style="padding: 1rem">内容</div>
      </van-panel>
      <!-- 自定义内容 -->
      <div style="color: #666666; margin: 0.5rem">自定义内容</div>
      <van-panel title="标题" desc="描述信息" icon="shop-o" status="状态">
        <div style="padding: 1rem">内容</div>
        <template #footer>
          <van-button style="margin-left: 70%" size="small" type="danger" plain>
            按钮
          </van-button>
          <van-button style="margin-left: 0.5rem" size="small" type="danger">
            按钮
          </van-button>
        </template>
      </van-panel>
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
  padding: 0.625rem 0;
}
</style>
