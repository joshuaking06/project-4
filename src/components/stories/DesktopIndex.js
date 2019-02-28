import React from 'react'
import { Container, Segment } from 'semantic-ui-react'

class DesktopIndex extends React.Component{
  constructor(props){
    super(props)

    this.state={
      stories: this.props.stories
    }
  }


  render(){
    return(
      <Container>

      </Container>
    )
  }
}

export default DesktopIndex
