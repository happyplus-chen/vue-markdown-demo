'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  // postcss: [require("postcss-salad")({
  //   "browsers": ["ie > 8", "last 2 versions"],
  //   "features": {
  //     "bem": {
  //       "shortcuts": {
  //         "component": "b",
  //         "modifier": "m",
  //         "descendent": "e"
  //       },
  //       "separators": {
  //         "descendent": "__",
  //         "modifier": "--"
  //       }
  //     }
  //   }
  // })]
}
