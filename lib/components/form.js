import React from 'react'
import request from 'axios'
import { useSheet } from '../jss'
import { endpoints } from '../config'

const styles = {
}

const Form = React.createClass({
  getInitialState() {
    return {
      account: '',
      repository: '',
      data: {
        title: '---',
        fields: []
      }
    }
  },
  componentDidMount() {
    let { account, repository } = this.props.params
    let json = `${endpoints.rawgit}${account}/${repository}/master/issue.json`
    this.setState({
      account: account,
      repository: repository
    })
    this.serverRequest = request.get(json).then( (res) => {
      if (this.isMounted()) {
        this.setState({
          data: res.data
        })
      }
    })
  },
  render() {
    return (
      <dl>
        <dt>account</dt>
        <dd>{this.state.account}</dd>
        <dt>repository</dt>
        <dd>{this.state.repository}</dd>
        <dt>title</dt>
        <dd>{ this.state.data.title }</dd>
        <dt>fields.length</dt>
        <dd>{ this.state.data.fields.length }</dd>
      </dl>
    )
  }
})

export default useSheet(Form, styles)
