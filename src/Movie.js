import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';

function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">            
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='2'
                        ellipisis='...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
        </div>      
    )
}

function MoviePoster({poster, alt}){
    return(
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />     
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie__Genre">{genre} </span>
    )
}

Movie.prototypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
}

MoviePoster.prototypes = {
    poster: PropTypes.string.isRequired,
}

MovieGenre.prototypes = {
    genres: PropTypes.array.isRequired,
}
/*
class Movie extends Component{
    
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }
    
    render(){
        return(
            <div className="Movie">
                <
                    MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    static propTypes = {
        poster : PropTypes.string.isRequired
    }

    render(){
        return(
            <img src = {this.props.poster} />
        )
    }
}
*/
export default Movie;