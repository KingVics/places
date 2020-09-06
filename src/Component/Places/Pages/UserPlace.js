import React from "react"
import { useParams } from "react-router-dom"


import PlaceList from "../Component/PlaceList"



const UserPlace = () => {
    const UserPlace = [
        {
            id: 'p1',
            imageUrl: "https://miro.medium.com/max/10000/0*IshEnEVIK-mYHuy1",
            title: " Empire State Building",
            description: "Had a fun day at the Empire Building, one of the most famous place. ",
            address: "20 W 34th St, New York, NY 10001",
            creator: "u1",
            location: {
                lat: 40.7484405,
                lot: -73.9878531,
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
                lot: -73.9878531,
            }
        }
    ]

    const user_Id = useParams().userId;
    const LoadedPlaces = UserPlace.filter(place => place.creator === user_Id)

    return (
        <PlaceList  items={LoadedPlaces}/>
    )
};



export default UserPlace;