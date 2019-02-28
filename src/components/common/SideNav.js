import React from 'react'
import { Icon, Sidebar, Menu, Divider } from 'semantic-ui-react'


const SideNav = ({handleSidebarHide, visible}) => {
  return(
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      onHide={handleSidebarHide}
      vertical
      visible={visible}
      width='thin'
    ><Divider hidden />

      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>

      <Menu.Item as='a'>
        <Icon name='add user' />
        Sign Up
      </Menu.Item>

      <Menu.Item as='a'>
        <Icon name='user' />
        Login
      </Menu.Item>

      <Menu.Item as='a'>
        <Icon name='book' />
        Library
      </Menu.Item>

      <Menu.Item as='a'>
        <Icon name='envelope' />
        Message
      </Menu.Item>

      <Menu.Item as='a'>
        <Icon name='pencil alternate' />
        Add New Story
      </Menu.Item>

      <Menu.Item as='a'>
        <Icon name='file alternate outline' />
        Reding List
      </Menu.Item>


      <Menu.Item as='a'>
        <Icon name='cogs' />
        Setting
      </Menu.Item>

      <Menu.Item as='a'>
        <Icon name='question circle outline' />
        About Us
      </Menu.Item>

      <Menu.Item as='a'>
        <Icon name='log out' />
        Log Out
      </Menu.Item>

    </Sidebar>
  )
}


export default SideNav
