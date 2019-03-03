import React from 'react'
import { Segment } from 'semantic-ui-react'
import Settings from '../../lib/Settings'
import Auth from '../../lib/Auth'
import axios from 'axios'


class StoriesInfo extends React.Component{
  constructor(props){
    super(props)
  }



  componentDidMount(){
    axios.get(`stories/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
  }


  render(){
    console.log(this.state)
    return(
      null
    )
  }
}




export default StoriesInfo
