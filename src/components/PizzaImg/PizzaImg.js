import React from 'react';

import classes from './PizzaImg.css';

import PizzaImg from '../../assets/original.jpg';

const pizzaImg = (props) => {
    return (
        <div className={classes.PizzaImageContainer}>
            <img className={classes.PizzaImg} src={PizzaImg}></img>
        </div>
    )
}

export default pizzaImg;