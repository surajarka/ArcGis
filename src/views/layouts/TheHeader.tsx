import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from "react-bootstrap";

const TheHeader = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Link to="/" className="navbar-brand">ArcGis</Link>
                    <Nav className="me-auto">
                        <Link to="/home" className="nav-link">Home</Link>
                        <Link to="pricing" className="nav-link">Pricing</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default TheHeader;

