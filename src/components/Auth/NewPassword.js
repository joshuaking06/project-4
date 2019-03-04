import React from 'react'
import { Divider, Button, Grid, Form, Input, Segment, Icon } from 'semantic-ui-react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Flash from '../../lib/Flash'

class NewPassword extends React.Component{
  constructor(props){
    super(props)

    this.state={
      postData: {
        password: '',
        password_confirmation: ''
      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    axios.put(`/api/users/${this.props.match.params.id}/newpassword`, this.state.postData)
      .then(res => {
        Auth.setToken(res.data.token)
        Flash.setMessage('succes', res.data.message)
        this.props.history.push('/login')
      })
      .catch(err => this.setState({ errors: err.response.data}))
      // .then(() => this.props.history.push('/login'))
      // .catch(err => this.setState({ errors: err }))
  }

  handleChange({ target: { name, value } }) {
    const postData = { ...this.state.postData, [name]: value }
    this.setState({ postData })
  }

  render(){
    const { postData } = this.state
    return(
      <Grid columns={1} stackable textAlign='center'>
        <Grid.Column width={8}>
          <Divider hidden/>
          <Segment color="blue">
            <Icon name='user circle' size='huge' />
            <Form onSubmit={this.handleSubmit}>
              <Divider hidden />
              <Form.Field>
                <label>New Password</label>
                <Input
                  icon='lock'
                  iconPosition='left'
                  value={postData.password}
                  onChange={this.handleChange}
                  type='password'
                  placeholder='New Password'
                  name='password'
                />
              </Form.Field>
              <Form.Field>
                <label>Password Confirmation</label>
                <Input
                  icon='lock'
                  iconPosition='left'
                  value={postData.password_confirmation}
                  onChange={this.handleChange}
                  type='password'
                  placeholder='Password Confirmation'
                  name='password_confirmation'
                />
              </Form.Field>
              <Divider hidden/>
              <Button fluid content="Submit" primary icon='send' />
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}


export default NewPassword
