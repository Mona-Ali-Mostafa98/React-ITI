import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

export function MyNav() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Books</Navbar.Brand>
                <Nav className="ms-auto">
                    <NavLink className={( { isActive } ) => { return isActive ? 'text-success nav-link' : "nav-link" }} to="/">Home</NavLink>
                    <NavLink className={( { isActive } ) => { return isActive ? 'text-success nav-link' : "nav-link" }} to="/about">About</NavLink>
                    <NavLink className={( { isActive } ) => { return isActive ? 'text-success nav-link' : "nav-link" }} to="/books">Books</NavLink>
                    <NavLink className={( { isActive } ) => { return isActive ? 'text-success nav-link' : "nav-link" }} to="/login">Login</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}
