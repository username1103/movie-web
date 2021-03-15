import React from "react";
import PropTypes from "prop-types";

function Moives({ year, title, genres, summary, poster }) {
  return (
    <div className="movies__movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h4 className="movie__title">{title}</h4>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="movie__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Moives.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Moives;
