import React from 'react'
import {Icon,Card  } from 'semantic-ui-react'

const StoryCard = (story) => {

  const { title, genre, description } = story.story
  
  return(
    <Card className='users-profile-card' style={{width: 'auto'}}>
      <Card.Content header={title} />
      <Card.Meta content={genre} />
      <Card.Content description={description} />
      <Card.Content extra >
        <a>
          <Icon name='comment outline' />
                        0 comments
        </a>
        <a>
          <Icon name='heart outline' />
                        0 likes
        </a>
      </Card.Content>
    </Card>
  )

}

export default StoryCard
