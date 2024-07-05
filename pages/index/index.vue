<template>
	<view class="container">
		<view class="top_box">
			<view class="top_back" :style="{backgroundColor:boxColor}">

			</view>
			<view class="banner">
				<uni-swiper-dot class="uni-swiper-dot-box" :info="info" :current="current" mode="dot">
					<swiper class="swiper-box" @change="swiperChange">
						<swiper-item v-for="(item, index) in info" :key="index">
							<image :src="item" mode="aspectFit"></image>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				boxColor:"rgb(255,85,127)",
				boxColorLs:["rgb(255,85,127)","rgb(255,170,0)",
				"rgb(170,0,0)","rgb(0,170,127)"],
				info: ["./1.jpg", "./2.jpg", "./3.jpg", "./4.jpg"],
				current:0,
			}
		},
		methods: {
			swiperChange(e){
				this.current = e.detail.current;
				this.boxColor = this.boxColorLs[this.current];
			}
		}
	}
</script>

<style lang="scss">
	.container {
		font-size: 14px;
		line-height: 24px;
	}

	.top_box {
		.top_back {
			height: 400upx;
			width: 100%;
			background-color: $uni-primary;
		}

		.banner {
			text-align: center;
			margin-top: -300upx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>