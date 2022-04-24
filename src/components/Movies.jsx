import Movie from './Movie'
import React from 'react';

function Movies (props) {
    const {movies = [ ]} = props;

    return <div className="movies">
        {movies.length ? movies.map(movie => {
            return <Movie key={movie.imdbID} {...movie} />
        }) : <h4> Ничего не найдено</h4>}
    </div>
}

export default Movies;