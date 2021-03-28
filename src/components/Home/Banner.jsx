import useAxios from 'axios-hooks'
import React, { useEffect, useState } from 'react'
import {ApiRequest} from '../Request/ApiRequest'

const Banner = () => {

    const [{data, loading, error}] = useAxios({
        method: 'GET',
        url: ApiRequest.trending
    })

    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        if (data && data.results) {
            setMovies(data.results)
        } else if (error) {
            setMovies(error.message)
        }        
    }, [data, error])

    return (
        <div>
            <p>{loading && 'Loading...'}</p>
            {console.log(movies)}
        </div>
    )
}

export default Banner
