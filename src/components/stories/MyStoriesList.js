import React from 'react'
import { Segment, List, Header, Button, Icon, Grid, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Settings from '../../lib/Settings'

const MyStoriesList = ({ stories }) => {
  const nightMode = Settings.isNightMode()
  return(
    <Segment inverted={nightMode} className='library-list'>
      <List inverted={nightMode} relaxed animated selection>
        {stories.slice().reverse().map(story =>
          <List.Item key={story.id}>
            <List.Content floated='right'>
              <Button.Group size='tiny'>
                <Button size='tiny' inverted={nightMode}> <Link to={`/stories/${story.id}`}>Read</Link></Button>
                <Button.Or size='tiny' text='or' />
                <Button size='tiny' inverted={nightMode}><Link to={`/stories/edit/${story.id}`}>Edit</Link></Button>
              </Button.Group>
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

export default MyStoriesList
