<template>
  <div class="cascader">
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
      <van-field
        v-model="fieldValue1"
        class="item-cell"
        label="地区"
        placeholder="请选择所在地区"
        is-link
        readonly
        @click="show1 = true"
      />
      <van-popup v-model="show1" position="bottom" round>
        <van-cascader
          v-model="cascaderValue1"
          title="请选择所在地区"
          :options="options"
          @close="show1 = false"
          @finish="onFinish1"
        />
      </van-popup>
      <br />
      <!-- 自定义颜色 -->
      <div style="color: #666666;">自定义颜色</div>
      <van-field
        v-model="fieldValue2"
        class="item-cell"
        label="地区"
        placeholder="请选择所在地区"
        is-link
        readonly
        @click="show2 = true"
      />
      <van-popup v-model="show2" position="bottom" round>
        <van-cascader
          v-model="cascaderValue2"
          title="请选择所在地区"
          active-color="#1989fa"
          :options="options"
          @close="show2 = false"
          @finish="onFinish2"
        />
      </van-popup>
      <br />
      <!-- 异步加载选项 -->
      <div style="color: #666666;">异步加载选项</div>
      <van-field
        v-model="fieldValue3"
        class="item-cell"
        label="地区"
        placeholder="请选择所在地区"
        is-link
        readonly
        @click="show3 = true"
      />
      <van-popup v-model="show3" position="bottom" round>
        <van-cascader
          v-model="cascaderValue3"
          title="请选择所在地区"
          :options="options"
          @close="show3 = false"
          @change="onChange"
          @finish="onFinish3"
        />
      </van-popup>
      <br />
      <!-- 自定义字段名 -->
      <div style="color: #666666;">自定义字段名</div>
      <van-field
        v-model="fieldValue4"
        class="item-cell"
        label="地区"
        placeholder="请选择所在地区"
        is-link
        readonly
        @click="show4 = true"
      />
      <van-popup v-model="show4" position="bottom" round>
        <van-cascader
          v-model="cascaderValue4"
          title="请选择所在地区"
          :show-header="false"
          :field-names="fieldNames"
          :options="newOptions"
          @close="show4 = false"
          @finish="onFinish4"
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
      show1: false,
      fieldValue1: "",
      cascaderValue1: "",
      show2: false,
      fieldValue2: "",
      cascaderValue2: "",
      show3: false,
      fieldValue3: "",
      cascaderValue3: "",
      show4: false,
      fieldValue4: "",
      cascaderValue4: "",
      fieldNames: {
        text: "name",
        value: "code",
        children: "items",
      },
      // 选项列表children代表子选项支持多级嵌套
      options: [
        {
          text: "湖北省",
          value: "420000",
          children: [
            {
              text: "武汉市",
              value: "420200",
              children: [
                {
                  text: "江岸区",
                  value: "420222",
                },
              ],
            },
          ],
        },
        {
          text: "江苏省",
          value: "320000",
          children: [
            {
              text: "南京市",
              value: "320100",
              children: [],
            },
          ],
        },
      ],
      newOptions: [
        {
          name: "湖北省",
          code: "420000",
          items: [
            {
              name: "武汉市",
              code: "420200",
              items: [
                {
                  name: "江岸区",
                  code: "420222",
                },
              ],
            },
          ],
        },
        {
          name: "江苏省",
          code: "320000",
          items: [
            {
              name: "南京市",
              code: "320100",
            },
          ],
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
    // 全部选项选择完毕后会触发finish事件
    onFinish1({ selectedOptions }) {
      this.show1 = false;
      this.fieldValue1 = selectedOptions.map((option) => option.text).join("/");
    },
    onFinish2({ selectedOptions }) {
      this.show2 = false;
      this.fieldValue2 = selectedOptions.map((option) => option.text).join("/");
    },
    onFinish3({ selectedOptions }) {
      this.show3 = false;
      this.fieldValue3 = selectedOptions.map((option) => option.text).join("/");
    },
    onFinish4({ selectedOptions }) {
      this.show4 = false;
      this.fieldValue4 = selectedOptions.map((option) => option.name).join("/");
    },
    onChange({ value }) {
      if (value === this.options[1].children[0].value) {
        setTimeout(() => {
          let option = this.options[1];
          option.children[0].children = [
            {
              text: "玄武区",
              value: "320101",
            },
            {
              text: "秦淮区",
              value: "320102",
            },
          ];
          this.$set(this.options, 1, option);
        }, 500);
      }
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

.content {
  margin-top: 2.75rem;
  padding: 0.625rem;
  background-color: #f8f8f8;
  text-align: left;
}

.item-cell {
  margin-top: 1rem;
  background-clip: border-box;
  border-radius: 0.625rem;
}
</style>
