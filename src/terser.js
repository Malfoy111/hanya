
// Import Terser so we can use it
const { minify } = require('terser');

// Import fs so we can read/write files
//const fs = require('fs');

// Define the config for how Terser should minify the code
// This is set to how you currently have this web tool configured
const configs = {
  compress: {
    dead_code: true,
    drop_console: false,
    drop_debugger: true,
    keep_classnames: false,
    keep_fargs: true,
    keep_fnames: false,
    keep_infinity: false
  },
  mangle: {
    eval: false,
    keep_classnames: false,
    keep_fnames: false,
    toplevel: false,
    safari10: false
  },
  module: false,
  sourceMap: false,
  output: {
    comments: 'some'
  }
};

module.exports = {minify, configs}
