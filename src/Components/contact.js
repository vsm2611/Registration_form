import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Css/style.css'
import Menu from './navbar';

function Contact() {
    return (
        <>
            <Container>
            <Menu/>
                <Row className='row mt-3'>
                    <Col>
                    <i class="fa-solid fa-phone"></i><span>Call us at +91 84519 01079</span>
                    </Col>
                </Row>
                <Row className='row'>
                    <Col>
                    <i class="fa-solid fa-envelope"></i><span>info@learnqoch.com</span>
                    </Col>
                </Row>
                <Row className='row'>
                    <Col>
                    <i class="fa-brands fa-rocketchat"></i><span>24x7 live chat</span>
                    </Col>
                </Row>
                <Row className='row'>
                    <Col>
                    <i class="fa-solid fa-location-dot"></i><span>Visit us – 918, Solus, Hiranandani Estate, Thane West, Maharashtra 400607</span>
                    </Col>
                </Row>
                
            </Container>
        </>
    )
}

export default Contact