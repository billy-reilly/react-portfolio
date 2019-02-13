import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { List } from 'immutable'

import { fetchTopics } from '../../services/GithubService'
import Repo from '../../records/Repo'

import ExternalLink from '../ExternalLink'

import './Projects.css'

export default class Project extends PureComponent {
  static propTypes = {
    data: PropTypes.instanceOf(Repo).isRequired
  }

  state = {
    topics: new List()
  }

  async componentDidMount() {
    try {
      const topics = await fetchTopics(this.props.data.name)
      this.setState({ topics })
    } catch (e) {
      console.error('error fetching repository projects', e)
    }
  }

  render() {
    const { data } = this.props
    const { topics } = this.state
    return (
      <div className="project__wrapper">
      <div className="project-heading">
        <h3>
          <ExternalLink url={data.get('url')} name={data.get('name')} />
          <small className="date-edited">
            { `Last edited: ${data.lastUpdated}` }
          </small>
        </h3>
      </div>
      <div className="project-body">
        <p>{ data.description }</p>
      </div>
      { !!topics.size &&
        <div className="project-footer">
          { topics.map(topic => <div className="topic" key={ topic }>{ topic }</div>) }
        </div>
      }
    </div>
    )
  }
}
