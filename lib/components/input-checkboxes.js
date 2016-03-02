import React from 'react'
import { useSheet } from '../jss'

import InputCheckbox from './input-checkbox'

const styles = {
}

const InputCheckboxes = React.createClass({
  componentDidMount() {
    componentHandler.upgradeDom()
  },
  render() {
    return (
      <div>
        <h3>{this.props.field.label}</h3>
        {this.props.field.values.map((value, i) =>
          <InputCheckbox key={i} value={value} />
        )}
      </div>
    )
  }
})

export default useSheet(InputCheckboxes, styles)
