import React from 'react'
import { withRouter } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'
import Auth from '../../lib/Auth'

class Navbar extends React.Component{
  constructor(props){
    super(props)

    this.state={
      visible: false,
      width: window.innerWidth,
      activeItem: 'home'
    }

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    this.logout = this.logout.bind(this)
    this.myprofile = this.myprofile.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange(){
    this.setState({ width: window.innerWidth })
  }

  handleItemClick(e, { name }){
    this.setState({ activeItem: name })
    this.props.history.push(`/${name}`)
    if(name === 'reddit' && this.props.location.pathname === '/stories' ||
      name === 'stories' && this.props.location.pathname === '/reddit' ){
      window.location.reload()
    }
  }

  logout(){
    Auth.removeToken()
    this.props.history.push('/')
  }

  myprofile() {
    this.props.history.push(`/users/${Auth.getUserID()}`)
  }

  render(){
    const isMobile = (this.state.width <= 500)
    // const { activeItem } = this.state

    return(
      <div>

        {isMobile &&

              <Menu inverted>
                <Menu.Item
                  onClick={this.props.handleShowClick} >


                  <Icon name='bars'/>

                </Menu.Item>
              </Menu>
        }

        {!isMobile &&
            <Menu inverted>

              <Menu.Item
                name='settings'
                onClick={this.handleItemClick} >
                <Icon name='cogs'/>
                Settings
              </Menu.Item>

              <Menu.Item
                name='home'
                active={this.props.location.pathname === '/'}
                onClick={this.handleItemClick} >
                <Icon name='home' /> Home
              </Menu.Item>


              <Menu.Menu position='right'>

                <Menu.Item
                  name='stories'
                  onClick={this.handleItemClick} >
                  <Icon name='book'/>
                  Stories
                </Menu.Item>

                <Menu.Item
                  name='reddit'
                  onClick={this.handleItemClick} >
                  <Icon name='alien reddit'/>
                  Reddit
                </Menu.Item>

                {Auth.isAuthenticated() &&
                  <Menu.Item
                    name='user/:id'
                    as='a'
                    onClick={this.myprofile}>
                    <Icon name='address card' />
                    My Profile
                  </Menu.Item>
                }

                {Auth.isAuthenticated() &&
                  <Menu.Item
                    name='messages'
                    as='a'
                    onClick={this.handleItemClick}>
                    <Icon name='facebook messenger' />
                    My Messages
                  </Menu.Item>
                }

                {Auth.isAuthenticated() &&
                  <Menu.Item
                    name='stories/new'
                    as='a'
                    onClick={this.handleItemClick}>
                    <Icon name='pencil alternate' />
                    Add New Story
                  </Menu.Item>
                }

                {Auth.isAuthenticated() &&
                  <Menu.Item
                    name='library'
                    as='a'
                    onClick={this.handleItemClick}>
                    <Icon name='bookmark' />
                    My Library
                  </Menu.Item>
                }

                {!Auth.isAuthenticated() &&
                  <Menu.Item
                    name='register'
                    onClick={this.handleItemClick}>
                    <Icon name='add user' />
                    Sign Up
                  </Menu.Item>
                }

                {!Auth.isAuthenticated() &&
                  <Menu.Item
                    name='login'
                    onClick={this.handleItemClick} >
                    <Icon name='user circle'/>
                    Log In
                  </Menu.Item>
                }

                {Auth.isAuthenticated() &&
                  <Menu.Item
                    name='Logout'
                    onClick={this.logout}>
                    <Icon name='log out' />
                    Logout
                  </Menu.Item>
                }

              </Menu.Menu>

            </Menu>
        }

      </div>
    )
  }
}

export default withRouter(Navbar)
