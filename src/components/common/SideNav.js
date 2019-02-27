import React from 'react'
import { Icon, Sidebar, Menu } from 'semantic-ui-react'


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
    >
      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='gamepad' />
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Channels
      </Menu.Item>
    </Sidebar>
  )
}


export default SideNav
