import React from "react";

function Input(props) {

    return (
        <>
            <input
                value={props.value}
                placeholder={props.placeholder}
                name={props.name}
                onChange={props.onChange}
                style={props.style}>
            </input>
        </>
    )
}

export default Input