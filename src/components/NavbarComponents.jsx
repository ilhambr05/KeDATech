import { useEffect, useState } from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
// import { listLink } from "../data/configs/navbar.js"
// import { NavLink } from "react-router-dom"

import brandLogo from '../assets/brand-logo.png'

const NavbarComponents = () => {
    const [navClass, setNavClass] = useState('');
    const [navLinkSize, setNavLinkSize] = useState('fs-2');

    const navScrolled = () => {
        if (window.scrollY > 15) {
            setNavClass('scrolled-navbar');
            setNavLinkSize('fs-5');
        } else {
            setNavClass('');
            setNavLinkSize('fs-2');
        }
    }

    useEffect(() => {
        navScrolled();

        window.addEventListener('scroll', navScrolled);
    })

    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" className={navClass}>
            <Container>
                <NavLink to={'/'} className={`${navClass ? 'text-dark' : 'text-white'} fs-2 fw-bold navbar-brand`}>
                    <img
                        alt="brand logo"
                        src={brandLogo}
                        className="brand-logo d-inline-block align-top"
                    />{' '}
                    Home
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me-md-3 text-center">
                        <Nav.Link href="#about" className={`${navLinkSize} fw-bold px-3`}>About</Nav.Link>
                        <Nav.Link href="#pricing" className={`${navLinkSize} fw-bold px-3`}>Pricing</Nav.Link>
                        <Nav.Link href="#contact" className={`${navLinkSize} fw-bold px-3`}>Contact</Nav.Link>
                        {/* {listLink.map(
                            (link) => {
                                return (
                                    <div key={link.id}>
                                        <NavLink to={link.path} className="nav-link">{link.text}</NavLink>
                                    </div>
                                )
                            }
                        )} */}
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