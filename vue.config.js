module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'test') {
            config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
            config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
            config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']
        }
    },
    productionSourceMap: false,
    // productionSourceMap:true,   //开发环境
    configureWebpack: {
        // devtool
        devtool: 'cheap-module-eval-source-map'
    },
    publicPath: '/',
    devServer: {
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        port: 3000,
        proxy: {
            '/api': {
                target: process.env.VUE_APP_URL,
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                args[0].title = process.env.VUE_APP_WS_NAME
                return args;
            })
    }

}