var React = require('react')
var useSheet = require('../jss').useSheet

var styles = {
}

var Footer = React.createClass({
  render: function () {
    return (
      <footer className="gbr-footer mdl-mini-footer">
        <div className="mdl-mini-footer--left-section">
          <ul className="mdl-mini-footer--link-list">
            <li>created by <a href="https://twitter.com/watilde">@watilde</a></li>
          </ul>
        </div>
      </footer>
    )
  }
})

module.exports = useSheet(Footer, styles)
