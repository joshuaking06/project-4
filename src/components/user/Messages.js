import React from 'react'
import axios from 'axios'
import { Segment, Container } from 'semantic-ui-react'

import LoadingPage from '../common/LoadingPage'
// import Auth from '../../lib/Auth'


class UsersShow extends React.Component{

  constructor(){
    super()
    this.state = {}

  }

  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then( res =>{
        this.setState({ usersDetail: res.data})
      })
  }





  render(){
    if(!this.state.usersDetail ) return <LoadingPage />
    return(
      <Container>
        <Segment>
          <h1>Hellow world</h1>
        </Segment>
      </Container>

    )
  }
}


export default UsersShow
