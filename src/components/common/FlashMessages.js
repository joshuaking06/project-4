import React from 'react'

import Flash from '../../lib/Flash'
import { Message } from 'semantic-ui-react'

class FlashMessages extends React.Component{

  constructor(){
    super()

    this.state = {
      messageObj: null,
      visible: true
    }
    this.hide = this.hide.bind(this)
  }

  componentDidUpdate(){
    const messageObj = Flash.getMessages()
    if(!messageObj) return false

    this.setState({ messageObj: messageObj, visible: true })
    Flash.clearMessages()
    setTimeout(() => this.setState({ messages: null }), 5000)
  }

  hide(){
    this.setState({ visible: false})
  }

  render(){
    console.log(this.state.messageObj)
    return(
      <div>
        {this.state.messageObj && Object.keys(this.state.messageObj).map(type =>
          <div key={type}>
            <div>
              {this.state.visible &&
              <Message
                onDismiss={this.hide}
                success
                size='large'
              > {this.state.messageObj[type]}
              </Message>
              }
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default FlashMessages
