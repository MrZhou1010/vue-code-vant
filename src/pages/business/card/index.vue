<template>
  <div class="card">
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
      <div style="color: #666666; margin: 0.5rem 0">基础用法</div>
      <van-card
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        title="商品名称"
        desc="描述信息"
        num="2"
        price="2.00"
      />
      <!-- 营销信息 -->
      <div style="color: #666666; margin: 0.5rem 0">营销信息</div>
      <van-card
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        title="商品名称"
        desc="描述信息"
        tag="标签"
        num="2"
        price="2.00"
        origin-price="10.00"
      />
      <!-- 内容是否垂直居中 -->
      <div style="color: #666666; margin: 0.5rem 0">内容是否垂直居中</div>
      <van-card
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        title="商品名称"
        desc="描述信息"
        num="2"
        price="2.00"
        centered
      />
      <!-- 货币符号 -->
      <div style="color: #666666; margin: 0.5rem 0">货币符号</div>
      <van-card
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        title="商品名称"
        desc="描述信息"
        num="2"
        price="2.00"
        currency="$"
      />
      <!-- 自定义内容 -->
      <div style="color: #666666; margin: 0.5rem 0">自定义内容</div>
      <van-card
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        title="商品名称"
        desc="描述信息"
        num="2"
        price="2.00"
      >
        <template #tags>
          <van-tag type="primary" plain>标签</van-tag>
          <van-tag type="danger" plain>标签</van-tag>
        </template>
        <template #footer>
          <van-button type="danger" size="mini" plain round>按钮</van-button>
          <van-button type="primary" size="mini" square>按钮</van-button>
        </template>
      </van-card>
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
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.van-card__price {
  color: #00ee22;

  .van-card__price-currency {
    color: #00eecc;
  }
}

.van-card__origin-price {
  color: #ee2266;
}

.van-card__num {
  font-size: 14px;
  color: #ff6600;
}

.van-card__content {
  .van-tag--danger {
    margin-left: 4px;
  }
}

.van-card__footer {
  margin-top: 4%;

  .van-button--danger {
    margin-right: 4px;
    padding: 0 6px;
  }

  .van-button--primary {
    padding: 0 6px;
    border-radius: 4px;
  }
}
</style>
