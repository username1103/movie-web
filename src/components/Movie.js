import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Moives({ id, year, title, genres, summary, poster }) {
  let sliceSummary =
    summary.length >= 150 ? summary.slice(0, 150) + "..." : summary;
  return (
    <div className="movie_container">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            genres,
            poster,
          },
        }}
      >
        <div className="movies__movie">
          <div className="img_container">
            <img src={poster} alt={title} title={title} />
          </div>
          <div className="movie__data">
            <h4 className="movie__title">{title} </h4>
            <h5 className="movie__year">({year})</h5>
            <ul className="movie__genres">
              {genres.map((genre, index) => (
                <li key={index} className="movie__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="movie__summary">{sliceSummary}</p>
          </div>
        </div>
      </Link>
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
