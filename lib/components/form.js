import React from 'react'
import request from 'axios'
import { useSheet } from '../jss'
import { endpoints } from '../config'
import ids from '../util/ids'

import InputText from './input-text'
import InputCheckboxes from './input-checkboxes'
import InputRadios from './input-radios'
import Textarea from './textarea'
import Agreement from './agreement'
import SubmitButton from './submit-button'

const styles = {
}

const Form = React.createClass({
  propTypes: {
    initialIsAgreed: React.PropTypes.bool
  },
  getDefaultProps() {
    return {
      initialIsAgreed: false
    }
  },
  getInitialState() {
    return {
      account: '',
      repository: '',
      data: {
        title: '---',
        fields: []
      },
      isAgreed : this.props.initialIsAgreed
    }
  },
  onSubmit() {
    console.log('submit')
  },
  toggleIsAgreed() {
    this.setState({
      isAgreed: !this.state.isAgreed
    })
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
      const key = ids()
      if (field.type === 'text') {
        return <InputText field={field} key={key} id={key}/>
      } else if (field.type === 'radio') {
        return <InputRadios field={field} key={key} id={key}/>
      } else if (field.type === 'checkbox') {
        return <InputCheckboxes field={field} key={key} id={key}/>
      } else if (field.type === 'textarea') {
        return <Textarea field={field} key={key} id={key}/>
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
        <Agreement toggleIsAgreed={this.toggleIsAgreed} />
        <SubmitButton isAgreed={this.state.isAgreed} onSubmit={this.onSubmit} />
      </div>
    )
  }
})

export default useSheet(Form, styles)
