import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ id, title, summary, poster, year, rating }) => (
    <div>
        {title}
    </div>
)

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired

}

export default Movie;