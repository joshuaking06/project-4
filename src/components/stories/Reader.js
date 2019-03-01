import React from 'react'
import { Segment, Divider, Header, Image } from 'semantic-ui-react'
import FlipPage from 'react-flip-page'


const style = {
  width: '100%'
}

class Reader extends React.Component{

  constructor(props){
    super(props)

    this.state={
      width: window.innerWidth,
    }
  }

  modifyStory(){
    const newStory = []
    let base = 0
    if(this.state.width > 500){
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
    if(!this.state.newStory)return null
    console.log(this.state.newStory)
    if(this.state.width < 500)return(
      <div id='flippertwo'>
        <FlipPage
          orientation='horizontal'
          responsive
          style={{ touchAction: 'none' }}
        >
          {this.state.newStory.map((storyPart, index) =>
            <Segment style={style} key={index} textAlign='center' color='red'>
              <Header as='h2'> {this.props.story.title} <Header.Subheader> Page {index} </Header.Subheader></Header>
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
        <Segment style={style}  id='reader' textAlign='center' color='red'>
          <Header as='h2'> {this.props.story.title}</Header>
          <Divider section />
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
