import React, {useEffect, useState} from 'react';
import NavMain from "../composnent/NavMain";
import FooterMain from "../composnent/FooterMain";
import {Button, Container, Form} from "react-bootstrap";
import axios from "axios";
import ApiData from "../ApiData";

function Home(props) {

    const sendEmail=(e)=>{
        e.preventDefault()
        let emailId = document.getElementById('emailID').value;
        let name = document.getElementById('senderName').value;
        let subject = document.getElementById('senderSubject').value;
        let body = document.getElementById('emailBody').value;
        let emailJSON = {
            emailID : emailId,
            name: name,
            subject:subject,
            body:body
        }
        axios.post(ApiData.sendEmail,emailJSON,{withCredentials:true})
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>console.log(err))
    }


    return (
        <div>
            <NavMain/>
            <Container>
                <h1 className={'my-5 py-5 text-center bg-info rounded'}>Send Your Email and then admin will contact with you</h1>
                <Form>

                    <Form.Group className="mb-3">
                        <Form.Label>Your Email address</Form.Label>
                        <Form.Control type="email" placeholder="Your email Address"  id={'emailID'} autoComplete={"on"}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name"  id={'senderName'} autoComplete={"on"}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject"  id={'senderSubject'} autoComplete={"on"}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Body</Form.Label>
                        <br/>
                        <textarea placeholder="Your text here" className={'w-100 rounded p-2 mh-100'} style={{borderColor:"#CED4DA"}} id={'emailBody'}/>
                    </Form.Group>


                    <Button variant="primary" type="submit" onClick={sendEmail}>
                        Submit
                    </Button>
                </Form>

            </Container>
            <FooterMain/>
        </div>
    );
}

export default Home;