import React from 'react'
import { Segment, Container, Grid, Image  } from 'semantic-ui-react'


class UsersShow extends React.Component{



  render(){
    return(
      <Container>
        <Grid columns={1} stackable textAlign='center'>
          <Grid.Column width={8} >
            <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='medium' circular centered/>
          </Grid.Column>
        </Grid>

      </Container>

    )
  }
}


export default UsersShow
