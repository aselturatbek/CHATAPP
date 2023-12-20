import React from 'react'

export const Message = () => {
  return (
    <div className='message'>
      <div className="messageInfo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbM0T9flODSDV7M9_zL-LUYyGUuzfb0l5iF2lS4498aS_a4plhU7lgPtXtP_QPzjSKpM&usqp=CAU" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbM0T9flODSDV7M9_zL-LUYyGUuzfb0l5iF2lS4498aS_a4plhU7lgPtXtP_QPzjSKpM&usqp=CAU" alt="" />
      </div>
          
    </div>
  );
};

export default Message;
