import React from 'react';
import { Link } from 'react-router-dom'
import churchlogo from './logo.png';


export const Navbar = () => (

    <header className="header-blue" style={{ background: '#ff8e4d', borderColor: 'rgb(21,132,244)', transform: 'perspective(0px) translate(0px)' }}>
        <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search" data-aos="fade" style={{ margin: 0, padding: '-40px 0px', paddingRight: '12px', paddingLeft: '12px' }}>
            <div className="container-fluid"><Link className="navbar-brand border-dark" to="/" style={{ fontFamily: '"Source Sans Pro", sans-serif', fontSize: '32px', background: 'rgba(255,255,255,0)', borderColor: 'var(--bs-red)', transform: 'perspective(1560px) translate(0px) rotate(-6deg) scale(1.07) skew(-25deg)', transformStyle: 'preserve-3d', textDecoration: 'underline', color: 'var(--bs-light)' }}>4help</Link><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav">
                        <li className="nav-item" />
                        <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">Opciones</a>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/editadd">Ingresar evento</Link>
                                <Link className="dropdown-item" to="/users">Ver eventos</Link>
                                <a className="dropdown-item" href="#">Mi perfil</a>
                            </div>
                        </li>
                    </ul>
                    <form className="d-flex me-auto navbar-form" target="_self">
                        <div className="d-flex align-items-center"><label className="form-label d-flex mb-0" htmlFor="search-field"><i className="fa fa-search" /></label><input className="form-control search-field" type="search" id="search-field" name="search" /></div>
                    </form><span className="navbar-text"> <a className="login" href="#">Ingresar</a></span><a className="btn btn-light action-button" role="button" data-bss-hover-animate="swing" href="#">Registrarse</a>
                </div>
            </div>
        </nav>
    </header>

)
