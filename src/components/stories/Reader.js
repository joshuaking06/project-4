import React from 'react'
import { Segment, Divider, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import FlipPage from 'react-flip-page'
import Settings from '../../lib/Settings'


const style = {
  width: '100%'
}

class Reader extends React.Component{

  constructor(props){
    super(props)

    this.state={
      nightMode: Settings.isNightMode(),
      width: window.innerWidth
    }
  }

  modifyStory(){
    const newStory = []
    let base = 0
    if(this.state.width < 450){
      const storySentences = this.props.story.content.split('')
      for(let i = 800; i < storySentences.length+799; i+=800){
        newStory.push(storySentences.slice(base,i).join(''))
        base +=800
      }
    } else if(this.state.width > 500){
      const storySentences = this.props.story.content.split('.')
      for(let i = 10; i < storySentences.length+9; i+=10){
        newStory.push(storySentences.slice(base,i).join('.'))
        base +=10
      }
    } else {
      const storySentences = this.props.story.content.split('')
      for(let i = 1000; i < storySentences.length+999; i+=1000){
        newStory.push(storySentences.slice(base,i).join(''))
        base +=1000
      }
    }
    if (newStory.length === 0) return [this.props.story.content]
    return newStory
  }

  componentDidMount(){
    this.setState({ newStory: this.modifyStory() })
  }

  render(){
    const { nightMode } = this.state
    console.log(this.state)
    if(!this.state.newStory)return null
    if(this.state.width < 450)return(
      <div id='flippertwo'>
        <FlipPage
          orientation='horizontal'
          responsive
          style={{ touchAction: 'none' }}
        >
          {this.state.newStory.map((storyPart, index) =>
            <Segment inverted={nightMode} style={style} key={index} textAlign='center'>
              <Header as='h2'> {`${this.props.story.title}(${index+1})`}  </Header>
              <Link to={`info/${this.props.story.id}`}> Info </Link>
              <Divider section/>
              <p className='content-text'> {`${storyPart}`} </p>
              <Divider hidden />
            </Segment>
          )}
        </FlipPage>
      </div>
    )
    if(this.state.width < 500)return(
      <div id='flippertwo'>
        <FlipPage
          orientation='horizontal'
          responsive
          style={{ touchAction: 'none' }}
        >
          {this.state.newStory.map((storyPart, index) =>
            <Segment inverted={nightMode} style={style} key={index} textAlign='center'>
              <Header as='h2'> {`${this.props.story.title}(${index+1})`}  </Header>
              <Link to={`info/${this.props.story.id}`}> Info </Link>
              <Divider section/>
              <p className='content-text'> {`${storyPart}`} </p>
              <Divider hidden />
            </Segment>
          )}
        </FlipPage>
      </div>
    )
    if(this.state.width > 500)return(
      <div>
        <Segment inverted={nightMode} style={style}  id='reader' textAlign='center'>
          <Header as='h2'> {this.props.story.title}</Header>
          <Link to={`info/${this.props.story.id}`}> Info </Link>
          <Divider />
          {this.state.newStory.map((storyPart, index) =>
            <p key={index} className='content-text'> {storyPart} </p>
          )}
          <Divider hidden />
        </Segment>
      </div>
    )
  }
}

export default Reader
