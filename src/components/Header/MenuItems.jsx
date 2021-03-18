import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuItems = () => {
    return (
        <ul className='menu_items'>
            <NavLink to='/browse' activeClassName='selected' exact>Home</NavLink>
            <NavLink to='/browse/genre/83' activeClassName='selected'>Series</NavLink>
            <NavLink to='/browse/genre/34399' activeClassName='selected'>Movies</NavLink>
            <NavLink to='/latest' activeClassName='selected'>Latest</NavLink>
            <NavLink to='/browse/my-list' activeClassName='selected'>MyList</NavLink>
        </ul>
    )
}

export default MenuItems
