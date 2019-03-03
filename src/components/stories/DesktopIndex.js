import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Segment, Grid, Divider, Header, Button } from 'semantic-ui-react'

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
    const { addToReadList } = this.props
    console.log(this.props.stories)
    return(
      <Container>
        <Grid columns={3}>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column width={10}>
            <Segment
              id='index-reader'
              className='desktop-index'
              raised
            >
              {this.props.stories.map(story =>
                 <Segment key={story.id}
                    className='desktop-index'
                    style={style}
                  > <Divider hidden />
                    <Header as='h1'> {story.title} </Header>
                    <Divider section hidden />
                    {story.genre &&
                      <Header as='h3'> Genre: <span>{story.genre}</span> </Header>
                    }


                    {story.creator &&
                      <Header as='h3'> Author: {story.creator.username} </Header>
                    }

                    {!story.creator &&
                      <Header as='h3'> Source: Reddit{story.score && <span>({story.score} upvotes)</span>} </Header>
                    }

                    {story.description &&
                      <Header as='h3'>
                        Description: {story.description}
                      </Header>
                    }


                    <Button onClick={(e)=> addToReadList(e,story)}  positive icon='add' content='Save to Reading List' />


                    <Link to ={`/stories/${story.id}`} >
                      <Button primary icon='book' content='Read This Story' />
                    </Link>


                  </Segment>
              )}
              {this.props.reddit &&
                <Button onClick={this.props.loadMore} primary fluid> Load More Stories </Button>
              }
            </Segment>
          </Grid.Column>
          <Grid.Column width={3}></Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default DesktopIndex
