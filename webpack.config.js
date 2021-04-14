const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    // Entry nos permite decir el punto de entrada de nuestra aplicación
    entry: "./src/app.js",
    // Output nos permite decir hacia dónde va enviar lo que va a preparar webpacks
    output: {
        // path es donde estará la carpeta donde se guardará los archivos
        // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
        path: path.resolve(__dirname, "dist"),
        // filename le pone el nombre al archivo final
        filename: "main.js"
    },
    resolve: {
        // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
        extensions: [".js"]
    },
    module: {
        // REGLAS PARA TRABAJAR CON WEBPACK (LOADERS)
        rules: [{
                // Test declara que extensión de archivos aplicara el loader
                test: /\.m?js$/,
                // Use es un arreglo u objeto donde dices que loader aplicaras
                use: {
                    loader: "babel-loader"
                },
                // Exclude permite omitir archivos o carpetas especificas
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [
                    // { loader: MiniCssExtractPlugin.loader, },
                    // { loader: 'css-loader' },
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // CONFIGURACIÓN DEL PLUGIN
            inject: true, // INYECTA EL BUNDLE AL TEMPLATE HTML   default true ... true || 'head' || 'body' || false
            template: './public/index.html', // LA RUTA AL TEMPLATE HTML
            filename: './index.html' // NOMBRE FINAL DEL ARCHIVO
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, "src", "assets/pictures"),
                to: "assets/pictures"
            }]
        }),
    ],
    stats: {
        assets: true,
        children: true,
        // chunks: false,
        // errors: true,
        // errorDetails: true,
        // modules: false,
        // timings: true,
        // colors: true
    }
}