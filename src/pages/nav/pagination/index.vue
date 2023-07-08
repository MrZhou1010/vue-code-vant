<template>
  <div class="pagination">
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
      <div style="color: #666666; margin: 10px 0">基础用法</div>
      <van-pagination
        v-model="currentPage1"
        :total-items="27"
        :items-per-page="5"
      />
      <!-- 简单模式 -->
      <div style="color: #666666; margin: 10px 0">简单模式</div>
      <van-pagination v-model="currentPage2" mode="simple" :page-count="12" />
      <!-- 显示省略号 -->
      <div style="color: #666666; margin: 10px 0">显示省略号</div>
      <van-pagination
        v-model="currentPage3"
        :total-items="125"
        :show-page-size="2"
        force-ellipses
      />
      <!-- 自定义按钮 -->
      <div style="color: #666666; margin: 10px 0">自定义按钮</div>
      <van-pagination
        v-model="currentPage4"
        :total-items="122"
        :show-page-size="3"
        force-ellipses
      >
        <template #prev-text>
          <van-icon name="arrow-left" />
        </template>
        <template #next-text>
          <van-icon name="arrow" />
        </template>
        <template #page="{ text }">{{ text }}</template>
      </van-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
      currentPage4: 1,
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

.van-pagination__item {
  width: 36px;
  height: 36px;
  margin: 0 4px;
  border-radius: 18px;
}
</style>
