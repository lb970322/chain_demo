<template>
	<view class="user">
		<!-- 资产卡片展示 -->
		<view class="user-content">
			<view class="user-box">
				<view class="user-bx1">
					<view class="user-bx2">
						<text>个人总收益\n</text>
						<text>0</text>
					</view>
				</view>
				<view class="user-bx1">
					<view class="user-bx2">
						<text>日活宝\n</text>
						<text>0.00</text>
					</view>
				</view>
			</view>
			
			<view class="user-box">
				<view class="user-bx1">
					<view class="user-bx2">
						<text>今日收益\n</text>
						<text>0</text>
					</view>
				</view>		
				<view class="user-bx1">
					<view class="user-bx2">
						<text>合约宝\n</text>
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
.user-content{
	background-color: #39B54A;
	width: 100%;
	height: 250rpx;
	border-radius: 10rpx;
}
.user-box{
	float: left;
	width: 50%;
	height: 100%;
}
.user-bx1{
	height: 50%;
	width: 100%;
}
.user-bx2{
	text-align: center;
	color: #FFFFFF;
}
</style>
