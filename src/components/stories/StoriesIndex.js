import React from 'react'
import FlipPage from 'react-flip-page'
import { Segment } from 'semantic-ui-react'

class StoriesIndex extends React.Component{
  constructor(){
    super()

    this.state={
      width: window.innerWidth,
    }

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
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

    if(isMobile){
      return(
        <div id='flipper'>
          <FlipPage
            style={{ touchAction: 'none' }}
            loopForever
            orientation='horizontal'
          >
            <img src="http://unsplash.it/320/480" />
            <img src="http://clipart-library.com/image_gallery/206146.png" />
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
