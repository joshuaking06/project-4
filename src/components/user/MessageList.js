import React from 'react'
import { List, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MessageList = ({ messageData, information }) => {
  const {created_at, receiver,sender, content } = messageData// eslint-disable-line
  const {username,id } = sender || receiver
  return(
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
      <List.Content>
        <List.Header>Helen</List.Header>
        <Link
          to={`/me/messages/${id}/show`}>Here</Link>
      </List.Content>
    </List.Item>
  )

}
{/*  eslint-disable-line*/}



{/* <List.Item>
<Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
<List.Content>
  <List.Header>{username}</List.Header>
  <List.Description>{`Message was ${information} at :  ${created_at}`}</List.Description>
</List.Content>
</List.Item>*/}



export default MessageList
