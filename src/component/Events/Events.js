import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'
import {ManageContext} from '../../App'; 
import { Link } from 'react-router-dom';

const Events = (props) => {
    const [setEventSelect] = useContext(ManageContext);
    
    const eventHandler = () => {
        setEventSelect(props.name); 
    }
    return (

            <div className="event">
                <img src={props.image} />
                 <Link className="evnButton" onClick={eventHandler} to="/reg-event">{props.name}</Link>
            </div> 
    );
};

export default Events;