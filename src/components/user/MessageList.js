import React from 'react'
// import StoryCard from './StoryCard'
// import Auth from '../../lib/Auth'
// import { Link } from 'react-router-dom'

// import {Statistic, Grid, Image,Header,Divider, Button,Icon} from 'semantic-ui-react'
import { List, Image} from 'semantic-ui-react'



const MessageList = ({ messageData, information }) => {
  const {content, created_at, receiver,sender } = messageData
  // const {id, username } = receiver
  const {id, username } = sender || receiver

  return(
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
      <List.Content>
        <List.Header as='a'>{username}</List.Header>
        <List.Description as='a'>{`${information} :  ${created_at}`}</List.Description>
      </List.Content>
    </List.Item>
  )

}

export default MessageList
