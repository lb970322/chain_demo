<template>
	<view class="convert">
		<!-- 选择币种 -->
		<view class="cu-form-group margin-top convert-width">
			<picker @change="PickerChange" :value="index" :range="picker">
				<view class="picker convert-text">
					{{index>-1?picker[index]:'FVT'}}
				</view>
			</picker>
		</view>
		
		<view class="cu-form-group margin-top convert-width">
			<picker @change="PickerChanget" :value="index" :range="pickert">
				<view class="picker convert-text">
					{{index>-1?pickert[index]:'BTH'}}
				</view>
			</picker>
		</view>
		
		<!-- 输入兑换数量 -->
		<view class="cu-form-group convert-width convert-input">
			<input placeholder="汇出数量" name="input"></input>
		</view>
		
		<view class="cu-form-group convert-width convert-input">
			<input placeholder="收到数量" name="input"></input>
		</view>
		
		<!-- 汇率手续费 -->
		<view class="convert-font convert-top">
			<text>汇率：</text>
		</view>
		<view class="convert-font">
			<text class="convert-font-text">1FVT=0FVT</text>
		</view>
		
		<view class="convert-font convert-top">
			<text>手续费：</text>
		</view>
		<view class="convert-font">
			<text class="convert-font-text">0.2%FVT</text>
		</view>
		
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-blue lg">确认</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: -1,
				picker: ['FVT', 'BTH', 'NNN'],
				pickert: ['BTH', 'FVT', 'SSS'],
			}
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
			PickerChanget(e) {
				this.index = e.detail.value
			},
		}
		
		
		
		
		
	}
</script>

<style>
.convert .convert-width picker .convert-text{
	text-align: center;
}
.convert-width {
	width: 44%;
	float: left;
	margin-left: 3%;
	margin-right: 3%;
}
.convert-input{
	margin-top: 20rpx;
}
.convert-font{
	margin-left: 3%;
	margin-top: 20rpx;
}
.convert-font-text{
	font-size: 50rpx;
}
.convert-top{
	margin-top: 30rpx;
}
</style>
