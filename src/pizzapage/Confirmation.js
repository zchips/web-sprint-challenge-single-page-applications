import React from "react";

function Confirmation(props){
    const {pizza} = props
    return(
        <div>
            <h1>Confirmation</h1>
            <h2>thank you {pizza.name} for ordering a {pizza.size} pizza with our famous dough and your choice of:</h2>
            <ul>{pizza.Toppings.map((topping, idx) => <li key={idx}>{topping}</li>)}</ul>
            <h2> customizations (if requested) {pizza.custom}</h2>
        </div>
    )
}