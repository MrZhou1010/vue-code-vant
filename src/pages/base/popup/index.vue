<template>
  <div class="popup">
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
      <van-cell class="item-cell" is-link @click="showPopup('center')"
        >展示弹出层</van-cell
      >
      <van-popup v-model="show1" class="popup-content"></van-popup>
      <br />
      <!-- 弹出位置 -->
      <div style="color: #666666">弹出位置</div>
      <van-cell class="item-cell" is-link @click="showPopup('top')"
        >顶部弹出</van-cell
      >
      <van-cell class="item-cell" is-link @click="showPopup('bottom')"
        >底部弹出</van-cell
      >
      <van-cell class="item-cell" is-link @click="showPopup('left')"
        >左侧弹出</van-cell
      >
      <van-cell class="item-cell" is-link @click="showPopup('right')"
        >右侧弹出</van-cell
      >
      <van-popup
        v-model="show2"
        :class="'popup-' + position"
        :position="position"
      ></van-popup>
      <br />
      <!-- 关闭图标 -->
      <div style="color: #666666">关闭图标</div>
      <van-cell class="item-cell" is-link @click="show3 = true"
        >关闭图标</van-cell
      >
      <van-popup
        v-model="show3"
        class="popup-bottom"
        closeable
        position="bottom"
      ></van-popup>
      <van-cell class="item-cell" is-link @click="show4 = true"
        >自定义图标</van-cell
      >
      <van-popup
        v-model="show4"
        class="popup-bottom"
        closeable
        close-icon="close"
        position="bottom"
      >
      </van-popup>
      <van-cell class="item-cell" is-link @click="show5 = true"
        >图标位置</van-cell
      >
      <van-popup
        v-model="show5"
        class="popup-bottom"
        closeable
        close-icon-position="top-left"
        position="bottom"
      >
      </van-popup>
      <br />
      <!-- 圆角弹窗 -->
      <div style="color: #666666">圆角弹窗</div>
      <van-cell class="item-cell" is-link @click="show6 = true"
        >圆角弹窗</van-cell
      >
      <van-popup
        v-model="show6"
        class="popup-right"
        round
        position="right"
      ></van-popup>
      <br />
      <!-- 指定挂载节点 -->
      <div style="color: #666666">指定挂载节点</div>
      <van-cell class="item-cell" is-link @click="show7 = true"
        >指定挂载节点</van-cell
      >
      <van-popup
        v-model="show7"
        class="popup-content"
        get-container="body"
      ></van-popup>
      <br />
      <!-- 是否显示遮罩层 -->
      <div style="color: #666666">是否显示遮罩层</div>
      <van-cell class="item-cell" is-link @click="show8 = true"
        >是否显示遮罩层</van-cell
      >
      <van-popup
        v-model="show8"
        class="popup-content"
        round
        closeable
        :overlay="false"
        :lock-scroll="true"
      >
      </van-popup>
      <br />
      <!-- 动画时长 -->
      <div style="color: #666666">动画时长</div>
      <van-cell class="item-cell" is-link @click="show9 = true"
        >动画时长</van-cell
      >
      <van-popup
        v-model="show9"
        class="popup-bottom"
        round
        closeable
        position="bottom"
        duration="2"
        @click="onClick()"
        @click-overlay="onClickOverlay()"
        @click-close-icon="onClickCloseIcon()"
      ></van-popup>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      title: "",
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
      position: "center",
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    showPopup(str) {
      if (str === "center") {
        this.show1 = true;
      } else {
        this.position = str;
        this.show2 = true;
      }
    },
    onClick() {
      this.$toast("popup被点击");
    },
    onClickOverlay() {
      this.$toast("popup overlay被点击");
    },
    onClickCloseIcon() {
      this.$toast("popup close icon被点击");
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

.popup-content {
  width: 30%;
  height: 30%;
  background-color: orange;
}

.popup-top {
  width: 100%;
  height: 30%;
}

.popup-bottom {
  width: 100%;
  height: 30%;
}

.popup-left {
  width: 30%;
  height: 100%;
}

.popup-right {
  width: 30%;
  height: 100%;
}
</style>
