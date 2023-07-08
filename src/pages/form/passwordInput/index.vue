<template>
  <div class="password-input">
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
      <div style="color: #666666; margin: 0.5rem 0">基础用法</div>
      <!-- 密码输入框 -->
      <van-password-input
        :value="value1"
        :focused="showKeyboard1"
        @focus="showKeyboard1 = true"
      />
      <!-- 数字键盘 -->
      <van-number-keyboard
        v-model="value1"
        :show="showKeyboard1"
        maxlength="6"
        @blur="showKeyboard1 = false"
      />
      <!-- 自定义长度 -->
      <div style="color: #666666; margin: 0.5rem 0">自定义长度</div>
      <van-password-input
        :value="value2"
        :length="4"
        :focused="showKeyboard2"
        @focus="showKeyboard2 = true"
      />
      <van-number-keyboard
        v-model="value2"
        :show="showKeyboard2"
        maxlength="4"
        @blur="showKeyboard2 = false"
      />
      <!-- 格子间距 -->
      <div style="color: #666666; margin: 0.5rem 0">格子间距</div>
      <van-password-input
        :value="value3"
        :gutter="10"
        :focused="showKeyboard3"
        @focus="showKeyboard3 = true"
      />
      <van-number-keyboard
        v-model="value3"
        :show="showKeyboard3"
        maxlength="6"
        @blur="showKeyboard3 = false"
      />
      <!-- 明文展示 -->
      <div style="color: #666666; margin: 0.5rem 0">明文展示</div>
      <van-password-input
        :value="value4"
        :mask="false"
        :focused="showKeyboard4"
        @focus="showKeyboard4 = true"
      />
      <van-number-keyboard
        v-model="value4"
        :show="showKeyboard4"
        maxlength="6"
        @blur="showKeyboard4 = false"
      />
      <!-- 提示信息 -->
      <div style="color: #666666; margin: 0.5rem 0">提示信息</div>
      <van-password-input
        :value="value5"
        info="密码为6位数字"
        :error-info="errorInfo"
        :focused="showKeyboard5"
        @focus="showKeyboard5 = true"
      />
      <van-number-keyboard
        v-model="value5"
        :show="showKeyboard5"
        maxlength="6"
        @blur="showKeyboard5 = false"
      />
      <!-- 输入框放置在数字键盘标题上面 -->
      <div style="color: #666666; margin: 0.5rem 0">
        输入框放置在数字键盘标题上面
      </div>
      <van-cell
        is-link
        title="输入密码"
        :value="value6"
        @touchstart.native.stop="showKeyboard6 = true"
      />
      <van-number-keyboard
        v-model="value6"
        :show="showKeyboard6"
        maxlength="6"
        close-button-text="完成"
        @blur="showKeyboard6 = false"
      >
        <template #title-left>
          <van-password-input :value="value6" :focused="showKeyboard6" />
        </template>
      </van-number-keyboard>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      showKeyboard1: false,
      value1: "",
      showKeyboard2: false,
      value2: "",
      showKeyboard3: false,
      value3: "",
      showKeyboard4: false,
      value4: "",
      showKeyboard5: false,
      value5: "",
      showKeyboard6: false,
      value6: "",
      errorInfo: "",
    };
  },
  watch: {
    value5(value) {
      this.errorInfo =
        value.length === 6 && value !== "123456" ? "密码错误" : "";
    },
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

.van-number-keyboard__header {
  height: 46px;

  .van-number-keyboard__title-left {
    .van-password-input {
      width: 300px;
      margin: 0 6px;

      .van-password-input__security {
        height: 40px;

        li:first-child {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }

        li:last-child {
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      }
    }
  }
}
</style>
