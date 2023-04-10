import React from 'react';
import classes from './Card.module.css';

function Card(props) {
    return <div className={classes.card}>
        {props.children}
        </div>;
}

export default Card;

//children = special prop that every componenet receives by default. Always holds the content that is passed between opening/closing componenent tags