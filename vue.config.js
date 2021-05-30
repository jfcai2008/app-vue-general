const path = require('path')
module.exports = {
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: '西城区综合执法平台',
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    }
  },
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://210.14.132.24:8011',
//         changeOrigin: false,
//         pathRewrite: {
//           '^/api': ''
//         }
//       },
//       '/cai': {
//         target: 'http://localhost:6002',
//         changeOrigin: false,
//         pathRewrite: {
//           '^/cai': ''
//         }
//       },
//       '/my': {
//         target: 'http://210.14.132.24:8012',
//         changeOrigin: false,
//         pathRewrite: {
//           '^/my': ''
//         }
//       }
//     }
//   }
}
