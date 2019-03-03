import React from 'react'
import { Segment, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Settings from '../../lib/Settings'

const MyReadingList = ({ stories }) => {
  const nightMode = Settings.isNightMode()
  return(
    <Segment inverted={nightMode} className='library-list'>
      {stories.slice().reverse().map(story =>
        <Card key={story.id} fluid>
          <Card.Content>
            <Card.Header content={story.title}/>
            <Card.Description content={story.description} />
            <Link to={`/stories/${story.id}`}> Read </Link>
          </Card.Content>
        </Card>
      )}
    </Segment>
  )
}

export default MyReadingList
