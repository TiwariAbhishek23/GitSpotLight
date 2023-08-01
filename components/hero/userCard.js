import React from 'react'
import Image from 'next/image';
const UserCard = ({user}) => {

  if (!user.avatar_url || !user.name || !user.email || !user.twitter_user || !user.company || !user.created_at) {
    return <div>Loading...</div>; // Display a loading state until all data is available
  }
    return (
        <div className="stats ">
        <div className="user">
          <div className="pic ">
            <Image
              src={user.avatar_url}
              alt="userName Profile Avatar"
              height="200"
              width="200"
              className="rounded-4xl mx-auto -rotate-6"
            />
            <span className="grade text-4xl">user Data</span>
          </div>
          <div className="userNamedata my-8 text-justify font-thin bg-goldenyellow text-black p-4 rounded-4xl">
            {user.name && (
              <div className="name">
                👨‍💻 Name : <div className="name-tab  inline">{user.name}</div>
              </div>
            )}
            {user.email && <div className="mail"> 📬 Email : {user.email}</div>}
            {user.twitter_username && (
              <div className="twitter">
                🐤 Twitter user Name : {user.twitter_username}
              </div>
            )}
            {user.company && (
              <div className="company">💼 Company : {user.company}</div>
            )}
            {user.created_at && (
              <div className="date">🗓️ Joining Date : {user.created_at}</div>
            )}
          </div>
        </div>
      </div>
    )
}
export default UserCard;
