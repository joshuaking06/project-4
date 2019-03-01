import React from 'react'
import axios from 'axios'
import Reader from './Reader'
import { Container, Divider } from 'semantic-ui-react'


class StoriesShow extends React.Component{
  constructor(props){
    super(props)

    this.state={
      reddit: this.props.location.state.reddit,
      storyId: this.props.location.state.storyId
    }
  }

  async getStory(count){
    let story
    this.state.reddit ? story = await axios.get(`/api/reddit/${this.state.storyId}`) :
      story = await axios.get(`/api/stories/${this.state.storyId}`)
    return await story.data
  }

  componentDidMount(){
    this.getStory().then(story => this.setState({story}))
  }


  render(){
    if(!this.state.story) return null
    return(
      <Container>
        <Divider hidden />
        <Reader story={this.state.story}/>
      </Container>
    )
  }
}

export default StoriesShow
