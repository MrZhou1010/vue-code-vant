<template>
  <div class="dialog">
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
      <van-cell class="item-cell" is-link @click="showDialog1()">
        提示弹窗
      </van-cell>
      <van-cell class="item-cell" is-link @click="showDialog2()">
        提示弹窗(无标题)
      </van-cell>
      <van-cell class="item-cell" is-link @click="showDialog3()">
        确认弹窗
      </van-cell>
      <br />
      <!-- 圆角按钮样式 -->
      <div style="color: #666666">圆角按钮样式</div>
      <van-cell class="item-cell" is-link @click="showDialog4()">
        提示弹窗
      </van-cell>
      <van-cell class="item-cell" is-link @click="showDialog5()">
        提示弹窗(无标题)
      </van-cell>
      <van-cell class="item-cell" is-link @click="showDialog6()">
        确认弹窗
      </van-cell>
      <br />
      <!-- 异步关闭 -->
      <div style="color: #666666">异步关闭</div>
      <van-cell class="item-cell" is-link @click="showDialog7()">
        异步关闭
      </van-cell>
      <br />
      <!-- 组件调用 -->
      <div style="color: #666666">组件调用</div>
      <van-cell class="item-cell" is-link @click="showDialog = true">
        组件调用
      </van-cell>
      <van-dialog
        v-model="showDialog"
        title="标题"
        message="弹窗内容"
        show-cancel-button
      >
        <img src="https://img01.yzcdn.cn/vant/apple-3.jpg" width="100%" />
      </van-dialog>
    </div>
  </div>
</template>

<script>
function beforeClose(action, done) {
  if (action === "confirm") {
    setTimeout(done, 2000);
  } else {
    done();
  }
}

export default {
  name: "",
  data() {
    return {
      title: "",
      showDialog: false,
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    showDialog1() {
      this.$dialog
        .alert({
          title: "标题",
          message: "弹窗内容",
        })
        .then(() => {
          // on close
        });
    },
    showDialog2() {
      this.$dialog
        .alert({
          message: "弹窗内容",
        })
        .then(() => {
          // on close
        });
    },
    showDialog3() {
      this.$dialog
        .confirm({
          title: "标题",
          message: "弹窗内容",
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    showDialog4() {
      this.$dialog
        .alert({
          title: "标题",
          message: "弹窗内容",
          theme: "round-button",
        })
        .then(() => {
          // on close
        });
    },
    showDialog5() {
      this.$dialog
        .alert({
          message: "弹窗内容",
          theme: "round-button",
        })
        .then(() => {
          // on close
        });
    },
    showDialog6() {
      this.$dialog
        .confirm({
          title: "标题",
          message: "弹窗内容",
          theme: "round-button",
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    showDialog7() {
      this.$dialog
        .confirm({
          title: "标题",
          message: "弹窗内容",
          beforeClose,
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
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
