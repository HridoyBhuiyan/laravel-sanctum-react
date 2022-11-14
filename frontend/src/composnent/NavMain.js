import React, {Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function NavMain(props) {
    return (
        <Fragment>
            <Navbar bg="light" variant="light">
                <Container className={'d-block'}>
                    <div className={'d-flex align-items-center justify-content-between'}>
                        <div>
                            <Navbar.Brand>
                                <NavLink className={"p-2 text-decoration-none text-secondary"} to={'/'}>Home</NavLink>
                        </Navbar.Brand>
                        </div>
                        <div>
                            <Nav className="me-auto">
                                <NavLink className={"p-2 text-decoration-none text-secondary"} to={'/login'}>Login</NavLink>
                                <NavLink className={"p-2 text-decoration-none text-secondary"} to="/registration">Registration</NavLink>
                                <NavLink className={"p-2 text-decoration-none text-secondary"} to="/userinfo">User Details</NavLink>
                                <NavLink className={"p-2 text-decoration-none text-secondary"} to="/sendmail">Send Email</NavLink>
                            </Nav>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </Fragment>
    );
}

export default NavMain;