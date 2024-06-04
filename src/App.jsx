import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        <h1 className="movie-list-header">Movie List Section</h1>
        <MovieList />
      </section>
    </div>
  );
}

export default App;
