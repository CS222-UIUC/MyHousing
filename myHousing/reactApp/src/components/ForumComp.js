import React, { useState } from 'react'

import DiscussionBoard from 'react-discussion-board'

import 'react-discussion-board/dist/index.css'

const ForumComp = () => {
  const allPosts = [
    {
      profileImage:
        'https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg ,',
      name: 'Jane Doe',
      content: '<p>Hello everyone!</p><p>How are you all doing?</p><p>-Jane</>',
      date: new Date()
    },
    {
      profileImage:
        'https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
      name: 'John Doe',
      content:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      date: new Date()
    }
  ]

  const [posts, setPosts] = useState(allPosts)

  const submitPost = (text) => {
    const curDate = new Date()

    setPosts([
      ...posts,
      {
        profileImage:
          'https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
        name: 'Jane Doe',
        content: text,
        date: curDate,
      }
    ])
  }

  return (
    <div className='ForumComp'>
      <DiscussionBoard posts={posts} onSubmit={submitPost} />
    </div>
  )
}

export default ForumComp