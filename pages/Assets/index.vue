<template>
	<view class="assets">
		<!-- 社区卡片展示 -->
		<view class="assets-content">
			<view class="assets-box">
				<view class="assets-bx1">
					<view class="assets-bx2">
						<text>累计推荐社区\n</text>
						<text>0</text>
					</view>
				</view>
				<view class="assets-bx1">
					<view class="assets-bx2">
						<text>社区日活宝\n</text>
						<text>0.00</text>
					</view>
				</view>
			</view>
			
			<view class="assets-box">
				<view class="assets-bx1">
					<view class="assets-bx2">
						<text>总业绩\n</text>
						<text>0.00</text>
					</view>
				</view>		
				<view class="assets-bx1">
					<view class="assets-bx2">
						<text>社区合约宝\n</text>
						<text>0.00</text>
					</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
</script>

<style>
.assets-content{
	background-color: #39B54A;
	width: 100%;
	height: 250rpx;
	border-radius: 10rpx;
}
.assets-box{
	float: left;
	width: 50%;
	height: 100%;
}
.assets-bx1{
	height: 50%;
	width: 100%;
}
.assets-bx2{
	text-align: center;
	color: #FFFFFF;
}
</style>
