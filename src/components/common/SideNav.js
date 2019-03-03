import React from 'react'
import { Icon, Sidebar, Menu } from 'semantic-ui-react'
import Auth from '../../lib/Auth'
import { Link, withRouter } from 'react-router-dom'




class SideNav extends React.Component{
  constructor(props){
    super(props)

    this.state={
      activeItem: 'home'
    }

    this.handleItemClick = this.handleItemClick.bind(this)
    this.logout = this.logout.bind(this)
  }



  handleItemClick(e, { name }){
    this.setState({ activeItem: name })
    this.props.handleSidebarHide()
    this.props.history.push(`/${name}`)
  }

  logout(){
    Auth.removeToken()
    this.props.history.push('/')
  }

  render(){
    return(

      <Sidebar
        id='sidebar'
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={this.props.handleSidebarHide}
        vertical
        visible={this.props.visible}
        width='thin'>

        <Menu.Item as='a'
          name='home'
          onClick={this.handleItemClick} >
          <Icon name='home' />
            Home
        </Menu.Item>

        {!Auth.isAuthenticated() &&
            <Menu.Item as='a'
              name='register'
              onClick={this.handleItemClick}>
              <Icon name='add user' />
              Sign Up
            </Menu.Item>
        }

        {!Auth.isAuthenticated() &&
            <Menu.Item as='a'
              name='login'
              onClick={this.handleItemClick}>
              <Icon name='user' />
              Login
            </Menu.Item>
        }

        <Menu.Item as='a'
          name='reddit'
          onClick={this.handleItemClick} >
          <Icon name='book' />
            Stories
        </Menu.Item>

        <Menu.Item name='messages' onClick={this.handleItemClick} as='a'>
          <Icon name='envelope' />
            Messages
        </Menu.Item>

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
            <Menu.Item onClick={this.handleItemClick} name='library' as='a'>
              <Icon name='book' />
              My Library
            </Menu.Item>
        }

        <Menu.Item onClick={this.handleItemClick} name='settings' as='a'>
          <Icon name='cogs' />
            Settings
        </Menu.Item>

        <Menu.Item as='a'>
          <Icon name='user' />
            My Profile
        </Menu.Item>

        {Auth.isAuthenticated() &&
            <Menu.Item as='a' onClick={this.logout}>
              <Icon name='log out' />
              Log Out
            </Menu.Item>
        }
      </Sidebar>
    )
  }

}

export default withRouter(SideNav)
