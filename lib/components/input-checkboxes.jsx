import React from 'react'
import { useSheet } from '../jss'
import ids from '../util/ids'

import InputCheckbox from './input-checkbox.jsx'

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
        {this.props.field.values.map((value, i) => {
          const key = ids()
          return <InputCheckbox key={key} name={key} value={value} />
        })}
      </div>
    )
  }
})

export default useSheet(InputCheckboxes, styles)
