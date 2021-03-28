import React from 'react'
import KidsIcon from '../../assets/img/kidsIcon.png'

const DropDownMenu = () => {
    return (
        <div className='drop_down_menu'>
            <span className='material-icons drop_down_menu_icon'>arrow_drop_up</span>
            <ul className='drop_down_menu_list'>
                <li className='kids_section'><img src={KidsIcon} alt="Kids Section" className='user_icon'/><span>Kids</span></li>
                <li>Manage Profiles</li>
                <hr/>
                <li><strong>Account</strong></li>
                <li><strong>Help Center</strong></li>
                <li><strong>Sing out of Netflix</strong></li>
            </ul>
        </div>
    )
}

export default DropDownMenu
