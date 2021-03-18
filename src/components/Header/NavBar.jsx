import React from 'react'
import MenuItems from './MenuItems'
import NeflixLogo from '../../assets/img/Netflix_2015_logo.svg'
import AccountButton from './AccountButton'
import DropDownMenu from './DropDownMenu'

const NavBar = () => {
    return (
        <div className='navbar wrapper'>
            <img src={NeflixLogo} alt="Neflix" className='logo'/>
            <MenuItems/>
            <div className='push'></div>
            <div className='menu_right'>
                <span className="material-icons mouse_pointer">search</span>
                <div className='mouse_pointer'>Kids</div>
                <span className="material-icons mouse_pointer">card_giftcard</span>
                <span className="material-icons mouse_pointer">notifications</span>
                <AccountButton/>
            </div>
            <DropDownMenu/>
        </div>
    )
}

export default NavBar
