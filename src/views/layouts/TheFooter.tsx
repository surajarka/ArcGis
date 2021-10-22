import React from 'react';
import { Container } from "react-bootstrap";

const TheFooter = () => {
    return (
        <>
            <footer className="bg-light p-2 mt-5">
                <Container className="mt-3">
                    <p>Copyright © ArcGis {(new Date().getFullYear())}</p>
                </Container>
            </footer>
        </>
    )

}

export default TheFooter;