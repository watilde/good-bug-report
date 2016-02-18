var ReactRouter = require('react-router')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route
var hashHistory = ReactRouter.hashHistory

var App = require('./components/app')
var Home = require('./components/home')

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
)

module.exports = routes
