import React from 'react'
import { useSheet } from '../jss'

const styles = {
}

const Footer = React.createClass({
  render () {
    return (
      <footer className='gbr-footer mdl-mini-footer'>
        <div className='mdl-mini-footer--left-section'>
          <ul className='mdl-mini-footer--link-list'>
            <li>
              created by
              <a href='https://twitter.com/watilde'>@watilde</a>
              &nbsp;and&nbsp;
              <a href='https://twitter.com/geckotang'>@geckotang</a>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
})

export default useSheet(Footer, styles)
