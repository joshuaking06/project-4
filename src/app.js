import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Segment, Sidebar } from 'semantic-ui-react'
import StoriesIndex from './components/stories/StoriesIndex'
import StoriesShow from './components/stories/StoriesShow'
import StoriesNewEdit from './components/stories/StoriesNewEdit'
import Navbar from './components/common/Navbar'
import SideNav from './components/common/SideNav'
import Register from './components/Auth/Register'
import FlashMessages from './components/common/FlashMessages'
import Login from './components/Auth/Login'
import UsersShow from './components/user/UsersShow'
import LoadingPage from './components/common/LoadingPage'


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
    console.log('HANDLING SHOW CLICK')
  }

  handleSidebarHide(){
    this.setState({ sidebarVisible: false })
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <main>
            <Sidebar.Pushable as={Segment}>
              <SideNav
                handleSidebarHide={this.handleSidebarHide}
                visible={this.state.sidebarVisible}
              />
              <Sidebar.Pusher>
                <Navbar handleShowClick={this.handleShowClick} />
                <FlashMessages />
                <Switch>
                  <Route path="/loading" component={LoadingPage} />
                  <Route path="/register" component={Register} />
                  <Route path="/login" component={Login} />
                  <Route path="/users/:id" component={UsersShow} />
                  <Route path="/stories/edit/:id" component={StoriesNewEdit} />
                  <Route path="/stories/new" component={StoriesNewEdit} />
                  <Route path="/stories/:id" component={StoriesShow} />
                  <Route path="/stories" component={StoriesIndex} />
                  <Route path="/reddit" component={StoriesIndex} />
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
