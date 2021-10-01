import '../../node_modules/datatables.net-dt/css/jquery.dataTables.css'
import ScriptTag from 'react-script-tag';


import React, { useState, useEffect } from 'react'

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

    const deleteUser = async (id) => {
        const respuestaUsuario = window.confirm('¿Desea eliminar el usuario?')
        if (respuestaUsuario) {
            const resul = await fetch(`${API}/users/${id}`, {
                method: 'DELETE'
            })
            const data = await resul.json();
            console.log(data)
            await getUsers();
        }
    }

    const cancelInsertion = () => {
        setEditando(false)
        setID('')
        setName('');
        setEmail('');
        setPassword('');
    }




    return (


        <div className="">



            <div className="card text-white bg-primary mx-auto mt-4 mb-4" >
                <div className="card-body">


                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">

                        <div className="carousel-inner mx-auto w-80">


                            <div className="carousel-item ">
                                <ScriptTag type="text/javascript" src="datatables-simple-demo-copy.js" />
                                <div className="card-header">
                                    <i className="fas fa-table me-1"></i>
                                    DataTable Example
                                </div>
                                <div className="card-body">
                                    <table id="datatableSimple">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Position</th>
                                                <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Salary</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Name</th>
                                                <th>Position</th>
                                                <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Salary</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            <tr>
                                                <td>Tiger Nixon</td>
                                                <td>System Architect</td>
                                                <td>Edinburgh</td>
                                                <td>61</td>
                                                <td>2011/04/25</td>
                                                <td>$320,800</td>
                                            </tr>
                                            <tr>
                                                <td>Rhona Davidson</td>
                                                <td>Integration Specialist</td>
                                                <td>Tokyo</td>
                                                <td>55</td>
                                                <td>2010/10/14</td>
                                                <td>$327,900</td>
                                            </tr>
                                            <tr>
                                                <td>Colleen Hurst</td>
                                                <td>Javascript Developer</td>
                                                <td>San Francisco</td>
                                                <td>39</td>
                                                <td>2009/09/15</td>
                                                <td>$205,500</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="carousel-item ">


                                <div className="mx-auto">
                                    <form onSubmit={handleSubmit} className="card card-body mt-5">
                                        <div className="form-group-row">
                                            <label className="form-label mt-4">Nombre</label>
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
                                            <label className="form-label mt-4">E-mail</label>
                                            <input
                                                type="email"
                                                onChange={e => setEmail(e.target.value)}
                                                value={email}
                                                className="form-control"
                                                placeholder="Inserte email"
                                                autoFocus
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label mt-4 ">Constraseña</label>
                                            <input
                                                type="password"
                                                onChange={e => setPassword(e.target.value)}
                                                value={password}
                                                className="form-control mb-4"
                                                placeholder="Inserte contraseña"
                                                autoFocus
                                            />
                                        </div>
                                        <button className="btn btn-primary m-1">
                                            {
                                                editando ? 'Actualizar' : 'Crear'
                                            }
                                        </button>


                                    </form>
                                    <button
                                        className="btn btn-danger w-100 mt-1"
                                        onClick={(e) => cancelInsertion()} >
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item active overflow-auto">


                                <div className="mx-auto mt-5">

                                    <table className="datatablesSimple" >
                                        <thead>
                                            <tr>
                                                <td>
                                                    Nombre
                                                </td>
                                                <td>
                                                    Email
                                                </td>
                                                <td>
                                                    Contraseña
                                                </td>
                                                <td>
                                                    Acciones
                                                </td>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <td>
                                                    Nombre
                                                </td>
                                                <td>
                                                    Email
                                                </td>
                                                <td>
                                                    Contraseña
                                                </td>
                                                <td>
                                                    Acciones
                                                </td>
                                            </tr>
                                        </tfoot>
                                        <tbody>

                                            {users.map(user => (
                                                <tr key={user._id}>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.password}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-info  w-100 m-1"
                                                            onClick={(e) => editUser(user._id)}
                                                        >
                                                            Editar
                                                        </button>
                                                        <button
                                                            className="btn btn-danger w-100 m-1"
                                                            onClick={(e) => deleteUser(user._id)}
                                                        >
                                                            Eliminar
                                                        </button>
                                                    </td>
                                                </tr>

                                            ))}
                                        </tbody>

                                    </table>


                                </div>
                            </div>

                        </div>
                        <div>
                            <a className="carousel-control-prev bottom-100 mt-3" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            </a>

                        </div>
                        <div>
                            <a className="carousel-control-next bottom-100 mt-3" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            </a>
                        </div>
                    </div>




                </div>
            </div>








        </div>



    )
}

