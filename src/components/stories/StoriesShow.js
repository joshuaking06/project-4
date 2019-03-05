import React from 'react'
import axios from 'axios'
import Reader from './Reader'
import { Container, Divider } from 'semantic-ui-react'


class StoriesShow extends React.Component{
  constructor(props){
    super(props)

    this.state={
      isReddit: !(this.props.match.params.id % 1 === 0 || this.props.match.params.id % 1 === 1 ),
      storyId: this.props.match.params.id
    }
  }

  async getStory(count){
    let story
    this.state.isReddit ? story = await axios.get(`/api/reddit/${this.state.storyId}`) :
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
        <Reader story={this.state.story}/>
      </Container>
    )
  }
}

export default StoriesShow
