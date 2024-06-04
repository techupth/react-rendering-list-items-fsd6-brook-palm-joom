

export function MoviesList(props) {
  return (
    <>
      <div className="movies-box">
        <figure>
            <img src={props.image} alt="" />
        </figure>
        <div className="movies-list">
          <div>Title: {props.title}</div>
          <div>Year: {props.year}</div>
          <div>Runtime: {props.runtime}s </div>
          <div>Genres: {props.genres}</div>
          <div>IMDBRating: {props.imdbRating}</div>
          <div>IMDBVotes: {props.imdbVotes}</div>
        </div>
      </div>
    </>
  );
}
