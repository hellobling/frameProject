module.exports = {
  debug: {
    proxyTable: {
      '/liang': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/liang/(\\w+)': '/debug/$1.json'
        }
      }
    }
  },
  development: {
    proxyTable: {
      '/liang': {
        target: 'http://127.0.0.1:8081'
      },
      '/liang/logout': {
        target: 'http://127.0.0.1:8081'
      }
    }
  },
  release: {
    proxyTable: {
      '/liang': {
        target: 'https://127.0.0.1:8081'
      }
    }
  }
}
