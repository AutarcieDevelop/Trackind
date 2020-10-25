var wifiscanner = require('node-wifiscanner')
var tril = require('./trilateration.js')

module.exports = {
    test: function (req, res) {
        tril.getMacAddress()
    },
}