/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import MovieBoxContent from "./MovieBoxContent";
import "../assets/css/movieBox.css";

function MovieBox() {
  const [movies, setMovies] = useState([]);
  const [moviesFilter, setMoviesFilter] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [minStarNumber, setMinStarNumber] = useState(0);
  const [maxStarNumber, setMaxStarNumber] = useState(10);

  const apiPopularity = `https://api.themoviedb.org/3/discover/movie?api_key=23ba9ea732e2c0d14171ead63e36605b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

  useEffect(() => {
    fetch(apiPopularity)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  const searchMovies = async (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=23ba9ea732e2c0d14171ead63e36605b&language=en-US&page=1&include_adult=false&query=${encodeURIComponent(
      query
    )}`;
    const response = await fetch(url);
    const data = await response.json();
    if (query.length > 0) {
      setMovies(data.results);
      setMoviesFilter(data.results);
      document.querySelector("h1.popularMoviesH1").style.display = "none";
      document.querySelector("h1.yourResearchH1").style.display = "block";
    } else {
      const pagePopularity = `https://api.themoviedb.org/3/discover/movie?api_key=23ba9ea732e2c0d14171ead63e36605b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=&with_watch_monetization_types=flatrate`;
      const resPopularity = await fetch(pagePopularity);
      const dataPopularity = await resPopularity.json();
      setMovies(dataPopularity.results);
      setMoviesFilter(dataPopularity.results);
      document.querySelector("h1.popularMoviesH1").style.display = "block";
      document.querySelector("h1.yourResearchH1").style.display = "none";
    }
  };

  useEffect(() => {
    searchMovies(query);
  }, [query]);

  const changeHandler = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };

  const nextPage = async () => {
    if (query == 0) {
      if (page >= 1) {
        setPage(page + 1);
        const pageUpdate = `https://api.themoviedb.org/3/discover/movie?api_key=23ba9ea732e2c0d14171ead63e36605b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
          page + 1
        }&with_watch_monetization_types=flatrate`;
        const resUpdate = await fetch(pageUpdate);
        const dataUpdate = await resUpdate.json();
        setMovies(dataUpdate.results);
        setMoviesFilter(dataUpdate.results);
        return movies;
      }
    } else {
      if (page >= 1) {
        setPage(page + 1);
        const pageUpdate = `https://api.themoviedb.org/3/search/movie?api_key=23ba9ea732e2c0d14171ead63e36605b&language=en-US&page=${
          page + 1
        }&include_adult=false&query=${encodeURIComponent(query)}`;
        const resUpdate = await fetch(pageUpdate);
        const dataUpdate = await resUpdate.json();
        setMovies(dataUpdate.results);
        setMoviesFilter(dataUpdate.results);
        return movies;
      }
    }
  };

  const prevPage = async () => {
    if (query == 0) {
      if (page === 1) {
        return movies;
      } else {
        setPage(page - 1);
        const pageUpdate = `https://api.themoviedb.org/3/discover/movie?api_key=23ba9ea732e2c0d14171ead63e36605b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
          page - 1
        }&with_watch_monetization_types=flatrate`;
        const resUpdate = await fetch(pageUpdate);
        const dataUpdate = await resUpdate.json();
        setMovies(dataUpdate.results);
        setMoviesFilter(dataUpdate.results);
      }
    } else {
      if (page === 1) {
        return movies;
      } else {
        setPage(page - 1);
        const pageUpdate = `https://api.themoviedb.org/3/search/movie?api_key=23ba9ea732e2c0d14171ead63e36605b&language=en-US&page=${
          page - 1
        }&include_adult=false&query=${encodeURIComponent(query)}`;
        const resUpdate = await fetch(pageUpdate);
        const dataUpdate = await resUpdate.json();
        setMovies(dataUpdate.results);
        setMoviesFilter(dataUpdate.results);
        return movies;
      }
    }
  };

  function setStar(minStar, maxStar) {
    setMinStarNumber(minStar);
    setMaxStarNumber(maxStar);
    let filterMovie = movies.filter(
      (movie) =>
        movie.vote_average >= minStarNumber &&
        movie.vote_average <= maxStarNumber
    );
    console.log(filterMovie);
    setMoviesFilter(filterMovie);
    if (maxStar == 2) {
      document.querySelector("i.ratingStar1").style.color = "rgb(252, 185, 0)";
      document.querySelector("i.ratingStar2").style.color = "silver";
      document.querySelector("i.ratingStar3").style.color = "silver";
      document.querySelector("i.ratingStar4").style.color = "silver";
      document.querySelector("i.ratingStar5").style.color = "silver";
    }
    if (maxStar == 4) {
      document.querySelector("i.ratingStar1").style.color = "rgb(252, 185, 0)";
      document.querySelector("i.ratingStar2").style.color = "rgb(252, 185, 0)";
      document.querySelector("i.ratingStar3").style.color = "silver";
      document.querySelector("i.ratingStar4").style.color = "silver";
      document.querySelector("i.ratingStar5").style.color = "silver";
    }
    if (maxStar == 6) {
      document.querySelector("i.ratingStar1").style.color = "rgb(252, 185, 0)";
      document.querySelector("i.ratingStar2").style.color = "rgb(252, 185, 0)";
      document.querySelector("i.ratingStar3").style.color = "rgb(252, 185, 0)";
      document.querySelector("i.ratingStar4").style.color = "silver";
      document.querySelector("i.ratingStar5").style.color = "silver";
    }
    if (maxStar == 8) {
      document.querySelector("i.ratingStar1").style.color = "rgb(252, 185, 0)";
      document.querySelector("i.ratingStar2").style.color = "rgb(252, 185, 0)";
      document.querySelector("i.ratingStar3").style.color = "rgb(252, 185, 0)";
      document.querySelector("i.ratingStar4").style.color = "rgb(252, 185, 0)";
      document.querySelector("i.ratingStar5").style.color = "silver";
    }
    if (maxStar == 10) {
      document.querySelector("i.ratingStar1").style.color = "rgb(252, 185, 0)";
      document.querySelector("i.ratingStar2").style.color = "rgb(252, 185, 0)";
      document.querySelector("i.ratingStar3").style.color = "rgb(252, 185, 0)";
      document.querySelector("i.ratingStar4").style.color = "rgb(252, 185, 0)";
      document.querySelector("i.ratingStar5").style.color = "rgb(252, 185, 0)";
    }
    if (maxStar == 11) {
      document.querySelector("i.ratingStar1").style.color = "silver";
      document.querySelector("i.ratingStar2").style.color = "silver";
      document.querySelector("i.ratingStar3").style.color = "silver";
      document.querySelector("i.ratingStar4").style.color = "silver";
      document.querySelector("i.ratingStar5").style.color = "silver";
    }

  }

  return (
    <>
      <div className="searchContainer">
        <section className="formContainer">
          <form onSubmit={searchMovies}>
            <input
              placeholder="Search Movie..."
              type="text"
              className="searchMovie"
              name=""
              value={query}
              onInput={changeHandler}
            ></input>
          </form>
        </section>
      </div>
      <h1 className="popularMoviesH1">
        <i className="fa-solid fa-fire icons"></i>Popular Movies
      </h1>
      <h1 className="yourResearchH1">
        <i className="fa-solid fa-magnifying-glass icons"></i>Search results
      </h1>
      <div className="ratingBox">
        <p className="pRating">Rating:</p>
        <button
          type="submit"
          onClick={() => setStar(0, 2)}
          className="buttonStar"
        >
          <i className="fa-solid fa-star ratingStar1"></i>
        </button>
        <button
          type="submit"
          onClick={() => setStar(2, 4)}
          className="buttonStar"
        >
          <i className="fa-solid fa-star ratingStar2"></i>
        </button>
        <button
          type="submit"
          onClick={() => setStar(4, 6)}
          className="buttonStar"
        >
          <i className="fa-solid fa-star ratingStar3"></i>
        </button>
        <button
          type="submit"
          onClick={() => setStar(6, 8)}
          className="buttonStar"
        >
          <i className="fa-solid fa-star ratingStar4"></i>
        </button>
        <button
          type="submit"
          onClick={() => setStar(8, 10)}
          className="buttonStar"
        >
          <i className="fa-solid fa-star ratingStar5"></i>
        </button>
        <button
          type="submit"
          onClick={() => setStar(0, 11)}
          className="buttonStar "
        >
          <i class="fa-solid fa-arrow-rotate-left resetButton"></i>
        </button>
      </div>
      <div className="pagination">
        <button type="submit" className="prevPage" onClick={prevPage}>
          <p>Previous</p>
        </button>
        <button type="submit" className="nextPage" onClick={nextPage}>
          <p>Next</p>
        </button>
      </div>
      <div className="movieContent">
        {moviesFilter.map((movieReq) => (
          <MovieBoxContent key={movieReq.id} {...movieReq} />
        ))}
      </div>
    </>
  );
}

export default MovieBox;