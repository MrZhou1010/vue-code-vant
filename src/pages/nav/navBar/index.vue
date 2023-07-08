<template>
  <div class="grid">
    <van-nav-bar
      style="background-color: lightblue"
      left-arrow
      fixed
      border
      safe-area-inset-top
      :title="title"
      :z-index="99"
      @click-left="goBack()"
    >
    </van-nav-bar>
    <div class="content">
      <!-- 基础用法 -->
      <div style="color: #666666; margin: 10px 0">基础用法</div>
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <!-- 使用插槽 -->
      <div style="color: #666666; margin: 10px 0">使用插槽</div>
      <van-nav-bar title="标题" left-text="返回" left-arrow>
        <template #right>
          <van-icon name="search" size="20" />
        </template>
      </van-nav-bar>
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
    onClickLeft() {
      this.$toast("返回");
    },
    onClickRight() {
      this.$toast("按钮");
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";
</style>
