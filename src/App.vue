<style>
/*

Colorbrewer theme
Original: https://github.com/mbostock/colorbrewer-theme (c) Mike Bostock <mike@ocks.org>
Ported by Fabrício Tavares de Oliveira

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #fff;
}

.hljs,
.hljs-subst {
  color: #000;
}

.hljs-string,
.hljs-meta,
.hljs-symbol,
.hljs-template-tag,
.hljs-template-variable,
.hljs-addition {
  color: #756bb1;
}

.hljs-comment,
.hljs-quote {
  color: #636363;
}

.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-bullet,
.hljs-link {
  color: #31a354;
}

.hljs-deletion,
.hljs-variable {
  color: #88f;
}



.hljs-keyword,
.hljs-selector-tag,
.hljs-title,
.hljs-section,
.hljs-built_in,
.hljs-doctag,
.hljs-type,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-strong {
  color: #3182bd;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-attribute {
  color: #e6550d;
}

</style>
<style>
  
body,html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased
}

body.is-component,html.is-component {
    overflow: hidden
}

#app {
    height: 100%
}

#app.is-component {
    overflow-y: hidden
}

#app.is-component .main-cnt {
    padding: 0;
    margin-top: 0;
    height: 100%;
    min-height: auto
}

#app.is-component .headerWrapper {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1500
}

#app.is-component .headerWrapper .container {
    padding: 0
}

a {
    color: #409eff;
    text-decoration: none
}

code {
    background-color: #f9fafc;
    padding: 0 4px;
    border: 1px solid #eaeefb;
    border-radius: 4px
}

button,input,select,textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit
}

.hljs {
    line-height: 1.8;
    font-family: Menlo,Monaco,Consolas,Courier,monospace;
    font-size: 12px;
    padding: 18px 24px;
    background-color: #fafafa;
    border: 1px solid #eaeefb;
    margin-bottom: 25px;
    border-radius: 4px;
    -webkit-font-smoothing: auto
}

.main-cnt {
    margin-top: -80px;
    padding: 80px 0 340px;
    box-sizing: border-box;
    min-height: 100%
}

.container,.page-container {
    width: 1140px;
    padding: 0;
    margin: 0 auto
}

.page-container {
    padding-top: 55px
}

.page-container h2 {
    font-size: 28px;
    color: #1f2d3d;
    margin: 0
}

.page-container h3 {
    font-size: 22px
}

.page-container h2,.page-container h3,.page-container h4,.page-container h5 {
    font-weight: 400;
    color: #1f2f3d
}

.page-container h2 a,.page-container h3 a,.page-container h4 a,.page-container h5 a {
    float: left;
    margin-left: -20px;
    opacity: 0;
    cursor: pointer
}

.page-container h2 a:hover,.page-container h2:hover a,.page-container h3 a:hover,.page-container h3:hover a,.page-container h4 a:hover,.page-container h4:hover a,.page-container h5 a:hover,.page-container h5:hover a {
    opacity: .4
}

.page-container p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em
}

.page-container .tip {
    padding: 8px 16px;
    background-color: #ecf8ff;
    border-radius: 4px;
    border-left: 5px solid #50bfff;
    margin: 20px 0
}

.page-container .tip code {
    background-color: hsla(0,0%,100%,.7);
    color: #445368
}

.page-container .warning {
    padding: 8px 16px;
    background-color: #fff6f7;
    border-radius: 4px;
    border-left: 5px solid #fe6c6f;
    margin: 20px 0
}

.page-container .warning code {
    background-color: hsla(0,0%,100%,.7);
    color: #445368
}

.demo {
    margin: 20px 0
}

@media (max-width: 1140px) {
    .container,.page-container {
        width:100%
    }
}

@media (max-width: 768px) {
    .container,.page-container {
        padding:0 20px
    }

    #app.is-component .headerWrapper .container {
        padding: 0 12px
    }
}
</style>

<template>
  <div id="app" :class="{ 'is-component': true }">
    <main-header v-if="lang !== 'play'"></main-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
    <main-footer v-if="lang !== 'play' && !true"></main-footer>
  </div>
</template>

<script>
  // import { use } from 'main/locale';
  // import zhLocale from 'main/locale/lang/zh-CN';
  // import enLocale from 'main/locale/lang/en';
  // use(location.href.indexOf('zh-CN') > -1 ? zhLocale : enLocale);

  export default {
    name: 'app',

    computed: {
      lang() {
        return 'zh-CN'
      },
      isComponent() {
        return /^component-/.test(this.$route.name || '');
      }
    },

    // watch: {
    //   lang(val) {
    //     if (val === 'zh-CN') {
    //       this.suggestJump();
    //     }
    //     this.localize();
    //   }
    // },

    // methods: {
    //   localize() {
    //     use(this.lang === 'zh-CN' ? zhLocale : enLocale);
    //   },
    //   suggestJump() {
    //     const href = location.href;
    //     const preferGithub = localStorage.getItem('PREFER_GITHUB');
    //     if (href.indexOf('element-cn') > -1 || preferGithub) return;
    //     setTimeout(() => {
    //       if (this.lang !== 'zh-CN') return;
    //       this.$confirm('建议大陆用户访问部署在国内的站点，是否跳转？', '提示')
    //         .then(() => {
    //           location.href = location.href.replace('element.', 'element-cn.');
    //         })
    //         .catch(() => {
    //           localStorage.setItem('PREFER_GITHUB', true);
    //         });
    //     }, 1000);
    //   }
    // },

    // mounted() {
    //   this.localize();
    //   this.suggestJump();
    //   setTimeout(() => {
    //     const notified = localStorage.getItem('ES_NOTIFIED');
    //     if (!notified && this.lang !== 'zh-CN') {
    //       const h = this.$createElement;
    //       const title = this.lang === 'zh-CN'
    //         ? '帮助我们完成西班牙语文档'
    //         : 'Help us with Spanish docs';
    //       const messages = this.lang === 'zh-CN'
    //         ? ['点击', '这里', '查看详情']
    //         : ['Click ', 'here', ' to learn more'];
    //       this.$notify({
    //         title,
    //         duration: 0,
    //         message: h('span', [
    //           messages[0],
    //           h('a', {
    //             attrs: {
    //               target: '_blank',
    //               href: 'https://github.com/ElemeFE/element/issues/8074'
    //             }
    //           }, messages[1]),
    //           messages[2]
    //         ]),
    //         onClose() {
    //           localStorage.setItem('ES_NOTIFIED', 1);
    //         }
    //       });
    //     }
    //   }, 3500);
    // }
  };
</script>
