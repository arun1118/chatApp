import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src="https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2022/09/09/KRITI_16062022_7411w-1-scaled.jpg?fit=2048%2C2560&quality=80&zoom=1&ssl=1" alt="" />
        <div className="userChatInfo">
          <span>Arun</span>
        </div>
      </div>
    </div>
  )
}

export default Search