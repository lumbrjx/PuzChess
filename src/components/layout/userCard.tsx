import React from 'react'
import UserImg from '../ui/userImg'
import Button from '../ui/button'
import Badge from '../ui/badge'

function UserCard({user} : {user : any}) {
  return (
    <div
      className="text-mediumFnt bg-clrPrimaryBlack
       rounded-2xl w-full
       max-w-[36rem] shadow-cardDrop  py-12 px-4 sm:p-12"
    >
      <div className="flex justify-between w-full mb-10">
        <div className="flex gap-4">
          <UserImg src={user?.image} />
          <h2>{user?.name}</h2>
        </div>
        <div><Badge badge={user?.badge} /></div>
      </div>
      <div className="mb-10">
        <p>Elo : {user?.chessElo}</p>
        <p>Rank : {user?.chessElo}</p>
        <p>played games : later</p>
      </div>
      <div
        className="flex justify-between w-full
        flex-wrap  gap-2"
      >
        <Button
          label="Edit profile"
          style="Green"
          additional="rounded-regBtn px-10 text-black"
        />
      </div>
    </div>
  )
}

export default UserCard
