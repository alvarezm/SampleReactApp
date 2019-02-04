import React from 'react';

import classes from './Order.module.css'

const order = (props) => {
    // const ingredients = [];

    /* for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span
            className={classes.Ingredient}
            key={ig.name}>{ig.name} ({ig.amount})</span>
    }); */

    const ingredientOutput = Object.keys(props.ingredients)
        .map(name => {
            return <span
                className={classes.Ingredient}
                key={name}>{name} ({props.ingredients[name].amount})</span>
        });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
};

export default order;