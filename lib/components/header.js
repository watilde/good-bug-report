var React = require('react')
var useSheet = require('../jss').useSheet

var styles = {
}

var Header = React.createClass({
  render: function () {
    return (
      <header className="gbr-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
        <div className="mdl-layout__header-row">
          <h1 className="mdl-layout-title">💌 Good Bug Reporter</h1>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="https://github.com/watilde/issue-json/blob/master/issue.json" target="_blank">issue.json</a>
            <a className="mdl-navigation__link" href="https://github.com/watilde/good-bug-report" target="_blank">Fork</a>
          </nav>
        </div>
      </header>
    )
  }
})

module.exports = useSheet(Header, styles)