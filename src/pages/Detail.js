import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Detail extends Component {

    state = {
        movieDetail: {}
    };

    static propTypes = {
        id: PropTypes.string,
    }

    //methods
    _fetchMovie({ id }) {

        const APIplusKey = 'https://www.omdbapi.com/?apikey=6e10393a';

        fetch(`${APIplusKey}&i=${id}`)
            .then(res => res.json())
            .then(movie => {

                this.setState({ movieDetail: movie })

            });

    }

    _goBack () {
        window.history.back();
    }

    componentDidMount() {
        const { id } = this.props;
        console.log(id);

        this._fetchMovie({ id });
    }

    //render
    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movieDetail;

        return (
            <div>
                <button onClick={this._goBack}>Volver</button>
                <h1>{Title}</h1>
                <img src={Poster} alt={Title} />
                <p>{Actors}</p>
                <span>Metascore Rating: {Metascore}</span>
                <p>{Plot}</p>
            </div>

        );
    }
}

export default Detail;