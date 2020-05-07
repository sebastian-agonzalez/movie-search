import React, { Component } from 'react';

export class SearchForm extends Component {
    state = {
        inputMovie: '',
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value });
    }

    _handleSubmit = (e) => {
        e.preventDefault();

        const { inputMovie } = this.state;

        const APIplusKey = 'https://www.omdbapi.com/?apikey=6e10393a'

        fetch(`${APIplusKey}&s=${inputMovie}`)
            .then(res => res.json())
            .then(res => {
                const { Search = [], totalResults = "0" } = res;
                
                console.log({ Search, totalResults});

                this.props.onResults(Search)
            });
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            onChange={this._handleChange}
                            className="input" type="text" placeholder="Movie to search..."
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                    </button>
                    </div>
                </div>
            </form>

        )
    }
} 