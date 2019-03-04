import React from 'react'
import { Menu, Segment, Container, Input, Divider } from 'semantic-ui-react'
import MyReadingList from './MyReadingList'
import MyStoriesList from './MyStoriesList'
import FollowingList from './FollowingList'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Settings from '../../lib/Settings'

const headers = { headers: { Authorization: Auth.getToken() }}

class MyLibrary extends React.Component{
  constructor(props){
    super(props)

    this.state={
      activeItem: 'My Stories'
    }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  componentDidMount(){
    axios.get('/api/me', headers)
      .then(res => this.setState({ myData: res.data }))
  }

  handleItemClick(e, { name }){
    this.setState({ activeItem: name })
  }


  render(){
    console.log('mydata is', this.state)
    if(!this.state.myData) return null
    const nightMode = Settings.isNightMode()
    const { activeItem } = this.state
    return(
      <Container>
        <Divider hidden />
        <Menu inverted={nightMode} attached='top' tabular>
          <Menu.Item name='My Stories' active={activeItem === 'My Stories'} onClick={this.handleItemClick} />
          <Menu.Item
            name='Reading List'
            active={activeItem === 'Reading List'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Following'
            active={activeItem === 'Following'}
            onClick={this.handleItemClick}
          />
        </Menu>

        {activeItem === 'My Stories' &&
          <MyStoriesList
            stories={this.state.myData.stories_written}
          />
        }

        {activeItem === 'Reading List' &&
          <MyReadingList
            stories={this.state.myData.read_list}
          />
        }

        {activeItem === 'Following' &&
          <FollowingList
            following={this.state.myData.following}
          />
        }

      </Container>
    )
  }
}


export default MyLibrary
