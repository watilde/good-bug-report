import React from 'react'
import { useSheet } from '../jss'

import InputRadio from './input-radio'

const styles = {
}

const InputRadios = React.createClass({
  componentDidMount() {
    componentHandler.upgradeDom()
  },
  render() {
    return (
      <div>
        <h3>{this.props.field.label}</h3>
        {this.props.field.values.map((value, i) =>
          <InputRadio key={i} value={value} />
        )}
      </div>
    )
  }
})

export default useSheet(InputRadios, styles)
