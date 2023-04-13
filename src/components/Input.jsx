import React from "react";

function Input(props) {

    return (
        <>
            <label htmlFor={props.name}>
                {props.name}
            </label>
            <input
                value={props.value}
                placeholder={props.placeholder}
                name={props.name}
                onChange={props.onChange}
                required={props.err}>
            </input>
        </>
    )
}

export default Input