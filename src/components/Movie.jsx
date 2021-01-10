/* eslint-disable no-useless-constructor */
import React from 'react';

export default class Movie extends React.Component{
    constructor(props){
        super(props);        
    }

    imgMovies = 'https://image.tmdb.org/t/p/w300/';

    render(){
        return(
            <div className="movie card">
                <img src={this.imgMovies + this.props.data.poster_path} alt={this.props.data.title} className="card-img-top"/>                    
                <div className="card-body">
                    <p className="card-text">{this.props.data.title}</p>
                    <span className="card-text">{this.props.data.vote_average}</span>
                </div>
                <div className="card-footer">
                    <h4><strong>Overview</strong></h4>
                    <p>{this.props.data.overview}</p>
                </div>                
            </div>
        )
    }


}