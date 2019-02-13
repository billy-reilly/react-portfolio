import { List } from 'immutable'
import moment from 'moment'

import Repo from '../records/Repo'

export const fetchRepos = async () => {
  const result = await fetch('https://api.github.com/users/billy-reilly/repos')
  const data = await result.json()
  const resolvedRepos = List(data.map(item => Repo.fromResponse(item)))
  return resolvedRepos
    .filter(repo =>
      repo.lastUpdated.isAfter(moment().subtract(12, 'months'))
      && !repo.isFork
    )
    .sortBy(repo => repo.lastUpdated)
    .reverse()
}

export const fetchTopics = async (repoName) => {
  const result = await fetch(
    `https://api.github.com/repos/billy-reilly/${repoName}/topics`,
    {
      headers: {
        "Accept": "application/vnd.github.mercy-preview+json"
      }
    }
  )
  const res = await result.json()
  return List(res.names)
}
