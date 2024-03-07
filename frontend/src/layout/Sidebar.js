import {Offcanvas, Nav } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import UserContext from '../components/UserContext';
import cookies from 'js-cookie';
import * as FaIcons from 'react-icons/fa';


export default function Sidebar () {
    const { user, setUser } = useContext(UserContext);
    const [show, setShow] = useState(false);

    function logout() {
        setUser(null);
        cookies.remove("userCookie");
    }

    const menuClose = () => setShow(false);
    const menuOpen = () => setShow(true);

    return (
        <>
            <FaIcons.FaBars onClick={menuOpen} className="" />
            <Offcanvas show={show} onHide={menuClose} style={{maxWidth: "250px", backgroundColor: "rgba(0, 0, 0, 0.75"}}>
                <Offcanvas.Header closeButton className="">
                        {user &&
                        <Offcanvas.Title>{user.firstName} {user.lastName} </Offcanvas.Title>}
                </Offcanvas.Header>
                <Offcanvas.Body style={{background: "transparent"}}>
                    <Nav style={{display: "flex", flexDirection: "column"}}>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="evaluation">Evaluations</Nav.Link>
                        <Nav.Link as={Link} to="announcements">Announcements</Nav.Link>
                        {user && user.role === 'Admin' && (
                            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>)}
                        {user && <Nav.Link as={Link} onClick={logout}>Logout</Nav.Link>}
                    </Nav>

                </Offcanvas.Body>
            </Offcanvas>
        </>


    )
}