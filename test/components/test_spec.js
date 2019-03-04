/* global describe, it, beforeEach */
import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import UsersDetail from '../../src/components/user/UsersDetail'
import { MemoryRouter, Route } from 'react-router-dom'

const usersDetail = {
  id: 1,
  username: 'SiddantGurung',
  followers: [],
  following: [
    {
      'id': 3,
      'usernam': 'joshuaking06'
    }
  ],
  stories_written: [
    {
      'description': 'a short story about inter',
      'genre': 'fantasy',
      'id': 1,
      'title': 'inter'
    },
    {
      'description': 'a short story about inter',
      'genre': 'fantasy',
      'id': 2,
      'title': 'inter'
    }
  ]
}

describe('Semantic UI tests', () => {
  let wrapper
  //usersDetail, handleUnfollowEvent, handleFollowEvent, handleUsersMessagingEvent
  beforeEach(done => {
    wrapper = shallow(<UsersDetail usersDetail={usersDetail} />)
    done()
  })

  it('it should render correct component (functional component)', done => {
    ///HeaderContent
    expect(wrapper.find('HeaderContent').length).to.eq(1)
    expect(wrapper.find('Statistic').length).to.eq(3)
    expect(wrapper.find('HeaderContent').text()).to.eq('<HeaderContent />')
    expect(wrapper.find('StoryCard').length).to.eq(2)
    done()
  })

  it('should render the correct data (functional component)', done => {
    const wrapper = mount(
      <MemoryRouter>
        <UsersDetail usersDetail={usersDetail} />
      </MemoryRouter>
    )
    expect(wrapper.find('.ui.icon.center.aligned.header .content').contains(<div className="content">
  SiddantGurung</div>))
    expect(wrapper.find('a').at(0).props().href).to.eq('/stories/1')
    done()
  })

})
