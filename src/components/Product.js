import React from 'react';
import bag1 from "../assets/bag_1.png";

function Product (props){
    return (
        <div>
            <article>
                <span>{props.trending}</span>
                <img src={props.img} alt={props.alt} />
                <p>{props.name}</p>
                <h4>{props.price}</h4>
            </article>
        </div>
    );
};

export default Product;