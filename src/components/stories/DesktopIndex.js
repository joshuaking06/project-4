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
        <Segment raised>
          {this.state.stories.map(story =>
            <div key={story.id}>
          )}
        </Segment>
      </Container>
    )
  }
}

export default DesktopIndex
