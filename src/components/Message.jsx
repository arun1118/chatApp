import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://preview.redd.it/gt86ngpx96fa1.jpg?width=640&crop=smart&auto=webp&s=34f27a02c81ee77bf36a709c9782ad3284ede898" alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://static.toiimg.com/thumb/msid-101024249,imgsize-95756,width-900,height-1200,resizemode-6/101024249.jpg" alt="" />
      </div>
    </div>
  )
}

export default Message