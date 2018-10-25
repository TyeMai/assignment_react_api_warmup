import React from 'react';
import Button from './Button'


const UserCard = ({user, onDeleteUser, onUpdateUser}) => {
  const {first_name, last_name, avatar, id} = user
  //console.log(user)

  // Set the CSS max-width attribute directly in the
  // element. `style` accepts a JS object and the
  // attributes use camelcase. See docs for more info.
  // Also using new card class for Bootstrap 4.
  return (
    <div
      className="UserCard card"
      style={{maxWidth: '128px'}}
    >
      <img
        className="card-img-top img-fluid"
        src={avatar}
        alt="user avatar"
      />
      <div className="card-block">
        <h4>{first_name} {last_name}</h4>
      </div>
    <Button type='button' onClick={() => {onDeleteUser(id)}} >
      Delete
    </Button>
      <Button type='button' onClick={() => {onUpdateUser()}} >
        Update
      </Button>
    </div>
  )
}

export default UserCard
