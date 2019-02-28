import React from 'react'
import axios from 'axios'
import { Segment, Container } from 'semantic-ui-react'

import UsersDetail from './UsersDetail'


class UsersShow extends React.Component{

  constructor(){
    super()
  }

  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then( res =>{
        this.setState({ usersDetail: res.data})
      })
  }


  render(){
    return(
      <Container>
        <Segment>
          <UsersDetail />
        </Segment>
      </Container>

    )
  }
}


export default UsersShow
