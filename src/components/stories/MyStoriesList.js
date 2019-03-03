import React from 'react'
import { Segment, Card, Header, Button, Icon, Grid, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Settings from '../../lib/Settings'

const MyStoriesList = ({ stories }) => {
  const nightMode = Settings.isNightMode()
  return(
    <Segment inverted={nightMode} className='library-list'>
      {stories.slice().reverse().map(story =>
          <Card key={story.id} fluid>
            <Card.Content>
              <Card.Header content={story.title}/>

              <Card.Description> {story.description}
              </Card.Description>
              <Link to={`/stories/${story.id}`}> Read </Link>
              <Link to={`/stories/edit/${story.id}`}> Edit</Link>
            </Card.Content>
          </Card>
      )}
    </Segment>
  )
}

export default MyStoriesList
