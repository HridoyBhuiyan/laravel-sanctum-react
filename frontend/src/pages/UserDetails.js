import React, {Fragment, useEffect, useState} from 'react';
import NavMain from "../composnent/NavMain";
import FooterMain from "../composnent/FooterMain";
import {Button, Container} from "react-bootstrap";
import Cookies from "universal-cookie/es6";
import LoginPage from "./LoginPage";
import axios from "axios";
import ApiData from "../ApiData";
import {redirect, useNavigate} from "react-router-dom";

function UserDetails(props) {
    let cookie = new Cookies;
    const navigate = new useNavigate()
    const [data, setData]= useState(null);
    const [dataStatus, setDataStatus]=useState(false)

    const getData= async ()=>{
        const token = cookie.get('access_token')
        const headers = {
            accept: 'application/json',
            Authorization: 'Bearer ' + token
        }
        await axios.get(ApiData.profile+localStorage.getItem('userID'), {headers:headers},{withCredentials:true})
            .then(x=>{
                if (x.status===200){
                    setData(x.data)

                }
                else {

                }

            })


    }


    useEffect(()=>{
        if (cookie.get('access_token')){
            getData().then(r => {})
        }
        else {
            navigate('/login')
        }

    },[])







        return (
            <Fragment>
                <NavMain/>
                <Container className={'d-flex flex-column'}>
                    <h2 className={'text-center text-secondary'}>All Details of user</h2>

                    Username: {data && data.name}

                    <br/>

                    Email: {data && data.email}

                    <br/>

                    Address: {data && data.address}


                    <br/>

                    <Button className={'btn-danger my-2'}>Logout</Button>

                </Container>
                <FooterMain/>
            </Fragment>
    )


}

export default UserDetails;