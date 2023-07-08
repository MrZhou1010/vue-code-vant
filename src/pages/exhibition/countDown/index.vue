<template>
  <div class="count-down">
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
      <van-count-down style="margin: 10px" :time="time" />
      <!-- 自定义格式 -->
      <div style="color: #666666">自定义格式</div>
      <van-count-down
        style="margin: 10px"
        :time="time"
        format="DD天HH时mm分ss秒"
      />
      <!-- 毫秒级渲染 -->
      <div style="color: #666666">毫秒级渲染</div>
      <van-count-down
        style="margin: 10px"
        :time="time"
        format="HH:mm:ss:SS"
        millisecond
      />
      <!-- 自定义样式 -->
      <div style="color: #666666">自定义样式</div>
      <van-count-down style="margin: 10px" :time="time">
        <template #default="timeData">
          <span class="block">{{ timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <!-- 手动控制 -->
      <div style="color: #666666">手动控制</div>
      <van-count-down
        style="margin: 10px"
        ref="countDown"
        :time="30000"
        :auto-start="false"
        format="HH:mm:ss:SSS"
        millisecond
        @finish="finish"
      />
      <van-grid clickable>
        <van-grid-item text="开始" icon="play-circle-o" @click="start" />
        <van-grid-item text="暂停" icon="pause-circle-o" @click="pause" />
        <van-grid-item text="重置" icon="replay" @click="reset" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      time: 24 * 60 * 60 * 1000,
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    start() {
      this.$refs.countDown.start();
    },
    pause() {
      this.$refs.countDown.pause();
    },
    reset() {
      this.$refs.countDown.reset();
    },
    finish() {
      this.$toast("倒计时结束");
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.block {
  width: 22px;
  font-size: 12px;
  border-radius: 4px;
  color: #ffffff;
  background-color: #ee0a24;
  display: inline-block;
  text-align: center;
}

.colon {
  margin: 0 4px;
  color: #ee0a24;
  display: inline-block;
}
</style>
