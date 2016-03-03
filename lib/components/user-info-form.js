import React from 'react'
import { useSheet } from '../jss'

const styles = {
}

const UserInfoForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  propTypes: {
    initialCanTransit: React.PropTypes.bool
  },
  getDefaultProps() {
    return {
      initialCanTransit: false
    }
  },
  getInitialState() {
    return {
      account: '',
      repository: '',
      canTransit: this.props.initialCanTransit
    }
  },
  componentDidMount() {
    componentHandler.upgradeDom()
  },
  onClick() {
    this.context.router.push({
      pathname: `/${this.state.account}/${this.state.repository}`
    })
  },
  onChangeAccount(e) {
    this.setState({account: e.target.value})
    this.checkAllValue()
  },
  onChangeRepository(e) {
    this.setState({repository: e.target.value})
    this.checkAllValue()
  },
  checkAllValue() {
    const account = this.state.account.trim()
    const repository = this.state.repository.trim()
    this.setState({canTransit: (account && repository)})
  },
  render() {
    return (
      <div>
        <label>
          <span>account: </span>
          <input type="text" value={this.state.account} onChange={this.onChangeAccount} onBlur={this.checkAllValue} />
        </label>
        <label>
          <span>repository: </span>
          <input type="text" value={this.state.repository} onChange={this.onChangeRepository} onBlur={this.checkAllValue} />
        </label>
        <button onClick={this.onClick} type="button" disabled={!this.state.canTransit}>Go</button>
      </div>
    )
  }
})

export default useSheet(UserInfoForm, styles)
