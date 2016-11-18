# 

# Simplest possible working smaple for dojo project packaged with webpack

Building large dojo/dijit projects with dojo build is not the prettiest of experiences. And the resulting builds tend to be fairly slow.
Additionaly I haven't managed to get sourcemaps to work so I set out to find a more modern way to achieve a similar effect to dojo layers.

[webpack](http://webpack.github.io/docs/) seems to be one of the possible alternatives (and [browserify](http://browserify.org) might be another)
[dojo-webpack-loader](https://github.com/Nordth/dojo-webpack-loader) implements a loader to bundle dojo/dijit projects with webpack

## Prerequisites

* nodejs (and npm) installed
* some nodejs http server module to test result (like http-server)



