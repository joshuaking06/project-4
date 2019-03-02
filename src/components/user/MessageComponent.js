import React from 'react'
import MessageList from './MessageList'
// import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'

// import {Statistic, Grid, Image,Header,Divider, Button,Icon} from 'semantic-ui-react'
import {Grid,List} from 'semantic-ui-react'



const MessageComponent = ({inbox, outbox, info}) => {
  const usersMessage = inbox || outbox
  return(
    <Grid columns={1} stackable textAlign='center'>
      <Grid.Column width={13}  >

        {
          usersMessage.length> 0 ? (
            <List  selection verticalAlign='middle' >
              <p>You have {info} {usersMessage.length} messages</p>
              {
                usersMessage.map(message =>
                  <MessageList
                    key={message.id}
                    messageData={message}
                    information={info}
                  />
                )
              }


            </List>

          ) : (
            <p>You have {usersMessage.length} messages</p>

          )
        }
      </Grid.Column>
      {/* <Link
        key={message.id}
        to={{
          pathname: `/me/messages/${message.id}/show`,
          state: {
            message: message,
            info: info
          }
        }
        }
      >
        <MessageList
          key={message.id}
          messageData={message}
          information={info}
        />
      </Link>*/}
    </Grid>

  )

}

export default MessageComponent
