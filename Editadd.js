import '../../node_modules/datatables.net-dt/css/jquery.dataTables.css'



import React, { useState, useEffect } from 'react'


import { useLocation } from "react-router-dom";

const API = process.env.REACT_APP_BACK;



export const Editadd = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [editando, setEditando] = useState(false)
    const [ID, setID] = useState('false')

    const [users, setUsers] = useState([])

    const search = useLocation().search;
    const id_get = new URLSearchParams(search).get('id');


    const cancelInsertion = () => {
        setEditando(false)
        setID('')
        setName('');
        setEmail('');
        setPassword('');
    }

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

        setName('');
        setEmail('');
        setPassword('');
    }





    const editUser = async (id) => {

        const resul = await fetch(`${API}/user/${id}`);
        const data = await resul.json();

        console.log(data)

        setEditando(true);
        setID(id)


        setName(data.name)
        setEmail(data.email)
        setPassword(data.password)
    }




    window.onload = function () {
        editUser(id_get);
    };

    return (


        <div className="mt-4" >

            <div className="mx-auto">

                <div classname="card text-center" style={{ marginLeft: '100px', marginRight: '100px' }}>


                    <div className="card-header">
                        Registro de eventos
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group-row">
                                <label className="form-label mt-4">Nombre del evento</label>
                                <input
                                    type="text"
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                    className="form-control"
                                    placeholder="Inserte nombre"
                                    autoFocus
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label mt-4">Ubicación</label>
                                <input
                                    type="text"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    className="form-control"
                                    placeholder="Inserte ubicación"
                                    autoFocus
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label mt-4 ">Descripción</label>


                                <textarea type="text"
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    className="form-control mb-4"
                                    placeholder="Escriba una breve descripción del evento"
                                    autoFocus
                                    rows={3} />

                            </div>


                            <button className="btn btn-primary m-1">
                                {
                                    editando ? 'Actualizar' : 'Crear'
                                }
                            </button>

                            <button
                                className="btn btn-warning mt-2 mb-2"
                                onClick={(e) => cancelInsertion()} >
                                Cancelar
                            </button>
                        </form>

                    </div>
                    <div className="card-footer text-muted">

                    </div>
                </div>
            </div >


        </div >



    )


}
