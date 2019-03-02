import React from 'react'
// import StoryCard from './StoryCard'
// import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'

import {Segment, Grid, Container,Header,Divider, Button,Icon} from 'semantic-ui-react'
// import { List, Image} from 'semantic-ui-react'



const MessageShow = (props) => {
  // console.log(props)
  const {content,  created_at, receiver,sender} = props.location.state.message
  const {info} = props.location.state
  const {id, username} = sender || receiver

  return(
    <Container>
      <Segment>
        <Grid columns={1} stackable textAlign='center'>
          <Grid.Column width={13}  >
            <p>{username}</p>
            <p>{content}</p>
            <p>This message was {info} at {created_at}</p>
            <Link className='ui button'   to={}>Click Here</Link>
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  )
}

export default MessageShow
