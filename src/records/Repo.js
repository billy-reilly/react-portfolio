import { Record as record } from 'immutable'
import moment from 'moment'

const defaults = {
  name: '',
  url: '',
  lastUpdated: null,
  description: '',
  tagsUrl: '',
  isFork: false
}

export default class Repo extends record(defaults) {
  static fromResponse(res) {
    return new Repo({
      name: res.name,
      url: res.html_url,
      lastUpdated: moment(res.updated_at),
      description: res.description,
      tagsUrl: res.tags_url,
      isFork: res.fork
    })
  }
}
