<template>
	<div id="app">
		<transition :name="transitionName">
			<keep-alive v-if="$route.meta.keepAlive">
				<router-view class="router"></router-view>
			</keep-alive>
			<router-view class="router" v-else></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: "App",
		mixins: [],
		components: {},
		props: {},
		data() {
			return {
				transitionName: "",
			};
		},
		computed: {},
		watch: {
			$route() {
				if (this.$router.isLeft) {
					this.transitionName = "slideLeft";
				}
				if (this.$router.isRight) {
					this.transitionName = "slideRight";
				}
			}
		},
		created() {},
		mounted() {},
		destroyed() {},
		methods: {},
	}
</script>

<style>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #000000;
	}

	.router {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #f8f8f8;
		transition: all 0.5s ease;
		-webkit-transition: all 0.5s ease;
		-moz-transition: all 0.5s ease;
	}

	.slideLeft-enter,
	.slideRight-leave-active {
		opacity: 1;
		transform: translate3d(90% 0, 0);
		-webkit-transform: translate3d(90%, 0, 0);
		-moz-transform: translate3d(90%, 0, 0);
	}

	.slideLeft-leave-active,
	.slideRight-enter {
		opacity: 1;
		transform: translate3d(-90% 0, 0);
		-webkit-transform: translate3d(-90%, 0, 0);
		-moz-transform: translate3d(-90%, 0, 0);
	}
</style>
