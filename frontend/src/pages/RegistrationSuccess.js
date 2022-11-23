import React, {Fragment} from 'react';
import NavMain from "../composnent/NavMain";
import FooterMain from "../composnent/FooterMain";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import ApiData from "../ApiData";

function RegistrationSuccess(props) {
    const params = new useParams();
    const navigate = new useNavigate();
    axios.get(ApiData.registration+"/"+params.token+"/"+params.name, {withCredentials:true})
        .then(x=>{
            if (x.status===200){
                console.log(x.data)
                setTimeout((x)=>{
                    navigate('/login')
                }, 5000)
            }
        })
    return (
        <Fragment>
            <NavMain/>
            <h1 className={'text-center p-5 bg-info my-5'}>Now go to login and insert your account</h1>
            <FooterMain/>
        </Fragment>
    );
}

export default RegistrationSuccess;