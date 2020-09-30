import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Input from "../../shared/FormElement/Input"
import Button from "../../shared/FormElement/Button"
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/Utils/validators.js"
import { useForm } from "../../shared/hooks/form-hook"
import Card from "../../shared/UIElements/Card"
import "./Place.css"

const UserPlace = [
    {
        id: 'p1',
        imageUrl: "https://i0.wp.com/moldbymola.com/wp-content/uploads/2018/10/IMG_0993.jpg?resize=960%2C1200",
        title: " Empire State Building",
        description: "Had a fun day at the Empire Building, one of the most famous place. ",
        address: "20 W 34th St, New York, NY 10001",
        creator: "u1",
        location: {
            lat: 6.4006402,
            lng: 3.3928954,
        }
    },
    {
        id: 'p23',
        imageUrl: "https://hotels.ng/guides/wp-content/uploads/2017/08/tourism.jpg",
        title: " Empire State Building",
        description: "Had a fun day at the Empire Building, one of the most famous place. ",
        address: "20 W 34th St, New York, NY 10001",
        creator: "ul",
        location: {
            lat: 40.7484405,
            lng: -73.9878531,
        }
    }
]

const UpdatePlace = () => {

    const [isLoading, setIsLoading] = useState(true)
   
    const placeId = useParams().placeId;
    

    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: "",
            isValid: false
        },
        description: {
            value: "",
            isValid: false
        }
    }, false)

    const findPlaces = UserPlace.find(p => p.id === placeId);

    useEffect(() => {

        if(findPlaces) {
            setFormData({
                title: {
                    value: findPlaces.title,
                    isValid: true
                },
                description: {
                    value: findPlaces.description,
                    isValid: true
                }
        
            }, true);
        }

        setIsLoading(false);

    }, [setFormData, findPlaces])

  

    const formSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }
    
    if(!findPlaces) {
        return <div className="center">
            <Card>
            <h2>Could not find place!</h2>
            </Card>
            </div>
         
    }

    if(isLoading) {
        return <div className="center"><h2>Loading!!!</h2></div>  
    }
    return (
        <form className="place-form" onSubmit={formSubmitHandler}>  
            <Input 
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input 
                id="description"
                type="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 characters)."
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button type="submit"  disabled={!formState.isValid}> UPDATE PLACE </Button>
        </form>
    )

}


export default UpdatePlace;