import React, { Component } from 'react';

//components
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import { MoviesList } from './components/MoviesList';
import Detail from './pages/Detail';

//styles
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {

  /**
   * state
   */

  state = {
    usedSearch: false,
    results: [],
  }

  /**
   * methods
   */

  _handleResults = (results) => {
    this.setState({ results, usedSearch: true });
  }

  _renderResults() {
    return this.state.results.length === 0
      ? <p>Results Not Found</p>
      : <MoviesList movies={this.state.results} />
  }



  /**
   * render
   */
  render() {
    const url = new URL(document.location);
    const hasId = url.searchParams.has('id');

    if (hasId) {
      const movieURL = url.searchParams.get('id');
      return <Detail id={movieURL} />
    }

    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch
          ? this._renderResults()
          : <p>Use form to search a movie</p>
        }

      </div>
    );
  }

}

export default App;
