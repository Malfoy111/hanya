

# Web XOR obfuscator 

example page [link](https://malfoy111.github.io/hanya/)
### config.js
```javascript
const path = require('path');
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-js',
    hanya: 'hanya.min.js'
  }
};
module.exports = config;
```
  