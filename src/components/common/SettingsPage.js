import React from 'react'
import Settings from '../../lib/Settings'
import { Button } from 'semantic-ui-react'

class SettingsPage extends React.Component{
  constructor(){
    super()
    this.state ={
      nightMode: Settings.isNightMode()
    }
    this.toggleNightMode = this.toggleNightMode.bind(this)
  }


  toggleNightMode(){
    const nightMode = this.state.nightMode
    Settings.setNightMode(!nightMode)
    this.setState({ nightMode: !this.state.nightMode })
  }



  render(){
    const { nightMode }= this.state
    console.log(nightMode)
    return(
      <div>
        {!nightMode &&
          <Button onClick={this.toggleNightMode} primary > Not night </Button>
        }

        {nightMode &&
          <Button onClick={this.toggleNightMode} secondary > Night </Button>
        }
      </div>
    )
  }
}

export default SettingsPage
