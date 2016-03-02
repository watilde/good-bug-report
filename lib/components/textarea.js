import React from 'react'
import { useSheet } from '../jss'
import ids from '../util/ids'

const styles = {
}

const Textarea = React.createClass({
  componentDidMount() {
    componentHandler.upgradeDom()
  },
  render() {
    return (
      <div>
        <h3>{this.props.field.label}</h3>
        <div className="gbr-textfield mdl-textfield mdl-js-textfield">
          <textarea
            className="mdl-textfield__input"
            type="text"
            rows= "3"
            name={ids()}
            required={this.props.field.required ? true : false }></textarea>
          <label className="mdl-textfield__label">{this.props.field.placeholder}</label>
        </div>
      </div>
    )
  }
})

export default useSheet(Textarea, styles)
