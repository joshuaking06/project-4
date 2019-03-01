import React from 'react'
import axios from 'axios'
import { Segment, Container } from 'semantic-ui-react'

import UsersDetail from './UsersDetail'
import LoadingPage from '../common/LoadingPage'
import Auth from '../../lib/Auth'


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
    axios.post(`/api/users/${this.props.match.params.id}/follow/${Auth.getUserID()}`)
      .then( res =>{
        //this.setState({ usersDetail: res.data})
        console.log('followig', res.data)
      })
  }

  handleUnfollowEvent(){
    axios.post(`/api/users/${this.props.match.params.id}/unfollow/${Auth.getUserID()}`)
      .then( res =>{
        //this.setState({ usersDetail: res.data})
        console.log('un-follow', res.data)

      })
  }



  render(){
    if(!this.state.usersDetail ) return <LoadingPage />
    {console.log(this.state.usersDetail.followers.filter((elem) =>  elem.id !== Auth.getUserID() ))}

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
