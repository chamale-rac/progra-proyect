import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'


const API = process.env.REACT_APP_BACK;

export const Users = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [editando, setEditando] = useState(false)
    const [ID, setID] = useState('false')

    const [users, setUsers] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        /*Notár que [`] en API son anormales*/
        if (!editando) {
            const res = await fetch(`${API}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })
            const data = await res.json();
            console.log(data)
        } else {
            const resul = await fetch(`${API}/users/${ID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })
            const data = await resul.json()
            console.log(data)

            setEditando(false)
            setID('')
        }



        await getUsers();

        setName('');
        setEmail('');
        setPassword('');
    }

    const getUsers = async () => {
        const res = await fetch(`${API}/users`)
        const data = await res.json();
        setUsers(data)
    }

    useEffect(() => {
        getUsers();
    }, [])







    return (

        <div class="container">

            {users.map(user => (


                <div class="row">
                    <div classname="card text-center" style={{ marginLeft: '100px', marginRight: '100px' }}>
                        <div className="card-header">
                            {user.name}
                        </div>

                        <div class="card-body">
                            <h class="card-title">{user.email}</h>
                            <p class="card-text">{user.password}</p>
                            <Link to="/" class="btn btn-primary">Ayudar</Link>
                        </div>

                        <div className="card-footer text-muted">

                        </div>
                    </div>
                </div>



            ))
            }




        </div >





    )





}

