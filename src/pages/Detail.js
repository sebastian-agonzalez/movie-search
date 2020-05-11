import React, { Component } from 'react';
import PropTypes from 'prop-types';

//components
import { ButtonBackToHome } from '../components/ButtonBackToHome';

class Detail extends Component {

    state = {
        movieDetail: {}
    };

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string,
        })
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
        console.log(this.props);
        
        const { id } = this.props.match.params;
        console.log(id);

        this._fetchMovie({ id });
    }

    //render
    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movieDetail;

        return (
            <div>
                <ButtonBackToHome/>
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