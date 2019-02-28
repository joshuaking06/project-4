import React from 'react'
import StoryCard from './StoryCard'
import Auth from '../../lib/Auth'

import {Statistic, Grid, Image,Header,Divider, Button,Icon} from 'semantic-ui-react'

const UsersDetail = (usersDetail) => {

  const { username, followers, following, stories_written,id } = usersDetail.usersDetail// eslint-disable-line
  // console.log(followers)
  // const a = followers.map(follower => {
  //   return follower.id
  // })
  // console.log(a)
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
              <Button positive className='detail'> <Icon name='check circle'/>Following</Button>
            ) : (
              <Button primary className='detail'><Icon name='add user'/>Follow</Button>
            )
          )
        }

        {
          id !== Auth.getUserID() &&
          (
            <Button primary className='detail'> <Icon name='comments'/>Message User</Button>
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
            <StoryCard key={story.id} story={story}/>
          )

        ) : (
          <p>User has not posted any stories</p>
        )}

      </Grid.Column>
    </Grid>

  )

}

export default UsersDetail
