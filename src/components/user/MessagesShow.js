import React from 'react'
// import StoryCard from './StoryCard'
// import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../../lib/Auth'

import {Segment, Grid, Container, Header,Divider,Icon} from 'semantic-ui-react'

class MessageShow extends React.Component{

  componentDidMount(){
    const headers = {'Authorization': `Bearer ${Auth.getToken()}`}

    axios.get(`/api/messages/${this.props.match.params.id}`, {headers: headers})
      .then( res =>{
        this.setState({ messageDetail: res.data})
      })
      .then(console.log(this.state))
  }

  // const {content,  created_at, receiver,sender} = props.location.state.message // eslint-disable-line
  // const {info} = props.location.state
  // const {id, username} = sender || receiver
  render(){
    return(
      <div>
        {/*<Container>
        <Divider section hidden />

        <Segment>

          <Grid celled='internally' stackable>
            <Grid.Row>
              <Grid.Column width={16} textAlign='center'>
                <Icon name='mail' size='huge' />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered>

              <Grid.Column width={10}>
                <Header size='medium' as='h2'>User Name:</Header>

                <p>{username}</p>

                <Header size='medium' as='h2'>Messages:</Header>

                <p>{content}</p>

              </Grid.Column>

            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16} textAlign='center'>

                <p>This message was {info} at {created_at}</p>

                <Link className='ui button positive'
                  to={'/messages'}
                >
                  <i className='arrow alternate circle left icon' aria-hidden='true' />
                Go Back
                </Link>

                {
                  info==='recieved' &&
                <Link className='ui button primary'
                  to={`/users/${id}/message`}
                >
                  <i className='reply icon' aria-hidden='true' />
                  Reply Back
                </Link>
                }

              </Grid.Column>

            </Grid.Row>
          </Grid>

        </Segment>
      </Container>*/}
        here
      </div>
    )
  }

}
{/*  eslint-disable-line*/}
export default MessageShow
