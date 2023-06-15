<template>
	<div class="icon">
		<van-nav-bar style="background-color: lightblue;" left-arrow fixed border safe-area-inset-top :title="title"
			@click-left="goBack()">
		</van-nav-bar>
		<div class="content">
			<van-tabs>
				<van-tab v-for="(tab, index) in tabs" :key="index" :title="tab">
					<div class="tab-content" v-if="index === 0">
						<!-- 基础用法 -->
						<div style="color: #666666;">基础用法</div>
						<van-icon class="item-icon" name="chat-o" />
						<van-icon class="item-icon" name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
						<br /><br />
						<!-- 徽标提示 -->
						<div style="color: #666666;">徽标提示</div>
						<van-icon class="item-icon" name="chat-o" dot />
						<van-icon class="item-icon" name="chat-o" badge="9" />
						<van-icon class="item-icon" name="chat-o" badge="99+" />
						<br /><br />
						<!-- 图标颜色 -->
						<div style="color: #666666;">图标颜色</div>
						<van-icon class="item-icon" name="cart-o" color="#1989ff" />
						<van-icon class="item-icon" name="fire-o" color="#ffaa00" />
						<br /><br />
						<!-- 图标大小 -->
						<div style="color: #666666;">图标大小</div>
						<van-icon class="item-icon" name="chat-o" size="26px" @click="onClick()" />
						<van-icon class="item-icon" name="chat-o" size="3rem" />
					</div>
					<div class="tab-content" v-if="index === 1">
						<van-col class="item-col" v-for="(name, index) in basics" :key="index" span="8"
							@click="onClick()">
							<van-icon :name="name" size="30px" />
							<div class="item-name">{{ name }}</div>
						</van-col>
					</div>
					<div class="tab-content" v-if="index === 2">
						<van-col class="item-col" v-for="(name, index) in outlines" :key="index" span="8">
							<van-icon :name="name" size="30px" />
							<div class="item-name">{{ name }}</div>
						</van-col>
					</div>
					<div class="tab-content" v-if="index === 3">
						<van-col class="item-col" v-for="(name, index) in filleds" :key="index" span="8">
							<van-icon :name="name" size="30px" />
							<div class="item-name">{{ name }}</div>
						</van-col>
					</div>
				</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				title: "",
				tabs: ["用法示例", "基础图标", "线框风格", "实底风格"],
				basics: ["arrow", "arrow-left", "arrow-up", "arrow-down", "success", "cross", "plus", "minus", "fail",
					"circle"
				],
				outlines: ["location-o", "like-o", "star-o", "phone-o", "setting-o", "fire-o", "coupon-o", "cart-o",
					"shopping-cart-o", "cart-circle-o", "friends-o", "comment-o", "gem-o", "gift-o", "point-gift-o",
					"send-gift-o", "service-o", "bag-o", "todo-list-o", "balance-list-o", "close", "clock-o",
					"question-o", "passed", "add-o", "gold-coin-o", "info-o", "play-circle-o", "pause-circle-o",
					"stop-circle-o", "warning-o", "phone-circle-o", "music-o", "smile-o", "thumb-circle-o",
					"comment-circle-o", "browsing-history-o", "underway-o", "more-o", "video-o", "shop-o",
					"shop-collect-o", "share-o", "chat-o", "smile-comment-o", "vip-card-o", "award-o", "diamond-o",
					"volume-o", "cluster-o", "wap-home-o", "photo-o", "gift-card-o", "expand-o", "medal-o",
					"good-job-o", "manager-o", "label-o", "bookmark-o", "bill-o", "hot-o", "hot-sale-o", "new-o",
					"new-arrival-o", "goods-collect-o", "eye-o", "delete-o", "font-o", "balance-o", "refund-o",
					"birthday-cake-o", "user-o", "orders-o", "tv-o", "envelop-o", "flag-o", "flower-o", "filter-o",
					"bar-chart-o", "chart-trending-o", "brush-o", "bullhorn-o", "hotel-o", "cashier-o", "newspaper-o",
					"warn-o", "notes-o", "calendar-o", "bulb-o", "user-circle-o", "desktop-o", "apps-o", "home-o",
					"back-top", "search", "points", "edit", "qr", "qr-invalid", "closed-eye", "down", "scan", "revoke",
					"free-postage", "certificate", "logistics", "contact", "cash-back-record", "after-sale",
					"exchange", "upgrade", "ellipsis", "description", "records", "sign", "completed", "failure",
					"ecard-pay", "peer-pay", "balance-pay", "credit-pay", "debit-pay", "cash-on-deliver", "other-pay",
					"tosend", "pending-payment", "paid", "aim", "discount", "idcard", "replay", "shrink", "shield-o",
					"guide-o"
				],
				filleds: ["location", "like", "star", "phone", "setting", "fire", "coupon", "cart", "shopping-cart",
					"cart-circle", "friends", "comment", "gem", "gift", "point-gift", "send-gift", "service", "bag",
					"todo-list", "balance-list", "clear", "clock", "question", "checked", "add", "gold-coin", "info",
					"play-circle", "pause-circle", "stop-circle", "warning", "phone-circle", "music", "smile",
					"thumb-circle", "comment-circle", "browsing-history", "underway", "more", "video", "shop",
					"shop-collect", "share", "chat", "smile-comment", "vip-card", "award", "diamond", "volume",
					"cluster", "wap-home", "photo", "gift-card", "expand", "medal", "good-job", "manager", "label",
					"bookmark", "bill", "hot", "hot-sale", "new", "new-arrival", "goods-collect", "eye", "delete",
					"font", "wechat", "wechat-pay", "alipay", "photograph", "youzan-shield", "umbrella-circle", "bell",
					"printer", "map-marked", "card", "add-square", "live", "lock", "audio", "graphic", "column",
					"invitation", "play", "pause", "stop", "weapp-nav", "ascending", "descending", "bars", "wap-nav",
					"enlarge", "photo-fail", "sort"
				]
			};
		},
		created() {
			this.title = this.$route.query.title;
		},
		methods: {
			goBack() {
				this.$router.goBack();
			},
			onClick() {
				this.$toast("icon被点击");
			},
		}
	}
</script>

<style lang="less" scoped>
	.content {
		margin-top: 2.75rem;
		padding: 0.625rem;
		background-color: #f8f8f8;
		text-align: left;
	}

	.tab-content {
		width: auto;
		margin: 0.625rem;
		padding: 0.625rem;
		background-color: white;
		border-radius: 0.75rem;
	}

	.item-icon {
		margin-top: 1rem;
		margin-left: 1rem;
	}

	.item-col {
		padding: 0.625rem;
		display: inline-block;
		float: none;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
	}
</style>
