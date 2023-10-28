import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Talkative</span>
      <div className="user">
        <img src="https://assets.gqindia.com/photos/649585522110f25c56eba517/1:1/w_1600%2Cc_limit/Movies-rejected-by-Kriti-Sanon.jpg" alt="" />
        <span>Arun</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar