<template>
  <div class="datetime-picker">
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
      <van-field
        v-model="dateValue1"
        class="item-cell"
        label="年月日"
        placeholder="请选择年月日"
        is-link
        readonly
        @click="show1 = true"
      />
      <van-popup v-model="show1" position="bottom" round>
        <van-datetime-picker
          v-model="selectedDate1"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
          @cancel="show1 = false"
          @confirm="onConfirm1"
        />
      </van-popup>
      <van-field
        v-model="dateValue2"
        class="item-cell"
        label="年月"
        placeholder="请选择年月"
        is-link
        readonly
        @click="show2 = true"
      />
      <van-popup v-model="show2" position="bottom" round>
        <van-datetime-picker
          v-model="selectedDate2"
          type="year-month"
          title="选择年月"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
          @cancel="show2 = false"
          @confirm="onConfirm2"
        />
      </van-popup>
      <van-field
        v-model="dateValue3"
        class="item-cell"
        label="月日"
        placeholder="请选择月日"
        is-link
        readonly
        @click="show3 = true"
      />
      <van-popup v-model="show3" position="bottom" round>
        <van-datetime-picker
          v-model="selectedDate3"
          type="month-day"
          title="选择月日"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
          @cancel="show3 = false"
          @confirm="onConfirm3"
        />
      </van-popup>
      <van-field
        v-model="dateValue4"
        class="item-cell"
        label="时间"
        placeholder="请选择时间"
        is-link
        readonly
        @click="show4 = true"
      />
      <van-popup v-model="show4" position="bottom" round>
        <van-datetime-picker
          v-model="selectedDate4"
          type="time"
          title="选择时间"
          :min-hour="minHour"
          :max-hour="maxHour"
          :formatter="formatter"
          @cancel="show4 = false"
          @confirm="onConfirm4"
        />
      </van-popup>
      <van-field
        v-model="dateValue5"
        class="item-cell"
        label="完整时间"
        placeholder="请选择完整时间"
        is-link
        readonly
        @click="show5 = true"
      />
      <van-popup v-model="show5" position="bottom" round>
        <van-datetime-picker
          v-model="selectedDate5"
          type="datetime"
          title="选择完整时间"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
          @cancel="show5 = false"
          @confirm="onConfirm5"
        />
      </van-popup>
      <van-field
        v-model="dateValue6"
        class="item-cell"
        label="年月日小时"
        placeholder="请选择年月日小时"
        is-link
        readonly
        @click="show6 = true"
      />
      <van-popup v-model="show6" position="bottom" round>
        <van-datetime-picker
          v-model="selectedDate6"
          type="datehour"
          title="选择年月日小时"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
          @cancel="show6 = false"
          @confirm="onConfirm6"
        />
      </van-popup>
      <br />
      <!-- 选项过滤器 -->
      <div style="color: #666666">选项过滤器</div>
      <van-field
        v-model="dateValue7"
        class="item-cell"
        label="时间"
        placeholder="请选择时间"
        is-link
        readonly
        @click="show7 = true"
      />
      <van-popup v-model="show7" position="bottom" round>
        <van-datetime-picker
          v-model="selectedDate7"
          type="time"
          title="选择时间"
          :min-date="minDate"
          :max-date="maxDate"
          :filter="filter"
          @cancel="show7 = false"
          @confirm="onConfirm7"
        />
      </van-popup>
      <br />
      <!-- 自定义列排序 -->
      <div style="color: #666666">自定义列排序</div>
      <van-field
        v-model="dateValue8"
        class="item-cell"
        label="年月日"
        placeholder="请选择年月日"
        is-link
        readonly
        @click="show8 = true"
      />
      <van-popup v-model="show8" position="bottom" round>
        <van-datetime-picker
          v-model="selectedDate8"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          :columns-order="['month', 'day', 'year']"
          @cancel="show8 = false"
          @confirm="onConfirm8"
        />
      </van-popup>
      <br />
      <!-- 其它 -->
      <div style="color: #666666">其它</div>
      <van-field
        v-model="dateValue9"
        class="item-cell"
        label="年月日"
        placeholder="请选择年月日"
        is-link
        readonly
        @click="show9 = true"
      />
      <van-popup v-model="show9" position="bottom" round>
        <van-datetime-picker
          v-model="selectedDate9"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          item-height="60px"
          visible-item-count="5"
          swipe-duration="500"
          @cancel="show9 = false"
          @confirm="onConfirm9"
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
      dateValue1: "",
      selectedDate1: new Date(),
      show2: false,
      dateValue2: "",
      selectedDate2: new Date(),
      show3: false,
      dateValue3: "",
      selectedDate3: new Date(),
      show4: false,
      dateValue4: "",
      selectedDate4: "12:00",
      show5: false,
      dateValue5: "",
      selectedDate5: new Date(),
      show6: false,
      dateValue6: "",
      selectedDate6: new Date(),
      show7: false,
      dateValue7: "",
      selectedDate7: "12:00",
      show8: false,
      dateValue8: "",
      selectedDate8: new Date(),
      show9: false,
      dateValue9: "",
      selectedDate9: new Date(),
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2022, 12, 31),
      minHour: 8,
      maxHour: 18,
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    onConfirm1(date) {
      this.show1 = false;
      this.selectedDate1 = date;
      this.dateValue1 = this.formatDate(date, "yyyy-MM-dd");
    },
    onConfirm2(date) {
      this.show2 = false;
      this.selectedDate2 = date;
      this.dateValue2 = this.formatDate(date, "yyyy-MM");
    },
    onConfirm3(date) {
      this.show3 = false;
      this.selectedDate3 = date;
      this.dateValue3 = this.formatDate(date, "MM-dd");
    },
    onConfirm4(dateValue) {
      this.show4 = false;
      this.selectedDate4 = dateValue;
      this.dateValue4 = dateValue;
    },
    onConfirm5(date) {
      this.show5 = false;
      this.selectedDate5 = date;
      this.dateValue5 = this.formatDate(date, "yyyy-MM-dd HH:mm");
    },
    onConfirm6(date) {
      this.show6 = false;
      this.selectedDate6 = date;
      this.dateValue6 = this.formatDate(date, "yyyy-MM-dd HH");
    },
    onConfirm7(dateValue) {
      this.show7 = false;
      this.selectedDate7 = dateValue;
      this.dateValue7 = dateValue;
    },
    onConfirm8(date) {
      this.show8 = false;
      this.selectedDate8 = date;
      this.dateValue8 = this.formatDate(date, "yyyy-MM-dd");
    },
    onConfirm9(date) {
      this.show9 = false;
      this.selectedDate9 = date;
      this.dateValue9 = this.formatDate(date, "yyyy-MM-dd");
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
    formatter(type, option) {
      if (type === "year") {
        return `${option}年`;
      } else if (type === "month") {
        return `${option}月`;
      } else if (type === "day") {
        return `${option}日`;
      } else if (type === "hour") {
        return `${option}时`;
      } else if (type === "minute") {
        return `${option}分`;
      }
      return option;
    },
    filter(type, options) {
      if (type === "minute") {
        return options.filter((option) => option % 5 === 0);
      }
      return options;
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
