import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movies';


class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=year");
    this.setState({ movies, isLoading: false });
  };


  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map(movie => (
            <Movie
              key={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              rating={movie.rating}
            />
          ))}
      </div >

    );
  }
}



export default App;
