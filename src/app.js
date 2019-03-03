import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Segment, Sidebar } from 'semantic-ui-react'
import StoriesIndex from './components/stories/StoriesIndex'
import StoriesShow from './components/stories/StoriesShow'
import StoriesNewEdit from './components/stories/StoriesNewEdit'
import StoriesInfo from './components/stories/StoriesInfo'
import Navbar from './components/common/Navbar'
import SideNav from './components/common/SideNav'
import Register from './components/Auth/Register'
import FlashMessages from './components/common/FlashMessages'
import Settings from './lib/Settings'
import Login from './components/Auth/Login'
import UsersShow from './components/user/UsersShow'
import LoadingPage from './components/common/LoadingPage'
import UsersMessages from './components/user/UsersMessages'
import Messages from './components/user/Messages'
import MessagesShow from './components/user/MessagesShow'
import MyLibrary from './components/stories/MyLibrary'
import Home from './components/common/Home'
import SettingsPage from './components/common/SettingsPage'

import 'semantic-ui-css/semantic.min.css'
import './style.scss'

const nightStyle = {backgroundColor: 'black' }
const style = {backgroundColor: 'white'}

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

  componentDidMount(){
    console.log('is it set?', Settings.checkIfSet())
    if(!Settings.checkIfSet())Settings.setNightMode(false)
  }



  handleShowClick(){
    this.setState({ sidebarVisible: true })
  }

  handleSidebarHide(){
    this.setState({ sidebarVisible: false })
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <main>
            <Sidebar.Pushable inverted={Settings.isNightMode()} as={Segment}>
              <SideNav
                handleSidebarHide={this.handleSidebarHide}
                visible={this.state.sidebarVisible}
              />
              <Sidebar.Pusher>
                <Navbar hideSidebar={this.handleSidebarHide} handleShowClick={this.handleShowClick} />
                <FlashMessages />
                <Switch>
                  <Route path="/loading" component={LoadingPage} />
                  <Route path='/library' component={MyLibrary} />
                  <Route path="/register" component={Register} />
                  <Route path="/login" component={Login} />
                  <Route path="/messages/:id/show" component={MessagesShow} />
                  <Route path="/settings" component={SettingsPage} />
                  <Route path="/messages" component={Messages} />
                  <Route path="/users/:id/message" component={UsersMessages} />
                  <Route path="/users/:id" component={UsersShow} />
                  <Route path="/stories/edit/:id" component={StoriesNewEdit} />
                  <Route path="/stories/info/:id" component={StoriesInfo} />
                  <Route path="/stories/new" component={StoriesNewEdit} />
                  <Route path="/stories/:id" component={StoriesShow} />
                  <Route path="/stories" component={StoriesIndex} />
                  <Route path="/reddit" component={StoriesIndex} />
                  <Route path="/" component={Home} />
                </Switch>

              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </main>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
