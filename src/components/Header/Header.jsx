import React from 'react'
import { Redirect } from 'react-router'
import NavBar from './NavBar'

const Header = () => {


    const path = document.location.pathname
    if (path === '/') {
        <Redirect to='/browse'/>
    }

    return (
        <div>
            <NavBar/>
        </div>
    )
}

export default Header
