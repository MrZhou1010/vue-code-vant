<template>
  <div class="switch-cell">
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
      <van-cell-group>
        <van-switch-cell v-model="checked" title="标题" border />
      </van-cell-group>
      <!-- 禁用状态 -->
      <div style="color: #666666; margin: 0.5rem">禁用状态</div>
      <van-cell-group>
        <van-switch-cell v-model="checked" title="标题" disabled />
      </van-cell-group>
      <!-- 加载状态 -->
      <div style="color: #666666; margin: 0.5rem">加载状态</div>
      <van-cell-group>
        <van-switch-cell v-model="checked" title="标题" loading />
      </van-cell-group>
      <!-- 尺寸 -->
      <div style="color: #666666; margin: 0.5rem">尺寸</div>
      <van-cell-group>
        <van-switch-cell
          v-model="checked"
          title="标题"
          size="28px"
          cell-size="large"
        />
      </van-cell-group>
      <!-- 背景色 -->
      <div style="color: #666666; margin: 0.5rem">背景色</div>
      <van-cell-group>
        <van-switch-cell
          v-model="checked"
          title="标题"
          active-color="#00ae7e"
          inactive-color="#e2e2e2"
        />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      checked: false,
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
