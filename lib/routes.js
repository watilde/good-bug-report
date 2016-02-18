import { hashHistory, Router, Route, Link } from 'react-router'
import App from './components/app'
import Home from './components/home'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
)

export default routes
