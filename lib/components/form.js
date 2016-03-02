import React from 'react'
import request from 'axios'
import { useSheet } from '../jss'
import { endpoints } from '../config'
import ids from '../util/ids'

import InputText from './input-text'
import InputCheckboxes from './input-checkboxes'
import InputRadios from './input-radios'
import Textarea from './textarea'

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
    if (!this.state.data.fields.length) {
      return false
    }
    const formComponents = this.state.data.fields.map( (field, idx) => {
      if (field.type === 'text') {
        return <InputText field={field} key={ids()}/>
      } else if (field.type === 'radio') {
        return <InputRadios field={field} key={ids()}/>
      } else if (field.type === 'checkbox') {
        return <InputCheckboxes field={field} key={ids()}/>
      } else if (field.type === 'textarea') {
        return <Textarea field={field} key={ids()}/>
      }
    })
    return (
      <div>
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
        {formComponents}
      </div>
    )
  }
})

export default useSheet(Form, styles)
