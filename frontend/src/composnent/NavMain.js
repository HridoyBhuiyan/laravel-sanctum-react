import React, {Fragment, useEffect, useState} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie/es6";

function NavMain(props) {

    const cookie = new Cookies();




    const ipSet=()=>{
        if (!localStorage.getItem('clientIP')){
            axios.get("http://geolocation-db.com/json/")
                .then(x=> {
                    localStorage.setItem("clientIP",x.data.IPv4)
                })
            return localStorage.getItem('clientIP')
        }
        else {return 0}
    }




    const getData=()=>{
        ipSet()
        if (!cookie.get('visitor') || !cookie.get('XSRF-TOKEN')){
            let clientIP = localStorage.getItem('clientIP')
            axios.get("http://localhost:8000/api/trafficCheck/"+clientIP, {withCredentials:true})
                .then(x=>{
                    cookie.set('visitor', true, {maxAge:60*60*24})
                })
        }
    }




    useEffect(x=>{
        getData()
    }, [])



    
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