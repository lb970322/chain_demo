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
		
		<view class="user-title">
			<text>我的资产</text>
		</view>
		
		<!-- 资产展示页 -->
		<view class="bi-card">
			<view class="b-card">
				<view class="logo-img">
					<image src="../../static/logo.png" mode=""></image>
				</view>
				
				<view class="card-title">
					<text>FVT\n</text>
					<text class="b-mon">$0</text>
				</view>
				
				<view class="b-mon-r">
					<text>0</text>
				</view>
			</view>
			
			<view class="b-card">
				<view class="logo-img">
					<image src="../../static/logo.png" mode=""></image>
				</view>
				
				<view class="card-title">
					<text>ETH\n</text>
					<text class="b-mon">$0</text>
				</view>
				
				<view class="b-mon-r">
					<text>0</text>
				</view>
			</view>
			
			<view class="b-card">
				<view class="logo-img">
					<image src="../../static/logo.png" mode=""></image>
				</view>
				
				<view class="card-title">
					<text>BTC\n</text>
					<text class="b-mon">$0</text>
				</view>
				
				<view class="b-mon-r">
					<text>0</text>
				</view>
			</view>
			
			<view class="b-card">
				<view class="logo-img">
					<image src="../../static/logo.png" mode=""></image>
				</view>
				
				<view class="card-title">
					<text>USDT\n</text>
					<text class="b-mon">$0</text>
				</view>
				
				<view class="b-mon-r">
					<text>0</text>
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
.bi-card{
	margin-top: 30rpx;
}
.b-card{
	width: 95%;
	height: 130rpx;
	margin-left: 2.5%;
	background-color: #39B54A;
	border-radius: 10rpx;
	margin-top: 20rpx;
}

.logo-img{
	float: left;
	width: 80rpx;
	height: 80rpx;
	margin-top: 25rpx;
	margin-left: 3%;
}
.logo-img image{
	width: 100%;
	height: 100%;
}
.card-title{
	float: left;
	margin-left: 3%;
	margin-top: 25rpx;
	font-size: 32rpx;
	color: #FFFFFF;
	font-weight: 400;
}
.b-mon{
	color: #555555;
}
.b-mon-r{
	float: right;
	color: #FFFFFF;
	line-height: 130rpx;
	font-size: 64rpx;
	margin-right: 3%;
}
</style>
