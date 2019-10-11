<template>
	<view class="content">
		<swiper
			class="screen-swiper swiper-index01"
			:class="dotStyle ? 'square-dot' : 'round-dot'"
			:indicator-dots="true"
			:circular="true"
			:autoplay="true"
			interval="5000"
			duration="500"
		>
			<swiper-item v-for="(item, index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
			</swiper-item>
		</swiper>
		
		<!-- 通告栏 -->
		<view class="tg"><textscroll v-if="notic.length > 0" :list="notic" /></view>
		
		<!-- 通告栏下方功能 -->
		<view class="cu-list grid index-width col-4">
			<view @tap="navigate('/pages/Index/convert')" class="cu-item">
				<view class="cuIcon-cardboardfill text-red"></view>
				<text>兑换</text>
			</view>
			
			<view @tap="navigate('/pages/Index/turn')" class="cu-item">
				<view class="cuIcon-recordfill text-orange"></view>
				<text>互转</text>
			</view>
			
			<view class="cu-item">
				<view class="cuIcon-picfill text-yellow"></view>
				<text>商城</text>
			</view>
				
			<view class="cu-item">
				<view class="cuIcon-noticefill text-olive"></view>
				<text>游戏</text>
			</view>
		</view>
		
		<!-- 行情信息 -->
		<view class="cu-bar bg-white solid-bottom index-width">
			<view class="action">
				<text class="cuIcon-title text-orange "></text>
				行情/USTD
			</view>
		</view>
		
		<view class="cu-list menu-avatar index-width">
			<view class="cu-item ">
				<view class="content ">
					<view>FVT / USDT</view>
					<view class="text-gray text-sm">24小时交易量 0.00</view>
				</view>
				<view class="action margin-right"><view class="margin-right">0.800</view></view>
				<view class="action"><button class="cu-btn bg-green sm">0.00</button></view>
			</view>
			
			<view class="cu-item ">
				<view class="content ">
					<view>FVT / USDT</view>
					<view class="text-gray text-sm">24小时交易量 0.00</view>
				</view>
				<view class="action margin-right"><view class="margin-right">0.800</view></view>
				<view class="action"><button class="cu-btn bg-green sm">0.00</button></view>
			</view>
			
			<view class="cu-item ">
				<view class="content ">
					<view>FVT / USDT</view>
					<view class="text-gray text-sm">24小时交易量 0.00</view>
				</view>
				<view class="action margin-right"><view class="margin-right">0.800</view></view>
				<view class="action"><button class="cu-btn bg-green sm">0.00</button></view>
			</view>
			
			<view class="cu-item ">
				<view class="content ">
					<view>FVT / USDT</view>
					<view class="text-gray text-sm">24小时交易量 0.00</view>
				</view>
				<view class="action margin-right"><view class="margin-right">0.800</view></view>
				<view class="action"><button class="cu-btn bg-green sm">0.00</button></view>
			</view>
			
			<view class="cu-item ">
				<view class="content ">
					<view>FVT / USDT</view>
					<view class="text-gray text-sm">24小时交易量 446461.00</view>
				</view>
				<view class="action margin-right"><view class="margin-right">0.800</view></view>
				<view class="action"><button class="cu-btn bg-green sm">0.00</button></view>
			</view>
		</view>
		
		<!-- 底部 -->
		<view class="tFoot">
			<text>copy 2019 郑州天恩网络</text>
		</view>
		
	</view>
</template>

<script>
import screenTextScroll from '../../components/screenTextScroll.vue'
export default {
	components:{
		textscroll: screenTextScroll
	},
	data() {
		return {
			// ColorList: this.ColorList,
			// cardCur: 0,
			//轮播图
			swiperList: [
				{
					id: 0,
					type: 'image',
					url: '../../static/big84000.jpg'
				},
				{
					id: 1,
					type: 'image',
					url: '../../static/big37006.jpg'
				},
				{
					id: 2,
					type: 'image',
					url: '../../static/big39000.jpg'
				},
				{
					id: 3,
					type: 'image',
					url: '../../static/big10001.jpg'
				},
				{
					id: 4,
					type: 'image',
					url: '../../static/big25011.jpg'
				},
				{
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				},
				{
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}
			],
			dotStyle: true,
			towerStart: 0,
			direction: '',
			notic: ['this is 通告栏/官方公告！！']
		};
	},
	onLoad() {
		this.TowerSwiper('swiperList');
	},
	methods: {
		DotStyle(e) {
			this.dotStyle = e.detail.value;
		},
		// cardSwiper
		cardSwiper(e) {
			this.cardCur = e.detail.current;
		},
		// towerSwiper
		// 初始化towerSwiper
		TowerSwiper(name) {
			let list = this[name];
			for (let i = 0; i < list.length; i++) {
				list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2));
				list[i].mLeft = i - parseInt(list.length / 2);
			}
			this.swiperList = list;
		},
		// towerSwiper触摸开始
		TowerStart(e) {
			this.towerStart = e.touches[0].pageX;
		},

		// towerSwiper计算方向
		TowerMove(e) {
			this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left';
		},
		// towerSwiper计算滚动
		TowerEnd(e) {
			let direction = this.direction;
			let list = this.swiperList;
			if (direction == 'right') {
				let mLeft = list[0].mLeft;
				let zIndex = list[0].zIndex;
				for (let i = 1; i < this.swiperList.length; i++) {
					this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft;
					this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex;
				}
				this.swiperList[list.length - 1].mLeft = mLeft;
				this.swiperList[list.length - 1].zIndex = zIndex;
			} else {
				let mLeft = list[list.length - 1].mLeft;
				let zIndex = list[list.length - 1].zIndex;
				for (let i = this.swiperList.length - 1; i > 0; i--) {
					this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft;
					this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex;
				}
				this.swiperList[0].mLeft = mLeft;
				this.swiperList[0].zIndex = zIndex;
			}
			this.direction = '';
			this.swiperList = this.swiperList;
		},
		//
		navigate(url){
			uni.navigateTo({
				url: url,
			})
		},
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: normal;
	justify-content: center;
}
.swiper-index01 {
	width: 100%;
}
.page {
	height: 100vh;
	width: 100vw;
}

.page.show {
	overflow: hidden;
}

.switch-sex::after {
	content: '\e716';
}

.switch-sex::before {
	content: '\e7a9';
}

.switch-music::after {
	content: '\e66a';
}

.switch-music::before {
	content: '\e6db';
}
.index-width{
	width: 100%;
}
.cu-list.menu-avatar>.cu-item .content{
	left: 0rpx;
}
.cu-tag.sm{
	font-size: 24rpx;
	height: 36rpx;
}
.tg {
	height: 44rpx;
	width: 100%;
	overflow: hidden;
}
.tFoot{
	margin-top: 100rpx;
	text-align: center;
}
</style>
