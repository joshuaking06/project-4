import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon, Button } from 'semantic-ui-react'
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
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange(){
    this.setState({ width: window.innerWidth })
  }

  handleItemClick(e, { name }){
    this.setState({ activeItem: name })
    if(name === 'home')this.props.history.push('/')
    if(name === 'Login')this.props.history.push('/login')
    if(name === 'Sign Up')this.props.history.push('/register')
  }

  logout(){
    Auth.removeToken()
    this.props.history.push('/')
  }

  render(){
    const isMobile = (this.state.width <= 500)
    const { activeItem } = this.state

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
              onClick={this.props.handleShowClick}
            >
              <Icon name='bars'/>
            </Menu.Item>

              <Menu.Item
                name='home'
                active={this.props.location.pathname === '/'}
                onClick={this.handleItemClick} >
                <Icon name='home' /> Home
              </Menu.Item>

              <Menu.Menu position='right'>
                {!Auth.isAuthenticated() &&

                <Menu.Item
                  name='Sign Up'
                  onClick={this.handleItemClick}>
                  <Icon name='add user' /> Sign Up
                </Menu.Item>
                }

                {!Auth.isAuthenticated() &&
                <Menu.Item
                  name='Login'
                  onClick={this.handleItemClick} >
                  <Icon name='user circle'/> Log In
                </Menu.Item>
                }

                {
                  Auth.isAuthenticated() &&
              <Menu.Item
                name='Logout'
                onClick={this.logout}
              > <Icon name='remove user' /> Logout
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
