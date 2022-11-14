import React, {useEffect, useState} from 'react';
import NavMain from "../composnent/NavMain";
import FooterMain from "../composnent/FooterMain";
import {Container} from "react-bootstrap";
import axios from "axios";

function Home(props) {
    const [data, setData]=useState(null);

    const getData=()=>{
        axios.post("http://localhost:8000/api/user",{id:1},{withCredentials:true})
            .then(x=>{
                setData(x.data)
                console.log(x.data)
            })
    }
    useEffect(x=>{
        console.log(data)
        getData()
    }, [])



    // this is after staging



    return (
        <div>
            <NavMain/>
            <Container>
                <h1 className={'my-5 py-5 text-center bg-info rounded'}>This is the home page of the login and email sending system</h1>
            </Container>
            <FooterMain/>
        </div>
    );
}

export default Home;