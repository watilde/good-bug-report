var ReactRouter = require('react-router')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route
var hashHistory = ReactRouter.hashHistory

var App = require('./components/app')
var Home = require('./components/home')
var Form = require('./components/form')

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/:id" component={Form}></Route>
    </Route>
  </Router>
)

module.exports = routes
