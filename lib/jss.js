var jss = require('jss').create()
jss.use(require('jss-vendor-prefixer'))
var useSheet = require('react-jss')(jss)

module.exports.useSheet = useSheet
