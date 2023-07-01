<template>
  <div class="circle">
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
      <div style="color: #666666;">基础用法</div>
      <div style="display: flex;">
        <van-circle
          v-model="currentRate1"
          style="margin: 10px;"
          :rate="60"
          :text="text1"
        />
        <van-circle
          v-model="currentRate2"
          style="margin: 10px;"
          :rate="80"
          :speed="10"
          :text="text2"
        />
      </div>
      <!-- 样式定制 -->
      <div style="color: #666666;">样式定制</div>
      <div style="display: flex;">
        <van-circle
          v-model="currentRate3"
          style="margin: 10px;"
          :rate="60"
          :stroke-width="60"
          text="宽度定制"
        />
        <van-circle
          v-model="currentRate4"
          style="margin: 10px;"
          :rate="80"
          text="颜色定制"
          color="#00ff6a"
          layer-color="#6b6d00"
        />
        <van-circle
          v-model="currentRate5"
          style="margin: 10px;"
          :rate="60"
          :color="gradientColor"
          text="渐变色"
        />
      </div>
      <div style="display: flex;">
        <van-circle
          v-model="currentRate3"
          style="margin: 10px;"
          :rate="60"
          stroke-linecap="butt"
          text="端点形状"
        />
        <van-circle
          v-model="currentRate6"
          style="margin: 10px;"
          :rate="60"
          :speed="10"
          :clockwise="false"
          text="逆时针方向"
        />
        <van-circle
          v-model="currentRate7"
          style="margin: 10px;"
          :rate="80"
          :speed="20"
          text="大小定制"
          size="120px"
        />
      </div>
      <!-- 定时器随机数 -->
      <div style="color: #666666;">定时器随机数</div>
      <div style="display: flex;">
        <van-circle
          v-model="currentRate8"
          style="margin: 10px;"
          :rate="100"
          :text="text8"
          :color="gradientColor"
        />
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
      timer: null,
      currentRate1: 0,
      currentRate2: 0,
      currentRate3: 0,
      currentRate4: 0,
      currentRate5: 0,
      currentRate6: 0,
      currentRate7: 0,
      currentRate8: 0,
      text1: "",
      text2: "",
      text8: "",
      gradientColor: {
        "20%": "#d26cff",
        "40%": "#2f66fe",
        "60%": "#f2cc2f",
        "80%": "#ff22ef",
      },
    };
  },
  watch: {
    currentRate1(value) {
      this.text1 = value.toFixed(0) + "%";
    },
    currentRate2(value) {
      this.text2 = value.toFixed(0) + "%";
    },
  },
  created() {
    this.title = this.$route.query.title;
    if (!this.timer) {
      this.timer = setInterval(() => {
        if (this.currentRate8 >= 100) {
          this.currentRate8 = 0;
        }
        this.currentRate8 += Math.floor(Math.random() * 10);
        this.text8 = this.currentRate8.toFixed(0) + "%";
        if (this.currentRate8 >= 100) {
          this.currentRate8 = 100;
          this.text8 = this.currentRate8.toFixed(0) + "%";
          clearInterval(this.timer);
          this.timer = null;
        }
      }, 200);
    }
  },
  destroyed() {
    clearInterval(this.timer);
    this.timer = null;
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

.child {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: #c2c2c2;
}

.badge-icon {
  font-size: 10px;
  line-height: 16px;
  display: block;
}
</style>
