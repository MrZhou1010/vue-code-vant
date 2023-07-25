<template>
  <div class="area">
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
      <van-cell
        is-link
        title="基础用法"
        :value="selectedValue1"
        @click="showPopup1 = true"
      />
      <van-popup v-model="showPopup1" position="bottom" round>
        <van-area
          title="标题"
          :area-list="areaList"
          @confirm="onConfirm1"
          @cancel="showPopup1 = false"
        />
      </van-popup>
      <van-cell
        is-link
        title="选中省市区"
        :value="selectedValue2"
        @click="showPopup2 = true"
      />
      <van-popup v-model="showPopup2" position="bottom" round>
        <van-area
          title="标题"
          value="420105"
          :area-list="areaList"
          @confirm="onConfirm2"
          @cancel="showPopup2 = false"
        />
      </van-popup>
      <van-cell
        is-link
        title="配置显示列"
        :value="selectedValue3"
        @click="showPopup3 = true"
      />
      <van-popup v-model="showPopup3" position="bottom" round>
        <van-area
          title="标题"
          :area-list="areaList"
          :columns-num="2"
          @confirm="onConfirm3"
          @cancel="showPopup3 = false"
        />
      </van-popup>
      <van-cell
        is-link
        title="配置列占位提示文字"
        :value="selectedValue4"
        @click="showPopup4 = true"
      />
      <van-popup v-model="showPopup4" position="bottom" round>
        <van-area
          title="标题"
          :area-list="areaList"
          :columns-placeholder="['请选择', '请选择', '请选择']"
          @confirm="onConfirm4"
          @cancel="showPopup4 = false"
        />
      </van-popup>
      <!-- 其他用法 -->
      <div style="color: #666666; margin: 0.5rem 0">其他用法</div>
      <van-cell
        is-link
        title="只读状态"
        :value="selectedValue5"
        @click="showPopup5 = true"
      />
      <van-popup v-model="showPopup5" position="bottom" round>
        <van-area
          title="标题"
          :area-list="areaList"
          :readonly="true"
          @confirm="onConfirm5"
          @cancel="showPopup5 = false"
        />
      </van-popup>
      <van-cell
        is-link
        title="加载状态"
        :value="selectedValue6"
        @click="showPopup6 = true"
      />
      <van-popup v-model="showPopup6" position="bottom" round>
        <van-area
          title="标题"
          :area-list="areaList"
          :loading="true"
          @confirm="onConfirm6"
          @cancel="showPopup6 = false"
        />
      </van-popup>
      <van-cell
        is-link
        title="选项高度"
        :value="selectedValue7"
        @click="showPopup7 = true"
      />
      <van-popup v-model="showPopup7" position="bottom" round>
        <van-area
          title="标题"
          item-height="60px"
          :area-list="areaList"
          @confirm="onConfirm7"
          @cancel="showPopup7 = false"
        />
      </van-popup>
      <van-cell
        is-link
        title="可见的选项个数"
        :value="selectedValue8"
        @click="showPopup8 = true"
      />
      <van-popup v-model="showPopup8" position="bottom" round>
        <van-area
          title="标题"
          visible-item-count="3"
          :area-list="areaList"
          @confirm="onConfirm8"
          @cancel="showPopup8 = false"
        />
      </van-popup>
      <van-cell
        is-link
        title="快速滑动时惯性滚动的时长"
        :value="selectedValue9"
        @click="showPopup9 = true"
      />
      <van-popup v-model="showPopup9" position="bottom" round>
        <van-area
          title="标题"
          swipe-duration="6000"
          :area-list="areaList"
          @confirm="onConfirm9"
          @cancel="showPopup9 = false"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";

export default {
  name: "",
  data() {
    return {
      title: "",
      showPopup1: false,
      selectedValue1: "",
      showPopup2: false,
      selectedValue2: "",
      showPopup3: false,
      selectedValue3: "",
      showPopup4: false,
      selectedValue4: "",
      showPopup5: false,
      selectedValue5: "",
      showPopup6: false,
      selectedValue6: "",
      showPopup7: false,
      selectedValue7: "",
      showPopup8: false,
      selectedValue8: "",
      showPopup9: false,
      selectedValue9: "",
      areaList: areaList,
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    onConfirm1(values) {
      this.showPopup1 = false;
      if (values.length == 3) {
        if (values[1].name == values[0].name) {
          this.selectedValue1 = values[1].name + "/" + values[2].name;
        } else {
          this.selectedValue1 =
            values[0].name + "/" + values[1].name + "/" + values[2].name;
        }
      }
    },
    onConfirm2(values) {
      this.showPopup2 = false;
      if (values.length == 3) {
        if (values[1].name == values[0].name) {
          this.selectedValue2 = values[1].name + "/" + values[2].name;
        } else {
          this.selectedValue2 =
            values[0].name + "/" + values[1].name + "/" + values[2].name;
        }
      }
    },
    onConfirm3(values) {
      this.showPopup3 = false;
      if (values.length == 3) {
        if (values[1].name == values[0].name) {
          this.selectedValue3 = values[1].name + "/" + values[2].name;
        } else {
          this.selectedValue3 =
            values[0].name + "/" + values[1].name + "/" + values[2].name;
        }
      } else if (values.length == 2) {
        if (values[1].name == values[0].name) {
          this.selectedValue3 = values[1].name;
        } else {
          this.selectedValue3 = values[0].name + "/" + values[1].name;
        }
      }
    },
    onConfirm4(values) {
      this.showPopup4 = false;
      if (values.length == 3) {
        if (values[1].name == values[0].name) {
          this.selectedValue4 = values[1].name + "/" + values[2].name;
        } else {
          this.selectedValue4 =
            values[0].name + "/" + values[1].name + "/" + values[2].name;
        }
      }
    },
    onConfirm5(values) {
      this.showPopup5 = false;
      if (values.length == 3) {
        if (values[1].name == values[0].name) {
          this.selectedValue5 = values[1].name + "/" + values[2].name;
        } else {
          this.selectedValue5 =
            values[0].name + "/" + values[1].name + "/" + values[2].name;
        }
      }
    },
    onConfirm6(values) {
      this.showPopup6 = false;
      if (values.length == 3) {
        if (values[1].name == values[0].name) {
          this.selectedValue6 = values[1].name + "/" + values[2].name;
        } else {
          this.selectedValue6 =
            values[0].name + "/" + values[1].name + "/" + values[2].name;
        }
      }
    },
    onConfirm7(values) {
      this.showPopup7 = false;
      if (values.length == 3) {
        if (values[1].name == values[0].name) {
          this.selectedValue7 = values[1].name + "/" + values[2].name;
        } else {
          this.selectedValue7 =
            values[0].name + "/" + values[1].name + "/" + values[2].name;
        }
      }
    },
    onConfirm8(values) {
      this.showPopup8 = false;
      if (values.length == 3) {
        if (values[1].name == values[0].name) {
          this.selectedValue8 = values[1].name + "/" + values[2].name;
        } else {
          this.selectedValue8 =
            values[0].name + "/" + values[1].name + "/" + values[2].name;
        }
      }
    },
    onConfirm9(values) {
      this.showPopup9 = false;
      if (values.length == 3) {
        if (values[1].name == values[0].name) {
          this.selectedValue9 = values[1].name + "/" + values[2].name;
        } else {
          this.selectedValue9 =
            values[0].name + "/" + values[1].name + "/" + values[2].name;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";
</style>
