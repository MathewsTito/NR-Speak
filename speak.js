

var say = require('say');
var sys = require('sys');
var exec = require('child_process').exec;
var child;


module.exports = function(RED){
    function Speak(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg){
            var text = msg.payload;
            var command = "./speak.sh "+text;
            function puts(error,stdout,stderr) { sys.puts(stdout) }
            exec(command);
            //say.speak('Tito',text);
            node.send(msg);
        });

    }
    
    RED.nodes.registerType("speak",Speak);

}
