import React, { useContext } from "react"
import { NavLink } from "react-router-dom";
import {AuthContext} from "../../shared/context/Auth-context"


import './NavLinks.css'



const NavLinks = props => {
    const auth = useContext(AuthContext);
    return (
        <ul className="nav-links"> 
            <li>
                <NavLink to="/" exact>ALL USERS</NavLink>
            </li>
           {auth.isLoggedIn && <li>
                <NavLink to="/ul/places">MY PLACES</NavLink>
            </li>
            }
            {auth.isLoggedIn && <li>
                <NavLink to="/place/new">ADD PLACE</NavLink>
            </li>
            }
            {!auth.isLoggedIn && <li>
                <NavLink to="/auth">AUTHENTICATE</NavLink>
            </li> 
            }
            {auth.isLoggedIn && <button onClick={auth.logout}>LOGOUT</button>}

        </ul>

    )
}


export default NavLinks; 