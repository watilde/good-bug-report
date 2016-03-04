import React from 'react'
import request from 'axios'
import { useSheet } from '../jss'
import { endpoints } from '../config'
import ids from '../util/ids'

import InputText from './input-text.jsx'
import InputCheckboxes from './input-checkboxes.jsx'
import InputRadios from './input-radios.jsx'
import Textarea from './textarea.jsx'
import Agreement from './agreement.jsx'
import SubmitButton from './submit-button.jsx'

const styles = {
}

const Form = React.createClass({
  propTypes: {
    initialIsAgreed: React.PropTypes.bool
  },
  getDefaultProps () {
    return {
      initialIsAgreed: false
    }
  },
  getInitialState () {
    return {
      account: '',
      repository: '',
      data: {
        title: '---',
        fields: []
      },
      isAgreed: this.props.initialIsAgreed
    }
  },
  onSubmit () {
    console.log('submit')
  },
  toggleIsAgreed () {
    this.setState({
      isAgreed: !this.state.isAgreed
    })
  },
  fetchData (account, repository) {
    if (!account || !repository) {
      return
    }
    const json = `${endpoints.rawgit}${account}/${repository}/master/issue.json`
    this.serverRequest = request.get(json).then((res) => {
      if (this.isMounted()) {
        this.setState({
          account: account,
          repository: repository,
          data: res.data
        })
      }
    })
  },
  componentWillReceiveProps (nextProps) {
    const { account, repository } = nextProps.params
    this.fetchData(account, repository)
  },
  componentDidMount () {
    const { account, repository } = this.props.params
    this.fetchData(account, repository)
  },
  render () {
    if (!this.state.data.fields.length) {
      return false
    }
    const formComponents = this.state.data.fields.map((field, idx) => {
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
      <div className='gbr-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col'>
        <h2 className='mdl-typography--text-center'>{this.state.data.title}</h2>
        <h3>Title</h3>
        <div className='gbr-textfield mdl-textfield mdl-js-textfield'>
          <input className='mdl-textfield__input' type='text' id='js-issue-title' />
          <label className='mdl-textfield__label' htmlFor='js-issue-title'>Title</label>
        </div>
        <h3>Description</h3>
        <div className='gbr-textfield mdl-textfield mdl-js-textfield'>
          <textarea className='mdl-textfield__input' type='text' rows='3' id='js-issue-description' ></textarea>
          <label className='mdl-textfield__label' htmlFor='js-issue-description'>Leave a comment</label>
        </div>
        {formComponents}
        <div className='gbr-content-footer'>
          <Agreement isAgreed={this.state.isAgreed} toggleIsAgreed={this.toggleIsAgreed} />
          <div className='mdl-typography--text-center'>
            <SubmitButton isAgreed={this.state.isAgreed} onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    )
  }
})

export default useSheet(Form, styles)
