import React from 'react'
// import StoryCard from './StoryCard'
// import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../../lib/Auth'
import LoadingPage from '../common/LoadingPage'

import {Segment, Grid, Container, Header,Divider,Icon, Button} from 'semantic-ui-react'
import moment from 'moment'
import Settings from '../../lib/Settings'
import Speech from '../../lib/Speech'
// let voices = []
// const synth = window.speechSynthesis


class MessageShow extends React.Component{

  constructor(){
    super()
    this.speakHandle = this.speakHandle.bind(this)

  }

  componentDidMount(){
    if(Auth.isAuthenticated()){
      const headers = {'Authorization': `Bearer ${Auth.getToken()}`}
      axios.get(`/api/messages/${this.props.match.params.id}`, {headers: headers})
        .then( res =>{
          this.setState({ messageDetail: res.data})
        })
    }
  }

  // voices(){
  //   voices = synth.getVoices()
  //   voices = voices[0]
  //   console.log(voices)
  //   // this.setState({  voices: window.speechSynthesis.getVoices()})
  // }

  speakHandle(){
    console.log(Speech.getVoice())
    Speech.appSpeak(this.state.messageDetail.content)
  }

  render(){
    if(!this.state) return <LoadingPage />
    const {content,  created_at, receiver,sender} = this.state.messageDetail // eslint-disable-line
    let info

    if(sender.id !== Auth.getUserID()) info = 'recieved'
    else info = 'send'

    return(


      <Container>
        <Divider section hidden />

        <Segment inverted={Settings.isNightMode()}>

          <Grid celled='internally' stackable >
            <Grid.Row>
              <Grid.Column width={16} textAlign='center'>
                <Icon name='mail' size='huge' />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered>

              <Grid.Column width={10}>
                <Header size='medium' as='h2' inverted={Settings.isNightMode()}>From:</Header>

                <p>{sender.username}</p>
                <Header size='medium' as='h2' inverted={Settings.isNightMode()}>To:</Header>

                <p>{receiver.username}</p>

                <Header size='medium' as='h2' inverted={Settings.isNightMode()}>Messages:</Header>

                <p>{content}</p>

              </Grid.Column>


            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16} textAlign='center'>

              <p>This message was {info} at {moment(created_at).format('dddd HH:mm')}</p>{/*  eslint-disable-line*/}

                <Link className='ui button positive'
                  to={'/messages'}
                >
                  <i className='arrow alternate circle left icon' aria-hidden='true' />
                Go Back
                </Link>

                {
                  info==='recieved' &&
                <Link className='ui button primary'
                  to={`/users/${sender.id}/message`}
                >
                  <i className='reply icon' aria-hidden='true' />
                  Reply Back
                </Link>
                }
                <Button onClick={this.speakHandle}>Speak</Button>

              </Grid.Column>

            </Grid.Row>
          </Grid>

        </Segment>
      </Container>

    )
  }

}
{/*  eslint-disable-line*/}
export default MessageShow
