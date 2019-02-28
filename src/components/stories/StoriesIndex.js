import React from 'react'
import FlipPage from 'react-flip-page'
import { Link } from 'react-router-dom'
import axios from 'axios'
import LoadingPage from '../common/LoadingPage'
import { Segment, Header, Divider, Container, Button, Icon } from 'semantic-ui-react'
import DesktopIndex from './DesktopIndex'


const style = {
  width: '100%',
  height: '500px',
  backgroundImage: 'url(https://marketplace.canva.com/MABdzJjyLYc/1/thumbnail_large/canva-student-writing-paper-lined--MABdzJjyLYc.png)',
  backgroundSize: 'cover'
}


class StoriesIndex extends React.Component{
  constructor(props){
    super(props)

    this.state={
      count: 20,
      reddit: (this.props.match.path === "/reddit"),
      width: window.innerWidth,
      stories: []
    }

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    this.loadMore = this.loadMore.bind(this)
  }

  handleItemClick(){
    console.log('clicked me')
  }

  // get stories depending on whether user is on reddit page or discover stories page
  async getStories(count){
    let stories
    this.state.reddit ? stories = await axios.get(`/api/reddit/count/${count}`) :
      stories = await axios.get('/api/stories')
    return await stories.data
  }

  loadMore(){
    this.getStories(this.state.count).then(stories => {
      this.setState({ stories: stories, count: this.state.count + 10 })
    })
  }


  // bringing in all the stories
  componentDidMount(){
    window.addEventListener('resize', this.handleWindowSizeChange)
    this.getStories(10).then(stories => this.setState({ stories }))
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
    console.log(this.state)
    if(this.state.stories.length < 1) return <LoadingPage />
    const { width } = this.state
    const isMobile = width <= 500
    console.log(this.state.stories)
    if(isMobile){
      return(
        <div id='flipper'>
          <Divider section hidden />
          <FlipPage
            style={{ touchAction: 'none' }}
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
                <Button size='small' color='black' circular icon='add' />

                <Link to ={{
                  pathname: `/stories/${story.id}`,
                  state: {
                    reddit: this.state.reddit,
                    storyId: story.id
                  }}} >
                  <Button size='small' secondary> Read Now </Button>
                </Link>

                {this.state.reddit &&
                  <Button
                    size='small'
                    onClick={this.loadMore}
                    primary> Load More
                  </Button>
                }
              </Segment>

            )}
          </FlipPage>
        </div>
      )
    } else return(
      <div>
        <Divider hidden section />
        <DesktopIndex
          loadMore={this.loadMore}
          reddit={this.state.reddit}
          stories={this.state.stories}
        />
      </div>
    )
  }
}

export default StoriesIndex
