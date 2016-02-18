var React = require('react')
var useSheet = require('../jss').useSheet

var Header = require('./header')
var Footer = require('./footer')

var styles = {
}

var App = React.createClass({
  render: function () {
    return (
      <div class="gbr-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
        <Header />
        <div class="gbr-ribbon"></div>
        <Footer />
      </div>
    )
  }
})

module.exports = useSheet(App, styles)
