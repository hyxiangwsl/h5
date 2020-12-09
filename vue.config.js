module.exports = {
    publicPath: "./",
    devServer: {
        open: true,
        host: 'localhost',
        port: 8088,
        proxy: {
            '/HWapi': {
                target: 'https://e098085885d74eb689201479625e8f1a.apig.cn-north-4.huaweicloudapis.com', //高德接口
                ws: true, // 是否启用websockets
                changeOrigin: true, //是否允许跨越
                "secure": false, //证书免校验
                pathRewrite: {
                    '^/HWapi': ''
                },
            }
        }
    },
}