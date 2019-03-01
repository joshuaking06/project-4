import React from 'react'
import { Segment, Card, Header, Button, Icon, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MyStoriesList = ({ stories }) => {
  return(
    <Segment className='library-list'>
      {stories.slice().reverse().map(story =>
        <Link
          key={story.id}
          to ={{
            pathname: `/stories/${story.id}`,
            state: {
              reddit: false,
              storyId: story.id
      }}}>
          <Card fluid>
            <Card.Content>
              <Card.Header content={story.title}/>
              <Card.Description content={story.description} />
            </Card.Content>
          </Card>
        </Link>
      )}
    </Segment>
  )
}

export default MyStoriesList
