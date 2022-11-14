import React, {Fragment} from 'react';
import NavMain from "../composnent/NavMain";
import FooterMain from "../composnent/FooterMain";
import {Button, Container} from "react-bootstrap";

function EmailSendPage(props) {
    return (
        <Fragment>
            <NavMain/>
            <Container className={'d-flex flex-column justify-content-center'}>
                <h2 className={'text-center py-2 my-2'}>Send your email</h2>
                <input type="text" placeholder={'Subject'} className={"py-2 text-center my-2 border-1 border-warning rounded  w-100"}/>

                <input type="text" placeholder={'Mail body'} className={"py-2 text-center my-2 border-1 border-warning rounded  w-100"}/>

                <Button className={'py-2 my-2'}>Send Email</Button>
            </Container>
            <FooterMain/>
        </Fragment>
    );
}

export default EmailSendPage;