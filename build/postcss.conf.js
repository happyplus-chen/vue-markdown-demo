const config = {
    "browsers": ["ie > 8", "last 2 versions"],
    "features": {
      "bem": {
        "shortcuts": {
          "component": "b",
          "modifier": "m",
          "descendent": "e"
        },
        "separators": {
          "descendent": "__",
          "modifier": "--"
        }
      }
    }
  }
  
  exports.postcss = function(webapck) {
    saladConfig.features.partialImport = {
      addDependencyTo: webapck
    };
    return [
      require('postcss-salad')(saladConfig)
    ];
  };