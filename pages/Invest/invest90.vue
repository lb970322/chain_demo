<template>
	<view class="invest90">
		<!-- 投资90天资料展示 -->
		<view class="invest90-content">
			<view class="invest90-box">
				<view class="invest90-bx1">
					<view class="invest90-bx2">
						<text>0.00\n</text>
						<text>总投资</text>
					</view>
				</view>
			</view>

			<view class="invest90-box">
				<view class="invest90-bx1">
					<view class="invest90-bx2">
						<text>0\n</text>
						<text>总收益</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="pay-title">
			<text>支付方式</text>
			<view class="padding">
				<button class="cu-btn block bg-blue margin-tb-sm lg" disabled type="">季度合约</button>
			</view>
		</view>
		
		<view class="invest90-num">
			<text>数量</text>
			<view class="cu-form-group margin-top">
				<input placeholder="请输入投资数量" name="input"></input>
			</view>
			<view class="margin-top" style="text-align: center;">
				<button class="cu-btn bg-blue lg invest-button">立刻投资</button>
			</view>
		</view>
	</view>
</template>

<script></script>

<style>
.invest90-content {
	background-color: #39b54a;
	width: 100%;
	height: 250rpx;
	border-radius: 10rpx;
}
.invest90-box {
	float: left;
	width: 50%;
	height: 100%;
}
.invest90-bx1 {
	height: 50%;
	width: 100%;
}
.invest90-bx2 {
	text-align: center;
	color: #ffffff;
	line-height: 100rpx;
}
.invest-button{
	width: 95%;
}
</style>
