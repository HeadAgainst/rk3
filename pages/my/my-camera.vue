
<template>
    <view>
        <camera device-position="back" flash="off" @error="error" style="width: 100%; height: 720px;"></camera>
        <button type="primary" @click="submitCamera">拍照上传</button>
    </view>
</template>

<script>
	export default {
	    data() {
	        return {
	            src: ""
	        }
	    },
	    methods: {
	         /*takePhoto() {
	                 const ctx = uni.createCameraContext();
	                 ctx.takePhoto({
	                     quality: 'high',
	                     success: (res) => {
	                         this.src = res.tempImagePath;
	                         console.log('Photo taken, path:', this.src); // 调试输出
	                         
                             // 延迟一秒导航以确保路径获取成功
                             setTimeout(() => {
                                uni.navigateTo({
                                    url: "/pages/my/my-argue?src=" + encodeURIComponent(this.src)
                                });
                             }, 1000);
	                     }
	                 });
	             },*/
			submitCamera() {
				const ctx = uni.createCameraContext();
				ctx.takePhoto({
				    quality: 'high',
				    success: (res) => {
				        this.src = res.tempImagePath;
			        uni.navigateBack({
			            delta: 1,
			            success: () => {
			                const eventChannel = this.getOpenerEventChannel();
			                eventChannel.emit('acceptComment', {src:this.src });
			            }
			        });
				}
			});
			},
	        error(e) {
	            console.log(e.detail);
	        }
	    }
	}
</script>