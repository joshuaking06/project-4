import React from 'react'
// import StoryCard from './StoryCard'
// import Auth from '../../lib/Auth'
// import { Link } from 'react-router-dom'

// import {Statistic, Grid, Image,Header,Divider, Button,Icon} from 'semantic-ui-react'
// import { List, Image} from 'semantic-ui-react'



const MessageShow = (props) => {
  console.log(props)
  const {content,  created_at, receiver,sender} = props.location.state.message
  const {id, username} = sender || receiver
  console.log(username)

  return(
    <h1>{props.location.state.message.content}</h1>
  )

}

export default MessageShow
