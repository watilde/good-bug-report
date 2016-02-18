import React from 'react'
import { useSheet } from '../jss'

import Header from './header'
import Footer from './footer'

var styles = {
}

var App = React.createClass({
  render() {
    return (
      <div className="gbr-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
        <Header />
        <div className="gbr-ribbon"></div>
        <Footer />
      </div>
    )
  }
})

export default useSheet(App, styles)
