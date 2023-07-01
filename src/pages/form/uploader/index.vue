<template>
  <div class="uploader">
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
      <van-uploader class="item-uploader" :after-read="afterRead1" />
      <!-- 文件预览 -->
      <div style="color: #666666;">文件预览</div>
      <van-uploader class="item-uploader" v-model="fileList1" multiple />
      <!-- 上传状态 -->
      <div style="color: #666666;">上传状态</div>
      <van-uploader
        class="item-uploader"
        v-model="fileList2"
        :after-read="afterRead2"
      />
      <!-- 限制上传数量 -->
      <div style="color: #666666;">限制上传数量</div>
      <van-uploader
        class="item-uploader"
        v-model="fileList3"
        multiple
        :max-count="2"
      />
      <!-- 限制上传大小 -->
      <div style="color: #666666;">限制上传大小</div>
      <van-uploader
        class="item-uploader"
        v-model="fileList4"
        multiple
        :max-size="500 * 1024"
        @oversize="onOversize"
      />
      <div style="color: #666666;">限制上传大小</div>
      <van-uploader
        class="item-uploader"
        v-model="fileList5"
        multiple
        :max-size="isOverSize"
      />
      <!-- 自定义上传样式 -->
      <div style="color: #666666;">自定义上传样式</div>
      <van-uploader class="item-uploader">
        <van-button type="primary" icon="plus">上传文件</van-button>
      </van-uploader>
      <!-- 自定义预览样式 -->
      <div style="color: #666666;">自定义预览样式</div>
      <van-uploader class="item-uploader" v-model="fileList6">
        <template #preview-cover="{ file }">
          <div class="preview-cover van-ellipsis">{{ file.name }}</div>
        </template>
      </van-uploader>
      <!-- 上传前置处理 -->
      <div style="color: #666666;">上传前置处理</div>
      <van-uploader class="item-uploader" :before-read="beforeRead" />
      <!-- 禁用文件上传 -->
      <div style="color: #666666;">禁用文件上传</div>
      <van-uploader class="item-uploader" disabled />
      <!-- 自定义单个图片预览 -->
      <div style="color: #666666;">自定义单个图片预览</div>
      <van-uploader
        class="item-uploader"
        v-model="fileList7"
        :deletable="false"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      fileList1: [
        {
          url: "https://img01.yzcdn.cn/vant/leaf.jpg",
        },
        {
          url: "https://cloud-image",
          isImage: true,
        },
      ],
      fileList2: [
        {
          url: "https://img01.yzcdn.cn/vant/leaf.jpg",
          status: "uploading",
          message: "上传中...",
        },
        {
          url: "https://img01.yzcdn.cn/vant/tree.jpg",
          status: "failed",
          message: "上传失败",
        },
      ],
      fileList3: [],
      fileList4: [],
      fileList5: [],
      fileList6: [],
      fileList7: [
        {
          url: "https://img01.yzcdn.cn/vant/leaf.jpg",
        },
        {
          url: "https://img01.yzcdn.cn/vant/sand.jpg",
          deletable: true,
          beforeDelete: () => {
            this.$toast("自定义单个预览图片的事件和样式");
          },
        },
        {
          url: "https://img01.yzcdn.cn/vant/tree.jpg",
          deletable: true,
          imageFit: "contain",
          previewSize: 120,
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
    afterRead1(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    afterRead2(file) {
      file.status = "uploading";
      file.message = "上传中...";
      setTimeout(() => {
        file.status = "failed";
        file.message = "上传失败";
      }, 2000);
      setTimeout(() => {
        file.status = "";
        file.message = "";
      }, 3000);
    },
    onOversize(file) {
      console.log(file);
      this.$toast("文件大小不能超过500kb");
    },
    isOverSize(file) {
      console.log(file);
      const maxSize = file.type === "image/jpeg" ? 500 * 1024 : 1000 * 1024;
      if (file.size >= maxSize) {
        this.$toast("文件大小不能超过1000kb");
      }
      return file.size >= maxSize;
    },
    // 返回布尔值
    beforeRead(file) {
      if (file.type !== "image/jpeg") {
        this.$toast("请上传jpg格式图片");
        return false;
      }
      return true;
    },
    // 返回Promise
    asyncBeforeRead(file) {
      return new Promise((resolve, reject) => {
        if (file.type !== "image/jpeg") {
          this.$toast("请上传jpg格式图片");
          reject();
        } else {
          const img = new File(["foo"], "bar.jpg", {
            type: "image/jpeg",
          });
          resolve(img);
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.content {
  margin-top: 2.75rem;
  padding: 0.625rem;
  background-color: white;
  text-align: left;
}

.item-uploader {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.van-cell {
  background-color: #f8f8f8;
}

.preview-cover {
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 4px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
}
</style>
