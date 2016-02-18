import React from 'react'
import { useSheet } from '../jss'

const styles = {
}

const Home = React.createClass({
  render() {
    return (
      <h1>Hello World!</h1>
    )
  }
})

export default useSheet(Home, styles)
