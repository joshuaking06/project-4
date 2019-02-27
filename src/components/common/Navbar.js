import React from 'react'
import { Menu, Icon, Button, Sidebar, Segment } from 'semantic-ui-react'

class Navbar extends React.Component{
  constructor(props){
    super(props)

    this.state={
      visible: false,
      width: window.innerWidth,
    }

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange(){
    this.setState({ width: window.innerWidth })
  }



  render(){
    const isMobile = (this.state.width <= 500)

    return(
      <div>

          {isMobile &&

              <Menu inverted>
                <Menu.Item>
                  <Button
                    onClick={this.props.handleShowClick}
                    inverted
                  >
                    <Icon name='bars'/>
                  </Button>
                </Menu.Item>
              </Menu>


          }

          {!isMobile &&
            <Menu inverted
              onClick={this.props.handleShowClick}
            >
              <Icon name='bars'/>
               <Menu.Item name='home' active={true} />
               <Menu.Item
                 name='messages'
               />
               <Menu.Item
                 name='friends'/>
            </Menu>
           }


     </div>
    )
  }
}

export default Navbar
