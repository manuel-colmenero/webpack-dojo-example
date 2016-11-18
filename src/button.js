require(["dijit/form/Button", "dojo/dom","dojo/domReady!"], function(Button, dom){
    // Create a button programmatically:
    var myButton = new Button({
        label: "Click me!",
        onClick: function(){
            // Do something:
            console.log('Button clicked');
            dom.byId("result").innerHTML += "Thank you! ";
        }
    }, "myButton").startup();
});

//var dojoRequire = require("dojo-webpack-loader/lib/dojo-require");