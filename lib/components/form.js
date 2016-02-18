var React = require('react')
var useSheet = require('../jss').useSheet

var styles = {
}

var Form = React.createClass({
  render: function () {
    return (
      <h2>Form</h2>
    )
  }
})

module.exports = useSheet(Form, styles)
