import React from 'react'
import MenuItems from './MenuItems'
import NeflixLogo from '../../assets/img/Netflix_2015_logo.svg'
import AccountButton from './AccountButton'
import SearchFrom from './SearchFrom'

const NavBar = () => {
    return (
        <div className='navbar wrapper'>
            <img src={NeflixLogo} alt="Neflix" className='logo'/>
            <MenuItems/>
            <div className='push'></div>
            <div className='menu_right'>
                <div className='mouse_pointer'>Kids</div>
                <span className="material-icons mouse_pointer">card_giftcard</span>
                <span className="material-icons mouse_pointer">notifications</span>
                <AccountButton/>
            </div>
            <SearchFrom/>
        </div>
    )
}

export default NavBar
