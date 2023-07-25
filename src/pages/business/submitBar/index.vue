<template>
  <div class="submit-bar">
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
      <van-submit-bar
        button-text="提交订单"
        button-type="danger"
        button-color="#ff6600"
        currency=""
        label="总计:"
        suffix-label="元"
        text-align="right"
        :price="3050"
        :decimal-length="1"
        @submit="onSubmit"
      />
      <!-- 禁用状态 -->
      <div style="color: #666666; margin: 0.5rem">禁用状态</div>
      <van-submit-bar
        button-text="提交订单"
        tip="你的收货地址不支持同城送, 我们已为你推荐快递"
        tip-icon="info-o"
        :price="3050"
        :decimal-length="2"
        :disabled="true"
        @submit="onSubmit"
      />
      <!-- 加载状态 -->
      <div style="color: #666666; margin: 0.5rem">加载状态</div>
      <van-submit-bar
        button-text="提交订单"
        :price="3050"
        :decimal-length="2"
        :loading="isLoading"
        @submit="onSubmit"
      />
      <!-- 自定义内容 -->
      <div style="color: #666666; margin: 0.5rem">自定义内容</div>
      <van-submit-bar
        button-text="提交订单"
        :price="3050"
        :decimal-length="2"
        @submit="onSubmit"
      >
        <van-checkbox v-model="checked">全选</van-checkbox>
        <template #tip>
          <span>你的收货地址不支持同城送,</span>
          <span style="color: #00ae7e" @click="onClickEditAddress()">
            修改地址
          </span>
        </template>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      isLoading: false,
      checked: true,
    };
  },
  created() {
    this.title = this.$route.query.title;
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    onSubmit() {
      this.$toast("提交订单");
    },
    onClickEditAddress() {
      this.$toast("修改地址");
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.content {
  padding: 0.625rem 0;
}

.van-submit-bar {
  position: relative;
}
</style>
