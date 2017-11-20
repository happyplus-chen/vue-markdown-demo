<template>
  <div class="markdown-body">
    <!-- <markdown></markdown> -->
    <ele></ele>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.component('demo-block', demoBlock);
import demoBlock from './demo-block.vue';
import markdown from './markdown.md'
import ele from './ele.md'
// import 'highlight.js/styles/github.css'
// import 'github-markdown-css'
export default {
  components: {
    markdown,ele
  }
}
</script>
<style>
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }
</style>