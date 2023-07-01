<template>
  <div class="calendar">
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
      <div class="content-box">
        <van-cell
          title="选择单个日期"
          :value="singleDate1"
          is-link
          @click="
            show1 = true;
            dateFlag1 = 'single';
          "
        >
        </van-cell>
        <van-cell
          title="选择多个日期"
          :value="multiplDate1"
          is-link
          @click="
            show1 = true;
            dateFlag1 = 'multiple';
          "
        >
        </van-cell>
        <van-cell
          title="选择日期区间"
          :value="rangeDate1"
          is-link
          @click="
            show1 = true;
            dateFlag1 = 'range';
          "
        >
        </van-cell>
        <van-calendar
          v-model="show1"
          :type="dateFlag1"
          @confirm="onConfirm1"
          @select="onSelect"
        />
      </div>
      <br />
      <!-- 快捷选择 -->
      <div style="color: #666666;">快捷选择</div>
      <div class="content-box">
        <van-cell
          title="选择单个日期"
          :value="singleDate2"
          is-link
          @click="
            show2 = true;
            dateFlag2 = 'single';
          "
        >
        </van-cell>
        <van-cell
          title="选择日期区间"
          :value="rangeDate2"
          is-link
          @click="
            show2 = true;
            dateFlag2 = 'range';
          "
        >
        </van-cell>
        <van-calendar
          v-model="show2"
          :type="dateFlag2"
          :show-confirm="false"
          @confirm="onConfirm2"
        />
      </div>
      <br />
      <!-- 自定义日历 -->
      <div style="color: #666666;">自定义日历</div>
      <div class="content-box">
        <van-cell
          title="自定义颜色"
          :value="date3"
          is-link
          @click="show3 = true"
        ></van-cell>
        <van-calendar
          v-model="show3"
          type="range"
          color="#1989fa"
          @confirm="onConfirm3"
        />
        <van-cell
          title="自定义日期范围"
          :value="date4"
          is-link
          @click="show4 = true"
        ></van-cell>
        <van-calendar
          v-model="show4"
          type="range"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="onConfirm4"
        />
        <van-cell
          title="自定义按钮文字"
          :value="date5"
          is-link
          @click="show5 = true"
        ></van-cell>
        <van-calendar
          v-model="show5"
          type="range"
          confirm-text="完成"
          confirm-disabled-text="请选择结束时间"
          @confirm="onConfirm5"
        />
        <van-cell
          title="自定义日期文案"
          :value="date6"
          is-link
          @click="show6 = true"
        ></van-cell>
        <van-calendar
          v-model="show6"
          type="range"
          :formatter="formatter"
          @confirm="onConfirm6"
        />
        <van-cell
          title="自定义弹出位置"
          :value="date7"
          is-link
          @click="show7 = true"
        ></van-cell>
        <van-calendar
          v-model="show7"
          type="range"
          :round="false"
          position="right"
          @confirm="onConfirm7"
        />
        <van-cell
          title="日期区间最大范围"
          :value="date8"
          is-link
          @click="show8 = true"
        ></van-cell>
        <van-calendar
          v-model="show8"
          type="range"
          :max-range="3"
          @confirm="onConfirm8"
        />
        <van-cell
          title="自定义周起始日"
          :value="date9"
          is-link
          @click="show9 = true"
        ></van-cell>
        <van-calendar
          v-model="show9"
          type="range"
          first-day-of-week="3"
          @confirm="onConfirm9"
        />
      </div>
      <br />
      <!-- 其它 -->
      <div style="color: #666666;">其它</div>
      <div class="content-box">
        <van-cell
          title="是否显示月份背景水印"
          :value="date10"
          is-link
          @click="show10 = true"
        ></van-cell>
        <van-calendar
          v-model="show10"
          type="range"
          :show-mark="false"
          @confirm="onConfirm10"
        />
        <van-cell
          title="是否展示日历标题"
          :value="date11"
          is-link
          @click="show11 = true"
        ></van-cell>
        <van-calendar
          v-model="show11"
          type="range"
          :show-title="false"
          @confirm="onConfirm11"
        />
        <van-cell
          title="是否展示日历副标题(年月)"
          :value="date12"
          is-link
          @click="show12 = true"
        ></van-cell>
        <van-calendar
          v-model="show12"
          type="range"
          :show-subtitle="false"
          @confirm="onConfirm12"
        />
        <van-cell
          title="是否为只读状态"
          :value="date13"
          is-link
          @click="show13 = true"
        ></van-cell>
        <van-calendar
          v-model="show13"
          type="range"
          :default-date="defaultRangeDate"
          :readonly="true"
          :show-confirm="false"
        />
      </div>
      <br />
      <!-- 方法 -->
      <div style="color: #666666;">方法</div>
      <div class="content-box">
        <van-cell title="reset" is-link @click="reset()"></van-cell>
        <van-cell
          title="scrollToDate"
          is-link
          @click="scrollToDate()"
        ></van-cell>
      </div>
      <br />
      <van-calendar
        ref="calendar"
        title="日历"
        :poppable="false"
        :show-confirm="false"
        :style="{ height: '500px' }"
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
      show1: false,
      dateFlag1: "",
      singleDate1: "",
      multiplDate1: "",
      rangeDate1: "",
      show2: false,
      dateFlag2: "",
      singleDate2: "",
      multiplDate2: "",
      rangeDate2: "",
      show3: false,
      date3: "",
      show4: false,
      date4: "",
      show5: false,
      date5: "",
      show6: false,
      date6: "",
      show7: false,
      date7: "",
      show8: false,
      date8: "",
      show9: false,
      date9: "",
      show10: false,
      date10: "",
      show11: false,
      date11: "",
      show12: false,
      date12: "",
      show13: false,
      date13: "",
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2022, 12, 31),
      defaultRangeDate: [new Date(2022, 4, 10), new Date(2022, 4, 20)],
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  mounted() {
    console.log(this.$refs.calendar);
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    formatter(day) {
      const date = day.date;
      const currentDate = new Date();
      if (
        date.getFullYear() == currentDate.getFullYear() &&
        date.getMonth() == currentDate.getMonth() &&
        date.getDate() == currentDate.getDate()
      ) {
        day.text = "今天";
      }
      if (date.getMonth() + 1 === 5) {
        if (date.getDate() === 1) {
          day.topInfo = "劳动节";
        } else if (date.getDate() === 4) {
          day.topInfo = "青年节";
        }
      }
      if (day.type === "start") {
        day.bottomInfo = "进入";
      } else if (day.type === "end") {
        day.bottomInfo = "离开";
      }
      return day;
    },
    reset() {
      let calendar = this.$refs.calendar;
      calendar.reset(new Date(2022, 6, 10));
    },
    scrollToDate() {
      let calendar = this.$refs.calendar;
      calendar.scrollToDate(new Date(2022, 6, 10));
    },
    onSelect(date) {
      console.log("date:", date);
    },
    onConfirm1(date) {
      this.show1 = false;
      if (this.dateFlag1 === "single") {
        this.singleDate1 = this.formatDate(date);
      } else if (this.dateFlag1 === "multiple") {
        const tempDate = date.map((d) => {
          return this.formatDate(d);
        });
        this.multiplDate1 = tempDate.sort().join(",");
      } else if (this.dateFlag1 === "range") {
        const [start, end] = date;
        this.rangeDate1 = this.formatDate(start) + "~" + this.formatDate(end);
      }
    },
    onConfirm2(date) {
      this.show2 = false;
      if (this.dateFlag2 === "single") {
        this.singleDate2 = this.formatDate(date);
      } else if (this.dateFlag2 === "multiple") {
        const tempDate = date.map((d) => {
          return this.formatDate(d);
        });
        this.multiplDate2 = tempDate.sort().join(",");
      } else if (this.dateFlag2 === "range") {
        const [start, end] = date;
        this.rangeDate2 = this.formatDate(start) + "~" + this.formatDate(end);
      }
    },
    onConfirm3(date) {
      this.show3 = false;
      const [start, end] = date;
      this.date3 = this.formatDate(start) + "~" + this.formatDate(end);
    },
    onConfirm4(date) {
      this.show4 = false;
      const [start, end] = date;
      this.date4 = this.formatDate(start) + "~" + this.formatDate(end);
    },
    onConfirm5(date) {
      this.show5 = false;
      const [start, end] = date;
      this.date5 = this.formatDate(start) + "~" + this.formatDate(end);
    },
    onConfirm6(date) {
      this.show6 = false;
      const [start, end] = date;
      this.date6 = this.formatDate(start) + "~" + this.formatDate(end);
    },
    onConfirm7(date) {
      this.show7 = false;
      const [start, end] = date;
      this.date7 = this.formatDate(start) + "~" + this.formatDate(end);
    },
    onConfirm8(date) {
      this.show8 = false;
      const [start, end] = date;
      this.date8 = this.formatDate(start) + "~" + this.formatDate(end);
    },
    onConfirm9(date) {
      this.show9 = false;
      const [start, end] = date;
      this.date9 = this.formatDate(start) + "~" + this.formatDate(end);
    },
    onConfirm10(date) {
      this.show10 = false;
      const [start, end] = date;
      this.date10 = this.formatDate(start) + "~" + this.formatDate(end);
    },
    onConfirm11(date) {
      this.show11 = false;
      const [start, end] = date;
      this.date11 = this.formatDate(start) + "~" + this.formatDate(end);
    },
    onConfirm12(date) {
      this.show12 = false;
      const [start, end] = date;
      this.date12 = this.formatDate(start) + "~" + this.formatDate(end);
    },
    onConfirm13(date) {
      this.show13 = false;
      const [start, end] = date;
      this.date13 = this.formatDate(start) + "~" + this.formatDate(end);
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

.content-box {
  margin-top: 0.625rem;
  padding: 0.625rem;
  background-color: white;
  border-radius: 0.625rem;
}
</style>
