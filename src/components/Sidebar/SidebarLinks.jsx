import React from 'react'

import links from '../../constants/links'

import ExternalLink from '../ExternalLink'

export default function SidebarLinks() {
  return (
    <div className="sidebar-links__wrapper">
      { links.map(linkProps =>
        <ExternalLink key={linkProps.name}
          { ...linkProps }
          className="sidebar_link" />
      )}
    </div>
  )
}
