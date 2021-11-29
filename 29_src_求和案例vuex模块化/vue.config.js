module.exports = {
    pages: {
        index: {
            // 入口
            entry: 'src/main.js',
        }
    },
    lintOnSave: false, // 关闭语法检查
    // // 开启代理服务器(方式1)
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // },
    // 开启代理服务器(方式2)
    devServer: {
        proxy: {
            '/atguigu': {
                target: 'http://localhost:5000',
                pathRewrite: { '^/atguigu': '' },
                ws: true,
                changeOrigin: true
            },
            '/demo': {
                target: 'http://localhost:5001',
                pathRewrite: { '^/atguigu': '' },
                ws: true,
                changeOrigin: true
            }
        }
    }
}