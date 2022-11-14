import React, {Fragment} from 'react';
import NavMain from "../composnent/NavMain";
import FooterMain from "../composnent/FooterMain";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiData from "../ApiData";


function Regestration(props) {

    const postRegistration=()=>{
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let email = document.getElementById('email').value;
        let address = document.getElementById('address').value;

        let postJson = {
            'username':username,
            'password':password,
            "email":email,
            "address":address
        }

        console.log(postJson)

        axios.post(ApiData.registration, postJson, {withCredentials:true})
            .then(x=>{
                console.log(x.data)
            })

        // axios.post(ApiData.registration, postJson,{withCredentials:true})
        //     .then(x=>{
        //         console.log(x.data)
        //     })
    }


    return (
        <Fragment>
            <NavMain/>
            <div className={'d-flex align-items-center justify-content-center my-4'}>

                <div className={'text-center'}>
                    <h2 className={'my-4 text-center text-secondary'}>Become a new user</h2>
                    <input type="text" placeholder={"Your username"} className={'py-2 text-center my-2 border-1 border-warning rounded  w-100'} id={"username"}/>
                    <br/>
                    <input type="text" placeholder={"Your password"} className={'py-2 text-center my-2 border-1 border-warning rounded  w-100'} id={"password"}/>
                    <input type="email" placeholder={"Your Email"} className={'py-2 text-center my-2 border-1 border-warning rounded  w-100'} id={"email"}/>
                    <input type="text" placeholder={"Your Address"} className={'py-2 text-center my-2 border-1 border-warning rounded  w-100'} id={"address"}/>
                    <br/>
                    <Button className={'py-2 text-center my-2 border-1 border-warning rounded w-100'} onClick={postRegistration}>
                        Login
                    </Button>

                    <div className={'my-3'}>
                        Already a User? <Link to={'/login'} className={'text-decoration-none'}>Login from here.</Link>

                    </div>
                </div>

            </div>




            <FooterMain/>
        </Fragment>
    );
}

export default Regestration;