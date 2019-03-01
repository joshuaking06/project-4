import React from 'react'
import StoryCard from './StoryCard'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'

import {Statistic, Grid, Image,Header,Divider, Button,Icon} from 'semantic-ui-react'




const UsersDetail = ({usersDetail, handleUnfollowEvent, handleFollowEvent, handleUsersMessagingEvent}) => {

  const { username, followers, following, stories_written,id } = usersDetail // eslint-disable-line

  return(

    <Grid columns={1} stackable textAlign='center'>
      <Grid.Column width={8}  >
        <Header as='h1' icon textAlign='center'>
          <Header.Content>{username}</Header.Content>
        </Header>


        <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='medium' circular centered/>

        <Divider  hidden />
        {
          id !== Auth.getUserID() &&
          (
            followers.some(f => f.id === Auth.getUserID())  ? (
              <Button positive className='detail' onClick={handleUnfollowEvent}> <Icon name='check circle'/>Following</Button>
            ) : (
              <Button primary className='detail' onClick={handleFollowEvent}><Icon name='add user'/>Follow</Button>
            )
          )
        }

        {
          id !== Auth.getUserID() &&
          (
            <Button primary className='detail' onClick={handleUsersMessagingEvent}> <Icon name='comments'/>Message User</Button>
          )
        }

        <Divider hidden />

        <Grid columns={3} stackable textAlign='center'>
          <Statistic label='followers' value={(followers.length+0.00).toLocaleString()} />
          <Statistic label='followings' value={(following.length+0.00).toLocaleString()} />
          <Statistic label='posts' value={(stories_written.length+0.00).toLocaleString()} />
        </Grid>

        <Divider  />

        {stories_written.length> 0  ? (
          stories_written.map(story =>
            <Link to ={{
              pathname: `/stories/${story.id}`,
              state: {
                reddit: false,
                storyId: story.id
              }}}  key={story.id}>
              <StoryCard key={story.id} story={story}/>
            </Link>

          )

        ) : (
          <p>User has not posted any stories</p>
        )}

      </Grid.Column>
    </Grid>

  )

}

export default UsersDetail
