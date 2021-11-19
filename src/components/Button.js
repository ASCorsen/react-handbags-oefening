import React from "react";

function Button (props) {


    return (
        <>
        <button
            type={props.typeOfButton}
            onClick={props.klikEvent}
            disabled={props.disabledButton}
        >{props.children}

        </button>
        </>

    )
}

export default Button