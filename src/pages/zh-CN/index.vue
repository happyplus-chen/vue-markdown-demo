<style scoped>
  .banner {
  text-align: center;
}
.banner-desc {
  padding-top: 20px;
}
.banner-desc h1 {
  font-size: 34px;
  margin: 0;
  line-height: 48px;
  color: #555;
}
.banner-desc p {
  font-size: 18px;
  line-height: 28px;
  color: #888;
  margin: 10px 0 5px;
}
.jumbotron {
  width: 890px;
  height: 465px;
  margin: 30px auto 100px;
  position: relative;
}
.jumbotron div {
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
}
.jumbotron img {
  position: absolute;
}
.jumbotron .jumbotron-cloud-1 {
  right: 0;
  top: 0;
  height: 55px;
}
.jumbotron .jumbotron-plant-2 {
  left: 60px;
  top: 200px;
}
.jumbotron .jumbotron-web {
  height: 385px;
  top: 35px;
  left: 110px;
}
.jumbotron .jumbotron-cloud-2 {
  left: 0;
  top: 50px;
  height: 55px;
}
.jumbotron .jumbotron-compo-1 {
  left: 94px;
  height: 90px;
  top: 220px;
}
.jumbotron .jumbotron-compo-2 {
  right: 73px;
  top: 60px;
  height: 124px;
}
.jumbotron .jumbotron-compo-3 {
  right: 42px;
  top: 200px;
  height: 120px;
}
.jumbotron .jumbotron-plant-1 {
  bottom: 0;
  left: 30px;
  height: 185px;
}
.jumbotron .jumbotron-figure-1 {
  bottom: 0;
  right: 180px;
  height: 140px;
}
.jumbotron .jumbotron-figure-2 {
  bottom: 0;
  right: 10px;
  height: 68px;
}
.cards {
  margin: 0 auto 110px;
  width: 1140px;
}
.cards .container {
  padding: 0;
  margin: 0 -11px;
  width: auto;
}
.cards .container:before, .cards .container:after {
  display: table;
  content: "";
}
.cards .container:after {
  clear: both;
}
.cards li {
  width: 33.33333%;
  padding: 0 19px;
  box-sizing: border-box;
  float: left;
  list-style: none;
}
.cards img {
  width: 160px;
  height: 120px;
}
.card {
  height: 430px;
  width: 100%;
  background:#ffffff;
  border:1px solid #eaeefb;
  border-radius:5px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  transition: all .3s ease-in-out;
  bottom: 0;
}
.card img {
  margin: 66px auto 60px;
}
.card h3 {
  margin: 0;
  font-size: 18px;
  color: #1f2f3d;
  font-weight: 400;
}
.card p {
  font-size: 14px;
  color: #99a9bf;
  padding: 0 25px;
  line-height: 20px;
}
.card a {
  height: 53px;
  line-height: 52px;
  font-size: 14px;
  color: #409EFF;
  text-align: center;
  border: 0;
  border-top: 1px solid #eaeefb;
  padding: 0;
  cursor: pointer;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  transition: all .3s;
  text-decoration: none;
  display: block
}
.card a:hover {
  color: #fff;
  background: #409EFF;
}
.card:hover {
  bottom: 6px;
  box-shadow: 0 6px 18px 0 rgba(232,237,250,0.50);
}
@media (max-width: 1140px) {
  .cards {
    width: 100%;
  }
  .cards .container {
    width: 100%;
  }
  .banner .container {
    width: 100%;
    box-sizing: border-box;
  }
  .banner img {
    right: 0;
  }
}
@media (max-width: 1000px) {
  .banner .container img {
    display: none;
  }
  .jumbotron {
    display: none;
  }
}
@media (max-width: 768px) {
  .cards li {
    width: 80%;
    margin: 0 auto 20px;
    float: none;
  }
  .cards .card {
    height: auto;
    padding-bottom: 54px;
  }
  .banner-stars {
    display: none;
  }
  .banner-desc #line2 {
    display: none;
  }
  .banner-desc h2 {
    font-size: 32px;
  }
  .banner-desc p {
    width: auto;
  }
}
</style>
<template>
  <div>
    <div class="banner">
      <div class="banner-desc">
        <h1>网站快速成型工具</h1>
        <p>Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库</p>
      </div>
    </div>
    <div class="jumbotron">
      <div>
        <img class="jumbotron-plant-2" src="src/assets/images/plant-2.png" alt="">
        <img class="jumbotron-web" src="src/assets/images/web.png" alt="">
        <img class="jumbotron-plant-1" src="src/assets/images/plant-1.png" alt="">
        <img class="jumbotron-figure-1" src="src/assets/images/figure-1.png" alt="">
        <img class="jumbotron-figure-2" src="src/assets/images/figure-2.png" alt="">
      </div>
      <div data-hover-layer="0">
        <img class="jumbotron-cloud-1" src="src/assets/images/cloud-1.png" alt="">
        <img class="jumbotron-cloud-2" src="src/assets/images/cloud-2.png" alt="">
      </div>
      <div data-hover-layer="1">
        <img class="jumbotron-compo-1" src="src/assets/images/compo-1.png" alt="">
        <img class="jumbotron-compo-2" src="src/assets/images/compo-2.png" alt="">
        <img class="jumbotron-compo-3" src="src/assets/images/compo-3.png" alt="">
      </div>
    </div>
    <div class="cards">
      <ul class="container">
        <li>
          <div class="card">
            <img src="src/assets/images/guide.png" alt="">
            <h3>指南</h3>
            <p>了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。</p>
            <router-link
              active-class="active"
              to="/zh-CN/guide/design"
              exact>查看详情
            </router-link>
          </div>
        </li>
        <li>
          <div class="card">
            <img src="src/assets/images/component.png" alt="">
            <h3>组件</h3>
            <p>使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。</p>
            <router-link
              active-class="active"
              to="/zh-CN/component/layout"
              exact>查看详情
            </router-link>
          </div>
        </li>
        <li>
          <div class="card">
            <img src="src/assets/images/resource.png" alt="">
            <h3>资源</h3>
            <p>下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。</p>
            <router-link
              active-class="active"
              to="/zh-CN/resource"
              exact>查看详情
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { Hover } from 'perspective.js';

  export default {
    mounted() {
      new Hover('.jumbotron', { // eslint-disable-line
        max: 3,
        scale: 1,
        perspective: 700,
        layers: [{
          multiple: 0.01,
          reverseTranslate: true
        }, {
          multiple: 0.02,
          reverseTranslate: true
        }]
      });
    }
  };
</script>
