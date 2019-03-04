/* global describe, it, beforeEach */
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import UsersDetail from '../../src/components/user/UsersDetail'

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
      'id': 1,
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

  it('component rednder properly', done => {

    ///HeaderContent
    expect(wrapper.find('HeaderContent').length).to.eq(1)
    expect(wrapper.find('Statistic').length).to.eq(3)
    expect(wrapper.find('HeaderContent').text()).to.eq('<HeaderContent />')
    expect(wrapper.find('StoryCard').length).to.eq(2)
    done()
  })

})
