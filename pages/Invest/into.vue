<template>
	<view class="into">
		<!-- 转入卡片展示 -->
		<view class="into-content">
			<view class="into-box">
				<view class="into-bx1">
					<view class="into-bx2">
						<text>0.00\n</text>
						<text>总投资</text>
					</view>
				</view>
			</view>
			
			<view class="into-box">
				<view class="into-bx1">
					<view class="into-bx2">
						<text>0\n</text>
						<text>总收益</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="into-title">
			<text>数量</text>
			<view class="cu-form-group margin-top">
				<input placeholder="从资产转入日活宝" name="input"></input>
			</view>
			<view class="margin-top">
				<button class="cu-btn bg-blue lg into-button">转入</button>
			</view>
		</view>
		
	</view>
</template>

<script>
</script>

<style>
.into-content{
	background-color: #39B54A;
	width: 100%;
	height: 250rpx;
	border-radius: 10rpx;
}
.into-box{
	float: left;
	width: 50%;
	height: 100%;
}
.into-bx1{
	height: 50%;
	width: 100%;
}
.into-bx2{
	text-align: center;
	color: #FFFFFF;
	line-height: 100rpx;
}
.into-button{
	width: 100%;
}
</style>
