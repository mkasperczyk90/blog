var path = require('path');

module.exports = function() {
    return {
        entry: './app/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        }, 
        module: { 
            rules: [
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    use: [
                    'file-loader?publicPath=dist/',
                    'img-loader'
                    ]
                },
                { test: /\.css$/, loader: "style-loader!css-loader"  },
                { test: /\.less$/, loader: "style-loader!css-loader!less-loader"  },
                { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            ] 
        }
    }
};