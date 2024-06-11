<!-- 本页面实现飞鸟动画以及导入语connect to… -->
 <!--连接在点击地点后，下拉显示地点介绍页面-->
<template>
  <div class="body" translate="no">
    <router-view></router-view>
    <div class="container">
	<h1 data-text="即将飞往 . . . ">即将飞往 . . .</h1>
	<div class="bird-container bird-container--one">
		<div class="bird bird--one"></div>
	</div>
	<div class="bird-container bird-container--two">
		<div class="bird bird--two"></div>
	</div>
	<div class="bird-container bird-container--three">
		<div class="bird bird--three"></div>
	</div>
	<div class="bird-container bird-container--four">
		<div class="bird bird--four"></div>
	</div>
  <router-link to="/MAIN">
          <img id="button" src="../assets/运城印.png" alt="Button">
  </router-link>
  <router-link to="/MAIN1">
          <img id="button" src="../assets/长安印.png" alt="Button">
  </router-link>
  <router-link to="/MAIN1">
          <img id="button" src="../assets/运城印.png" alt="Button">
  </router-link>
    </div>
</div>
</template>

<script>
    window.console = window.console || function(t) {};
    if (document.location.search.match(/type=embed/gi)) {
      window.parent.postMessage("resize", "*");
    }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Arima+Madurai:300");
*,
*::before,
*::after {
  box-sizing: border-box;
}
*
{ 
  margin: 0; 
  padding: 0; 
  box-sizing: border-box; 
}

h1 {
  color: rgb(255, 255, 255);
  -webkit-text-stroke: 0.2vw #b81b1b;
  text-transform: uppercase;
  font-family: "华文行楷";
  font-size: 6vw;
  text-shadow: 0px 1px 1px rgba(236, 224, 224, 0.6);
  position: relative;
  z-index: 3;
}

h1::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  color: rgb(250, 250, 250);
  -webkit-text-stroke: 0vw #e5bd1f;
  /* border-right: 2px solid rgb(255, 215, 192); */
  overflow: hidden;
  animation: animate 6s linear infinite;
}
@keyframes animate {
  0%,10%,100%
  {
    width: 0;
  }
  70%,90%
  {
    width: 100%;
  }
}
.container {
  z-index: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 35rem;
  background-image: linear-gradient(to bottom, rgba(255, 168, 76, 0.6) 0%, rgba(255, 123, 13, 0.6) 100%), url("../assets/bg-yunc8.webp");
  background-blend-mode: soft-light;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  padding: 0;
}

.bird {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg);
  background-size: auto 100%;
  width: 88px;
  height: 125px;
  will-change: background-position;
  -webkit-animation-name: fly-cycle;
          animation-name: fly-cycle;
  -webkit-animation-timing-function: steps(10);
          animation-timing-function: steps(10);
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
.bird--one {
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s;
}
.bird--two {
  -webkit-animation-duration: 0.9s;
          animation-duration: 0.9s;
  -webkit-animation-delay: -0.75s;
          animation-delay: -0.75s;
}
.bird--three {
  -webkit-animation-duration: 1.25s;
          animation-duration: 1.25s;
  -webkit-animation-delay: -0.25s;
          animation-delay: -0.25s;
}
.bird--four {
  -webkit-animation-duration: 1.1s;
          animation-duration: 1.1s;
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s;
}

.bird-container {
  position: absolute;
  top: 20%;
  left: -10%;
  transform: scale(0) translateX(-10vw);
  will-change: transform;
  -webkit-animation-name: fly-right-one;
          animation-name: fly-right-one;
  -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
.bird-container--one {
  -webkit-animation-duration: 15s;
          animation-duration: 15s;
  -webkit-animation-delay: 0;
          animation-delay: 0;
}
.bird-container--two {
  -webkit-animation-duration: 16s;
          animation-duration: 16s;
  -webkit-animation-delay: 1s;
          animation-delay: 1s;
}
.bird-container--three {
  -webkit-animation-duration: 14.6s;
          animation-duration: 14.6s;
  -webkit-animation-delay: 9.5s;
          animation-delay: 9.5s;
}
.bird-container--four {
  -webkit-animation-duration: 16s;
          animation-duration: 16s;
  -webkit-animation-delay: 10.25s;
          animation-delay: 10.25s;
}

@-webkit-keyframes fly-cycle {
  100% {
    background-position: -900px 0;
  }
}

@keyframes fly-cycle {
  100% {
    background-position: -900px 0;
  }
}
@-webkit-keyframes fly-right-one {
  0% {
    transform: scale(0.3) translateX(-10vw);
  }
  10% {
    transform: translateY(2vh) translateX(10vw) scale(0.4);
  }
  20% {
    transform: translateY(0vh) translateX(30vw) scale(0.5);
  }
  30% {
    transform: translateY(4vh) translateX(50vw) scale(0.6);
  }
  40% {
    transform: translateY(2vh) translateX(70vw) scale(0.6);
  }
  50% {
    transform: translateY(0vh) translateX(90vw) scale(0.6);
  }
  60% {
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }
  100% {
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }
}
@keyframes fly-right-one {
  0% {
    transform: scale(0.3) translateX(-10vw);
  }
  10% {
    transform: translateY(2vh) translateX(10vw) scale(0.4);
  }
  20% {
    transform: translateY(0vh) translateX(30vw) scale(0.5);
  }
  30% {
    transform: translateY(4vh) translateX(50vw) scale(0.6);
  }
  40% {
    transform: translateY(2vh) translateX(70vw) scale(0.6);
  }
  50% {
    transform: translateY(0vh) translateX(90vw) scale(0.6);
  }
  60% {
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }
  100% {
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }
}
@-webkit-keyframes fly-right-two {
  0% {
    transform: translateY(-2vh) translateX(-10vw) scale(0.5);
  }
  10% {
    transform: translateY(0vh) translateX(10vw) scale(0.4);
  }
  20% {
    transform: translateY(-4vh) translateX(30vw) scale(0.6);
  }
  30% {
    transform: translateY(1vh) translateX(50vw) scale(0.45);
  }
  40% {
    transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
  }
  50% {
    transform: translateY(0vh) translateX(90vw) scale(0.45);
  }
  51% {
    transform: translateY(0vh) translateX(110vw) scale(0.45);
  }
  100% {
    transform: translateY(0vh) translateX(110vw) scale(0.45);
  }
}
@keyframes fly-right-two {
  0% {
    transform: translateY(-2vh) translateX(-10vw) scale(0.5);
  }
  10% {
    transform: translateY(0vh) translateX(10vw) scale(0.4);
  }
  20% {
    transform: translateY(-4vh) translateX(30vw) scale(0.6);
  }
  30% {
    transform: translateY(1vh) translateX(50vw) scale(0.45);
  }
  40% {
    transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
  }
  50% {
    transform: translateY(0vh) translateX(90vw) scale(0.45);
  }
  51% {
    transform: translateY(0vh) translateX(110vw) scale(0.45);
  }
  100% {
    transform: translateY(0vh) translateX(110vw) scale(0.45);
  }
}
#button {
  /* position: fixed; */
  transform: translateY(10%);
  opacity: 20%;
  transition: opacity 0.5s ease-in-out;
  transform: scale(50%);
}

#button:hover {
  opacity: 1;
}

</style>