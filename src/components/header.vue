<style scoped>
.header .nav:after {
    clear: both
}

.header .nav:after,.header .nav:before {
    display: table;
    content: ""
}

.headerWrapper {
    height: 80px
}

.header {
    height: 80px;
    background-color: #fff;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 80px;
    z-index: 100;
    position: relative
}

.header .nav-item.lang-item,.header .nav-item:last-child {
    cursor: default;
    margin-left: 34px
}

.header .nav-item.lang-item span,.header .nav-item:last-child span {
    opacity: .8
}

.header .nav-item.lang-item .nav-lang,.header .nav-item:last-child .nav-lang {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    color: #888
}

.header .nav-item.lang-item .nav-lang:hover,.header .nav-item:last-child .nav-lang:hover {
    color: #409eff
}

.header .nav-item.lang-item .nav-lang.active,.header .nav-item:last-child .nav-lang.active {
    font-weight: 700;
    color: #409eff
}

.header .container {
    height: 100%;
    box-sizing: border-box
}

.header .nav-lang-spe {
    color: #888
}

.header h1 {
    margin: 0;
    float: left;
    font-size: 32px;
    font-weight: 400
}

.header h1 a {
    color: #333;
    text-decoration: none;
    display: block
}

.header h1 span {
    font-size: 12px;
    display: inline-block;
    width: 34px;
    height: 18px;
    border: 1px solid hsla(0,0%,100%,.5);
    text-align: center;
    line-height: 18px;
    vertical-align: middle;
    margin-left: 10px;
    border-radius: 3px
}

.header .nav {
    float: right;
    height: 100%;
    line-height: 80px;
    background: transparent;
    padding: 0;
    margin: 0
}

.header .nav-gap {
    position: relative;
    width: 1px;
    height: 80px;
    padding: 0 20px
}

.header .nav-gap:before {
    content: "";
    position: absolute;
    top: calc(50% - 8px);
    width: 1px;
    height: 16px;
    background: #ebebeb
}

.header .nav-logo-small,.header .nav-logo {
    vertical-align: sub
}

.header .nav-logo-small {
    display: none
}

.header .nav-item {
    margin: 0;
    float: left;
    list-style: none;
    position: relative;
    cursor: pointer
}

.header .nav-item a.active:after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 15px;
    left: calc(50% - 7px);
    width: 14px;
    height: 4px;
    background: #409eff
}

.header .nav-item a {
    text-decoration: none;
    color: #888;
    display: block;
    padding: 0 22px
}

.header .nav-item a.active,.header .nav-item a:hover {
    color: #333
}

.header .nav-item.nav-algolia-search {
    cursor: default
}
</style>
<template>
  <div class="headerWrapper">
    <header class="header" ref="header">
      <div class="container">
        <h1><router-link :to="`/${ lang }`">
          <!-- logo -->
          <slot>
            <img
              src="../assets/images/element-logo.svg"
              alt="element-logo"
              class="nav-logo">
            <img
              src="../assets/images/element-logo-small.svg"
              alt="element-logo"
              class="nav-logo-small">
          </slot>

        </router-link></h1>

        <!-- nav -->
        <ul class="nav">
          <li class="nav-item">
            <router-link
              active-class="active"
              :to="`/${ lang }/guide`">{{ langConfig.guide }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              :to="`/${ lang }/component`">{{ langConfig.components }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              :to="`/${ lang }/resource`"
              exact>{{ langConfig.resource }}
            </router-link>
          </li>

          <!-- gap -->
          <li class="nav-item" v-show="isComponentPage">
            <div class="nav-gap"></div>
          </li>

          <!-- 版本选择器 -->


          <!-- lang -->
          <li class="nav-item lang-item">
            <span
              class="nav-lang"
              :class="{ 'active': lang === 'zh-CN' }"
              @click="switchLang('zh-CN')">
              中文
            </span>
            <span class="nav-lang-spe"> / </span>
            <span
              class="nav-lang"
              :class="{ 'active': lang === 'en-US' }"
              @click="switchLang('en-US')">
              En
            </span>
          </li>
          
          <!--theme picker-->
          <li class="nav-item nav-theme-switch" v-show="isComponentPage">
            <!-- <theme-picker></theme-picker> -->
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
<script>
  // import ThemePicker from './theme-picker.vue';
  // import AlgoliaSearch from './search.vue';
  import compoLang from '../i18n/component.json';
  // import { version } from 'main/index.js';
  const version = '1.0.0'

  export default {
    data() {
      return {
        active: '',
        versions: [],
        version,
        dropdownVisible: true
      };
    },

    components: {
      // ThemePicker,
      // AlgoliaSearch
    },

    computed: {
      lang() {
        return this.$route.path.split('/')[1] || 'zh-CN';
      },
      langConfig() {
        return compoLang.filter(config => config.lang === this.lang)[0]['header'];
      },
      isComponentPage() {
        return /^component/.test(this.$route.name);
      }
    },

    methods: {
      switchVersion(version) {
        if (version === this.version) return;
        location.href = `${ location.origin }/${ this.versions[version] }/${ location.hash } `;
      },

      switchLang(targetLang) {
        if (this.lang === targetLang) return;
        localStorage.setItem('ELEMENT_LANGUAGE', targetLang);
        this.$router.push(this.$route.path.replace(this.lang, targetLang));
      },

      handleDropdownToggle(visible) {
        this.dropdownVisible = visible;
      }
    },

    created() {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = _ => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const versions = JSON.parse(xhr.responseText);
          this.versions = Object.keys(versions).slice(-2).reduce((prev, next) => {
            prev[next] = versions[next];
            return prev;
          }, {});
        }
      };
      xhr.open('GET', '/versions.json');
      xhr.send();
    }
  };
</script>
