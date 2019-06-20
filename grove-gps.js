module.exports = function(RED) {
    const nmea = require('node-nmea');
    function GroveGpsNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            msg.payload = msg.payload.nmea.parse(msg.payload);
            node.send(msg);
        });
    }
    RED.nodes.registerType("grove-gps",GroveGpsNode);
}