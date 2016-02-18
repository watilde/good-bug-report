var React = require('react')
var useSheet = require('../jss').useSheet

var styles = {
}

var Footer = React.createClass({
  render: function () {
    return (
      <footer class="gbr-footer mdl-mini-footer">
        <div class="mdl-mini-footer--left-section">
          <ul class="mdl-mini-footer--link-list">
            <li>created by <a href="https://twitter.com/watilde">@watilde</a></li>
          </ul>
        </div>
      </footer>
    )
  }
})

module.exports = useSheet(Footer, styles)
