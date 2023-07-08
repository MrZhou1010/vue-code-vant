<template>
  <div class="notify">
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
        <van-cell is-link @click="$notify('通知内容')">基础用法</van-cell>
      </div>
      <!-- 通知类型 -->
      <div style="color: #666666">通知类型</div>
      <div class="cell-box">
        <van-cell
          is-link
          @click="$notify({ type: 'primary', message: '通知内容' })"
          >主要通知</van-cell
        >
        <van-cell
          is-link
          @click="$notify({ type: 'success', message: '通知内容' })"
          >成功通知</van-cell
        >
        <van-cell
          is-link
          @click="$notify({ type: 'danger', message: '通知内容' })"
          >危险通知</van-cell
        >
        <van-cell
          is-link
          @click="$notify({ type: 'warning', message: '通知内容' })"
          >警告通知</van-cell
        >
      </div>
      <!-- 自定义通知 -->
      <div style="color: #666666">自定义通知</div>
      <div class="cell-box">
        <van-cell is-link @click="notify()">自定义颜色</van-cell>
        <van-cell
          is-link
          @click="$notify({ message: '自定义时长', duration: 1000 })"
          >自定义时长</van-cell
        >
      </div>
      <!-- 组件调用 -->
      <div style="color: #666666">组件调用</div>
      <div class="cell-box">
        <van-cell is-link @click="showNotify = true">组件调用</van-cell>
        <van-notify v-model="showNotify" type="success" @opened="onOpened">
          <van-icon name="bell" style="margin-right: 10px" />
          <span>通知内容</span>
        </van-notify>
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
      showNotify: false,
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    notify() {
      this.$notify({
        type: "warning",
        message: "自定义颜色",
        color: "#ad0000",
        background: "#ffe1e1",
        duration: 1000,
      });
    },
    onOpened() {
      setTimeout(() => {
        this.showNotify = false;
      }, 2000);
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
</style>
