import React from 'react'
// import StoryCard from './StoryCard'
// import Auth from '../../lib/Auth'
// import { Link } from 'react-router-dom'

import {Statistic, Grid, Image,Header,Divider, Button,Icon} from 'semantic-ui-react'
// import { List, Image} from 'semantic-ui-react'



const MessageShow = (props) => {
  // console.log(props)
  const {content,  created_at, receiver,sender} = props.location.state.message
  const {id, username} = sender || receiver
  // if(sender)
  // const
  // console.log(username)

  return(
    <Grid columns={1} stackable textAlign='center'>
      <Grid.Column width={13}  >
        <h1>{username}</h1>
        <p>{content}</p>
      </Grid.Column>
    </Grid>
  )

}

export default MessageShow
