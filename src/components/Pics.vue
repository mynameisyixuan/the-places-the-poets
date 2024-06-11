<template>
    <div class="body">
        <div class="title">
            <p>千年前，王维出生于此，感此地风物，抒少年情怀。<br/>请你乘上这吹往唐朝的风，探遍王维诗里的<a href="./MAIN.vue">运城佳景</a></p>
        </div>
        <div id="banner"> 
         <div class="img-list img-wrapper" >
            <div class="img-box"> 
                <div class="info"> 
                    <h3>One click triple connection</h3> 
                </div> 
                <img src="imgURL1" alt="mimi "/>
            </div>
            <div class="img-box"> 
                <div class="info"> 
                    <h3>One click triple connection</h3> 
                </div> 
                <img src="imgURL2" alt=" mi"/>
            </div>
            <div class="img-box"> 
                <div class="info"> 
                    <h3>One click triple connection</h3> 
                </div> 
                <img src="../assets/运城插画3.png" alt=" f"/>
            </div>
            <div class="img-box"> 
                <div class="info"> 
                    <h3>One click triple connection</h3> 
                </div> 
                <img src="../assets/运城插画4.png" alt="f "/>
            </div>
        </div>
    </div>
    <div class="btn-group">
        <button class="last btn">
            <svg t="1686471404424" class="icon left" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2373" width="128" height="128">
                <path
                    d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z"
                    fill="" p-id="2374"></path>
            </svg>
        </button>
        <button class="next btn">
            <svg t="1686471404424" class="icon right" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2373" width="128" height="128">
                <path
                    d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z"
                    fill="" p-id="2374"></path>
            </svg>
        </button>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      imgURL1:"../assets/运城插画1.png",
      imgURL2:"../assets/运城插画2.png",
      imgListOne: null,
      imgBoxList: [],
      imgBoxCount: 0,
      root: null,
      btnGroup: null,
      lastBtn: null,
      nextBtn: null,
      lastImgBox: null,
      postSpacing: 0,
      postSize: 0,
      imgListLength: 0,
      imgBoxLength: 0,
      index: 0,
      indexOne: 1,
      timer: null,
      animationTime: 0.5
    };
  },
  mounted() {
    this.imgListOne = document.querySelector('.img-list');
    this.imgBoxList = Array.prototype.slice.call(document.querySelectorAll('.img-list .img-box'));
    this.imgBoxCount = this.imgBoxList.length;
    this.root = document.documentElement;
    this.btnGroup = document.querySelector('.btn-group');
    this.lastBtn = document.querySelector('.last');
    this.nextBtn = document.querySelector('.next');
    this.lastImgBox = document.getElementById('last-img-box');

    this.postSpacing = Number(getComputedStyle(this.root).getPropertyValue('--post-spacing').replace("vw", ""));
    this.postSize = Number(getComputedStyle(this.root).getPropertyValue('--post-size').replace("vw", ""));

    this.imgListLength = (this.postSize + this.postSpacing) * this.imgBoxCount;

    this.imgBoxLength = this.postSize + this.postSpacing;

    this.imgBoxList.unshift(this.imgBoxList.pop());

    this.imgListOne.style.transition = this.animationTime + 's ease';

    setTimeout(() => {
      this.btnGroup.style.opacity = '1';
      this.btnGroup.style.bottom = '5%';
    }, this.animationTime * 1000);
  },
  methods: {
    cilckFun(flag) {
      // ...
    },
    throttle(fn, delay) {
      return function () {
        if (this.timer) {
          return;
        }
        fn.apply(this, arguments);
        this.timer = setTimeout(() => {
          this.timer = null;
        }, delay);
      };
    }
  }
};
</script>



<style scoped>
:root {
  --post-spacing: 1.78vw;
  --post-size: 25vw;
  --mask-size: 100vw;
}

* {
  padding: 0;
  margin: 0;
  font-family: 'kaishu';
  font-weight: 400;
  text-rendering: optimizeLegibility;
  font-size: 10px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

body {
  background: #fff;
  background-image: url(../assets/bg-yunc6.webp);
  background-repeat: repeat;
  background-size: 300px 300px;
}

.title {
  position: absolute;
  left: 50%;
  top: 5%;
  -webkit-transform: translate(-50%, -5%);
          transform: translate(-50%, -5%);
}

.title p {
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  white-space: wrap;
}
.title a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 400;
    color: #000;
    font-family: 'kaishu';
}
#banner {
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: calc(var(--post-size) / 0.72);
  -webkit-mask: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDE0NDAgNTAwIiBpZD0iaiI+CiAgPHBhdGggZmlsbD0icmdiKDIwMCwyMDAsMjAwKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAwczI3NS4wNCAxMDAgNzIwIDEwMFMxNDQwIDAgMTQ0MCAwdjUwMHMtMjc1LjA0LTEwMC03MjAtMTAwUzAgNTAwIDAgNTAwVjB6Ii8+Cjwvc3ZnPgo=);
          mask: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDE0NDAgNTAwIiBpZD0iaiI+CiAgPHBhdGggZmlsbD0icmdiKDIwMCwyMDAsMjAwKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAwczI3NS4wNCAxMDAgNzIwIDEwMFMxNDQwIDAgMTQ0MCAwdjUwMHMtMjc1LjA0LTEwMC03MjAtMTAwUzAgNTAwIDAgNTAwVjB6Ii8+Cjwvc3ZnPgo=);
  -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
  -webkit-mask-position: center;
          mask-position: center;
  -webkit-mask-size: var(--mask-size);
          mask-size: var(--mask-size);
  position: absolute;
  top: 10%;
}

#banner .img-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  width: 100%;
  float: left;
  height: calc(var(--post-size) / 0.72);
  -webkit-transform: translate(13.39vw, 0);
          transform: translate(13.39vw, 0);
  -webkit-animation: admission 1.5s;
          animation: admission 1.5s;
}

#banner .img-wrapper .img-box {
  height: 100%;
  display: inline-block;
  margin-right: var(--post-spacing);
  position: relative;
  cursor: pointer;
}

#banner .img-wrapper .img-box .info {
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(23, 23, 23, 0.5);
  text-align: center;
  color: #fff9f1;
  font-size: 4rem;
}

#banner .img-wrapper .img-box img {
  width: var(--post-size);
  height: 100%;
  -o-object-position: center;
     object-position: center;
  -o-object-fit: cover;
     object-fit: cover;
}

#banner .img-wrapper .img-box:last-child {
  -webkit-transform: translate(-160.68vw, 0);
          transform: translate(-160.68vw, 0);
}

.btn-group {
  height: 15vh;
  position: absolute;
  left: 50%;
  bottom: 0%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transition: 1s;
  transition: 1s;
  opacity: 0;
}

.btn-group .btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #171717;
  background-color: #fff;
  margin: 10px;
  cursor: pointer;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

.btn-group .btn:hover {
  -webkit-transform: scale(1.2);
          transform: scale(1.2);
  background-color: #000;
}

.btn-group .btn:hover .icon {
  fill: #fff;
}

.btn-group .btn .icon {
  width: 30px;
  height: 30px;
}

.btn-group .btn .right {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.img-list {
  left: 0;
}

@-webkit-keyframes admission {
  0% {
    -webkit-transform: translate(140vw, 0);
            transform: translate(140vw, 0);
  }
  100% {
    -webkit-transform: translate(13.39vw, 0);
            transform: translate(13.39vw, 0);
  }
}

@keyframes admission {
  0% {
    -webkit-transform: translate(140vw, 0);
            transform: translate(140vw, 0);
  }
  100% {
    -webkit-transform: translate(13.39vw, 0);
            transform: translate(13.39vw, 0);
  }
}
</style>