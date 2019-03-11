const path = require('path')
module.exports = {
    mode: 'production',
    entry: {
        guaui: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'GuaUI',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
}