import React from 'react'
import { useSheet } from '../jss'

import Header from './header.jsx'
import Footer from './footer.jsx'
import Form from './form.jsx'
import UserInfoForm from './user-info-form.jsx'
import { Link } from 'react-router'


const styles = {
}

const App = React.createClass({
  render() {
    return (
      <div>
        <div className="gbr-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
          <Header />
          <div className="gbr-ribbon"></div>
          <main className="gbr-main mdl-layout__content">

            <ul>
              <li>
                <Link to="/">TOP</Link>
              </li>
              <li>
                <Link to="/watilde/issue-json">watilde/issue-json</Link>
              </li>
            </ul>

            <UserInfoForm />

            <div className="gbr-container mdl-grid">
              <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
              {this.props.children}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    )
  }
})

export default useSheet(App, styles)
