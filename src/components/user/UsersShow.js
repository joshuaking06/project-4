import React from 'react'
import axios from 'axios'
import { Segment, Container } from 'semantic-ui-react'

import UsersDetail from './UsersDetail'
import LoadingPage from '../common/LoadingPage'


class UsersShow extends React.Component{

  constructor(){
    super()
    this.state = {}
    this.handleFollowEvent = this.handleFollowEvent.bind(this)
    this.handleUnfollowEvent = this.handleUnfollowEvent.bind(this)
  }

  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then( res =>{
        this.setState({ usersDetail: res.data})
      })
  }

  handleFollowEvent(){
    console.log('follow')
  }

  handleUnfollowEvent(){
    console.log('un-follow')

  }
  render(){
    console.log(this.handleFollowEvent, 'HANDLEUNFOLLOW')
    if(!this.state.usersDetail ) return <LoadingPage />
    return(
      <Container>
        <Segment>
          <UsersDetail
            usersDetail={this.state.usersDetail}
            handleFollowEvent={this.handleFollowEvent}
            handleUnfollowEvent={this.handleUnfollowEvent}
          />
        </Segment>
      </Container>

    )
  }
}


export default UsersShow
