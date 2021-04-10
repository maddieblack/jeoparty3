import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MobileScoreboard = () => {
    return (
        <Container fluid>
            <Row className={'text-center'}>
                <Col lg={'12'}>
                    Welcome to the mobile scoreboard page!
                </Col>
            </Row>
        </Container>
    );
};

export default MobileScoreboard;