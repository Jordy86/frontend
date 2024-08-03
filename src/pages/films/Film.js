import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Film() {

    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(true);

    const [films, setFilms] = useState([]);

    useEffect(() => {
        moviesRequest()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const moviesRequest = async() => {
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}films`).then(
            (res) => {
                setFilms(res.data.films)
            }
        )
    }
    return (
    <div>Film {films.length}</div>
  )
}
