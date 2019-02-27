import React from 'react'
import ReactDOM from 'react-dom'
import { Sidebar, Menu } from 'semantic-ui-react'
import StoriesIndex from './components/stories/StoriesIndex'
import Navbar from './components/common/Navbar'
import SideNav from './components/common/SideNav'


import 'semantic-ui-css/semantic.min.css'
import './style.scss'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state={
      sidebarVisible: false,
      nightMode: false
    }

    this.handleShowClick = this.handleShowClick.bind(this)
    this.handleSidebarHide = this.handleSidebarHide.bind(this)
  }

  handleShowClick(){
    this.setState({ sidebarVisible: true })
    console.log(this.state)
  }

  handleSidebarHide(){
    this.setState({ sidebarVisible: false })
  }

  render(){
    return (
      <main>
        <Sidebar.Pushable as={Segment}>
          <SideNav
            handleSidebarHide={this.handleSidebarHide}
            visible={this.state.sidebarVisible}
          />
          <Sidebar.Pusher>

            <Navbar handleShowClick={this.handleShowClick} />
            <StoriesIndex />

          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </main>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
