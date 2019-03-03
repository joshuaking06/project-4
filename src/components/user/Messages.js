import React from 'react'
import axios from 'axios'
import { Container, Segment, Tab} from 'semantic-ui-react'
// import Flash from '../../lib/Flash'

import LoadingPage from '../common/LoadingPage'
import UsersInbox from './UsersInbox'
import UsersOutbox from './UsersOutbox'
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
    console.log(this.state.usersDetail)
    const panes = [
      { menuItem: 'Recieved', render: () => <Tab.Pane attached={false}><UsersInbox  inbox={this.state.usersDetail.inbox}/></Tab.Pane> },
      { menuItem: 'Sent', render: () => <Tab.Pane attached={false}><UsersOutbox outbox={this.state.usersDetail.outbox}/></Tab.Pane> }
    ]

    return(
      <Container>
        <Segment inverted={Settings.isNightMode()}>
          <Tab menu={{ secondary: true, pointing: true, inverted: Settings.isNightMode() }} panes={panes} />
        </Segment>
      </Container>
    )
  }
}


export default Messages
