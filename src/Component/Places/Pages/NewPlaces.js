import React, { useCallback, useReducer } from "react"

import Input from "../../shared/FormElement/Input"
import  {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/Utils/validators.js"
import Button from "../../shared/FormElement/Button"
import "./NewPlace.css"

const FormReducer = (state, action) => {
    switch(action.type) {
        case "INPUT_CHANGE": 
        let FormIsValid = true;
        for(const inputId in state.inputs) {
            if(inputId === action.inputId) {
                FormIsValid = FormIsValid && action.isValid
            }
            else {
                FormIsValid = FormIsValid && state.inputs[inputId].isValid;
            }
        }
        
         return{
             ...state,
             input: {
                 ...state.inputs,
                 [action.inputId]: { value: action.value, isValid: action.isValid}
             },
             isValid: FormIsValid
         }
            default:
                return state;
    }

}
const NewPlace = () => {
    const [formState, dispatch] = useReducer(FormReducer, {
        inputs: {
            title: {
                value: "",
                isValid: false
            },
            description: {
                value: "",
                isValid: false
            }
        
        },
        isValid: false   

    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({type: "INPUT_CHANGE", value: value, isValid: isValid, inputId: id})
    }, []);



    return (
        <form className={`place-form`}>
            <Input 
                id="title"
                element="input" 
                type="text" 
                label="Title" 
                validators={[VALIDATOR_REQUIRE()]} 
                errorText="Please enter a valid title."
                onInput={inputHandler}
             />
            <Input 
                id="description"
                element="textarea" 
                label="Description" 
                validators={[VALIDATOR_MINLENGTH(5)]} 
                errorText="Please enter a valid description of at least 5 characters."
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
        </form>

    )
}



export default NewPlace;