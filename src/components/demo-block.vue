<template>
  <div
    class="demo-block"
    :class="[blockClass, { 'hover': hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false">
    <slot name="source"></slot>
    <div class="meta" ref="meta">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <slot name="highlight"></slot>
    </div>
    <div
      class="demo-block-control"
      ref="control"
      :class="{ 'is-fixed': fixedControl }"
      @click="isExpanded = !isExpanded">
      <transition name="arrow-slide">
        <i :class="[iconClass, { 'hovering': hovering }]"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hovering">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>

<style>
 .demo-block {
    border: solid 1px #ebebeb;
    border-radius: 3px;
    transition: .2s;
  }
.demo-block code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
}
.demo-block .demo-button {
    float: right;
}
.demo-block .source {
    padding: 24px;
}
.demo-block .meta {
    background-color: #fafafa;
    border-top: solid 1px #eaeefb;
    overflow: hidden;
    height: 0;
    transition: height .2s;
}
.demo-block .description {
    padding: 20px;
    box-sizing: border-box;
    border: solid 1px #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;
}
.demo-block .description p {
    margin: 0;
    line-height: 26px;
}
.demo-block .description code {
    color: #5e6d82;
    background-color: #e6effb;
    margin: 0 4px;
    display: inline-block;
    padding: 1px 5px;
    font-size: 12px;
    border-radius: 3px;
    height: 18px;
    line-height: 18px;
}
.demo-block .highlight pre {
    margin: 0;
}
.demo-block .highlight code.hljs {
    margin: 0;
    border: none;
    max-height: none;
    border-radius: 0
}
.demo-block .highlight code.hljs::before {
    content: none;
}
.demo-block .demo-block-control {
    border-top: solid 1px #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
}
.demo-block .demo-block-control i {
    font-size: 16px;
    line-height: 44px;
    transition: .3s
}
.demo-block .demo-block-control i.hovering {
    -ms-transform: translateX(-40px);
        transform: translateX(-40px);
}
.demo-block .demo-block-control > span {
    position: absolute;
    -ms-transform: translateX(-30px);
        transform: translateX(-30px);
    font-size: 14px;
    line-height: 44px;
    transition: .3s;
    display: inline-block;
}
.demo-block .demo-block-control .control-button {
    line-height: 26px;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 14px;
    padding-left: 5px;
    padding-right: 25px;
}
.demo-block .demo-block-control.is-fixed {
    position: fixed;
    bottom: 0;
    width: 868px;
}
.demo-block .demo-block-control:hover {
    color: #409EFF;
    background-color: #f9fafc;
}
.demo-block .demo-block-control .text-slide-enter, .demo-block .demo-block-control .text-slide-leave-active {
    opacity: 0;
    -ms-transform: translateX(10px);
        transform: translateX(10px);
}
.demo-block.hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
}
</style>

<script type="text/babel">
  import compoLang from '../i18n/component.json';
  // import { version } from 'main/index.js';
  const version = '1.0.0'

  export default {
    data() {
      return {
        hovering: false,
        isExpanded: false,
        fixedControl: false,
        scrollParent: null
      };
    },

    props: {
      jsfiddle: Object,
      default() {
        return {};
      }
    },

    methods: {
      

      scrollHandler() {
        const { top, bottom, left } = this.$refs.meta.getBoundingClientRect();
        this.fixedControl = bottom > document.documentElement.clientHeight &&
          top + 44 <= document.documentElement.clientHeight;
        this.$refs.control.style.left = this.fixedControl ? `${ left }px` : '0';
      },

      removeScrollHandler() {
        this.scrollParent && this.scrollParent.removeEventListener('scroll', this.scrollHandler);
      }
    },

    computed: {
      lang() {
        return this.$route.path.split('/')[1];
      },

      langConfig() {
        return compoLang.filter(config => config.lang === this.lang)[0]['demo-block'];
      },

      blockClass() {
        return `demo-${ this.lang } demo-${ this.$router.currentRoute.path.split('/').pop() }`;
      },

      iconClass() {
        return this.isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom';
      },

      controlText() {
        return this.isExpanded ? this.langConfig['hide-text'] : this.langConfig['show-text'];
      },

      codeArea() {
        return this.$el.getElementsByClassName('meta')[0];
      },

      codeAreaHeight() {
        if (this.$el.getElementsByClassName('description').length > 0) {
          return this.$el.getElementsByClassName('description')[0].clientHeight +
            this.$el.getElementsByClassName('highlight')[0].clientHeight + 20;
        }
        return this.$el.getElementsByClassName('highlight')[0].clientHeight;
      }
    },

    watch: {
      isExpanded(val) {
        this.codeArea.style.height = val ? `${ this.codeAreaHeight + 1 }px` : '0';
        if (!val) {
          this.fixedControl = false;
          this.$refs.control.style.left = '0';
          this.removeScrollHandler();
          return;
        }
        setTimeout(() => {
          this.scrollParent = document.querySelector('.page-component__scroll > .el-scrollbar__wrap');
          this.scrollParent && this.scrollParent.addEventListener('scroll', this.scrollHandler);
          this.scrollHandler();
        }, 200);
      }
    },

    mounted() {
      this.$nextTick(() => {
        let highlight = this.$el.getElementsByClassName('highlight')[0];
        if (this.$el.getElementsByClassName('description').length === 0) {
          highlight.style.width = '100%';
          highlight.borderRight = 'none';
        }
      });
    },

    beforeDestroy() {
      this.removeScrollHandler();
    }
  };
</script>
