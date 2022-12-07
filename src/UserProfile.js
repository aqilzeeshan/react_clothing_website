//Import React
import React from 'react'

//UserProfile is a class component 
//It shows a button so user can click on it and logout
class UserProfile extends React.Component {
  // Event handler for button
  // This syntax ensures `this` is bound within handleClick.
  handleClick = () => {
    alert('User has logged out')
  };
  //It shows Logout button
  //Event handler is attached to onClick event
  render() {
    return (
      <button onClick={this.handleClick}>
        Logout
      </button>
    );
  }
}
//Export UserProfile so it can be used by other components
export default UserProfile