<template>
  <div class="form">
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
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
      <!-- 校验规则 -->
      <div style="color: #666666; margin: 0.5rem 0">校验规则</div>
      <van-form validate-first @failed="onFailed">
        <!-- 通过pattern进行正则校验 -->
        <van-field
          v-model="value1"
          name="pattern"
          placeholder="正则校验"
          :rules="[{ pattern, message: '请输入正确内容' }]"
        />
        <!-- 通过validator进行函数校验 -->
        <van-field
          v-model="value2"
          name="validator"
          placeholder="函数校验"
          :rules="[{ validator, message: '请输入正确内容' }]"
        />
        <!-- 通过validator进行异步函数校验 -->
        <van-field
          v-model="value3"
          name="asyncValidator"
          placeholder="异步函数校验"
          :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
      <!-- 表单项类型 -->
      <div style="color: #666666; margin: 0.5rem 0">表单项类型</div>
      <van-form @submit="onSubmit">
        <van-field name="switch" label="开关">
          <template #input>
            <van-switch v-model="switchChecked" size="20" />
          </template>
        </van-field>
        <van-field name="checkbox" label="复选框">
          <template #input>
            <van-checkbox v-model="checkbox" shape="square" />
          </template>
        </van-field>
        <van-field name="checkboxGroup" label="复选框组">
          <template #input>
            <van-checkbox-group v-model="checkboxGroup" direction="horizontal">
              <van-checkbox name="1" shape="square">复选框 1</van-checkbox>
              <van-checkbox name="2" shape="square">复选框 2</van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>
        <van-field name="radio" label="单选框">
          <template #input>
            <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="1">单选框 1</van-radio>
              <van-radio name="2">单选框 2</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field name="stepper" label="步进器">
          <template #input>
            <van-stepper v-model="stepper" />
          </template>
        </van-field>
        <van-field name="rate" label="评分">
          <template #input>
            <van-rate v-model="rate" />
          </template>
        </van-field>
        <van-field name="slider" label="滑块">
          <template #input>
            <van-slider v-model="slider" />
          </template>
        </van-field>
        <van-field name="uploader" label="文件上传">
          <template #input>
            <van-uploader v-model="uploader" />
          </template>
        </van-field>
        <van-field
          readonly
          clickable
          name="picker"
          :value="value4"
          label="选择器"
          placeholder="点击选择城市"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom" round>
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirm1"
            @cancel="showPicker = false"
          />
        </van-popup>
        <van-field
          readonly
          clickable
          name="datetimePicker"
          :value="value5"
          label="时间选择"
          placeholder="点击选择时间"
          @click="showDateTimePicker = true"
        />
        <van-popup v-model="showDateTimePicker" position="bottom" round>
          <van-datetime-picker
            type="datetime"
            @confirm="onConfirm2"
            @cancel="showDateTimePicker = false"
          />
        </van-popup>
        <van-field
          readonly
          clickable
          name="area"
          :value="value6"
          label="地区选择"
          placeholder="点击选择省市区"
          @click="showArea = true"
        />
        <van-popup v-model="showArea" position="bottom" round>
          <van-area
            :area-list="areaList"
            @confirm="onConfirm3"
            @cancel="showArea = false"
          />
        </van-popup>
        <van-field
          readonly
          clickable
          name="calendar"
          :value="value7"
          label="日历"
          placeholder="点击选择日期"
          @click="showCalendar = true"
        />
        <van-calendar v-model="showCalendar" @confirm="onConfirm4" />
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      username: "",
      password: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      pattern: /\d{6}/,
      switchChecked: false,
      checkbox: false,
      checkboxGroup: [],
      radio: "1",
      stepper: 1,
      rate: 3,
      slider: 30,
      uploader: [
        {
          url: "https://img01.yzcdn.cn/vant/leaf.jpg",
        },
      ],
      showPicker: false,
      showDateTimePicker: false,
      showArea: false,
      showCalendar: false,
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
        },
        city_list: {
          110100: "北京市",
          120100: "天津市",
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
        },
      },
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  mounted() {},
  methods: {
    goBack() {
      this.$router.goBack();
    },
    onSubmit(values) {
      let messages = [];
      Object.keys(values).forEach((key) =>
        messages.push(key + ":" + values[key])
      );
      const message = messages.join(",");
      this.$toast(message);
    },
    // 校验函数返回true表示校验通过 false表示不通过
    validator(val) {
      return /1\d{10}/.test(val);
    },
    // 异步校验函数返回Promise
    asyncValidator(val) {
      return new Promise((resolve) => {
        this.$toast.loading("验证中...");
        setTimeout(() => {
          this.$toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onFailed(error) {
      if (error.errors && error.errors.length > 0) {
        this.$toast(error.errors[0].message);
      }
    },
    onConfirm1(value) {
      this.showPicker = false;
      this.value4 = value;
    },
    onConfirm2(date) {
      this.showDateTimePicker = false;
      this.value5 = this.formatDate(date, "yyyy-MM-dd HH:mm");
    },
    onConfirm3(areas) {
      this.showArea = false;
      this.value6 = areas
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("");
    },
    onConfirm4(date) {
      this.showCalendar = false;
      this.value7 = this.formatDate(date, "yyyy-MM-dd");
    },
    formatDate(date, format) {
      if (format == "yyyy-MM-dd") {
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
      } else if (format == "yyyy-MM") {
        return `${date.getFullYear()}/${date.getMonth() + 1}`;
      } else if (format == "MM-dd") {
        return `${date.getMonth() + 1}/${date.getDate()}`;
      } else if (format == "yyyy-MM-dd HH:mm") {
        return `${date.getFullYear()}/${
          date.getMonth() + 1
        }/${date.getDate()} ${date.getHours()}/${date.getMinutes()}`;
      } else if (format == "yyyy-MM-dd HH") {
        return `${date.getFullYear()}/${
          date.getMonth() + 1
        }/${date.getDate()} ${date.getHours()}`;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~styles/common.less";

.item-wrapper {
  border-radius: 1rem;
}
</style>
