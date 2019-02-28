import React from 'react'
import StoryCard from './StoryCard'

import {Statistic, Grid, Image,Header,Divider, Button,Icon} from 'semantic-ui-react'

const UsersDetail = (usersDetail) => {
  console.log(usersDetail)

  const { username, followers, following } = usersDetail.usersDetail
  console.log(username)
  return(

    <Grid columns={1} stackable textAlign='center'>
      <Grid.Column width={8}  >
        <Header as='h1' icon textAlign='center'>
          <Header.Content>{username}</Header.Content>
        </Header>


        <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='medium' circular centered/>

        <Divider  hidden />
        <Button primary className='detail'><Icon name='add user'/>Follow</Button>
        <Button primary className='detail'> <Icon name='comments'/>Message User</Button>

        <Divider hidden />
        {/*
                    <Button positive className='detail'> <Icon name='check circle'/>Following</Button>

                  */}
        <Divider hidden />

        <Grid columns={3} stackable textAlign='center'>
          <Statistic label='followers' value={(followers.length+0.00).toLocaleString()} />
          <Statistic label='followings' value={(following.length+0.00).toLocaleString()} />
          <Statistic label='posts' value='0' />
        </Grid>

        <Divider  />


        <StoryCard />

      </Grid.Column>
    </Grid>

  )

}

export default UsersDetail
