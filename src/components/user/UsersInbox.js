import React from 'react'
import MessageList from './MessageList'
// import Auth from '../../lib/Auth'
// import { Link } from 'react-router-dom'

// import {Statistic, Grid, Image,Header,Divider, Button,Icon} from 'semantic-ui-react'
import {Grid} from 'semantic-ui-react'



const UsersInbox = ({inbox}) => {
  console.log(inbox)
  return(
    <Grid columns={1} stackable textAlign='center'>
      <Grid.Column width={13}  >

        {
          inbox.length> 0 ? (
            <div className='message-holder'>
              <p>You have {inbox.length} messages</p>
              <MessageList />
            </div>

          ) : (
            <p>You have {inbox.length} messages</p>

          )
        }
      </Grid.Column>

    </Grid>

  )

}

export default UsersInbox
