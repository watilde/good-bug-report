var React = require('react')
var useSheet = require('../jss').useSheet

var styles = {
}

var Home = React.createClass({
  render: function () {
    return (
      <h1>Hello World!</h1>
    )
  }
})

module.exports = useSheet(Home, styles)
