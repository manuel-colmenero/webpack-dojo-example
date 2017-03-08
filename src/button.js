require(["esri/map", "dijit/form/Button", "dojo/dom","dojo/domReady!"], function(Map, Button, dom){
    // Create a button programmatically:
    var map = new Map("map", {
      center: [-118, 34.5],
      zoom: 8,
      basemap: "topo"
    });
});

//var dojoRequire = require("dojo-webpack-loader/lib/dojo-require");
