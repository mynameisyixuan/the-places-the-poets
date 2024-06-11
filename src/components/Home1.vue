// Home.vue
<template>
    <div class="home">
        <div class="back">
            <img src="../assets/亭台楼阁1.png">
        </div>
      <div class="bigtitle" style="background-color:rgba(233, 238, 205, 0.4)">
        <h2 class=“长安”>
          欢迎你来到唐朝古都长安城，陕西西安&&咸阳！
        </h2>
      </div>
      <div class="show_left1">
          <span class="show">
            长安，古都千秋，风华犹存。王维在此处踏着红尘，抒写了众多流传千古的名句，描绘了这座城市的繁华和寂寞。
          </span>
      </div>
      <div class="image-container">
        <img class="image" src="../assets/长安插画1.jpg" alt="image1">
        <img class="image" src="../assets/长安插画4.jpg" alt="image2">
        <img class="image" src="../assets/长安插画3.jpg" alt="image3">
        <img class="image" src="../assets/长安插画2.jpg" alt="image4">
    <!-- <button @click="redirectToAbout">点击这里</button> -->
        <router-link to="/MAIN1">
          <img id="button" src="../assets/按钮1.png" alt="Button">
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    redirectToAbout() {
      this.$router.push('/MAIN1')
    }
  }
}
</script>

<style scoped>
/* 图片滑进来 */
.back {
    background-size: cover;
    background-attachment:  local;
    position: absolute;
    z-index: -1;
}
.image-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%; 
  overflow: hidden;
}
.image {
  width: 360px; 
  height: auto;
  position: relative;
  left: -100%;
  animation: slide-in 1s forwards;
  margin: 0;
  z-index: -1;
}

.image:nth-child(2) {
  animation-delay: 0.2s;
}

.image:nth-child(3) {
  animation-delay: 0.4s;
}

.image:nth-child(4) {
  animation-delay: 0.6s;
} 

@keyframes slide-in {
  0% {
    left: -100%;
  }
  100% {
    left: 0;
  }
}
/* 欢迎你来到xxx */
.bigtitle {
  width: 900px;
  height: 300px;
  position: absolute;
  top: 30px;
  text-align: left;
  transition: 1.5s ease-in-out;
}
.长安 {
  font-family: '华文行楷';
  font-size: 3em;
  text-align: center;
  color: #0d0d0d;
  opacity: 100%;
  width: 16em;
    /* 加上两个动画，一个是打字动画，使用steps让字一个一个的出现，
     注意step和字数保持一致，光标动画也是同理，*/
  animation: typingWords 5s steps(16) infinite, cursor 0.2s steps(1) infinite;
    /* 要设置不允许换行，且溢出隐藏 */
  white-space: nowrap;
  overflow: hidden;
    /* 使用右边框作为打印的指针光标 */
  border-right: 1px solid rgb(233, 238, 205);
}
@keyframes typingWords {
    0% {
        width: 0;
    }
}
@keyframes cursor {
    50% {
        border-color: transparent;
    }
}

/* 其他的CSS样式 */
</style>

