<template>
	<view class="invest">
		<scroll-view scroll-x class="bg-white nav text-left">
			<view class="cu-item" :class="index == TabCur ? 'text-blue cur' : ''" v-for="(item, index) in 2" :key="index" @tap="tabSelect" :data-id="index">
				{{Name[index]}}
			</view>
			
		</scroll-view>
		
		<!-- 日活宝 -->
		<view class="invest-content" :class="classDisplay1">
			<view class="invest-content1">
				<view class="invest-box">
					<view class="invest-box1">
						<text>普通社区</text>
					</view>
					<view class="invest-box1">
						<view class="invest-box2">
							<text>总投资\n</text>
							<text>0.00</text>
						</view>
						<view class="invest-box2">
							<text>总收益\n</text>
							<text>0</text>
						</view>
					</view>
				</view>
				
				<view class="invest-box">
					<view class="padding flex flex-direction">
						<button class="cu-btn bg-cyan lg" @tap="navigate('./into')">转入</button>
						<button class="cu-btn bg-red margin-tb-sm lg" @tap="navigate('./outto')">转出</button>
					</view>
				</view>
			</view>
			
			<view class="invset-text">
				<text>明细</text>
			</view>
		</view>
		
		<!-- 合约宝 -->
		<view class="invest-content" :class="classDisplay2">
			<view class="invest-content2">
				<view class="invest-box">
					<view class="invest-bx1">
						<view class="invest-bx2">
							<text>总投资\n</text>
							<text>0.00</text>
						</view>
					</view>
					<view class="invest-bx1">
						<view class="invest-bx2">
							<text>日活宝\n</text>
							<text>0.00</text>
						</view>
					</view>
				</view>
				
				<view class="invest-box">
					<view class="invest-bx1">
						<view class="invest-bx2">
							<text>总收益\n</text>
							<text>0.00</text>
						</view>
					</view>		
					<view class="invest-bx1">
						<view class="invest-bx2">
							<text>合约宝\n</text>
							<text>0.00</text>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 路由 -->
			<scroll-view scroll-x class="bg-white nav text-left">
				<view class="cu-item" :class="index == TabCur2 ? 'text-blue cur' : ''" v-for="(item, index) in 2" :key="index" @tap="TabSelect" :data-id="index">
					{{NaMe[index]}}
				</view>
			</scroll-view>
			
			<!-- 投资列表 -->
			<view class="invest-content" :class="classDisPlay1">
				<view class="invest-card">
					<view class="invest-columns">
						<text class="columns-title">月度合约(30天)</text>
					</view>
					<view class="invest-columns">
						<view class="columns-box">
							<text class="columns-font">合约要求\n</text>
							<text class="columns-num">5000</text>
						</view>
						<view class="columns-box">
							<text class="columns-font">日收益率\n</text>
							<text class="columns-num">0.60%</text>
						</view>
					</view>
					<view class="invest-columns">
						<view class="flex flex-direction columns-button">
							<button class="cu-btn bg-blue">立即投资</button>
						</view>
					</view>
				</view>
				
				<view class="invest-card">
					<view class="invest-columns">
						<text class="columns-title">季度合约(90天)</text>
					</view>
					<view class="invest-columns">
						<view class="columns-box">
							<text class="columns-font">合约要求\n</text>
							<text class="columns-num">20000</text>
						</view>
						<view class="columns-box">
							<text class="columns-font">日收益率\n</text>
							<text class="columns-num">0.70%</text>
						</view>
					</view>
					<view class="invest-columns">
						<view class="flex flex-direction columns-button">
							<button class="cu-btn bg-blue">立即投资</button>
						</view>
					</view>
				</view>
				
				<view class="invest-card">
					<view class="invest-columns">
						<text class="columns-title">半年合约(180天)</text>
					</view>
					<view class="invest-columns">
						<view class="columns-box">
							<text class="columns-font">合约要求\n</text>
							<text class="columns-num">50000</text>
						</view>
						<view class="columns-box">
							<text class="columns-font">日收益率\n</text>
							<text class="columns-num">0.80%</text>
						</view>
					</view>
					<view class="invest-columns">
						<view class="flex flex-direction columns-button">
							<button class="cu-btn bg-blue">立即投资</button>
						</view>
					</view>
				</view>
				
				<view class="invest-card">
					<view class="invest-columns">
						<text class="columns-title">年度合约(360天)</text>
					</view>
					<view class="invest-columns">
						<view class="columns-box">
							<text class="columns-font">合约要求\n</text>
							<text class="columns-num">100000</text>
						</view>
						<view class="columns-box">
							<text class="columns-font">日收益率\n</text>
							<text class="columns-num">1.00%</text>
						</view>
					</view>
					<view class="invest-columns">
						<view class="flex flex-direction columns-button">
							<button class="cu-btn bg-blue">立即投资</button>
						</view>
					</view>
				</view>
				
			</view>
			
			<!-- 我的投资 -->
			<view class="invest-content" :class="classDisPlay2">
				
			</view>
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			Name:['日活宝','合约宝'],
			NaMe:['投资列表','我的投资'],
			TabCur: 0,
			scrollLeft: 0,
			TabCur2: 0,
			scrollLeft2: 0,
			classDisplay1: {
				'classA': false,
			},
			classDisplay2: {
				'classA': true
			},
			classDisPlay1: {
				'classA': false,
			},
			classDisPlay2: {
				'classA': true,
			}
		};
	},
	methods: {
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
			if(e.currentTarget.dataset.id==0){
				this.classDisplay1.classA=false;
				this.classDisplay2.classA=true;
			}else{
				this.classDisplay1.classA=true;
				this.classDisplay2.classA=false;
			}
		},
		TabSelect(e) {
			this.TabCur2 = e.currentTarget.dataset.id;
			this.scrollLeft2 = (e.currentTarget.dataset.id - 1) * 60;
			if(e.currentTarget.dataset.id==0){
				this.classDisPlay1.classA=false;
				this.classDisPlay2.classA=true;
			}else{
				this.classDisPlay1.classA=true;
				this.classDisPlay2.classA=false;
			}
		},
		
		navigate(url){
			uni.navigateTo({
				url: url,
			});
		},
	}
};
</script>

<style>
.invest-content{
	margin-top: 20rpx;
}
.invest-content1{
	background-color: #007AFF;
	width: 100%;
	height: 250rpx;
	border-radius: 10rpx;
}
.invest-content2{
	background-color: #39B54A;
	width: 100%;
	height: 250rpx;
	border-radius: 10rpx;
}
.classA{
	display: none;
}
.invest-box{
	float: left;
	width: 50%;
	height: 100%;
}
.invest-box1{
	height: 50%;
	text-align: left;
	line-height: 125rpx;
	margin-left: 6%;
}
.invest-box2{
	float: left;
	height: 100%;
	width: 50%;
	line-height: 40rpx;
}
.invest-box1 text {
	color: #FFFFFF;
}
.invest-bx2{
	text-align: center;
	color: #FFFFFF;
}
.invset-text{
	margin-top: 30rpx;
	margin-left: 3%;
	font-size: 32rpx;
}
.invest-bx1{
	height: 50%;
	width: 100%;
}
.invest-card{
	background-color: #39B54A;
	margin: 20rpx 3%;
	border-radius: 10rpx;
}
.invest-columns{
	height: 80rpx;
	width: 100%;
}
.columns-title{
	color: #FFFFFF;
	line-height: 80rpx;
}
.columns-box{
	float: left;
	width: 50%;
	height: 100%;
}
.columns-font{
	color: #333333;
}
.columns-num{
	color: #FFFFFF;
}
.columns-button{
	float: right;
	width: 28%;
	margin-right: 40rpx;
}
</style>
