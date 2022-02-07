import { User } from 'models/user'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store'
import { deleteUserById, fetchUserById, fetchUsers } from 'store/UserThunks'


export default function UsersPage() {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { users } = useAppSelector(state => state.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    function handleDeleteUser(id: string) {
        dispatch(deleteUserById(id))
    }

    function handleEditUser(id: string) {
        dispatch(fetchUserById(id))
        navigate(`${id}`)
    }

    return (
        <>
            <Link to='/'>back to home</Link>

            <h1>Users</h1>
            <Link to='new'>new user</Link>
            {users.length > 0 ? users.map((user: User) => {
                return (
                    <>
                        <p>{user.name} - {user.age}</p>
                        <button onClick={() => handleDeleteUser(user._id as string)}>delete</button>
                        <button onClick={() => handleEditUser(user._id as string)}>edit</button>
                    </>
                )
            }) : null}
        </>
    )
}
