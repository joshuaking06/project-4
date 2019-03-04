import React from 'react'
import { List, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MessageList = ({ messageData, information }) => {
  const {created_at, receiver,sender, content } = messageData// eslint-disable-line
  const {username,id } = sender || receiver
  return(
    <List.Item>
      <Link
        to={`/messages/${messageData.id}/show`}>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
        <List.Content>
          <List.Header  as='p'>{username}</List.Header>
          <List.Description as='p'>{`Message was ${information} at :  ${created_at}`}</List.Description>{/*  eslint-disable-line*/}

        </List.Content>


      </Link>
    </List.Item>

  )

}



{/* */}



export default MessageList
