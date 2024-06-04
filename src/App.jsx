import "./App.css";
import { MoviesList } from "./components/MovieList";
import movies from "./data/movies";

function App() {
  return (
    <>
      <div className="App">
        <h1>Movie list Section</h1>
        <section className="movie-list-section">
          {movies.map((result,index) => {
            return (
              <MoviesList
                key={index}
                image={result.image}
                title={result.title}
                year={result.year}
                runtime={result.runtime}
                imdbRating={result.imdbRating}
                imdbVotes={result.imdbVotes}
                genres={result.genres.map((item, index)=>{
                  return (
                    index < 2 ? <a>{item}</a> : null
                  )
                })}
              />
            );
          })}
        </section>
      </div>
    </>
  );
}

export default App;
