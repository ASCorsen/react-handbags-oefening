import React from "react";

function Button () {


    return (
        <>
            <button onClick={() =>{console.log("to the collection!")}}>
                to the collection
            </button>
            <button onClick={ () => {
                console.log("pewpew!")
            }}>
                shop all bags
            </button>
            <button disabled={true} >
                pre-orders
            </button>
        </>

    )
}

export default Button