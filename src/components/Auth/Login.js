import React from 'react'
import { Divider, Button, Grid, Form, Input, Segment, Message, Image } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import Auth from '../../lib/Auth'
import Flash from '../../lib/Flash'
import axios from 'axios'


class Login extends React.Component{
  constructor(){
    super()
    // data to be sent to back end login route, errors displayed as  message on form
    this.state={
      postData: {
        email: '',
        password: ''
      },

      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.goToRegister = this.goToRegister.bind(this)
  }

  // taking the value and name of target input and setting them in postData in state
  handleChange({ target: {name, value }}) {
    const postData = {...this.state.postData, [name]: value }
    this.setState({ postData })
  }

  // submitting the data and making a flash message, then redirecting to home
  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/login', this.state.postData)
      .then(res => {
        Auth.setToken(res.data.token)
        Flash.setMessage('success', res.data.message)
        this.props.history.push('/reddit')
      })
      .catch(err => this.setState({ errors: err.response.data }))
  }


  goToRegister(){
    this.props.history.push('/register')
  }


  render(){
    const errorMessages = Object.keys(this.state.errors).map(errorKey => {
      return this.state.errors[errorKey]
    })
    const { postData } = this.state
    return(
      <Grid columns={1} stackable textAlign='center'>
        <Grid.Column width={8}>
          <Divider hidden/>
          <Segment color="blue">
            <Image src="https://d2lp05f39ek59n.cloudfront.net/uploads/ReadMe_product_img_690313098_readme.png" />
            <p> Welcome back!</p>

            {/* displaying error messages when they exist, passing in list  of error messages */}
            {errorMessages.length >0 && <Message
              error
              header='There was some errors with your submission'
              list={errorMessages}
            />}

            <Form onSubmit={this.handleSubmit}>
              <Divider hidden />
              <Form.Field>
                <label>Your Email</label>
                <Input
                  icon='envelope'
                  iconPosition='left'
                  value={postData.email}
                  onChange={this.handleChange}
                  placeholder='Email'
                  name='email'
                />
              </Form.Field>
              <Form.Field>
                <label>Your Password</label>
                <Input
                  icon='lock'
                  iconPosition='left'
                  value={postData.password}
                  onChange={this.handleChange}
                  type='password'
                  placeholder='Password'
                  name='password'
                />
              </Form.Field>
              <Divider hidden/>
              <Button fluid content="Log In" primary icon='send' />
            </Form>
            <Divider hidden />
            <a href='#' onClick={this.goToRegister}> Need have an account? Click Here to Sign Up. </a>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}


export default withRouter(Login)
