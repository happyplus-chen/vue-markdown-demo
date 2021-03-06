var striptags = require('./strip-tags');
var md = require('markdown-it')();
var slugify = require('transliteration').slugify;
function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
  });
  return str;
}

function wrap(render) {
  return function () {
    return render.apply(this, arguments)
      .replace('<code v-pre class="', '<code v-pre class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };
};

exports.getMarkDownSetting = function () {

  return {
    preset: 'default',
    breaks: true,
    preprocess: function (MarkdownIt, source) {
      MarkdownIt.renderer.rules.table_open = function () {
        return '<table class="table">';
      };
      MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
      return source;
    },
    use: [
      [require('markdown-it-anchor'), {
        level: 2,
        slugify: slugify,
        permalink: true,
        permalinkBefore: true
      }],
      [require('markdown-it-container'), 'demo', {
        validate: function (params) {
          return params.trim().match(/^demo\s*(.*)$/);
        },

        render: function (tokens, idx) {
          var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
          if (tokens[idx].nesting === 1) {
            var description = (m && m.length > 1) ? m[1] : '';
            var content = tokens[idx + 1].content;
            var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
            var script = striptags.fetch(content, 'script');
            var style = striptags.fetch(content, 'style');
            var jsfiddle = { html: html, script: script, style: style };
            var descriptionHTML = description
              ? md.render(description)
              : '';

            jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle));

            return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
                            <div class="source" slot="source">${html}</div>
                            ${descriptionHTML}
                            <div class="highlight" slot="highlight">`;
          }
          return '</div></demo-block>\n';
        }
      }],
      [require('markdown-it-container'), 'tip'],
      [require('markdown-it-container'), 'warning']
    ],
  }
}


