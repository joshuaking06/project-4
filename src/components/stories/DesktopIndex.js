import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Segment, Grid } from 'semantic-ui-react'

const style = {
  height: '400px',
  backgroundImage: 'url(https://marketplace.canva.com/MABdzJjyLYc/1/thumbnail_large/canva-student-writing-paper-lined--MABdzJjyLYc.png)',
  backgroundSize: 'cover'
}

class DesktopIndex extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <Container>
        <Grid columns={3}>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column width={10}>
            <Segment
              className='desktop-index'
              raised
            >
              {this.props.stories.map(story =>
                <Link key={story.id} to ={{
                    pathname: `/stories/${story.id}`,
                    state: {
                        reddit: this.props.reddit,
                        storyId: story.id
                }}}> <Segment
                        style={style}
                  > {story.title}
                  </Segment>
                </Link>
              )}
            </Segment>
          </Grid.Column>
          <Grid.Column width={3}></Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default DesktopIndex
