import React from 'react'
import { Segment, Form, TextArea, Input, Icon, Divider, Button, Container, Grid } from 'semantic-ui-react'

const StoryForm = ({ storyData, handleSaveDraft, handleChange, handleSubmit }) => {
  let width
  window.innerwidth <= 500 ? width = 100 : width = 60
  const style= {width: `${width}%`}
  return(
    <Container style={style}>
      <Grid>
        <Grid.Column>
          <Divider section hidden />
          <Segment color='red' textAlign='center'>
            <Form>
              <Form.Field required>
                <label>Story Title</label>
                <Input name='title' maxLength="150" value={storyData.title} onChange={handleChange} placeholder='Story Title' />
              </Form.Field>

              <Form.Field required>
                <label>Genre</label>
                <Input name='genre' maxLength="40" value={storyData.genre} onChange={handleChange} placeholder='Enter Genre' />
              </Form.Field>

              <Form.Field required>
                <label>Story Description</label>
                <TextArea name='description' maxLength="100" value={storyData.description} onChange={handleChange} placeholder='Please write a brief description' />
              </Form.Field>


              <Form.Field required>
                <label>Story Description</label>
                <TextArea
                  name='content'
                  autoHeight
                  style={{ minHeight: 300 }}
                  value={storyData.content}
                  onChange={handleChange}
                  placeholder='Story Content' />
              </Form.Field>
              <Button onClick={handleSubmit} primary>Publish Story</Button>
              <Button onClick={handleSaveDraft} positive> Save Story </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default StoryForm
