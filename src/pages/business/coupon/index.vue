<template>
  <div class="coupon">
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
      <div style="color: #666666; margin: 10px">基础用法</div>
      <van-coupon-cell
        title="消费优惠券"
        currency="¥"
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        editable
        border
        @click="showList = true"
      />
      <van-popup
        v-model="showList"
        style="height: 90%; padding-top: 10px"
        position="bottom"
        round
      >
        <van-coupon-list
          show-count
          show-close-button
          show-exchange-bar
          enabled-title="可用优惠券"
          disabled-title="不可用优惠券"
          exchange-button-text="兑换优惠券"
          close-button-text="不使用优惠券"
          input-placeholder="请输入优惠券码"
          currency="¥"
          empty-image="https://img01.yzcdn.cn/vant/coupon-empty.png"
          :exchange-button-loading="isExchangeLoading"
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      showList: false,
      isExchangeLoading: false,
      chosenCoupon: -1,
      coupons: [],
      disabledCoupons: [],
    };
  },
  created() {
    this.title = this.$route.query.title;
    this.coupons = [
      {
        name: "优惠券名称",
        condition: "无使用门槛\n最多优惠12元",
        description: "描述信息",
        reason: "",
        unitDesc: "元",
        valueDesc: "5.5",
        value: 550,
        startAt: 1489104000,
        endAt: 1514592000,
        available: 1,
      },
      {
        name: "优惠券名称",
        condition: "无使用门槛\n最多优惠12元",
        description: "描述信息",
        reason: "",
        unitDesc: "折",
        valueDesc: "8.0",
        value: 150,
        startAt: 1489104000,
        endAt: 1514592000,
        available: 1,
      },
    ];
    this.disabledCoupons = [
      {
        name: "优惠券名称",
        condition: "无使用门槛\n最多优惠12元",
        description: "",
        reason: "优惠券不可用原因",
        unitDesc: "元",
        valueDesc: "5.5",
        value: 150,
        startAt: 1489104000,
        endAt: 1514592000,
        available: 1,
      },
    ];
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      console.log("输入的优惠券码:", code);
      this.isExchangeLoading = true;
      setTimeout(() => {
        this.isExchangeLoading = false;
        this.$toast("兑换成功");
      }, 2000);
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
