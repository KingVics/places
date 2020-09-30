import React, {useReducer, useEffect} from "react"

import { validate } from "../Utils/validators.js"
import "./Input.css"


const InputReducer = (state, action) => {
    switch(action.type) {
        case "CHANGE":
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case "TOUCH": {
            return {
                ...state,
                isTouch: true
            }
        }
        default:
            return state;
    }
};

const Input = props => {

    const [currentState, dispatch] =
     useReducer(
         InputReducer, 
         {value: props.initialValue || " ", 
         isValid: props.initialValid || false, 
         isTouch: false});

    const InputHandler = event => 
    {
        dispatch({type: "CHANGE", val: event.target.value, validators: props.validators});
    };

    const BlurHandler = () =>{
        dispatch({
            type: "TOUCH"
        })
    }

    const { id, onInput } = props;
    const { value, isValid } = currentState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);

    const element = props.element === "input" ?
        <input id={props.id} type={props.type} 
            placeholder={props.placeholder} 
            onChange={InputHandler} 
            value={currentState.value}
            onBlur={BlurHandler}
        /> 
    :
    <textarea id={props.id} 
        row={props.row || 3 } 
        onChange={InputHandler}
        value={currentState.value}
        onBlur={BlurHandler}

    />


    return (
        <div className={`form-control ${!currentState.isValid && currentState.isTouch && "form-control--invalid"}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!currentState.isValid && currentState.isTouch && <p>{props.errorText}</p>}
        </div>
    )
}


export default Input;