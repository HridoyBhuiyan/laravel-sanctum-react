import React, {Fragment, useEffect, useState} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie/es6";
import ApiData from "../ApiData";

function NavMain(props) {

    const cookie = new Cookies();

    const ipSet=async ()=>{

        if (!localStorage.getItem('clientIP')){
            console.log("location not saved")
            await axios.get("http://geolocation-db.com/json/")
                .then(x=> {
                    localStorage.setItem("clientIP",x.data.IPv4)
                })
                .catch(err=>{
                    console.log(err)
                })
            console.log("location have saved")
        }

        return localStorage.getItem('clientIP');

    }




    const getData=()=>{


        ipSet()
            .then(clientIP =>{
                if (!cookie.get('visitor') || !cookie.get('XSRF-TOKEN')){
                    axios.get(ApiData.traffic+clientIP, {withCredentials:true})
                        .then(x=>{
                            console.log(x.data)
                            cookie.set('visitor', true, {maxAge:60*60*24})
                        })
                    console.log('set Both');
                }



                else if(!cookie.get('visitor')){
                    axios.get(ApiData.traffic+clientIP, {withCredentials:true})
                        .then(x=>{
                            console.log(x.data)

                            cookie.set('visitor', true, {maxAge:60*60*24})
                        })
                    console.log('set visitor cookie');
                }



                else if (!cookie.get('XSRF-TOKEN')){
                    axios.get('http://localhost:8000/sanctum/csrf-cookie', {withCredentials:true})
                        .then(response=>{

                        })
                        .catch(error=>{
                            console.log(error)
                        })
                    console.log("xsrf cookie not set");
                }
            }

            )



    }




    useEffect(x=>{
        getData()
    }, [])






    // Main Component Part

    if (cookie.get("access_token")){
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




    else{
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
                                </Nav>
                            </div>
                        </div>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }


}

export default NavMain;