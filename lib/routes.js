import { hashHistory, Router, Route, Link } from 'react-router'
import App from './components/app.jsx'
import Form from './components/form.jsx'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/:account/:repository" component={Form} />
    </Route>
  </Router>
)

export default routes
