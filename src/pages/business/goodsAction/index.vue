<template>
  <div class="goods-action">
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
      <van-goods-action :safe-area-inset-bottom="true">
        <van-goods-action-icon text="客服" icon="chat-o" @click="onClickIcon()" />
        <van-goods-action-icon
          text="购物车"
          icon="cart-o"
          @click="onClickIcon()"
        />
        <van-goods-action-icon text="店铺" icon="shop-o" @click="onClickIcon()" />
        <van-goods-action-button
          text="立即购买"
          type="danger"
          @click="onClickButton()"
        />
      </van-goods-action>
      <!-- 徽标提示 -->
      <div style="color: #666666; margin: 0.5rem">徽标提示</div>
      <van-goods-action :safe-area-inset-bottom="true">
        <van-goods-action-icon text="客服" icon="chat-o" dot />
        <van-goods-action-icon text="购物车" icon="cart-o" badge="5" />
        <van-goods-action-icon text="店铺" icon="shop-o" badge="99+" />
        <van-goods-action-button text="加入购物车" type="warning" />
        <van-goods-action-button text="立即购买" type="danger" />
      </van-goods-action>
      <!-- 自定义图标颜色 -->
      <div style="color: #666666; margin: 0.5rem">自定义图标颜色</div>
      <van-goods-action :safe-area-inset-bottom="true">
        <van-goods-action-icon text="客服" icon="chat-o" color="#00ee22" />
        <van-goods-action-icon text="购物车" icon="cart-o" color="#ee0a24" />
        <van-goods-action-icon text="已收藏" icon="star" color="#ff6600" />
        <van-goods-action-button text="加入购物车" type="warning" />
        <van-goods-action-button text="立即购买" type="danger" />
      </van-goods-action>
      <!-- 自定义按钮颜色 -->
      <div style="color: #666666; margin: 0.5rem">自定义按钮颜色</div>
      <van-goods-action :safe-area-inset-bottom="true">
        <van-goods-action-icon text="客服" icon="chat-o" />
        <van-goods-action-icon text="店铺" icon="shop-o" />
        <van-goods-action-button
          text="加入购物车"
          type="warning"
          color="#cc99ff"
        />
        <van-goods-action-button
          text="立即购买"
          type="danger"
          color="#223cdd"
        />
      </van-goods-action>
      <!-- 禁用状态 -->
      <div style="color: #666666; margin: 0.5rem">禁用状态</div>
      <van-goods-action :safe-area-inset-bottom="true">
        <van-goods-action-icon text="客服" icon="chat-o" />
        <van-goods-action-icon text="店铺" icon="shop-o" />
        <van-goods-action-button
          text="加入购物车"
          icon="cart-o"
          type="warning"
          color="#c2c2c2"
          disabled
        />
        <van-goods-action-button
          text="立即购买"
          type="danger"
          color="#999999"
          disabled
        />
      </van-goods-action>
      <!-- 加载状态 -->
      <div style="color: #666666; margin: 0.5rem">加载状态</div>
      <van-goods-action :safe-area-inset-bottom="true">
        <van-goods-action-icon text="客服" icon="chat-o" />
        <van-goods-action-icon text="店铺" icon="shop-o" />
        <van-goods-action-button
          text="加入购物车"
          type="warning"
          color="#ff6600"
        />
        <van-goods-action-button
          text="立即购买"
          type="danger"
          color="#223cdd"
          :loading="isLoading"
        />
      </van-goods-action>
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
    onClickIcon() {
      this.$toast("点击图标");
    },
    onClickButton() {
      this.$toast("点击按钮");
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.content {
  padding: 0.625rem 0;
}

.van-goods-action {
  position: relative;
}
</style>
