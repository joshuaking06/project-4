import React from 'react'
import FlipPage from 'react-flip-page'
import { Link } from 'react-router-dom'
import { Segment, Header, Divider, Container, Button, Icon } from 'semantic-ui-react'
import axios from 'axios'


const style = {
      width: '100%',
      height: '500px',
      backgroundImage: `url(https://marketplace.canva.com/MABdzJjyLYc/1/thumbnail_large/canva-student-writing-paper-lined--MABdzJjyLYc.png)`,
      backgroundSize: 'cover'
    }


class StoriesIndex extends React.Component{
  constructor(props){
    super(props)

    this.state={
      width: window.innerWidth,
      stories: []
    }

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(){
    console.log('clicked me')
  }
  // bringing in all the stories
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
    axios.get('/api/stories')
      .then(res => this.setState({ stories: res.data }))
  }
  // checking if window size changes
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  // telling state size of window
  handleWindowSizeChange(){
    this.setState({ width: window.innerWidth })
  }



  render(){
    const { width } = this.state
    const isMobile = width <= 500
    console.log(this.state.stories)
    if(isMobile){
      return(
        <div id='flipper'>
          <Divider section hidden />
          <FlipPage
            style={{ touchAction: 'none' }}
            loopForever
            orientation='horizontal'
          >
            {this.state.stories.map(story =>
              <Segment
                textAlign='center'
                style={style}
                className='index-card'
                key={story.id}
              >
                <Container>
                  <Divider hidden />
                  <Header
                    as='h3'
                  > {story.title} </Header>
                  <Divider hidden section />
                  {story.description &&
                    <p className="card-text"><strong> Description: </strong> {story.description}</p>
                  }
                  <Divider hidden section />
                  {story.genre &&
                    <p className="card-text"><strong> Genre: </strong> {story.genre} </p>
                  }
                  {story.creator &&
                    <div>
                      <p className="card-text"><strong> Author: </strong> {story.creator.username} </p>
                    </div>
                  }

                </Container>
                <Divider section hidden />
                <Button onClick={this.handleItemClick} color='black' circular icon='add' />
                <Link to={`/stories/${story.id}`}>
                  <Button onClick={this.handleItemClick} secondary> Read This Story </Button>
                </Link>
              </Segment>
            )}
          </FlipPage>
        </div>
      )
    }

    else return(
      <Segment>
        <p> Hello there </p>
        <p> Hello again </p>
        <p> Hello again again </p>
      </Segment>
    )
  }
}





export default StoriesIndex
