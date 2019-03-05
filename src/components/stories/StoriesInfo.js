import React from 'react'
import { Segment, Container, Divider, Button, Input, Feed, Header } from 'semantic-ui-react'
import SuccessModal from '../common/SuccessModal'
import { Link } from 'react-router-dom'
import Settings from '../../lib/Settings'
import CommentFeed from './CommentFeed'
import Auth from '../../lib/Auth'
import Speech from '../../lib/Speech'

import axios from 'axios'
import moment from 'moment'

const headers = { headers: { Authorization: `Bearer ${Auth.getToken()}` } }


class StoriesInfo extends React.Component{
  constructor(props){
    super(props)

    this.state={
      saved: false,
      nightMode: Settings.isNightMode(),
      isReddit: !(this.props.match.params.id % 1 === 0 || this.props.match.params.id % 1 === 1 ),
      commentData: {
        text: ''
      }
    }
    this.addToReadList = this.addToReadList.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.postComment = this.postComment.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
    this.speakHandle = this.speakHandle.bind(this)
    this.cancelHandle = this.cancelHandle.bind(this)


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

  handleChange({ target: { name, value }}) {
    const commentData = {...this.state.commentData, [name]: value }
    this.setState({ commentData })
  }

  postComment(){
    axios.post(`/api/stories/${this.props.match.params.id}/comments`, this.state.commentData, headers)
      .then(res => this.setState({ data: res.data, commentData: {text:''} }))
      .catch(err => console.log(err.response))
  }

  deleteComment(e, id){
    axios.delete(`/api/stories/${this.props.match.params.id}/comments/${id}`, headers)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err.response, 'error here'))
  }

  speakHandle(){
    Speech.appSpeak(this.state.data.content)
  }
  cancelHandle(){
    Speech.cancelSpeak()
  }

  componentDidMount(){
    let route
    if(!this.state.isReddit) route = 'stories'
    if(this.state.isReddit) route = 'reddit'
    axios.get(`/api/${route}/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
  }
  componentWillUnmount(){
    Speech.cancelSpeak()
  }


  render(){
    if(!this.state.data) return null
    const {commentData, nightMode, data, saved } = this.state
    return(
      <Container textAlign='center'>
        <Divider hidden />
        <Segment.Group >
          <Segment inverted={nightMode}><Header as='h2'> {data.title} </Header> </Segment> <br />
          <Button.Group>

          {!saved &&
            <Button
              size='small'
              onClick={(e)=>this.addToReadList(e, data.id)}
              positive icon='add'
              content='Save' />
          }
          {!saved &&
            <Button.Or
              size='small'
              content='Or' />
          }
            <Button size='small'>
              <Link to={`/stories/${data.id}`}> Read </Link>
            </Button>
            <Button.Or
              size='small'
              content='Or'

            />
            <Button onClick={this.speakHandle}>Listen</Button>

            <Button.Or
              size='small'
              content='Or'

            />
            <Button onClick={this.cancelHandle}>Canel</Button>


          </Button.Group>
          <Segment.Group>
            <Segment inverted={nightMode}> <strong>Genre:</strong> {data.genre}</Segment>
            <Segment inverted={nightMode}> <strong>Description:</strong> {data.description}</Segment>
            <Segment inverted={nightMode}> <strong>Posted:</strong> {moment(data.created_at).format('dddd HH:mm')}</Segment>
            <Segment inverted={nightMode}> <strong>Last Updated:</strong> {moment(data.updated_at).format('dddd HH:mm')}</Segment>
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
          <Divider />
          {!this.state.isReddit &&
            <CommentFeed
              commentData={commentData}
              postComment={this.postComment}
              deleteComment={this.deleteComment}
              handleChange={this.handleChange}
              nightMode={nightMode}
              data={data}
            />
          }
        </Segment.Group>
        {<SuccessModal saved={saved} />}
      </Container>
    )
  }
}




export default StoriesInfo
