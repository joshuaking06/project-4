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
    if(name === 'home')this.props.history.push('/')
    if(name === 'Login')this.props.history.push('/login')
    if(name === 'Sign Up')this.props.history.push('/register')
    if(name === 'Stories')this.props.history.push('/reddit')
    if(name === 'New')this.props.history.push('/stories/new')
    if(name === 'Library')this.props.history.push('/library')
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
              name='Sign Up'
              onClick={this.handleItemClick}>
              <Icon name='add user' />
              Sign Up
            </Menu.Item>
        }

        {!Auth.isAuthenticated() &&
            <Menu.Item as='a'
              name='Login'
              onClick={this.handleItemClick}>
              <Icon name='user' />
              Login
            </Menu.Item>
        }

        <Menu.Item as='a'
          name='Stories'
          onClick={this.handleItemClick} >
          <Icon name='book' />
            Stories
        </Menu.Item>

        <Menu.Item as='a'>
          <Icon name='envelope' />
            Message
        </Menu.Item>

        {Auth.isAuthenticated() &&
          <Menu.Item
            name='New'
            as='a'
            onClick={this.handleItemClick}>
            <Icon name='pencil alternate' />
            Add New Story
          </Menu.Item>
        }

        {Auth.isAuthenticated() &&
            <Menu.Item onClick={this.handleItemClick} name='Library' as='a'>
              <Icon name='book' />
              My Library
            </Menu.Item>
        }

        <Menu.Item as='a'>
          <Icon name='cogs' />
            Setting
        </Menu.Item>

        <Menu.Item as='a'>
          <Icon name='question circle outline' />
            About Us
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
