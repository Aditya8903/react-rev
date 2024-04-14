/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user) return (
    <div>
      Please Login
    </div>
    )
    return (
        <> Welcome {user.userName} </>)

}

export default Profile
