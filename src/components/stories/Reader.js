import React from 'react'
import { Segment, Divider, Header, Image } from 'semantic-ui-react'

const Reader = ({ story }) => {
  return(
    <Segment textAlign='center' color='red'>
      <Header as='h2'> {story.title} </Header>
      <Divider section hidden/>
      <p> {story.content} </p>
    </Segment>
  )
}

export default Reader
