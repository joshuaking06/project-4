import React from 'react'
import { Segment, List, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Settings from '../../lib/Settings'

const MyReadingList = ({ stories }) => {
  const nightMode = Settings.isNightMode()
  return(
    <Segment inverted={nightMode} className='library-list'>
      <List inverted={nightMode} relaxed animated selection>
        {stories.slice().reverse().map(story =>
          <List.Item key={story.id}>
            <List.Content floated='right'>
              <Button inverted={nightMode}> <Link to={`/stories/${story.id}`}>Read</Link></Button>
            </List.Content>

            <List.Content>
              <List.Header> {story.title} </List.Header>
            </List.Content>
          </List.Item>

        )}
      </List>
    </Segment>
  )
}

export default MyReadingList
