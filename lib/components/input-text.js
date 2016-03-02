import React from 'react'
import { useSheet } from '../jss'

const styles = {
}

const InputText = React.createClass({
  componentDidMount() {
    componentHandler.upgradeDom()
  },
  render() {
    return (
      <div>
        <h3>{this.props.field.label}</h3>
        <div className="gbr-textfield mdl-textfield mdl-js-textfield">
          <input
            className="mdl-textfield__input"
            type="text"
            defaultValue=""
            required={this.props.field.required ? true : false } />
          <label className="mdl-textfield__label">{this.props.field.placeholder}</label>
        </div>
      </div>
    )
  }
})

export default useSheet(InputText, styles)
