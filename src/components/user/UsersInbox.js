import React from 'react'
import MessageList from './MessageList'
// import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'

// import {Statistic, Grid, Image,Header,Divider, Button,Icon} from 'semantic-ui-react'
import {Grid,List} from 'semantic-ui-react'



const UsersInbox = ({inbox}) => {
  return(
    <Grid columns={1} stackable textAlign='center'>
      <Grid.Column width={13}  >

        {
          inbox.length> 0 ? (
            <List divided relaxed>
              <p>You have sent {inbox.length} messages</p>
              {
                inbox.map(message =>
                  <Link
                    key={message.id}
                    to={{
                      pathname: `/messages/${message.id}/show`,
                      state: {
                        message: message
                      }
                    }

                    }
                  >
                    <MessageList
                      key={message.id}
                      messageData={message}
                      information={'Message was recieved at'}
                    />
                  </Link>
                )
              }


            </List>

          ) : (
            <p>You have {inbox.length} messages</p>

          )
        }
      </Grid.Column>

    </Grid>

  )

}

export default UsersInbox
