const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// const { loader } = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');


module.exports = {
    // Entry nos permite decir el punto de entrada de nuestra aplicación
    entry: "./src/app.js",
    // Output nos permite decir hacia dónde va enviar lo que va a preparar webpacks
    output: {
        // path es donde estará la carpeta donde se guardará los archivos
        // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
        path: path.resolve(__dirname, "dist"),
        // filename le pone el nombre al archivo final
        filename: "[name].[contenthash].js", // el hash nos indicarà si hay cambios en el build...
        assetModuleFilename: 'assets/pictures/[hash][ext][query]' // para que las imàgenes hasheadas se almacenen en un path especìfico #2-assetsmodule
            // assetModuleFilename: 'assets/pictures/[hash][ext]'  // para que las imàgenes hasheadas se almacenen en un path especìfico #2-assetsmodule
    },
    mode: 'development',
    resolve: {
        // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
        extensions: [".js"],
        alias: {
            '@images': path.resolve(__dirname, 'src/assets/pictures/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            // '@fonts': path.resolve(__dirname, 'src/assets/fonts/'),
            '@templates': path.resolve(__dirname, '/public/'),
        },
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
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]
            },
            // loader para la importaciòn de imàgenes dentro del mismo js (util for react o vue js) #2-assetsmodule (no requiere alguna dependencia- webpack ya lo incluye)
            {
                test: /\.png/,
                type: "asset/resource"
            },
            // loader para fuentes de tipo woff o woff2 (no requiere alguna dependencia- webpack ya lo incluye)
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000, // O LE PASAMOS UN BOOLEANOS TRUE O FALSE
                        // Habilita o deshabilita la transformación de archivos en base64.
                        mimetype: 'aplication/font-woff',
                        // Especifica el tipo MIME con el que se alineará el archivo. 
                        // Los MIME Types (Multipurpose Internet Mail Extensions)
                        // son la manera standard de mandar contenido a través de la red.
                        name: "[name].[ext]",
                        // EL NOMBRE INICIAL DEL ARCHIVO + SU EXTENSIÓN
                        // PUEDES AGREGARLE [name]hola.[ext] y el output del archivo seria 
                        // ubuntu-regularhola.woff
                        outputPath: './assets/fonts/',
                        // EL DIRECTORIO DE SALIDA DONDE IRÀ EL RECURSO  
                        publicPath: '../assets/fonts/', // '..' porque el css se llevò a la carpeta assets con el plugin MiniCssExtractPlugin*
                        // EL DIRECTORIO PUBLICO O RAÌZ DEL BUNDLE 
                        esModule: false
                            // AVISAR EXPLICITAMENTE SI ES UN MODULO
                    }
                }
            },
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // CONFIGURACIÓN DEL PLUGIN
            // inject: true, // INYECTA EL BUNDLE AL TEMPLATE HTML   default true ... true || 'head' || 'body' || false
            inject: 'body', // INYECTA EL BUNDLE AL TEMPLATE HTML   default true ... true || 'head' || 'body' || false
            template: './public/index.html', // LA RUTA AL TEMPLATE HTML
            filename: './index.html' // NOMBRE FINAL DEL ARCHIVO
        }),
        new MiniCssExtractPlugin({
            // filename: '[name].[contenthash].css',    // css en la raìz..
            filename: 'assets/[name].[contenthash].css',
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, "src", "assets/pictures"),
                to: "assets/pictures"
            }]
        }),
        new Dotenv()
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