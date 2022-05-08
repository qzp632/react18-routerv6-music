const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function(app) {
    app.use(
        '/v2',
        createProxyMiddleware({
            target: 'http://192.168.3.136:8080',
            changeOrigin: true,
            pathRewrite: {'^/v2': ''}
        })
    )
}