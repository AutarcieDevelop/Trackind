const fetch = require("node-fetch");
var wifiscanner = require('node-wifiscanner')

const getMacAddresses = () =>{
    wifiscanner.scan((err, data)=>{
        if (err) {
            console.log("Error : " + err);
            return;
        }
        //google is expecting the object to look a bit
        //different than what we get back from wifi-scanner
        //reformat the mac addresses below
        var macs = data.map(x=>{
            var obj = {}
            obj['macAddress'] = x.mac
            return obj
        })
    });
}

module.exports = getMacAddresses()