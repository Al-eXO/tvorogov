const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const pug = require('./config/pug');
const images = require('./config/images');
const fonts = require('./config/fonts');
const typescript = require('./config/typescript');
const styl = require('./config/stylus');
const sass = require('./config/sass');
const less = require('./config/less');
const css = require('./config/css');
const extractCSS = require('./config/css.extract');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

let babelOptions = {
    "presets": "es2015"
};

const common = merge([{
        entry: {
            'index': PATHS.source + '/pages/index/index.js',
            'about': PATHS.source + '/pages/about/about.js',
        },
        output: {
            path: PATHS.build,
            filename: '[name].js'
        },
        cache: false,
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common' ],
                template: PATHS.source + '/pages/index/index.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'about.html',
                chunks: ['about', 'common' ],
                template: PATHS.source + '/pages/about/about.pug'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                magnificPopup: 'magnific-popup',
                Inputmask: 'inputmask'
            })
        ],

        resolve: {
            extensions: [".tsx", ".ts", ".js"]
        },

        module: {
            rules: []
        },
        devServer: {
            stats: 'errors-only',
            port: 9000
        }
    },
    pug(),
    images(),
    fonts.loadFonts({
        options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts/'
        },
    }),
]);

module.exports = function(env) {
    if (env === 'production'){
        return merge([
            common,
            extractCSS()
        ]);
    }
    if (env === 'development'){
        return merge([
            common,
            typescript(),
            styl(),
            sass(),
            less(),
            css()
        ])
    }
};