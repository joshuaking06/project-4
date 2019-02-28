import React from 'react'
import { Icon, Sidebar, Menu, Divider } from 'semantic-ui-react'
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
    if(name === 'home')this.props.history.push('/')
    if(name === 'Login')this.props.history.push('/login')
    if(name === 'Sign Up')this.props.history.push('/register')
    if(name === 'Stories')this.props.history.push('/reddit')
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
        <Divider hidden />

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

        {!Auth.isAuthenticated() &&
            <Menu.Item as='a' >
              <Icon name='pencil alternate' />
              Add New Story
            </Menu.Item>
        }

        {!Auth.isAuthenticated() &&
            <Menu.Item as='a'>
              <Icon name='file alternate outline' />
              Reding List
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

        {!Auth.isAuthenticated() &&
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
