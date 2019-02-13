import React from 'react'

import SidebarLinks from './SidebarLinks'

import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar__container">
      <div className="sidebar__header">
        <h1>
          Billy
          <br />
          Reilly
        </h1>
        <hr />
        <SidebarLinks />
      </div>
    </div>
  )
}
