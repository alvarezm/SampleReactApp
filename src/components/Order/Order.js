import React from 'react';

import classes from './Order.module.css'

const order = (props) => {
    const ingredientOutput = Object.keys(props.ingredients)
        .map(name => {
            return <span
                className={classes.Ingredient}
                key={name}>{name} ({props.ingredients[name]})</span>
        });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
};

export default order;