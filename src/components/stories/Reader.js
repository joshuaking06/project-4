import React from 'react'
import { Segment, Divider, Header, Image } from 'semantic-ui-react'

const Reader = ({ story }) => {
  //separating story into paragraphs every 10 sentences
  const storySentences = story.content.split('.')
  const newStory = []
  let base = 0
  for(let i = 10; i < storySentences.length+9; i+=10){
    newStory.push(storySentences.slice(base,i).join('.'))
    base +=10
  }


  return(
    <Segment id='reader' textAlign='center' color='red'>
      <Header as='h2'> {story.title} </Header>
      <Divider section hidden/>
      {newStory.map((story, index) =>
        <p key={index}> {`${story}.`} </p>
      )}
      <Divider hidden />
    </Segment>
  )
}

export default Reader
