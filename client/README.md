### 修改文件路径
  #### config/index.js
  - index: path.resolve(__dirname, '../../dist/index.html')
  - assetsRoot: path.resolve(__dirname, '../../dist')
  - assetsPublicPath: '/liang/'
  #### build/check-versions.js  &&  build/utils.js
  - const packageConfig = require('../../package.json')
