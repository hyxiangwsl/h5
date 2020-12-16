module.exports = {
    publicPath: "./",
    devServer: {
        open: true,
        host: 'localhost',
        port: 8088,
        proxy: {
            '/api': {
                target: 'https://api.wonabuy.com/api', //高德接口
                ws: true, // 是否启用websockets
                changeOrigin: true, //是否允许跨越
                "secure": false, //证书免校验
                pathRewrite: {
                    '^/api': ''
                },
            }
        }
    },
}