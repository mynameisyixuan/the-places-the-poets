<template>
   <div class="container">
        <section id="img-one" class="img">
            <h1>TIME</h1>
        </section>
        <section class="content-one">
            <div class="text-box">
                <div class="cnt">
                <h2>【诗人故里】</h2>
                <p>
                    千年前，王维出生于此，感此地风物，抒少年情怀。
                    <br/>请你乘上这吹往唐朝的风，探遍王维诗里的运城佳景。
                </p>
                <p>
                    <a href="#" class="btn">TAKE <strong>CARE OF</strong><em>YOURSEFL</em></a>
                </p>
            </div>
            </div>
        </section>
        <section class="content-two">
            <div class="text-box">
                <div class="cnt">
                <h2>《红牡丹》</h2>
                <p>
                    绿艳闲且静，红衣浅复深。花心愁欲断，春色岂知心。
                </p>
                <p>
                    <a href="#" class="btn">BEST <strong>WISHS</strong><em>FOR YOU</em></a>
                </p>
            </div>
            </div>
        </section>
        <section class="content-three">
            <div class="text-box">
                <div class="cnt">
                <h2>此地宜赏花</h2>
                <p>
                    年年春时，运城牡丹竞相开放。曾经的王维面对着红花绿叶一丛丛，写下这首《红牡丹》描绘所见所感。
                    <br />来年春时，何不亲自来运城一趟，看看深深浅浅的红衣，闲静自然的绿叶？
                </p>
                <p>
                    <a href="#" class="btn">TAKE <strong>CARE OF</strong><em>YOURSEFL</em></a>
                </p>
            </div>
            </div>
        </section>
        <section id="img-two" class="img">
            <h1>THOUGHTS</h1>
        </section>
        <section id="footer">FOOTER</section>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    overflow-x: hidden;
}

.container {
    width: 100vw;
    height: auto;
}

section,
#footer {
    height: 100vh;
    position: relative;
    color: rgba(255, 255, 255, .8);
    font-size: 10vh;
    /* 设置字体 */
    font-family: 'modern_no._20regular',
        serif;
    /* 文字阴影 */
    text-shadow: 4px 4px rgb(46, 43, 43);
    /* 弹性布局 */
    display: flex;
    /* 水平居中 */
    justify-content: center;
    /* 垂直居中 */
    align-items: center;
}

#footer {
    background-color: #c0b5aa;
    height: 50vh;
    color: #fff;
    font-size: 20vh;
}

.img {
    overflow: hidden;
    /* 背景图片不重复 */
    background-repeat: no-repeat;
    /* 背景图片位置：居中 */
    background-position: center;
    /* 背景图片固定 */
    background-attachment: fixed;
    background-size: cover;
    /* 禁止用户误选中 */
    user-select: none;

}


#img-one {
    background-image: url(../assets/运城插画1.png);
    background-size: cover;
}

#img-two {
    background-image: url(../assets/运城插画2.png);
}

.content-one {
    background: url(../assets/运城插画3.png) no-repeat fixed center;
    background-size: cover;
}

.content-two {
    background: url(../assets/运城插画4.png) no-repeat fixed center;
    background-size: cover;
}

.content-three {
    background: url(../assets/山水.webp) no-repeat fixed center;
    background-size: cover;
}

.text-box {
    width: 100%;
    height: 50%;
    /* 绝对定位 */
    position: absolute;
    bottom: 25%;
    /* 文字居中 */
    text-align: center;
    background-color: rgba(0, 0, 0, .3);
    /* 旋转中心 */
    transform-origin: center bottom;
    /* 扭曲斜切 */
    transform: skew(0, -8deg);

}

.text-box .cnt {
    display: inline-block;
    text-align: right;
    margin: 40px 0 10px;
    width: 90%;
    max-width: 990px;
    transform-origin: right bottom;
    transform: skew(0, 8deg);
}

.cnt h2 {
    margin-top: 100px;
    font-size: 36px;
    font-family: 'modern_no._20regular',
        serif;
    text-shadow: 1px 0px 0px #323232;
    letter-spacing: 0.3em;
    /* 大写字母 */
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 5px;
}

.cnt p {
    font-size: 20px;
    line-height: 1.7;
    margin-bottom: 10px;
    color: #fff;
}

.cnt a.btn {
    font-size: 90%;
    font-family: 'modern_no._20regular',
        serif;
    letter-spacing: 0.3em;
    text-shadow: 1px 0px 0px black;
    line-height: 2.8;
    display: inline-block;
    background-color: #eaeaea;
    color: #000;
    border: 3px solid #000;
    white-space: nowrap;
    text-decoration: none;
    padding: 0 20px;

}
</style>