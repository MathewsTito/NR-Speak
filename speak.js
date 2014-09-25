
var util = require("util");
var sys = require('sys');
var exec = require('child_process').exec;
var child;


module.exports = function(RED){
    function Speak(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg){
            var text = msg.payload;
            var command = "./nodes/mathewstito-nodes/speak.sh "+text;
            util.log(command);
            child = exec(command, function(error,stdout,stderr){
                util.log('stdout:' + stdout);
                util.log('stderr:' + stderr);
                if (error != null){
                    util.log('exec error:'+ error);
                }
            
            });

            node.send(msg);
        });

    }
    
    RED.nodes.registerType("speak",Speak);

}
