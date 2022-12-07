//Import React
import React from 'react'

//UserProfile is a function based component 
//It shows a button so user can click on it and logout
const UserProfile = ()=> {
  // Event handler for button
  const handleClick = () => {
    alert('User has logged out')
  };
  //It shows Logout button
  //Event handler is attached to onClick event
  return (
      <button onClick={handleClick}>
        Logout
      </button>
  )
}
//Export UserProfile so it can be used by other components
export default UserProfile