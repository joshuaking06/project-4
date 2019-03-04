/* global describe, it, beforeEach, before, after */
import React from 'react'
import Promise from 'bluebird'
import axios from 'axios'
import sinon from 'sinon'
import { expect } from 'chai'
import { mount } from 'enzyme'
import UsersShow from '../../src/components/user/UsersShow'
import { MemoryRouter, Route } from 'react-router-dom'



describe('Semantic UI tests', () => {
  let wrapper, response

  before(done => {
    response = Promise.resolve({
      data: {
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
    })

    sinon.stub(axios, 'get').returns(response)
    done()
  })

  after(done => {
    axios.get.restore()
    done()
  })




  //usersDetail, handleUnfollowEvent, handleFollowEvent, handleUsersMessagingEvent
  beforeEach(done => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/users/1']}>
        <Route  path="/users/:id" component={UsersShow}  />
      </MemoryRouter>

    )
    done()
  })

  it('should create the correct state', done => {
    response.then(() => {
      wrapper.update()
      expect(wrapper.find('UsersShow').state().usersDetail).to.be.an('object')
      // expect(wrapper.find('UsersShow').state().usersDetail.id).to.eq(1)
      done()
    })
  })

})
