import React from 'react'
import { Segment, Grid, Form, Input, Divider, Button, TextArea, Message, Icon } from 'semantic-ui-react'


const RegisterForm = ({ handleChange, handleSubmit, errors }) => {

  // function made to return error messages from the error response from server, putting them in array to be passed into message
  const errorMessages = Object.keys(errors).map(errorKey => {
    return errors[errorKey]
  })

  return(
    <Grid columns={1} stackable textAlign='center'>
      <Grid.Column width={8}>
        <Divider hidden />
        <Segment color='blue'>
          <Icon name='user plus' size='huge' />

          {/* displaying any error messages the user has received */}
          {errorMessages.length >0 && <Message
            error
            header='There were some errors with your submission'
            list={errorMessages}
          />}
          <Form onSubmit={handleSubmit} >


            <Form.Field required>
              <label>Create Your Username</label>
              <Input
                icon='user'
                iconPosition='left'
                onChange={handleChange}
                placeholder='Username'
                required
                name='username'
              />
            </Form.Field>


            <Form.Group widths='equal'>
              <Form.Input
                icon='info'
                iconPosition='left'
                label='First name'
                required
                name='firstName'
                placeholder='First name'
                onChange={handleChange}
              />

              <Form.Input
                icon='info'
                iconPosition='left'
                onChange={handleChange}
                required
                label='Last name'
                name='lastName'
                placeholder='Last Name' />
            </Form.Group>

            <Form.Field required>
              <label>Enter Your Email</label>
              <Input
                icon='envelope'
                iconPosition='left'
                onChange={handleChange}
                placeholder='Email'
                type='email'
                name='email'
              />
            </Form.Field>
            <Form.Field required>
              <label>Create a Password</label>
              <Input
                icon='lock'
                iconPosition='left'
                onChange={handleChange}
                placeholder='Password'
                type='password'
                name='password'
              />
            </Form.Field>
            <Form.Field required>
              <label>Confirm Your Password</label>
              <Input
                icon='lock'
                iconPosition='left'
                onChange={handleChange}
                placeholder='Password'
                type='password'
                name='password_confirmation'
              />
            </Form.Field>

            <Form.Field required>
              <label>Please Make a Bio</label>
              <TextArea
                name='bio'
                placeholder='Tell Us About Yourself'
                style={{ minHeight: 100 }}
                onChange={handleChange}
              />
            </Form.Field>


            <Button fluid content="Submit" primary icon='send' />

          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default RegisterForm
