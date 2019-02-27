import React from 'react'
import { Menu, Icon, Button } from 'semantic-ui-react'

class Navbar extends React.Component{
  constructor(props){
    super(props)

    this.state={
      visible: false,
      width: window.innerWidth
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
              <Menu.Menu position='right'>
                <Menu.Item
                  name='Sign-Up'
                />
                <Menu.Item
                  name='Login'/>
              </Menu.Menu>
            </Menu>
        }


      </div>
    )
  }
}

export default Navbar
