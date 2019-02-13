import React, { Component } from 'react'
import { List } from 'immutable'

import { fetchRepos } from '../../services/GithubService'

import Project from './Project'

export default class Projects extends Component {
  state = {
    repos: new List(),
    displayError: false
  }

  async componentDidMount() {
    try {
      const repos = await fetchRepos()
      this.setState({ repos })
    } catch (e) {
      this.setState({ displayError: true })
    }
  }

  renderError() {
    return (
      '🤦 Whoops looks like there\'s an issue... I guess you\'ll just have to take my word that I\'ve done loads of impressive stuff!'
    )
  }

  render () {
    const { repos, displayError } = this.state
    return (
      <div>
        <h2>Side Projects</h2>
        { displayError ?
          this.renderError()
          : (
            <>
              <p>Here are some projects that I've recently been working on in my spare time:</p>
              { repos.size ?
                repos.map(repo => <Project key={ repo.name } data={ repo } />)
                : 'LOADING'
              }
            </>
          )
        }
      </div>
    )
  }
}