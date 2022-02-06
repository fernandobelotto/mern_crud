import UserForm from 'components/users/UserForm'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NewUserPage() {
    return (
        <>
            <h1>new user</h1>
            <UserForm />
            <Link to='/users'>Voltar</Link>
        </>
    )
}
