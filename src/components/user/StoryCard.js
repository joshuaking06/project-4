import React from 'react'
import {Icon,Card  } from 'semantic-ui-react'
const description = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.'
].join(' ')
const StoryCard = () => {

  return(
    <Card className='users-profile-card' style={{width: 'auto'}}>
      <Card.Content header='About Amy' />
      <Card.Meta content='Horror, Sci-fi' />
      <Card.Content description={description} />
      <Card.Content extra >
        <a>
          <Icon name='comment outline' />
                        22 comments
        </a>
        <a>
          <Icon name='heart outline' />
                        22 likes
        </a>
      </Card.Content>
    </Card>
  )

}

export default StoryCard
