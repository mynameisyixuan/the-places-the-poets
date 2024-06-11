<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue';

const showLeft1 = ref(false);
const showRight1 = ref(false);
const showLeft2 = ref(false);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  const windowHeight = window.innerHeight;
  const left1OffsetTop = document.querySelector('.show_left1').offsetTop;
  const right1OffsetTop = document.querySelector('.show_right1').offsetTop;
  const left2OffsetTop = document.querySelector('.show_left2').offsetTop;

  const scrollY = window.scrollY;

  // 计算每个部分在视口中的位置
  const left1InView = scrollY > left1OffsetTop - windowHeight / 2;
  const right1InView = scrollY > right1OffsetTop - windowHeight / 2;
  const left2InView = scrollY > left2OffsetTop - windowHeight / 2;

  // 根据位置逐步显示不同的部分
  showLeft1.value = left1InView;
  showRight1.value = right1InView;
  showLeft2.value = left2InView;
};



</script>

<template>
  <div class="fullscreen-div">
    <img src="./assets/images/长安1.jpg" alt="A Fullscreen Image">
  </div>
  <div class="country">
    <h2 class="长安">
      “渭水收暮雨，处处多新泽。宫苑傍山明，云林带天碧。”这就是你吗？最美的长安。
    </h2>
    <div class="show_left1">
      <span class="show">千年前，王维出生于此，感此地风物，抒少年情怀。请你乘上这吹往唐朝的风，探遍王维诗里的运城佳景。</span>
      <div class="animation"></div>
    </div>
    <div class="show_right1" >
      
      <span class="show">22千年前，王维出生于此，感此地风物，抒少年情怀。请你乘上这吹往唐朝的风，探遍王维诗里的运城佳景。</span>
      <div class="animation"></div>
    </div>
    <div class="show_left2">
      <span class="show">
        年年春时，运城牡丹竞相开放。曾经的王维面对着红花绿叶一丛丛，写下这首《红牡丹》描绘所见所感。<br />来年春时，何不亲自来运城一趟，看看深深浅浅的红衣，闲静自然的绿叶？
      </span>
      <div class="animation"></div>
    </div>
  </div>
</template>

<script>

  
   
</script>

<style scoped>

.fullscreen-div {
  position: fixed; /* 或使用absolute，取决于你的具体需求 */
  top: 0;
  left: 0;
  width: 100vw; /* 视口宽度 */
  height: 100vh; /* 视口高度 */
  z-index: -1; /* 根据需要调整，确保div不会遮挡页面上的其他元素 */
  overflow: hidden;
}

.fullscreen-div img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保证图片覆盖整个div且不变形 */
}
.country {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 文字左对齐 */
}

.长安 {
  position: fixed; /* 设置为固定定位 */
  top: 0;
  left: 0;
  text-align: center;
  color: #f091af;
  font-size: 30px;
  width: 40em;
  opacity: 0;
  transform: translateX(-100%);
  animation: fadeInAndSlideLeft 5s forwards;
  white-space: nowrap;
  overflow: hidden;
}

.show:hover {
  color: #f765a7;
  transition: 1s linear 1s;
}

.show {
  animation: fadeIn 5s;
  display: block;
  margin: 0 auto;
  width: 50%;
  font-size: 24px;
  font-family: kaishu;
  text-indent: 2em;
  color: #9b075b;
  transition: color .3s;
  transition-behavior: normal;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: color;
}

.show_left1 {
  position: relative;
  background-color: rgba(252, 233, 245, 0.7);
  overflow: hidden;
  height: 60%;
  border-radius: 10px;
  padding-right: 10%;
  width: 80%;
  /* text-align: left; */
  top: 200px;
  margin-bottom: 20px;
  left: 0;
  animation: bounceInLeft 4s 1s forwards;
  position: absolute;
  border: 1px solid #efc4c4;
  box-shadow: 3px 3px 6px #fd96a4;
}
.show_left1 .animation{
  position: absolute;
  top:0;
  right:0;
  height:100%;
  width:50%;
  background-image: url('./assets/images/长安3.jpg');
  background-size: cover;
}
.show_left1 .show{
  width:54%;
  float:left;
  clear:left;
  padding-left:30px;
}

.show_left2 {
  top:1800px;
  background-color: rgba(252, 233, 245,0.7);
  overflow: hidden;
  height: 60%;
  border-radius: 10px;
  padding-right: 10%;
  width: 80%;
  text-align: left;
  bottom: 200px;
  margin-bottom: 20px;
  left: 0;
  animation: bounceInLeft 4s 0.5s forwards;
  position: absolute;
  border: 1px solid #efc4c4;
  box-shadow: 3px 3px 6px #fd96a4;
}
.show_left2 .animation{
  position: absolute;
  top:0;
  right:0;
  height:100%;
  width:50%;
  background-image: url('./assets/images/长安3.jpg');
  background-size: cover;
}
.show_left2 .show{
  width:54%;
  float:left;
  clear:left;
  padding-left:30px;
}
.show_right1 {
  top:1000px;
  background-color: rgba(252, 233, 245,0.7);
  overflow: hidden;
  height: 60%;
  border-radius: 10px;
  padding-right: 20px;
  width: 80%;
  text-align: left;
  bottom: 200px;
  margin-bottom: 20px;
  right: 0;
  animation: bounceInLeft 4s 0.5s forwards;
  position: absolute;
  border: 1px solid #efc4c4;
  box-shadow: 3px 3px 6px #fd96a4;
}
.show_right1 .animation{
  position: absolute;
  top:0;
  left:0;
  height:100%;
  width:50%;
  background-image: url('./assets/images/长安3.jpg');
  background-size: cover;
}
.show_right1 .show{
  width:50%;
  float:right;
  /* clear:right; */
  padding-left:50px;
}
.show_right_active {
  left: auto;
  right: 0;
  opacity: 1;
}

@keyframes fadeInAndSlideLeft {
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}


@keyframes cursor {
    50% {
        border-color: transparent;
    }
}

@keyframes bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: linear;
  }
  0% {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
</style>
