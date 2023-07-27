import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const NavbarOffCanvas = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} className='offCanvasBtn'>
                <i className="fa-solid fa-bars fa-2xl"></i>
                MENU
            </button>

            <Offcanvas show={show} onHide={handleClose} placement='start'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <nav className='offCanvas-nav'>
                        <ul>
                            <li>
                                <Link to={'/'} >HOME</Link>
                            </li>
                            <li>
                                <Link to={'/booking'}>BOOKING</Link>
                            </li>
                            <li>
                                <Link to={'/suites-and-rooms'}>SERVICES</Link>
                            </li>
                            <li>
                                <Link to={'/about'}>ABOUT US</Link>
                            </li>
                            <li>
                                <Link to={'/contact'}>CONTACT US</Link>
                            </li>
                        </ul>
                    </nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default NavbarOffCanvas

