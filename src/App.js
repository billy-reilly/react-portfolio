import React, { Component } from 'react';
import { debounce } from 'lodash'
import cn from 'classnames'

import ResizeEventProvider from './components/ResizeEventProvider'
import Sidebar from './components/Sidebar'
import MobileHeader from './components/MobileHeader'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import MobileFooter from './components/MobileFooter'

import './App.css';

class App extends Component {
  state = {
    showSidebar: window.innerWidth > 750
  }

  handleResizeEvent = debounce(
    e => this.setState({
      showSidebar: e.target.innerWidth > 750
    }),
    100
  )

  render() {
    const { showSidebar } = this.state
    const contentClassName = cn('content', { 'content-beside-sidebar': showSidebar })
    return (
      <div className="app">
        <ResizeEventProvider onResizeEvent={ this.handleResizeEvent }>
          { showSidebar ? <Sidebar /> : <MobileHeader /> }
          <div className={ contentClassName }>
            <AboutMe />
            <Projects />
          </div>
          { !showSidebar && <MobileFooter /> }
        </ResizeEventProvider>
      </div>
    );
  }
}

export default App;
