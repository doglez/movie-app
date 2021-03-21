import React from 'react'

const SearchFrom = () => {
    return (
        <form action="/search" method="get" className='search_form'>
            <span className="material-icons mouse_pointer search_icon">search</span>
            <input type="search" id='search' name="search" placeholder='Title, people, gender'/>
            <span className="material-icons mouse_pointer cancel_icon">close</span>
        </form>
    )
}

export default SearchFrom