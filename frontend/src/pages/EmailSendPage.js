import React, {Fragment, useEffect} from 'react';
import NavMain from "../composnent/NavMain";
import FooterMain from "../composnent/FooterMain";
import {Button, Container} from "react-bootstrap";
import axios from "axios";
import ApiData from "../ApiData";
import Cookies from "universal-cookie/es6";
import {useNavigate} from "react-router-dom";

function EmailSendPage(props) {

    const navigation = new useNavigate();
    const cookie = new Cookies;

    const sendEmail=async ()=>{
        let mailID = document.getElementById('mailID').value;
        let subject = document.getElementById('subjectID').value;
        let bodyID = document.getElementById('bodyID').value;

        let sendJSON = {
            "mail":mailID,
            "subject":subject,
            "body":bodyID
        }

        const token = cookie.get('access_token')

        const headers={Authorization: 'Bearer '+token}

        await axios.post(ApiData.sendEmailAdmin, sendJSON, {headers:headers, withCredentials:true})
            .then(response=>{
                console.log(response)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    useEffect(()=>{
        if (!cookie.get("access_token")){
            navigation('/login');
        }

        else {

        }

    },[])


    return (
        <Fragment>
            <NavMain/>
            <Container className={'d-flex flex-column justify-content-center'}>
                <h2 className={'text-center py-2 my-2'}>Send your email</h2>
                <input id={'mailID'} type="email" placeholder={'Mail Address'} className={"py-2 text-center my-2 border-1 border-warning rounded  w-100"}/>
                <input id={'subjectID'} type="text" placeholder={'Subject'} className={"py-2 text-center my-2 border-1 border-warning rounded  w-100"}/>
                <textarea id={'bodyID'} placeholder={'Mail body'} className={"py-2 text-center my-2 border-1 border-warning rounded  w-100"}/>
                <Button onClick={sendEmail} className={'py-2 my-2'}>Send Email</Button>
            </Container>
            <FooterMain/>
        </Fragment>
    );
}

export default EmailSendPage;