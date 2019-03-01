import React from 'react'
import { Segment, Card, Header, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MyStoriesList = ({ stories }) => {
  return(
    <Segment className='library-list'>
      {stories.map(story =>
        <Link
          key={story.id}
          to ={{
            pathname: `/stories/${story.id}`,
            state: {
              reddit: false,
              storyId: story.id
        }}}>
          
        </Link>
      )}
    </Segment>
  )
}

export default MyStoriesList
