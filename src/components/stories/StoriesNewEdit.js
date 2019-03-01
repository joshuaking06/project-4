import React from 'react'
import StoryForm from './Storyform'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Flash from '../../lib/Flash'

// component will make axios request based on whether or not url is stories/new or stories/edit/storyid

class StoriesNewEdit extends React.Component{
  constructor(props){
    super(props)

    this.state={
      errors: {},
      isNew: (this.props.match.path === '/stories/new'),
      storyData: {
        title: '',
        description: '',
        content: '',
        genre: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSaveDraft = this.handleSaveDraft.bind(this)
  }


  // handle the changing of form data
  handleChange({ target: { name, value }}) {
    const postData = {...this.state.storyData, [name]: value }
    const errors= {}
    this.setState({ storyData, errors })
  }

  handleSaveDraft(e){
      e.preventDefault()
      axios.post('/api/stories', {...this.state.storyData, finished: false},
        { headers: { Authorization: `Bearer ${Auth.getToken()}` } }
      )
        .then(() => {
          Flash.setMessage('success', 'Story Successfully Saved' )
        })
        .catch(err => this.setState({ errors: err.response.data }))
  }

  // submit the form data
  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/stories', {...this.state.storyData, finished: true},
      { headers: { Authorization: `Bearer ${Auth.getToken()}` } }
    )
      .then(() => {
        Flash.setMessage('success', 'Story Successfully Submitted' )
        this.props.history.push('/stories')
      })
      .catch(err => this.setState({ errors: err.response.data }))
  }


  // keeps state the same if on stories new page, otherwise get story data to populate the form
  getStoryData(isNew){
    console.log('on /new?', isNew)
    if(isNew) return null
    else {
      axios.get(`/api/stories/${this.props.match.params.id}`)
        .then(res => this.setState({ storyData: res.data }))
    }
  }


  componentDidMount(){
    this.getStoryData(this.state.isNew)
  }

  render(){
    console.log(this.state)
    return(
      <StoryForm
        storyData={this.state.storyData}
        handleSaveDraft={this.handleSaveDraft}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
     />
    )
  }
}

export default StoriesNewEdit
