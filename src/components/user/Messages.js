import React from 'react'
import axios from 'axios'
import { Container, Segment, Tab, Divider, Header} from 'semantic-ui-react'
// import Flash from '../../lib/Flash'

import LoadingPage from '../common/LoadingPage'
// import UsersInbox from './UsersInbox'
// import UsersOutbox from './UsersOutbox'
import MessageComponent from './MessageComponent'

import Settings from '../../lib/Settings'

import Auth from '../../lib/Auth'


class Messages extends React.Component{

  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    const headers = {'Authorization': `Bearer ${Auth.getToken()}`}

    axios.get('/api/me', {headers: headers} )
      .then( res =>{
        this.setState({ usersDetail: res.data})
      })
  }

  render(){
    if(!this.state.usersDetail ) return <LoadingPage />
    const panes = [
      { menuItem: 'Recieved', render: () => <Tab.Pane inverted={Settings.isNightMode()} attached={false}><MessageComponent  inbox={this.state.usersDetail.inbox} info={'recieved'}/></Tab.Pane> },
      { menuItem: 'Sent', render: () => <Tab.Pane inverted={Settings.isNightMode()} attached={false}><MessageComponent outbox={this.state.usersDetail.outbox} info={'sent'}/></Tab.Pane> }
    ]
    return(
      <Container>
        <Divider section hidden />

        <Segment inverted={Settings.isNightMode()}>
          <Header size='medium' as='h1'>Your Messages</Header>

          <Tab menu={{ secondary: true, pointing: true,  inverted: Settings.isNightMode() }} panes={panes} />


        </Segment>
      </Container>
    )
  }
}


export default Messages
