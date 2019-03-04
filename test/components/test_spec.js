/* global describe, it, beforeEach, beforeAll */
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import UsersDetail from '../../src/components/user/UsersDetail'
import sinon from 'sinon'



describe('Semantic UI tests', () => {
  let wrapper
  //usersDetail, handleUnfollowEvent, handleFollowEvent, handleUsersMessagingEvent
  beforeEach(done => {
    const usersDetail = {
      _id: 1,
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

    wrapper = shallow(<UsersDetail usersDetail={usersDetail} />)
    done()
  })

  it('component rednder properly', done => {
    console.log(wrapper.debug())
    
    ///HeaderContent
    expect(wrapper.find('HeaderContent').length).to.eq(1)
    expect(wrapper.find('Statistic').length).to.eq(3)
    expect(wrapper.find('HeaderContent').text()).to.eq('<HeaderContent />')
    expect(wrapper.find('StoryCard').length).to.eq(2)

    //<HeaderContent />
    done()
  })
})
