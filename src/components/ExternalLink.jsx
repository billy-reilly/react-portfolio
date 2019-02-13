import React from 'react'
import PropTypes from 'prop-types'

export default function ExternalLink({ name, url, className }) {
  return (
    <a className={ className }
      rel="noopener noreferrer"
      target="_blank"
      href={ url }>
      { name }
    </a>
  )
}

ExternalLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
