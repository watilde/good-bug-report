import React from 'react'
import { useSheet } from '../jss'
import ids from '../util/ids'

const styles = {
}

const Agreement = React.createClass({
  propTypes: {
    toggleIsAgreed: React.PropTypes.func.isRequired
  },
  componentDidMount() {
    componentHandler.upgradeDom()
  },
  _toggleIsAgreed() {
    this.props.toggleIsAgreed()
  },
  render() {
    return (
      <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
        <input type="checkbox" id={ids()} className="mdl-checkbox__input" onClick={this._toggleIsAgreed} />
        <span className="mdl-checkbox__label">Did you review the <a href="#" target="_blank">guidelines for contributing</a> to this repository?</span>
      </label>
    )
  }
})

export default useSheet(Agreement, styles)
