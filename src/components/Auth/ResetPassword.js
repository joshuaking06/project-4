import React from 'react'
import { Divider, Button, Grid, Form, Input, Segment, Icon,Message } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'


class ResetPassword extends React.Component{
  constructor(){
    super()

    this.state={
      postData: {
        email: ''
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: {name, value }}) {
    const postData = {...this.state.postData, [name]: value }
    this.setState({ postData })
  }

  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/resetpassword', this.state.postData)
      .then((res) =>  {
        this.props.history.push(`/users/${res.data.id}/newpassword`)
      })
      .catch(() => this.setState({ errors: { email: 'Email does not exist!'} }))

  }



  render(){
    const { postData } = this.state
    const errorMessages = Object.keys(this.state.errors).map(errorKey => {
      return this.state.errors[errorKey]
    })
    console.log(errorMessages)
    return(
      <Grid columns={1} stackable textAlign='center'>
        <Grid.Column width={5}>
          <Divider hidden/>
          <Segment color="blue">
            <Icon name='user circle' size='huge' />
            {errorMessages.length > 0 && <Message
              error
              header='There were some errors with your submission'
              list={errorMessages}
            />}
            <Form onSubmit={this.handleSubmit}>
              <Divider hidden />
              <Form.Field>
                <label>Please Confirm your Email Address</label>
                <Input
                  icon='envelope'
                  iconPosition='left'
                  value={postData.email}
                  onChange={this.handleChange}
                  placeholder='Email'
                  name='email'
                />
              </Form.Field>
              <Divider hidden/>
              <Button fluid content="Click to Verify" primary icon='send' />
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}


export default withRouter(ResetPassword)
