/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import movies from "../data/movies";
import "../App.css";

function MovieList() {
  return (
    <div>
      {movies.map((movie, index) => {
        return (
          <div
            key={index}
            css={css`
              width: 400px;
              height: 250px;
              display: flex;
              justify-content: center;
              background-color: #ffffff;
              margin-bottom: 80px;
              box-shadow: 0px 4px 40px grey;
              padding: 20px;
              border-radius: 10px;
            `}
          >
            <div>
              <img
                src={movie.image}
                css={css`
                  width: 102px;
                  height: 100px;
                  border-radius: 10px;
                `}
              />
            </div>
            <div
              css={css`
                margin-left: 20px;
                font-size: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              `}
            >
              <div>Title: {movie.title}</div>
              <div>Year: {movie.year}</div>
              <div>Runtime: {movie.runtime}</div>
              <div
                css={css`
                  display: flex;
                `}
              >
                Genres:
                {movie.genres.slice(0, 2).map((genre, i) => {
                  return (
                    <div
                      key={i}
                      css={css`
                        background-color: #eaac99;
                        border-radius: 10px;
                        padding: 4px;
                        margin: 0px 4px 0px 4px;
                      `}
                    >
                      {genre}
                    </div>
                  );
                })}
              </div>
              <div>IMDB Ratings: {movie.imdbRating}</div>
              <div>IMDB Votes: {movie.imdbVotes}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
