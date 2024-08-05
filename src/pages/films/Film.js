/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../../shared/components/Loader';
import './film.css'

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
                setFilms(res.data.films);
                setLoading(false)
            }
        )
    }

    // méthode rendu

    const MoviesRender = () => {
        return loading ? (
            <Loader />
        ) : (
            <div className='page-container'>
                <div className='section'>
                    Total de film disponible : <span>{films.length}</span>
                </div>
                <div className='movies-container'>
                    {films.map(({id, url, titre, description}) => {
                        return <div key={id} className='movie-card'>
                            <div className='img-container'>
                                <img src={url} alt={titre}/>
                            </div>
                            <div className='details'>
                            <h4>{titre}</h4>
                            <p>{description.substring(0,150)}</p>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        )
    }
    return <div>
        <div>{MoviesRender()}</div>
    </div>
  
}
