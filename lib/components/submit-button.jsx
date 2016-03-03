import React from 'react'
import { useSheet } from '../jss'

const styles = {
}

const SubmitButton = React.createClass({
  propTypes: {
    isAgreed: React.PropTypes.bool.isRequired,
    onSubmit: React.PropTypes.func.isRequired
  },
  componentDidMount () {
    componentHandler.upgradeDom()
  },
  _onSubmit () {
    this.props.onSubmit()
  },
  render () {
    return (
      <button onClick={this._onSubmit} type='button' className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored' disabled={!!this.props.isAgreed}>
        Submit
      </button>
    )
  }
})

export default useSheet(SubmitButton, styles)
