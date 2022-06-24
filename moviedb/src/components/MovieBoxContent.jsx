/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../assets/css/movieBoxContent.css";
import { motion } from "framer-motion";
import imgNotFound from "../assets/img/imageNotFound.jpg";

const apiImg = "https://image.tmdb.org/t/p/w500/";

const MovieBoxContent = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
  original_language,
}) => {
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.15 }}
        className="movieBox"
      >
        {poster_path == null ? (
          <img src={imgNotFound} alt="filmImg" className="imageNotFound"></img>
        ) : (
          <img src={apiImg + poster_path} alt="filmImg" className="image"></img>
        )}

        {release_date == null ? (
          <div>
            <div className="content">
              <h4 className="year2">0</h4>
              <h1 className="title">{title}</h1>
              <p className="description">{overview}</p>
              <h2 className="voteAverage">
                <i className="fa-solid fa-star"></i>
                {vote_average}/10
              </h2>
              <h3 className="lenguage">{original_language}</h3>
            </div>
            <h3 className="year">0</h3>
          </div>
        ) : (
          <div>
            <div className="content">
              <h4 className="year2">
                {release_date[0] +
                  release_date[1] +
                  release_date[2] +
                  release_date[3]}
              </h4>
              <h1 className="title">{title}</h1>
              <p className="description">{overview}</p>
              <h2 className="voteAverage">
                <i className="fa-solid fa-star"></i>
                {vote_average}/10
              </h2>
              <h3 className="lenguage">{original_language}</h3>
            </div>
            <h3 className="year">
              {release_date[0] +
                release_date[1] +
                release_date[2] +
                release_date[3]}
            </h3>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default MovieBoxContent;
