import React, { useState } from "react"
import { Link } from "react-router-dom"

import MainHeader from './MainHeader'
import NavLinks from "./NavLinks"
import MobileMenu from "./MobileMenu"
import Backdrop from "../UIElements/Backdrop"

import '../Nav/MainNavigation.css'



const MainNav = props => {
    const [drawerIsOpen, setDrawer] = useState(false)

   const drawerHandler = () =>{
        setDrawer(true)
    }

    const closeDrawerHandler = () => {
        setDrawer(false)
    }

    return (
        <React.Fragment>
            {drawerIsOpen &&
             <Backdrop onClick={closeDrawerHandler} />
            }
            <MobileMenu show={drawerIsOpen} onClick={closeDrawerHandler}> 
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </MobileMenu> 
            
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={drawerHandler}>
                    <span/> 
                    <span /> 
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/"> Places </Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}


export default MainNav;