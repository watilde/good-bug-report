import React from 'react'
import { useSheet } from '../jss'

const styles = {
}

const InputRadio = React.createClass({
  componentDidMount () {
    componentHandler.upgradeDom()
  },
  render () {
    return (
      <label className='gbr-radio mdl-radio mdl-js-radio mdl-js-ripple-effect'>
        <input type='radio' className='mdl-radio__button' name={this.props.name} defaultValue={this.props.value} />
        <span className='mdl-radio__label'>{this.props.value}</span>
      </label>
    )
  }
})

export default useSheet(InputRadio, styles)
