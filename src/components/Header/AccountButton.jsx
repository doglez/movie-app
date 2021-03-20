import React from 'react'
import AdultIcon from '../../assets/img/adultIcon.png'
import DropDownMenu from './DropDownMenu'

const AccountButton = () => {

    return (
        <div className='account_button'>
            <div className='account_dropdown_button'>
                <img src={AdultIcon} alt="Adult Section" className='user_icon'/>
                <span className='material-icons rotate_icon'>arrow_drop_down</span>
            </div>
            <DropDownMenu/>
        </div>
    )
}

export default AccountButton
