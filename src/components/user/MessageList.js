import React from 'react'
// import StoryCard from './StoryCard'
// import Auth from '../../lib/Auth'
// import { Link } from 'react-router-dom'

// import {Statistic, Grid, Image,Header,Divider, Button,Icon} from 'semantic-ui-react'
import { List, Image} from 'semantic-ui-react'

const MessageList = ({ messageData, information }) => {
  const {created_at, receiver,sender, content } = messageData// eslint-disable-line
  // const {id, username } = receiver
  const {username } = sender || receiver
  console.log(content)
  return(
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
      <List.Content>
        <List.Header as='p'>{username}</List.Header>
        <List.Description as='p'>{`${information} :  ${created_at}`}</List.Description>{/*  eslint-disable-line*/}
      </List.Content>
    </List.Item>
  )

}

export default MessageList
