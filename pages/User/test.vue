<template>
	<view class="bg-gradual-blue">
		<button type="primary" @tap="btn">获取信息</button>
		<text v-for="(item, index) in playlt" :key="index">{{playlt[index].name}}------{{playlt[index].id}}------{{id}}\n</text>
		<text>\n{{lyric}}</text>
	</view>
</template>

<script>
export default {
	data() {
		return {
			playlt:[],
			lyric:'',
			id:''
		};
	},
	methods: {
		btn() {
			uni.request({
				url:'http://localhost:3000/top/playlist?limit=10&order=new',
				data:{},
				success: (res) => {
					this.playlt = res.data.playlists
					console.log(res.data.playlists)
				}
			});
			uni.request({
				url:'http://localhost:3000/lyric?id=33894312',
				data:{},
				success: (res) => {
					this.lyric = res.data.lrc.lyric
					// console.log(res.data.lrc.lyric)
				}
			});
			uni.request({
				url:'',
				// dataType:"JSON",
				data:{
					"UserName": "UserName",
					"password": "password",
					"id": "小明",
					"age": "18"
				},
				method:"POST",
				header: {'content-type': 'application/json'},
				success: (res) => {
					console.log("success")
				}
			})
		}
	}
};
</script>

<style>
 
</style>
