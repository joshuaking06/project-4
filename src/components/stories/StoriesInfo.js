import React from 'react'
import { Segment, Container, Divider, Button, Input, Feed, Header } from 'semantic-ui-react'
import SuccessModal from '../common/SuccessModal'
import { Link } from 'react-router-dom'
import Settings from '../../lib/Settings'
import Auth from '../../lib/Auth'
import axios from 'axios'

const headers = { headers: { Authorization: `Bearer ${Auth.getToken()}` } }


class StoriesInfo extends React.Component{
  constructor(props){
    super(props)

    this.state={
      saved: false,
      nightMode: Settings.isNightMode(),
      isReddit: !(this.props.match.params.id % 1 === 0 || this.props.match.params.id % 1 === 1 )
    }
    this.addToReadList = this.addToReadList.bind(this)
  }

  addToReadList(e, id){
    if(!this.state.isReddit && Auth.isAuthenticated()){
      axios.post(`/api/save/${id}`,{data:'ok'}, headers)
        .then(res => this.setState({ saved: true }))
    } else if(this.state.isReddit && Auth.isAuthenticated()){
      axios.post(`/api/reddit/save/${id}`, {data:'ok'}, headers)
        .then(res => this.setState({saved: true}))
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
    if(!this.state.data) return null
    const { nightMode, data, saved } = this.state
    return(
      <Container textAlign='center'>
        <Divider hidden />
        <Segment.Group >
          <Segment inverted={nightMode}><Header as='h2'> {data.title} </Header> </Segment>
          {!saved &&
            <Button onClick={(e)=>this.addToReadList(e, data.id)} positive icon='add' content='Save to your reading list' />
          }
          <Segment.Group>
            <Segment inverted={nightMode}> <strong>Genre:</strong> {data.genre}</Segment>
            <Segment inverted={nightMode}> <strong>Description:</strong> {data.description}</Segment>
            <Segment inverted={nightMode}> <strong>Posted:</strong> {data.created_at}</Segment>
            <Segment inverted={nightMode}> <strong>Last Updated:</strong> {data.updated_at}</Segment>
          </Segment.Group>
          <Divider />
          {data.creator &&
            <Segment.Group>
              <Segment inverted={nightMode}><Header as='h2'> Author Info </Header> </Segment>
              <Segment inverted={nightMode}>
                <strong>Username: </strong>
                <Link to={`/users/${data.creator.id}`}>
                  {data.creator.username}
                </Link>
              </Segment>
              <Segment inverted={nightMode}><strong>Followers:</strong> {data.creator.followers.length}</Segment>
            </Segment.Group>
          }
          <CommentFeed data={data} />
        </Segment.Group>
        {<SuccessModal saved={saved} />}
      </Container>
    )
  }
}




export default StoriesInfo
