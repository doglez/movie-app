import React from 'react'
import MenuItems from './MenuItems'
import NeflixLogo from '../../assets/img/Netflix_2015_logo.svg'
import AccountButton from './AccountButton'

const NavBar = () => {
    return (
        <div className='navbar wrapper'>
            <img src={NeflixLogo} alt="Neflix" className='logo'/>
            <MenuItems/>
            <div className='push'></div>
            <div className='menu_right'>
                <span class="material-icons mouse_pointer">search</span>
                <div className='mouse_pointer'>Kids</div>
                <span class="material-icons mouse_pointer">card_giftcard</span>
                <span class="material-icons mouse_pointer">notifications</span>
                <AccountButton/>
            </div>
        </div>
    )
}

export default NavBar
