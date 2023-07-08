<template>
  <div class="steps">
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
      <van-steps :active="active">
        <van-step>买家下单</van-step>
        <van-step>商家接单</van-step>
        <van-step>买家提货</van-step>
        <van-step>交易完成</van-step>
      </van-steps>
      <!-- 自定义样式 -->
      <div style="color: #666666; margin: 10px 0">自定义样式</div>
      <van-steps
        :active="active"
        active-icon="circle"
        inactive-icon="cross"
        finish-icon="success"
        active-color="#00ee00"
        inactive-color="#ff6600"
      >
        <van-step>买家下单</van-step>
        <van-step>商家接单</van-step>
        <van-step>买家提货</van-step>
        <van-step>交易完成</van-step>
      </van-steps>
      <!-- 竖向步骤条 -->
      <div style="color: #666666; margin: 10px 0">竖向步骤条</div>
      <van-steps :active="active" direction="vertical" :center="false">
        <van-step>
          <h5>快件已签收</h5>
          <p>2016-07-14 18:20</p>
        </van-step>
        <van-step>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
        </van-step>
        <van-step>
          <h3>【城市】物流状态2</h3>
          <p>2016-07-11 10:00</p>
        </van-step>
        <van-step>
          <h3>快件已发货</h3>
          <p>2016-07-10 09:30</p>
        </van-step>
      </van-steps>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      active: 0,
    };
  },
  created() {
    this.title = this.$route.query.title;
    this.uploadLoading();
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    uploadLoading() {
      setTimeout(() => {
        if (this.active >= 3) {
          this.active = 0;
        } else {
          this.active++;
        }
        this.uploadLoading();
      }, 2000);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.content {
  background-color: white;
}
</style>
