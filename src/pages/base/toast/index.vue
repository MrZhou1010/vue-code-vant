<template>
  <div class="toast">
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
        <van-cell is-link @click="$toast('提示内容')">文字提示</van-cell>
        <van-cell
          is-link
          @click="$toast.loading({ message: '加载中...', forbidClick: true })"
          >加载提示</van-cell
        >
        <van-cell
          is-link
          @click="$toast.success({ message: '成功文案', forbidClick: true })"
          >成功提示</van-cell
        >
        <van-cell
          is-link
          @click="$toast.fail({ message: '失败文案', forbidClick: true })"
          >失败提示</van-cell
        >
      </div>
      <br />
      <!-- 自定义图标 -->
      <div style="color: #666666">自定义图标</div>
      <div class="cell-box">
        <van-cell
          is-link
          @click="$toast({ message: '自定义图标', icon: 'like-o' })"
          >自定义图标</van-cell
        >
        <van-cell
          is-link
          @click="
            $toast({
              message: '自定义图标',
              icon: 'https://img01.yzcdn.cn/vant/logo.png',
            })
          "
        >
          自定义图片</van-cell
        >
        <van-cell
          is-link
          @click="
            $toast.loading({
              message: '加载中...',
              forbidClick: true,
              loadingType: 'spinner',
            })
          "
          >自定义加载图标
        </van-cell>
      </div>
      <br />
      <!-- 自定义位置 -->
      <div style="color: #666666">自定义位置</div>
      <div class="cell-box">
        <van-cell
          is-link
          @click="$toast({ message: '顶部展示', position: 'top' })"
          >顶部展示</van-cell
        >
        <van-cell
          is-link
          @click="$toast({ message: '底部展示', position: 'bottom' })"
          >底部展示</van-cell
        >
      </div>
      <br />
      <!-- 动态更新提示 -->
      <div style="color: #666666">动态更新提示</div>
      <div class="cell-box">
        <van-cell is-link @click="toast()">动态更新提示</van-cell>
      </div>
      <br />
      <!-- 依次显示多个提示 -->
      <div style="color: #666666">依次显示多个提示</div>
      <div class="cell-box">
        <van-cell is-link @click="multipleToast()">依次显示多个提示</van-cell>
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
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    toast() {
      const toast = this.$toast.loading({
        message: "倒计时 3 秒",
        forbidClick: true,
        // 持续展示toast
        duration: 0,
      });
      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          // toast.message = "倒计时 " + second + " 秒";
          toast.message = `倒计时 ${second} 秒`;
        } else {
          clearInterval(timer);
          // 手动清除toast
          this.$toast.clear();
        }
      }, 1000);
    },
    multipleToast() {
      const _this = this;
      setTimeout(function () {
        _this.$toast("第一个提示内容");
      }, 500);
      setTimeout(function () {
        _this.$toast("第二个提示内容");
      }, 3000);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.cell-box {
  margin-top: 0.625rem;
  padding: 0.625rem;
  background-color: white;
  border-radius: 0.625rem;
}
</style>
