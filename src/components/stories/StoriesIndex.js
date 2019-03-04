import React from 'react'
import FlipPage from 'react-flip-page'
import { Link } from 'react-router-dom'
import axios from 'axios'
import LoadingPage from '../common/LoadingPage'
import { Segment, Header, Divider, Container, Button, Grid } from 'semantic-ui-react'
import DesktopIndex from './DesktopIndex'
import Auth from '../../lib/Auth'

const headers = {headers: { Authorization: Auth.getToken() }}


const style = {
  width: '100%',
  height: '100vh',
  backgroundImage: 'url(https://previews.123rf.com/images/ke77kz/ke77kz1701/ke77kz170100026/69863051-old-paper-background-rustic-paper-texture-for-the-design-.jpg)',
  backgroundSize: 'cover'
}


class StoriesIndex extends React.Component{
  constructor(props){
    super(props)

    this.state={
      count: 20,
      reddit: (this.props.match.path === '/reddit'),
      width: window.innerWidth,
      stories: []
    }

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
    this.loadMore = this.loadMore.bind(this)
    this.addToReadList = this.addToReadList.bind(this)
  }

  addToReadList(e, story){
    console.log(story.id)
    if(!this.state.reddit && Auth.isAuthenticated()){
      axios.post(`/api/save/${story.id}`,{data:'ok'}, headers)
        .then(res => console.log(res))
    } else if(this.state.reddit && Auth.isAuthenticated()){
      axios.post(`/api/reddit/save/${story.id}`, {data:'ok'}, headers)
        .then(res => console.log(res))
    }
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
    if(this.state.stories.length < 1) return <LoadingPage />
    const { width } = this.state
    const isMobile = width <= 500
    if(isMobile){
      return(
        <div id='flipper'>
          <Divider section hidden />
          <FlipPage
            responsive
            orientation='horizontal'
            style={{ touchAction: 'none' }}
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
                <Grid stackable columns={3}>
                  <Grid.Column width={16}>
                  <Button onClick={(e)=>this.addToReadList(e,story)} fluid secondary icon='add' content='Save' />
                  </Grid.Column>

                  <Grid.Column width={16}>
                    <Link to ={`/stories/${story.id}`} >
                      <Button size='small' fluid secondary icon='book' content='Read' />
                    </Link>
                  </Grid.Column>

                  <Grid.Column width={16}>
                    {this.state.reddit &&
                      <Button
                        fluid
                        size='small'
                        onClick={this.loadMore}
                        primary> Load More
                      </Button>
                    }
                  </Grid.Column>
                </Grid>
              </Segment>

            )}
          </FlipPage>
        </div>
      )
    } else return(
      <div>
        <Divider />
        <DesktopIndex
          addToReadList={this.addToReadList}
          loadMore={this.loadMore}
          reddit={this.state.reddit}
          stories={this.state.stories}
        />
      </div>
    )
  }
}

export default StoriesIndex
