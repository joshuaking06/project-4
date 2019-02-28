import React from 'react'
import axios from 'axios'
import Reader from './Reader'
import { Container, Divider } from 'semantic-ui-react'


class StoriesShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    axios.get(`/api/reddit/av9juv`)
      .then(res => this.setState({ story: res.data }))
  }

  render(){
    if(!this.state) return null
    return(
      <Container>
        <Divider hidden />
        <Reader story={this.state.story}/>
      </Container>
    )
  }
}

export default StoriesShow
