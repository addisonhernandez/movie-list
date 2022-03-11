import React, { Component } from 'react';

const MovieList = ({ movies }) => (
  <div className='movie-list'>
    {movies.map(movie => <li key={movie.title}>{movie.title}</li>)}
  </div>
);

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  handleInputChange(event) {
    this.setState({
      query: event.target.value || ''
    });
  }

  render() {
    return (
      <div className='search-bar'>
        <input
          onChange={(e) => this.handleInputChange(e)}
          type="text"
        ></input>
        <button
          onClick={() => this.props.handleSearchSubmit(this.state.query)}
        >
          Search!
        </button>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.defaultMovies = [
      { title: 'Mean Girls' },
      { title: 'Hackers' },
      { title: 'The Grey' },
      { title: 'Sunshine' },
      { title: 'Ex Machina' },
    ];

    this.state = {
      movies: this.defaultMovies,
      matchedMovies: this.defaultMovies
    };
  }

  handleSearch(query) {
    debugger;
    if (query && query.length) {
      const matchedMovies = this.state.movies.filter(({ title }) => {
        // title.includes(query)
        // const queryRE = new RegExp(query, 'gi');
        return RegExp(query, 'gi').test(title);
      });

      this.setState({ matchedMovies });
    }
  }

  render() {
    return (
      <div className='movie-list-app'>
        <h1>Movie List</h1>
        <SearchBar handleSearchSubmit={(query) => this.handleSearch(query)} />
        {
          this.state.matchedMovies.length ?
            <MovieList movies={this.state.matchedMovies} /> :
            'Oh no! There were no movies with that name found.'
        }
      </div>
    );
  }
}

export default App;