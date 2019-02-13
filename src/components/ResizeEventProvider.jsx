import { Component } from 'react'
import PropTypes from 'prop-types'

export default class ResizeEventProvider extends Component {
  static propTypes = {
    onResizeEvent: PropTypes.func.isRequired
  }

  componentDidMount() {
    window.addEventListener('resize', this.props.onResizeEvent)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.props.onResizeEvent)
  }

  render () {
    return this.props.children
  }
}
