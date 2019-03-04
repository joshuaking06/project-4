import React from 'react'
import MessageList from './MessageList'
import Settings from '../../lib/Settings'

// import {Statistic, Grid, Image,Header,Divider, Button,Icon} from 'semantic-ui-react'
import {Grid, List, Segment} from 'semantic-ui-react'



const MessageComponent = ({inbox, outbox, info}) => {
  let usersMessage = inbox || outbox
  usersMessage = usersMessage.sort((a, b) => b.id - a.id )
  return(
    <Grid columns={1} stackable  centered>
      <Grid.Column width={13}  >

        {
          usersMessage.length> 0 ? (
            <List inverted={Settings.isNightMode()}  divided relaxed='very'  animated selection  >
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
    </Grid>

  )

}

export default MessageComponent
