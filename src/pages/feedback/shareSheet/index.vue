<template>
  <div class="share-sheet">
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
      <van-cell class="item-cell" is-link @click="showShareSheet1 = true"
        >显示分享面板</van-cell
      >
      <van-share-sheet
        v-model="showShareSheet1"
        title="立即分享给好友"
        :options="options1"
        @select="onSelect1"
      >
      </van-share-sheet>
      <br />
      <!-- 展示多行选项 -->
      <div style="color: #666666">展示多行选项</div>
      <van-cell class="item-cell" is-link @click="showShareSheet2 = true"
        >显示分享面板</van-cell
      >
      <van-share-sheet
        v-model="showShareSheet2"
        title="立即分享给好友"
        cancel-text=""
        :options="options2"
        @select="onSelect2"
      >
      </van-share-sheet>
      <br />
      <!-- 自定义图标 -->
      <div style="color: #666666">自定义图标</div>
      <van-cell class="item-cell" is-link @click="showShareSheet3 = true"
        >显示分享面板</van-cell
      >
      <van-share-sheet
        v-model="showShareSheet3"
        title="立即分享给好友"
        :options="options3"
        @select="onSelect3"
      >
      </van-share-sheet>
      <br />
      <!-- 展示描述信息 -->
      <div style="color: #666666">展示描述信息</div>
      <van-cell class="item-cell" is-link @click="showShareSheet4 = true"
        >显示分享面板</van-cell
      >
      <van-share-sheet
        v-model="showShareSheet4"
        title="立即分享给好友"
        description="描述信息"
        :options="options4"
        @select="onSelect4"
        @cancel="onCancel"
      ></van-share-sheet>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      showShareSheet1: false,
      showShareSheet2: false,
      showShareSheet3: false,
      showShareSheet4: false,
      options1: [
        {
          name: "微信",
          icon: "wechat",
        },
        {
          name: "微博",
          icon: "weibo",
        },
        {
          name: "复制链接",
          icon: "link",
        },
        {
          name: "分享海报",
          icon: "poster",
        },
        {
          name: "二维码",
          icon: "qrcode",
        },
      ],
      options2: [
        [
          {
            name: "微信",
            icon: "wechat",
          },
          {
            name: "朋友圈",
            icon: "wechat-moments",
          },
          {
            name: "微博",
            icon: "weibo",
          },
          {
            name: "QQ",
            icon: "qq",
          },
        ],
        [
          {
            name: "复制链接",
            icon: "link",
          },
          {
            name: "分享海报",
            icon: "poster",
          },
          {
            name: "二维码",
            icon: "qrcode",
          },
          {
            name: "小程序码",
            icon: "weapp-qrcode",
          },
        ],
      ],
      options3: [
        {
          name: "名称one",
          icon: "https://img01.yzcdn.cn/vant/custom-icon-fire.png",
        },
        {
          name: "名称two",
          icon: "https://img01.yzcdn.cn/vant/custom-icon-light.png",
        },
        {
          name: "名称three",
          icon: "https://img01.yzcdn.cn/vant/custom-icon-water.png",
        },
      ],
      options4: [
        {
          name: "微信",
          icon: "wechat",
        },
        {
          name: "微博",
          icon: "weibo",
        },
        {
          name: "复制链接",
          icon: "link",
          description: "描述信息",
        },
        {
          name: "分享海报",
          icon: "poster",
        },
        {
          name: "二维码",
          icon: "qrcode",
        },
      ],
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    onSelect1(option, index) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.showShareSheet1 = false;
      this.$toast(option.name);
      console.log(`${option.name}: ${index}`);
    },
    onSelect2(option, index) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.showShareSheet2 = false;
      this.$toast(option.name);
      console.log(`${option.name}: ${index}`);
    },
    onSelect3(option, index) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.showShareSheet3 = false;
      this.$toast(option.name);
      console.log(`${option.name}: ${index}`);
    },
    onSelect4(option, index) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.showShareSheet4 = false;
      this.$toast(option.name);
      console.log(`${option.name}: ${index}`);
    },
    onCancel() {
      this.$toast("取消");
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.item-cell {
  margin-top: 1rem;
  background-clip: border-box;
  border-radius: 0.625rem;
}
</style>
