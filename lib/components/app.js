var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var useSheet = require('../jss').useSheet

var Header = require('./header')
var Footer = require('./footer')

var styles = {
}

var App = React.createClass({
  render: function () {
    return (
      <div>
        <div className="gbr-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
          <Header />
          <div className="gbr-ribbon"></div>
          <ul>
            <li><Link to="/">/</Link></li>
            <li><Link to="/watilde">/watilde</Link></li>
          </ul>
          {this.props.children}
          <Footer />
        </div>
      </div>
    )
  }
})

module.exports = useSheet(App, styles)
