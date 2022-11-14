import React, {Fragment} from 'react';
import NavMain from "../composnent/NavMain";
import FooterMain from "../composnent/FooterMain";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiData from "../ApiData";

function LoginPage(props) {
    const getLogin=()=>{
        let username = document.getElementById("username").value;
        let password = document.getElementById('password').value;
        let postJSON = {
            'username':username,
            'password':password
        }
        axios.post(ApiData.login, postJSON, {withCredentials:true})
            .then(x=>{
                console.log(x.data)
            })
            .catch(error=>{
                console.log(error)
            })

    }
    return (
        <Fragment>
            <NavMain/>

                <div className={'d-flex align-items-center justify-content-center my-4'}>

                    <div className={'text-center'}>
                        <h2 className={'my-4 text-center text-secondary'}>Login Here</h2>
                    <input type="text" id={"username"} placeholder={"Your username"} className={'py-2 text-center my-2 border-1 border-warning rounded  w-100'}/>
                    <br/>
                    <input type="text" id={"password"} placeholder={"Your password"} className={'py-2 text-center my-2 border-1 border-warning rounded  w-100'}/>
                    <br/>
                    <Button onClick={getLogin} className={'py-2 text-center my-2 border-1 border-warning rounded w-100'}>
                        Login
                    </Button>

                        <div className={'my-3'}>
                            New User? <Link to={'/registration'} className={'text-decoration-none'}>Registration from here.</Link>

                        </div>
                </div>

            </div>
            <FooterMain/>
        </Fragment>
    );
}

export default LoginPage;