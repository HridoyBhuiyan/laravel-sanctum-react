import React, {Fragment} from 'react';
import {Container, Navbar} from "react-bootstrap";

function FooterMain(props) {
    return (
        <Fragment>
            <Navbar bg="light" variant="light">
                <Container className={'light d-block'}>
                    <div className={"text-center text-secondary py-2"}>
                        Login and email sending system via laravel
                    </div>
                </Container>
            </Navbar>
        </Fragment>
    );
}

export default FooterMain;