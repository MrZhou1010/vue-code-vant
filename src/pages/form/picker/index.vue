<template>
  <div class="picker">
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
      <van-cell
        is-link
        title="基础用法"
        :value="selectedValue1"
        @click="showPopup1 = true"
      />
      <van-popup v-model="showPopup1" position="bottom" round>
        <van-picker :columns="columns1" @change="onChange1" />
      </van-popup>
      <van-cell
        is-link
        title="顶部栏"
        :value="selectedValue2"
        @click="showPopup2 = true"
      />
      <van-popup v-model="showPopup2" position="bottom" round>
        <van-picker
          :title="selectedValue2 || '标题'"
          show-toolbar
          :columns="columns2"
          @confirm="onConfirm2"
          @cancel="showPopup2 = false"
        />
      </van-popup>
      <van-cell
        is-link
        title="顶部栏位置"
        :value="selectedValue3"
        @click="showPopup3 = true"
      />
      <van-popup v-model="showPopup3" position="bottom" round>
        <van-picker
          :title="selectedValue3 || '标题'"
          show-toolbar
          toolbar-position="bottom"
          :columns="columns3"
          @confirm="onConfirm3"
          @cancel="showPopup3 = false"
        />
      </van-popup>
      <van-cell
        is-link
        title="默认选中项"
        :value="selectedValue4"
        @click="showPopup4 = true"
      />
      <van-popup v-model="showPopup4" position="bottom" round>
        <van-picker
          title="标题"
          show-toolbar
          :columns="columns4"
          :default-index="2"
          @confirm="onConfirm4"
          @cancel="showPopup4 = false"
        />
      </van-popup>
      <van-cell
        is-link
        title="只读状态"
        :value="selectedValue5"
        @click="showPopup5 = true"
      />
      <van-popup v-model="showPopup5" position="bottom" round>
        <van-picker
          title="标题"
          show-toolbar
          :columns="columns5"
          readonly
          @confirm="onConfirm5"
          @cancel="showPopup5 = false"
        />
      </van-popup>
      <van-cell
        is-link
        title="禁用选项"
        :value="selectedValue6"
        @click="showPopup6 = true"
      />
      <van-popup v-model="showPopup6" position="bottom" round>
        <van-picker
          title="标题"
          show-toolbar
          :columns="columns6"
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
        <van-picker
          title="标题"
          show-toolbar
          item-height="60px"
          :columns="columns7"
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
        <van-picker
          title="标题"
          show-toolbar
          visible-item-count="3"
          :columns="columns8"
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
        <van-picker
          title="标题"
          show-toolbar
          swipe-duration="6000"
          :columns="columns9"
          @confirm="onConfirm9"
          @cancel="showPopup9 = false"
        />
      </van-popup>
      <!-- 其他用法 -->
      <div style="color: #666666; margin: 0.5rem 0">其他用法</div>
      <van-cell
        is-link
        title="多列选择"
        :value="selectedValue10"
        @click="showPopup10 = true"
      />
      <van-popup v-model="showPopup10" position="bottom" round>
        <van-picker
          title="标题"
          show-toolbar
          :columns="columns10"
          @confirm="onConfirm10"
          @cancel="showPopup10 = false"
        />
      </van-popup>
      <van-cell
        is-link
        title="级联选择"
        :value="selectedValue11"
        @click="showPopup11 = true"
      />
      <van-popup v-model="showPopup11" position="bottom" round>
        <van-picker
          title="标题"
          show-toolbar
          :columns="columns11"
          @confirm="onConfirm11"
          @cancel="showPopup11 = false"
        />
      </van-popup>
      <van-cell
        is-link
        title="动态设置选项"
        :value="selectedValue12"
        @click="showPopup12 = true"
      />
      <van-popup v-model="showPopup12" position="bottom" round>
        <van-picker
          title="标题"
          show-toolbar
          :columns="columns12"
          @confirm="onConfirm12"
          @cancel="showPopup12 = false"
          @change="onChange12"
        />
      </van-popup>
      <van-cell
        is-link
        title="加载状态"
        :value="selectedValue13"
        @click="showPopup13 = true"
      />
      <van-popup v-model="showPopup13" position="bottom" round>
        <van-picker
          title="标题"
          show-toolbar
          :columns="columns13"
          :loading="loading"
          @confirm="onConfirm13"
          @cancel="showPopup13 = false"
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
      showPopup1: false,
      selectedValue1: "",
      columns1: [
        "杭州",
        "宁波",
        "温州",
        "绍兴",
        "湖州",
        "嘉兴",
        "金华",
        "衢州",
      ],
      showPopup2: false,
      selectedValue2: "",
      columns2: [
        "杭州",
        "宁波",
        "温州",
        "绍兴",
        "湖州",
        "嘉兴",
        "金华",
        "衢州",
      ],
      showPopup3: false,
      selectedValue3: "",
      columns3: [
        "杭州",
        "宁波",
        "温州",
        "绍兴",
        "湖州",
        "嘉兴",
        "金华",
        "衢州",
      ],
      showPopup4: false,
      selectedValue4: "",
      columns4: [
        "杭州",
        "宁波",
        "温州",
        "绍兴",
        "湖州",
        "嘉兴",
        "金华",
        "衢州",
      ],
      showPopup5: false,
      selectedValue5: "",
      columns5: [
        "杭州",
        "宁波",
        "温州",
        "绍兴",
        "湖州",
        "嘉兴",
        "金华",
        "衢州",
      ],
      showPopup6: false,
      selectedValue6: "",
      columns6: [
        // 第一个
        {
          text: "杭州",
        },
        // 第二个
        {
          text: "宁波",
          disabled: true,
        },
        // 第三个
        {
          text: "温州",
        },
      ],
      showPopup7: false,
      selectedValue7: "",
      columns7: [
        "杭州",
        "宁波",
        "温州",
        "绍兴",
        "湖州",
        "嘉兴",
        "金华",
        "衢州",
      ],
      showPopup8: false,
      selectedValue8: "",
      columns8: [
        "杭州",
        "宁波",
        "温州",
        "绍兴",
        "湖州",
        "嘉兴",
        "金华",
        "衢州",
      ],
      showPopup9: false,
      selectedValue9: "",
      columns9: [
        "杭州",
        "宁波",
        "温州",
        "绍兴",
        "湖州",
        "嘉兴",
        "金华",
        "衢州",
      ],
      showPopup10: false,
      selectedValue10: "",
      columns10: [
        // 第一列
        {
          values: ["周一", "周二", "周三", "周四", "周五"],
          defaultIndex: 2,
        },
        // 第二列
        {
          values: ["上午", "下午", "晚上"],
          defaultIndex: 1,
        },
      ],
      showPopup11: false,
      selectedValue11: "",
      columns11: [
        // 第一个
        {
          text: "浙江",
          children: [
            {
              text: "杭州",
              children: [
                {
                  text: "西湖区",
                },
                {
                  text: "余杭区",
                },
              ],
            },
            {
              text: "温州",
              children: [
                {
                  text: "鹿城区",
                },
                {
                  text: "瓯海区",
                },
              ],
            },
          ],
        },
        // 第二个
        {
          text: "福建",
          children: [
            {
              text: "福州",
              children: [
                {
                  text: "鼓楼区",
                },
                {
                  text: "台江区",
                },
              ],
            },
            {
              text: "厦门",
              children: [
                {
                  text: "思明区",
                },
                {
                  text: "海沧区",
                },
              ],
            },
          ],
        },
      ],
      showPopup12: false,
      selectedValue12: "",
      columns12: [
        {
          values: [],
        },
        {
          values: [],
        },
      ],
      areaList: [],
      loading: true,
      showPopup13: false,
      selectedValue13: "",
      columns13: [],
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  mounted() {
    this.areaList = {
      浙江: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      福建: ["福州", "厦门", "莆田", "三明", "泉州"],
    };
    this.columns12[0].values = Object.keys(this.areaList);
    this.columns12[1].values = this.areaList[Object.keys(this.areaList)[0]];
    setTimeout(() => {
      this.loading = false;
      this.columns13 = ["杭州", "宁波", "温州", "嘉兴", "湖州"];
    }, 6000);
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    onChange1(picker, value, index) {
      this.showPopup1 = false;
      this.selectedValue1 = value;
    },
    onConfirm2(value, index) {
      this.showPopup2 = false;
      this.selectedValue2 = value;
    },
    onConfirm3(value, index) {
      this.showPopup3 = false;
      this.selectedValue3 = value;
    },
    onConfirm4(value, index) {
      this.showPopup4 = false;
      this.selectedValue4 = value;
    },
    onConfirm5(value, index) {
      this.showPopup5 = false;
      this.selectedValue5 = value;
    },
    onConfirm6(value, index) {
      this.showPopup6 = false;
      this.selectedValue6 = value.text;
    },
    onConfirm7(value, index) {
      this.showPopup7 = false;
      this.selectedValue7 = value;
    },
    onConfirm8(value, index) {
      this.showPopup8 = false;
      this.selectedValue8 = value;
    },
    onConfirm9(value, index) {
      this.showPopup9 = false;
      this.selectedValue9 = value;
    },
    onConfirm10(values, index) {
      this.showPopup10 = false;
      this.selectedValue10 = values.join("");
    },
    onConfirm11(values, index) {
      this.showPopup11 = false;
      this.selectedValue11 = values.join(" ");
    },
    onConfirm12(values, index) {
      this.showPopup12 = false;
      this.selectedValue12 = values.join(" ");
    },
    onChange12(picker, values, index) {
      picker.setColumnValues(1, this.areaList[values[0]]);
    },
    onConfirm13(value, index) {
      this.showPopup13 = false;
      this.selectedValue13 = value;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";
</style>
