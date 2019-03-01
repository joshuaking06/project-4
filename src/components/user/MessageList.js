import React from 'react'
// import StoryCard from './StoryCard'
// import Auth from '../../lib/Auth'
// import { Link } from 'react-router-dom'

// import {Statistic, Grid, Image,Header,Divider, Button,Icon} from 'semantic-ui-react'
import { List, Image} from 'semantic-ui-react'



const MessageList = () => {
  return(
    <List divided relaxed>
      <List.Item>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
        <List.Content>
          <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
          <List.Description as='a'>Updated 10 mins ago</List.Description>
        </List.Content>
      </List.Item>
    </List>
  )

}

export default MessageList
