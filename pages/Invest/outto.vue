<template>
	<view class="outto">
		<!-- 转出卡片展示 -->
		<view class="outto-content">
			<view class="outto-box">
				<view class="outto-bx1">
					<view class="outto-bx2">
						<text>0.00\n</text>
						<text>总投资</text>
					</view>
				</view>
			</view>
			
			<view class="outto-box">
				<view class="outto-bx1">
					<view class="outto-bx2">
						<text>0\n</text>
						<text>总收益</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="outto-title">
			<text>数量</text>
			<view class="cu-form-group margin-top">
				<input placeholder="从资产转入日活宝" name="input"></input>
			</view>
			<view class="margin-top">
				<button class="cu-btn bg-blue lg outto-button">转出</button>
			</view>
		</view>
		
	</view>
</template>

<script>
</script>

<style>
.outto-content{
	background-color: #39B54A;
	width: 100%;
	height: 250rpx;
	border-radius: 10rpx;
}
.outto-box{
	float: left;
	width: 50%;
	height: 100%;
}
.outto-bx1{
	height: 50%;
	width: 100%;
}
.outto-bx2{
	text-align: center;
	color: #FFFFFF;
	line-height: 100rpx;
}
.outto-button{
	width: 100%;
}
</style>
