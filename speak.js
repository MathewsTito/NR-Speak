
var util = require("util");
var sys = require('sys');
var exec = require('child_process').exec;
var execSync = require("exec-sync");
var child;


module.exports = function(RED){
    function Speak(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg){
            var text = msg.payload;
	    var arrayOfLines = text.split("\. ");
	    for (i=0;i<arrayOfLines.length; i++){
            	if (arrayOfLines[i] !== ""){		
		   var command = "./nodes/mathewstito-nodes/speak.sh "+arrayOfLines[i];
            	   util.log(command);
            	   child = execSync(command, function(error,stdout,stderr){
	                util.log('stdout:' + stdout);
        	        util.log('stderr:' + stderr);
                	if (error != null){
                    		util.log('exec error:'+ error);
                
	                }
            
            	   });
		}
	    }	

            node.send(msg);
        });

    }
    
    RED.nodes.registerType("speak",Speak);

}
