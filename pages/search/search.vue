<template>
	<view>
		<view class="">
			<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" placeholder="请输入商品">
			</uni-search-bar>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchValue:""
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>