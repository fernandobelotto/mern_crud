import React, { useEffect, useState } from 'react';
import { User } from './models/user';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function App() {

  // const baseUrl = 'http://localhost:8000'

  // const [users, setUsers] = useState([])

  // async function getUsers() {
  //   try {
  //     const { data } = await axios.get(baseUrl + '/users')
  //     setUsers(data)
  //     console.log(data)
  //   } catch (e) {
  //     console.error('error', e)
  //   }
  // }

  // async function updateUser() { }


  // async function handleDeleteUser(id: string) {
  //   try {
  //     await axios.delete(`${baseUrl}/users/${id}`)
  //     getUsers()
  //   } catch (e) {
  //     console.error('error', e)
  //   }
  // }

  return (
    <>
      <h1>App</h1>
      <Link to='users'>Users</Link>
    </>
  );
}
