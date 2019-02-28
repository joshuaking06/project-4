import React from 'react'
import StoryCard from './StoryCard'

import {Statistic, Grid, Image,Header,Divider, Button,Icon} from 'semantic-ui-react'

const UsersDetail = (usersDetail) => {
  console.log(usersDetail)

  const { username, followers, following, stories_written } = usersDetail.usersDetail
  console.log(stories_written.length)


  // {stories_written.map(story =>
  //   <StoryCard key={story.id} story={story}/>
  // )
  // }
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
