import React, { Fragment } from 'react';

export const About = () => (
    <Fragment>
        <header className="header-blue" style={{ background: '#ff8e4d', borderColor: 'rgb(21,132,244)', transform: 'perspective(0px) translate(0px)' }}>
            <div className="container hero">
                <div className="row">
                    {/* Start: Text */}
                    <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
                        <h1 style={{ fontFamily: 'Oswald, sans-serif' }}>Ayudar es posible aquí.</h1>
                        <p>Aporta a tu comunidad generando o asistiendo eventos de ayuda social colectivos e individuales.
                        </p><button className="btn btn-light btn-lg action-button" type="button">Learn More</button>
                    </div>{/* End: Text */}
                    <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                        {/* Start: iPhone */}
                        <div className="phone-mockup"><img className="device" src="/assets/img/pexels-cottonbro-6591162.jpg" style={{ borderStyle: 'dashed', borderColor: 'var(--bs-light)' }} /></div>{/* End: iPhone */}
                    </div>
                </div>
            </div>
        </header>{/* End: Header Blue */}

    </Fragment>
)