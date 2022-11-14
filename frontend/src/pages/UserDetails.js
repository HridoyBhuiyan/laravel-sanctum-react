import React, {Fragment} from 'react';
import NavMain from "../composnent/NavMain";
import FooterMain from "../composnent/FooterMain";
import {Button, Container} from "react-bootstrap";

function UserDetails(props) {
    return (
        <Fragment>
            <NavMain/>
            <Container className={'d-flex flex-column'}>
                <h2 className={'text-center text-secondary'}>All Details of user</h2>

                Username:

                <br/>

                Email:

                <br/>

                Address:


                <br/>

                <Button className={'btn-danger my-2'}>Logout</Button>

            </Container>
            <FooterMain/>
        </Fragment>
    );
}

export default UserDetails;