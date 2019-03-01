import React from 'react'
import axios from 'axios'
import { Container, Segment, Grid, Form, Input, Divider, Button, TextArea, Icon } from 'semantic-ui-react'
// import Flash from '../../lib/Flash'

// import LoadingPage from '../common/LoadingPage'
// import Auth from '../../lib/Auth'


class UsersShow extends React.Component{

  constructor(){
    super()
    this.state = {}

  }

  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then( res =>{
        this.setState({ usersDetail: res.data})
      })
  }

  // taking the value and name of input to set in state, before making post request to register
  handleChange({ target: { name, value }}) {
    console.log(name, value)
  }


  // submitting the data to back end register route
  handleSubmit(e){
    e.preventDefault()
    console.log('here')

  }



  render(){
    return(
      <Container>
        <Segment>
          <Grid columns={1} stackable textAlign='center'>
            <Grid.Column width={8}>
              <Divider hidden />
              <Segment>
                <Icon name='mail' size='huge' />
                <Form onSubmit={this.handleSubmit} >
                  <Form.Field required>
                    <label>Send message to:</label>
                    <Input
                      icon='user'
                      iconPosition='left'
                      onChange={this.handleChange}
                      placeholder='Username'
                      required
                      name='username'
                    />
                  </Form.Field>

                  <Form.Field required>
                    <label>Enter Your Message</label>
                    <TextArea
                      icon='envelope'
                      onChange={this.handleChange}
                      placeholder='Email'
                      type='email'
                      name='email'
                      style={{ minHeight: 200 }}
                    />
                  </Form.Field>

                  <Button fluid content="Submit" primary icon='send' />

                </Form>
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>

    )
  }
}


export default UsersShow
