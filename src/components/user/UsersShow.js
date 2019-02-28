import React from 'react'
import { Segment,Statistic, Container, Grid, Image,Header,Divider, Button,Icon,Card  } from 'semantic-ui-react'

const description = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.'
].join(' ')

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

              <Divider  hidden />
              <Button primary><Icon name='add user'/>Follow</Button>
              <Button primary> <Icon name='comments'/>Message User</Button>

              <Divider hidden />

              <Button positive> <Icon name='check circle'/>Following</Button>
              <Divider hidden />

              <Grid columns={3} stackable textAlign='center'>
                <Statistic label='followers' value='5,550' />
                <Statistic label='followings' value='5,550' />
                <Statistic label='posts' value='5,550' />
              </Grid>

              <Divider  />

              <Card className='users-profile-card' style={{width: 'auto'}}>
                <Card.Content header='About Amy' />
                <Card.Meta content='Horror, Sci-fi' />
                <Card.Content description={description} />
                <Card.Content extra >
                  <a>
                    <Icon name='comment outline' />
                    22 comments
                  </a>
                  <a>
                    <Icon name='heart outline' />
                    22 likes
                  </a>
                </Card.Content>
              </Card>


              <Card className='users-profile-card' style={{width: 'auto'}}>
                <Card.Content header='About Amy' />
                <Card.Meta content='Horror, Sci-fi' />
                <Card.Content description={description} />
                <Card.Content extra >
                  <a>
                    <Icon name='comment outline' />
                    22 comments
                  </a>
                  <a>
                    <Icon name='heart outline' />
                    22 likes
                  </a>
                </Card.Content>
              </Card>


              <Card className='users-profile-card' style={{width: 'auto'}}>
                <Card.Content header='About Amy' />
                <Card.Meta content='Horror, Sci-fi' />
                <Card.Content description={description} />
                <Card.Content extra >
                  <a>
                    <Icon name='comment outline' />
                    22 comments
                  </a>
                  <a>
                    <Icon name='heart outline' />
                    22 likes
                  </a>
                </Card.Content>
              </Card>




              <Card className='users-profile-card' style={{width: 'auto'}}>
                <Card.Content header='About Amy' />
                <Card.Meta content='Horror, Sci-fi' />
                <Card.Content description={description} />
                <Card.Content extra >
                  <a>
                    <Icon name='comment outline' />
                    22 comments
                  </a>
                  <a>
                    <Icon name='heart outline' />
                    22 likes
                  </a>
                </Card.Content>
              </Card>


            </Grid.Column>
          </Grid>
        </Segment>
      </Container>

    )
  }
}


export default UsersShow
