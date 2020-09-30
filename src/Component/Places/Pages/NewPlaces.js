import React from 'react';

import Input from "../../shared/FormElement/Input";
import Button from "../../shared/FormElement/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/Utils/validators.js";
import { useForm } from "../../shared/hooks/form-hook"
import './Place.css';


const NewPlaces = () => {

   const [formState, inputHandler] = useForm(
        {
            title: {
              value: '',
              isValid: false
            },
            description: {
              value: '',
              isValid: false
            },
            address: {
              value: '',
              isValid: false
            }
          }
    );
  
  const sendFormHandler = event => {
      event.preventDefault();
      console.log(formState.inputs)
  }
  return (
    <form className="place-form" onSubmit={sendFormHandler}>
      <Input
        id="name"
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
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
    <Input
        id="address"
        element="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
    />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlaces;
