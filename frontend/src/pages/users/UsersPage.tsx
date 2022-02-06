import { User } from 'models/user'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store'
import { fetchUsers } from 'store/UserSlice'


export default function UsersPage() {

    const dispatch = useAppDispatch()
    const { users } = useAppSelector(state => state.users)
    console.log(users);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    function handleDeleteUser(id: string) {
        // UserApi.deleteById(id)
    }

    return (
        <>
            <h1>Users</h1>
            <Link to='new'>new user</Link>
            {users.length > 0 ? users.map((user: User) => {
                return (
                    <>
                        <p>{user.name} - {user.age}</p>
                        <button onClick={() => handleDeleteUser(user._id as string)}>delete</button>
                    </>
                )
            }) : null}
        </>
    )
}
