import React from 'react'
import { useSheet } from '../jss'
import ids from '../util/ids'

import InputRadio from './input-radio'

const styles = {
}

const InputRadios = React.createClass({
  componentDidMount() {
    componentHandler.upgradeDom()
  },
  render() {
    const name = ids(true)
    return (
      <div>
        <h3>{this.props.field.label}</h3>
        {this.props.field.values.map((value, i) => {
          const key = ids()
          return <InputRadio key={ids()} name={name} value={value} />
        })}
      </div>
    )
  }
})

export default useSheet(InputRadios, styles)
