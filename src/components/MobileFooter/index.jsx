import React from 'react'

import links from '../../constants/links'

import ExternalLink from '../ExternalLink'

import './MobileFooter.css'

export default function MobileFooter() {
  return (
    <div className="mobile-footer">
      <hr />
      <div className="footer-links__wrapper">
        { links.map(linkProps =>
          <ExternalLink key={linkProps.name}
            { ...linkProps }
            className="footer__link" />
        )}
      </div>
    </div>
  )
}
