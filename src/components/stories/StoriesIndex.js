import React from 'react'
import FlipPage from 'react-flip-page'
import { Segment, Header, Divider } from 'semantic-ui-react'
import axios from 'axios'


const style = {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '95%',
      height: '500px',
      backgroundImage: `url(https://marketplace.canva.com/MABdzJjyLYc/1/thumbnail_large/canva-student-writing-paper-lined--MABdzJjyLYc.png)`,
      backgroundSize: 'cover'
    }


class StoriesIndex extends React.Component{
  constructor(){
    super()

    this.state={
      width: window.innerWidth,
      stories: []
    }

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
    axios.get('/api/stories')
      .then(res => this.setState({ stories: res.data }))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange(){
    this.setState({ width: window.innerWidth })
  }



  render(){
    const { width } = this.state
    const isMobile = width <= 500
    console.log(this.state.stories)
    if(isMobile){
      return(
        <div id='flipper'>
          <Divider section hidden />
          <FlipPage
            style={{ touchAction: 'none' }}
            loopForever
            orientation='horizontal'
          >
            {this.state.stories.map(story =>
              <Segment
                style={style}
                className='index-card'
                key={story.id}
              >
                <Divider hidden />
                <Header
                  as='h3'
                  textAlign='center'
                > {story.title} </Header>
              </Segment>
            )}
          </FlipPage>
        </div>
      )
    }

    else return(
      <Segment>
        <p> Hello there </p>
        <p> Hello again </p>
        <p> Hello again again </p>
      </Segment>
    )
  }
}





export default StoriesIndex
