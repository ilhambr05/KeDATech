import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"

import brandLogo from '../assets/brand-logo.png'

function NavbarComponents() {
    return (
        <Navbar expand="lg" fixed="top">
            <Container>
                <NavLink to={'/'} className="fs-2 fw-bold navbar-brand">
                    <img
                        alt="brand logo"
                        src={brandLogo}
                        className="brand-logo d-inline-block align-top"
                    />{' '}
                    HOME
                </NavLink>
                {/* <Navbar.Brand href="#home">HOME</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-center">
                        <Nav.Link href="#about" className="fs-2 fw-bold px-3">ABOUT</Nav.Link>
                        <Nav.Link href="#pricing" className="fs-2 fw-bold px-3">PRICING</Nav.Link>
                        <Nav.Link href="#contact" className="fs-2 fw-bold px-3">CONTACT</Nav.Link>
                    </Nav>
                    <div className="text-center">
                        <Button variant="outline-info" className="login-btn">Login</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponents