import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = ({ id, title, summary, poster, year, rating, genres }) => (
    <div className="movie">
        <img className="movie__poster" src={poster} alt={title} title={title} />
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <h5 className="movie__rating"> {rating}/10.0</h5>
            <ul className="gernes">
                {genres.map(
                    (genre, index) => (
                        <li key={index} className="genres__genre">{genre}</li>
                    )
                )}
            </ul>
            <p className="movie__summary">{summary}</p>
        </div>


    </div>
)

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired

}

export default Movie;