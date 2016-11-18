var webpack = require("webpack");
var path = require("path");

var entry_list = [
    "button"
];
var entry = {};
entry_list.forEach(function(e) { entry[e] = path.resolve(__dirname, "./src/" + e) });

module.exports = {
    entry: entry,
    resolveLoader: {
        modulesDirectories: [
            path.resolve(__dirname, './node_modules/')
        ],
        alias: { "dojo/domReady": 'raw-loader' }
    },
    resolve: {
        alias: {
            "dojo": path.resolve(__dirname, './dojo/dojo'),
            "dijit": path.resolve(__dirname, './dojo/dijit')
        }
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "dojo-webpack-loader",
                include: path.resolve(__dirname, '../dojo/'),
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'bundle/'),
        publicPath: "bundle/",
        filename: "[name].bundle.js"
    },

    dojoWebpackLoader: {
        // We should specify paths to core and dijit modules because we using both
        dojoCorePath: path.resolve(__dirname, './dojo/dojo'),
        dojoDijitPath: path.resolve(__dirname, './dojo/dijit'),

        // Languages for dojo/nls module which will be in result pack.
        includeLanguages: ['en', 'ru', 'fr']
    }

    // Minimal config if dijit package is not used:
    // dojoWebpackLoader: {
    //    dojoCorePath: path.resolve(__dirname, './dojo/dojo')
    //}


};