import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getUsers} from './action/getUsers'

const User_Saga = () => {

    const dispatch = useDispatch()
    const users = useSelector((state)=>state.data)


    useEffect(()=>{
        dispatch(getUsers())
    },[dispatch])

  return (
    <div>
        <strong>Total : {users?.length}</strong>
        <ul>
            {
                users?users.map((user,index)=>(
                    <li key={index}>{user.name}</li>
                )):
                <li>Loading.....</li>
            }
        </ul>
    </div>
  )
}

export default User_Saga