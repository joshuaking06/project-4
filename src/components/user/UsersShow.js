import React from 'react'
import axios from 'axios'
import { Segment, Container } from 'semantic-ui-react'

import UsersDetail from './UsersDetail'


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
    if(!this.state.usersDetail ) return(<h1>Loadinng...</h1>)
    return(
      <Container>
        <Segment>
          <UsersDetail  usersDetail={this.state.usersDetail}/>
        </Segment>
      </Container>

    )
  }
}


export default UsersShow
