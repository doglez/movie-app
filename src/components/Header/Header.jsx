/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const Header = () => {

    const [headerScroll, setHeaderScroll] = useState(false)

    const handleScrollEffect = () => {
        if (window.scrollY >= 20) {
            setHeaderScroll(!headerScroll)
        } else {
            setHeaderScroll(headerScroll)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollEffect)
    },[])

    return (
        <header className={headerScroll ? 'header_scroll_effect' : null}>
            <NavBar/>
        </header>
    )
}

export default Header
