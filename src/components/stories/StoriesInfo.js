import React from 'react'
import { Segment, Container, Divider, Button, Input, Feed, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Settings from '../../lib/Settings'
import Auth from '../../lib/Auth'
import axios from 'axios'


class StoriesInfo extends React.Component{
  constructor(props){
    super(props)

    this.state={
      nightMode: Settings.isNightMode(),
      isReddit: !(this.props.match.params.id % 1 === 0 || this.props.match.params.id % 1 === 1 ),
    }
  }



  componentDidMount(){
    let route
    if(!this.state.isReddit) route = 'stories'
    if(this.state.isReddit) route = 'reddit'
    axios.get(`/api/${route}/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
  }


  render(){
    console.log(this.state)
    const { nightMode } = this.state
    if(!this.state.data) return null
    const { data } = this.state
    return(
      <Container textAlign='center'>
        <Segment.Group >
          <Segment inverted={nightMode}><Header as='h2'> {data.title} </Header> </Segment>
          <Segment.Group>
            <Segment inverted={nightMode}><strong>Genre:</strong> {data.genre}</Segment>
            <Segment inverted={nightMode}><strong>Description:</strong> {data.description}</Segment>
            <Segment inverted={nightMode}> <strong>Posted:</strong> {data.created_at}</Segment>
            <Segment inverted={nightMode}> <strong>Last Updated:</strong> {data.updated_at}</Segment>
          </Segment.Group>
          <Divider />
          <Segment inverted={nightMode}><Header as='h2'> Author Info </Header> </Segment>
          <Segment.Group>
            <Segment inverted={nightMode}>
              <strong>Username: </strong>
              <Link to={`/users/${data.creator.id}`}>
                {data.creator.username}
              </Link>
            </Segment>
            <Segment inverted={nightMode}><strong>Followers:</strong> {data.creator.followers.length}</Segment>
          </Segment.Group>
        </Segment.Group>
      </Container>
    )
  }
}




export default StoriesInfo
