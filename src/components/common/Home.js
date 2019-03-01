import React from 'react'
import Favicon from 'react-favicon'
import  { Header, Container } from 'semantic-ui-react'


class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      width: window.innerWidth

    }
  }


  render() {

    return(

      <div>
        <Favicon url="https://dash.readme.io/favicon.ico"
        />

        <Header className='background'>

          <Container className='homepage-margin'>
            <Header as='h1' className='heading read-me'>READ-ME
            </Header>
            <Header as="h4" className='heading2'>Share your short stories and and join our readers community
            </Header>
          </Container>
        </Header>
      </div>
    )
  }
}

export default Home
