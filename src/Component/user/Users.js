import React from "react"

import UserList from "./UserList"



const Users = props => {
    const USER = [
        {
        id: "ul",
        name: "Victor Okoromi",
        image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        placeCount: 1
       }
   ];

    return <UserList  items={USER}/>;
      
};


export default Users;