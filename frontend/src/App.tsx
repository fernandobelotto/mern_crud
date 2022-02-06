import React, { useEffect, useState } from 'react';
import { User } from './models/user';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function App() {

  const baseUrl = 'http://localhost:8000'

  const [users, setUsers] = useState([])

  const { register, handleSubmit } = useForm()

  useEffect(() => {
    getUsers()
  }, [])

  async function createUser(data: any) {
    try {
      await axios.post(`${baseUrl}/users`, data)
      getUsers()
    } catch (e) {
      console.error('error', e)
    }
  }

  async function getUsers() {
    try {
      const { data } = await axios.get(baseUrl + '/users')
      setUsers(data)
      console.log(data)
    } catch (e) {
      console.error('error', e)
    }
  }

  async function updateUser() { }


  async function handleDeleteUser(id: string) {
    try {
      await axios.delete(`${baseUrl}/users/${id}`)
      getUsers()
    } catch (e) {
      console.error('error', e)
    }
  }

  return (
    <>
      <h1>MERN Crud</h1>

      <form onSubmit={handleSubmit(createUser)}>
        <label>Name</label>
        <input title='name' type='text'
          {...register('name')}

        ></input>
        <label>Age</label>
        <input title='age' type='number'
          {...register('age')}
        ></input>
        <button type='submit'>Create</button>
      </form>

      {users.length > 0 ? users.map((user: User) => {
        return (
          <>
            <p>{user.name} - {user.age}</p>
            <button onClick={() => handleDeleteUser(user._id as string)}>delete </button>
          </>
        )
      }) : null}

    </>
  );
}
