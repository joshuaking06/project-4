import React from 'react'
import { Segment,Statistic, Container, Grid, Image,Header,Divider  } from 'semantic-ui-react'

const items = [
  { key: 'followers', label: 'Followers', value: '22' },
  { key: 'followings', label: 'Followings', value: '31,200' },
  { key: 'posts', label: 'Posts', value: '22' }
]

class UsersShow extends React.Component{



  render(){
    return(
      <Container>
        <Segment>

          <Grid columns={1} stackable textAlign='center'>
            <Grid.Column width={8}  >
              <Header as='h1' icon textAlign='center'>
                <Header.Content>User name</Header.Content>
              </Header>
              <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='medium' circular centered/>
              <Divider section hidden />
              <Grid columns={3} stackable textAlign='center'>
                <Statistic label='followers' value='5,550' />
                <Statistic label='followings' value='5,550' />
                <Statistic label='posts' value='5,550' />
              </Grid>

            </Grid.Column>
          </Grid>
        </Segment>
      </Container>

    )
  }
}


export default UsersShow
