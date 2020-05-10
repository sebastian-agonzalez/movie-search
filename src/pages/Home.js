import React, { Component } from 'react';

//component imports
import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';
import { MoviesList } from '../components/MoviesList'; 


export class Home extends Component {
    state = {
        usedSearch: false,
        results: [],
      }

    //methods
    _handleResults = (results) => {
        this.setState({ results, usedSearch: true });
      }
    
      _renderResults() {
        return this.state.results.length === 0
          ? <p>Results Not Found</p>
          : <MoviesList movies={this.state.results} />
      }
    
    //render
    render() {
        return (
            <div>
                <Title>Search Movies</Title>
                <div className="SearchForm-wrapper">
                    <SearchForm onResults={this._handleResults} />
                </div>
                {this.state.usedSearch
                    ? this._renderResults()
                    : <p>Use form to search a movie</p>
                }

            </div>
        )
    }

}