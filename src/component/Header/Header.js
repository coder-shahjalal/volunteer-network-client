import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'
import {
    Link
  } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <div className="headerWrap fwidth">
                        <div className="logo left">
                            <Link className="fwidth" to="/"><img className="fwidth" src={require('./img/logo.png')} /></Link>
                        </div>
                        <div className="menuWrap right">
                            <ul className="menu">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Donation</Link></li>
                                <li><Link to="/">Events</Link></li>
                                <li><Link to="/">Blog</Link></li>
                            </ul>
                            <Link to="/" className="regBtn">Register</Link>
                            <Link to="/dash-event" className="adminBtn">Admin</Link>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;