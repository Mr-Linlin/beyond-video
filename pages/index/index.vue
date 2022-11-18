<template>
	<view class="media-box">
		<view id="player" :detail="detail" :change:detail="xgplayer.initJs"></view>
		<!-- <view class="" @click="xgplayer.onClick(5)">
			测试测试从
		</view> -->
		<u-button text="月落"></u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: [
					'https://new.qqaku.com/20221111/K51701Ou/index.m3u8',
					'https://new.qqaku.com/20221111/SfepBVSZ/index.m3u8'
				],
			}
		},
		onShow() {
			this.getDetail()
		},
		methods: {
			getDetail() {
				// 改变 detail，触发 xgPlayer.initJs（触发startPlay同理，改变 startPlayValue即可）
			},
			onPlay() {
				console.log('开始播放')
				this.detail.url = 'https://new.qqaku.com/20221111/SfepBVSZ/index.m3u8'
			}
		}
	}
</script>
<script module="xgplayer" lang="renderjs">
	import 'xgplayer'
	import HlsJsPlayer from 'xgplayer-hls.js';
	let xgPlayer
	export default {
		data() {
			return {
				// url: 'https://new.qqaku.com/20221111/K51701Ou/index.m3u8'
			}
		},
		mounted() {
			xgPlayer = new HlsJsPlayer({
				id: 'player',
				width: 390,
			});
		},
		methods: {
			initJs(newDetail, old, ownerInstance, instance) {
				console.log(newDetail, 'newDetail', old,xgPlayer);
				xgPlayer.src = newDetail[0]
				
			},
			// 逻辑层通过改变 startPlayValue 来触发 renderjs 函数
			onClick(num) {
				console.log(xgPlayer, 'xgPlayer',num);
				// xgPlayer.play()
				xgPlayer.src = 'https://new.qqaku.com/20221111/SfepBVSZ/index.m3u8'
			}
		}
	}
</script>
