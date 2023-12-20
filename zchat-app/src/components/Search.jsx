import React from 'react'

export const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='find a user' />

      </div>
      <div className="userChat">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbM0T9flODSDV7M9_zL-LUYyGUuzfb0l5iF2lS4498aS_a4plhU7lgPtXtP_QPzjSKpM&usqp=CAU" alt="" />
          <div className="userChatInfo">
            <span>Asel</span>
          </div>
      </div>
    </div>
  );
};

export default Search;
