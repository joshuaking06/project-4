import React from 'react'
import { Segment, Container, Divider, Button, Input, Feed } from 'semantic-ui-react'
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
    return(
      <Container>
        <Segment inverted={nightMode}>

        </Segment>
      </Container>
    )
  }
}




export default StoriesInfo
