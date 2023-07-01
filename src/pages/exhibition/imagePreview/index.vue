<template>
  <div class="image-preview">
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
      <van-cell class="item-cell" is-link @click="showImagePreview1()"
        >预览图片</van-cell
      >
      <br />
      <!-- 传入配置项 -->
      <div style="color: #666666;">传入配置项</div>
      <van-cell class="item-cell" is-link @click="showImagePreview2()"
        >指定初始位置</van-cell
      >
      <van-cell class="item-cell" is-link @click="showImagePreview3()"
        >是否显示页码</van-cell
      >
      <van-cell class="item-cell" is-link @click="showImagePreview4()"
        >是否显示轮播指示器</van-cell
      >
      <van-cell class="item-cell" is-link @click="showImagePreview5()"
        >是否开启循环播放</van-cell
      >
      <van-cell class="item-cell" is-link @click="showImagePreview6()"
        >展示关闭按钮</van-cell
      >
      <van-cell class="item-cell" is-link @click="showImagePreview7()"
        >监听关闭事件</van-cell
      >
      <van-cell class="item-cell" is-link @click="showImagePreview8()"
        >手势缩放最大最小比例</van-cell
      >
      <br />
      <!-- 异步关闭 -->
      <div style="color: #666666;">异步关闭</div>
      <van-cell class="item-cell" is-link @click="showImagePreview9()"
        >异步关闭</van-cell
      >
      <br />
      <!-- 组件调用 -->
      <div style="color: #666666;">组件调用</div>
      <van-cell class="item-cell" is-link @click="showImagePreview = true"
        >组件调用</van-cell
      >
      <van-image-preview
        v-model="showImagePreview"
        :images="images"
        @change="onChange"
      >
        <template #index
          >第{{ index }}页</template
        >
      </van-image-preview>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from "vant";

export default {
  name: "",
  data() {
    return {
      title: "",
      showImagePreview: false,
      index: 1,
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
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
    showImagePreview1() {
      const imageList = [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ];
      ImagePreview(imageList);
    },
    showImagePreview2() {
      const imageList = [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ];
      ImagePreview({
        images: imageList,
        startPosition: 1,
      });
    },
    showImagePreview3() {
      const imageList = [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ];
      ImagePreview({
        images: imageList,
        showIndex: false,
      });
    },
    showImagePreview4() {
      const imageList = [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ];
      ImagePreview({
        images: imageList,
        showIndicators: true,
      });
    },
    showImagePreview5() {
      const imageList = [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ];
      ImagePreview({
        images: imageList,
        loop: false,
      });
    },
    showImagePreview6() {
      const imageList = [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ];
      ImagePreview({
        images: imageList,
        closeable: true,
        closeIconPosition: "bottom-right",
      });
    },
    showImagePreview7() {
      const imageList = [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ];
      ImagePreview({
        images: imageList,
        closeable: true,
        onClose() {
          console.log("关闭");
        },
      });
    },
    showImagePreview8() {
      const imageList = [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ];
      ImagePreview({
        images: imageList,
        minZoom: 0.5,
        maxZoom: 2,
      });
    },
    showImagePreview9() {
      const imageList = [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ];
      const instance = ImagePreview({
        images: imageList,
        closeable: true,
        asyncClose: true,
      });
      setTimeout(() => {
        instance.close();
      }, 2000);
    },
    onChange(index) {
      this.index = index + 1;
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
