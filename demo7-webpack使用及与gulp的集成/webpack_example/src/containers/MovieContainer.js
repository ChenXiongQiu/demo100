import React, {Component} from 'react'
import {Link} from 'react-router'

import '../styles/movie.css'
export default class MovieContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="movie_container">
                <div className="movie_left">
                    <Link to="/movie/movieList">正在热映</Link>
                    <Link to="/movie/movieList">即将上映</Link>
                    <Link to="/movie/movieList">top250</Link>
                </div>
                <div className="movie_right">
                    <div className="movie_search">
                        <input type="text"/>
                        <button>搜索</button>
                    </div>
                    <div className="movie_content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}