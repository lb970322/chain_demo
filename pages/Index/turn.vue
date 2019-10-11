<template>
	<view class="turn">
		<view class="turn-font">
			<text>币种</text>
			<view class="cu-form-group margin-top turn-width">
				<!-- <view class="title">普通选择</view> -->
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker turn-text">
						{{index>-1?picker[index]:'FVT'}}
					</view>
				</picker>
			</view>
		</view>
		
		<view class="turn-font">
			<text>数量</text>
		</view>
		<view class="turn-font">
			<view class="cu-form-group convert-width convert-input">
				<input placeholder="请输入转账数量" name="input"></input>
			</view>
		</view>
		
		<view class="turn-font">
			<text>会员UID</text>
		</view>
		<view class="turn-font">
			<view class="cu-form-group convert-width convert-input">
				<input placeholder="请输入会员UID" name="input"></input>
			</view>
		</view>
		
		<view class="turn-font">
			<text>支付密码</text>
		</view>
		<view class="turn-font">
			<view class="cu-form-group convert-width convert-input">
				<input placeholder="请输入支付密码" name="input"></input>
			</view>
		</view>
		
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-blue lg">互转</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: -1,
				picker: ['FVT', 'ETH', 'BTC', 'USDT'],
			}
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
		}
		
		
	}
</script>

<style>
.turn-font{
	margin-top: 3%;
	margin-left: 3%;
}
.turn-width{
	margin-right: 3%;
}
.turn-width picker .turn-text{
	text-align: left;
}
</style>
