# 

# Simplest possible working sample for dojo project packaged with webpack

Building large dojo/dijit projects with dojo build is not the prettiest of experiences. And the resulting builds tend to be fairly slow.
Additionaly I haven't managed to get sourcemaps to work so I set out to find a more modern way to achieve a similar effect to dojo layers.

[webpack](http://webpack.github.io/docs/) seems to be one of the possible alternatives (and [browserify](http://browserify.org) might be another)
[dojo-webpack-loader](https://github.com/Nordth/dojo-webpack-loader) implements a loader to bundle dojo/dijit projects with webpack

## Prerequisites

* nodejs (and npm) installed
* some nodejs http server module to test result (like http-server)

## Steps

```bash
npm install
bower install
webpack --progress --colors  --optimize-minify
http-server ./
```
Then open http://localhost:8080/button.html in your browser. Open your developer tools and check whether you can see the source of e.g.
dojo/dijit/form/Button.js (to be found in the resource named 1.1.bundle.js)

![devtools screenshot](https://github.com/joeslow/dojo-dijit-webpack-sample/blob/master/devtools.jpeg "devtools screenshot")

The dojo code that is loaded in the button.html file is the (web-)packed version. The code is obviously trivial (and taken straight from the 
[dojo reference page sample](https://dojotoolkit.org/reference-guide/1.10/dijit/form/Button.html#dijit-form-button) ).

The webpack.config.js file has been modified from the samples found [here](https://github.com/Nordth/dojo-webpack-loader-examples) in that it adds
another loader config:
```json
alias: { "dojo/domReady": 'raw-loader' }
```

which solved a problem when using dojo/domReady! in your dojo files - a dreaded error like

```bash
ERROR in ./src/button.js
Module not found: Error: Cannot resolve module 'dojo/domReady' in /Users/joerg/dev/dojo-dijit-webpack-sample/src
 @ ./src/button.js 1:0-11:2
```