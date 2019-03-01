import React from 'react'
import { Menu, Segment, Container, Input, Divider } from 'semantic-ui-react'
import MyReadingList from './MyReadingList'
import MyStoriesList from './MyStoriesList'
import axios from 'axios'
import Auth from '../../lib/Auth'

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
    if(!this.state.myData)return null
    const { activeItem } = this.state
    return(
      <Container>
        <Divider hidden />
        <Menu attached='top' tabular>
          <Menu.Item name='My Stories' active={activeItem === 'My Stories'} onClick={this.handleItemClick} />
          <Menu.Item
            name='My Reading List'
            active={activeItem === 'My Reading List'}
            onClick={this.handleItemClick}
          />
        </Menu>

        {activeItem === 'My Stories' &&
          <MyStoriesList
            stories={this.state.myData.stories_written}
          />
        }

        {activeItem === 'My Reading List' &&
          <MyReadingList
            stories={this.state.myData.read_list}
          />
        }

      </Container>
    )
  }
}


export default MyLibrary
