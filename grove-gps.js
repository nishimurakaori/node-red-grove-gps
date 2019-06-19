/*
const nmea = require('node-nmea');
 
const raw = '$GPRMC,161006.425,A,7855.6020,S,13843.8900,E,154.89,84.62,110715,173.1,W,A*30';
const data = nmea.parse(raw);

*/
const nmea = require('node-nmea');
module.exports = function(RED) {
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