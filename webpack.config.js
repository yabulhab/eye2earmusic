var webpack = require('webpack');
var path    = require('path');

module.exports = {
    devtool: 'inline-source-map', // This will show line numbers where errors are accured in the terminal
    devServer: {
        historyApiFallback: true, // This will make the server understand "/some-link" routs instead of "/#/some-link"
    },
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/', // Specify the local server port
        'webpack/hot/only-dev-server', // Enable hot reloading
        './src/index' // This is where Webpack will be looking for the entry index.js file
    ],
    target: 'web',
    output: {
        path: path.join(__dirname, 'build'), // This is used to specify folder for producion bundle. Will not be used here, but it's a good practice to have it
        filename: 'bundle.js' // Filename for production bundle
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'], // Folders where Webpack is going to look for files to bundle together
        extensions: ['', '.js'],  // Extensions that Webpack is going to expect
        root: path.resolve("."),
        alias: {
            components: path.resolve(__dirname, "src/components"),
            imgs: path.resolve(__dirname, "src/imgs"),
            sized_imgs: path.resolve(__dirname, "src/imgs/sized"),
            styles: path.resolve(__dirname, "src/styles")
        }
    },
    module: {
        // Loaders allow you to preprocess files as you require() or “load” them. Loaders are kind of like “tasks” in other build tools, and provide a powerful way to handle frontend build steps.
        loaders: [
            {
                test: /\.jsx?$/, // Here we're going to use JS for react components but including JSX in case this extension is prefered
                exclude: /node_modules/, // Speaks for itself
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'] // Modules that help with hot reloading and ES6 transcription  
            }, 
            {
                test: /\.png$/, 
                loader: "url-loader?prefix=img/&limit=5000"
            },
            {
                test: /\.jpg$/, 
                loader: "url-loader?prefix=img/&limit=5000"
            },
            { 
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader?limit=10000&mimetype=application/font-woff" 
            },
            { 
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "file-loader" 
            },
            {
                test: /\.gif$/, 
                loader: "url-loader?prefix=img/&limit=5000"
            },
            {
                test: /\.less$/, loader: `style!css!less`
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Hot reloading
        new webpack.NoErrorsPlugin() // Webpack will let you know if there are any errors
    ]
}