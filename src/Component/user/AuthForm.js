import React, {useState, useContext} from 'react'

import Input from "../shared/FormElement/Input"
import Button from "../shared/FormElement/Button"
import Card from "../shared/UIElements/Card"
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH , VALIDATOR_REQUIRE} from "../shared/Utils/validators.js.js"
import { useForm } from "../shared/hooks/form-hook"
import {AuthContext} from "../shared/context/Auth-context"

import "./AuthForm.css"


const AuthForm = () => {

    const auth = useContext(AuthContext)
    const [LoginMode, setLoginMode] = useState(true);

    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
              value: '',
              isValid: false
            },
            password: {
              value: '',
              isValid: false
            }
           
          }
    )
    const switchHandler = () => {
      if(!LoginMode) {
        setFormData( {
          ...formState.inputs,
          name: undefined
        }, formState.inputs.email.isValid && formState.inputs.password.isValid)
      }
      else {
        setFormData({
          ...formState.inputs,
          name: {
            value: "",
            isValid: false
          }
        }, false)
      }
      setLoginMode(prevMode => !prevMode)

    }

    const authSubmitHandler = event => {
      event.preventDefault();
      console.log(formState.inputs)
      auth.login()
    }
    return (

        <Card className="authentication">
            <h2>Login Required</h2>
              <hr />
              <form onSubmit={authSubmitHandler}>
                {!LoginMode &&
                <Input  
                  id="name"
                  type="text"
                  label="User Name"
                  element="input"
                  errorText="Please enter a valid name"
                  validators={[VALIDATOR_REQUIRE()]}
                  onInput={inputHandler}
                
                /> }
                <Input 
                  id="email"
                  type="email"
                  label="Email"
                  element="input"
                  errorText="Please enter a valid email"
                  validators={[VALIDATOR_EMAIL()]}
                  onInput={inputHandler}
                />
                <Input 
                  id="password"
                  type="password"
                  label="Password"
                  element="input"
                  errorText="Please enter a valid password (at least 8 characters)"
                  validators={[VALIDATOR_MINLENGTH(8)]}
                  onInput={inputHandler}
                />
                <Button type="submit" disabled={!formState.isValid}>{LoginMode ? "LOGIN" : "SIGNUP"}</Button>
              </form>
              <Button inverse onClick={switchHandler}>SWITCH TO {LoginMode ? "SIGNUP" : "LOGIN"}</Button>
      </Card>
          

    )
}

export default AuthForm;