import React from 'react'
import { useSheet } from '../jss'

const styles = {
}

const InputCheckbox = React.createClass({
  componentDidMount() {
    componentHandler.upgradeDom()
  },
  render() {
    return (
      <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
        <input type="checkbox" className="mdl-checkbox__input" defaultValue={this.props.value} />
        <span className="mdl-checkbox__label">{this.props.value}</span>
      </label>
    )
  }
})

export default useSheet(InputCheckbox, styles)
