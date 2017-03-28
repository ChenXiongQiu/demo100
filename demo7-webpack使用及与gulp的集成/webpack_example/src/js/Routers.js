import React, {Component} from 'react'
import {Router, Route, IndexRoute,Redirect,hashHistory,browserHistory} from 'react-router'

import AppContainer from '../containers/AppContainer.js'
import HomeContainer from '../containers/HomeContainer.js'
import MovieContainer from '../containers/MovieContainer.js'
import AboutContainer from '../containers/AboutContainer.js'
import MovieListContainer from '../containers/MovieListContainer.js'
import MovieDetailContainer from '../containers/MovieDetailContainer.js'
import MovieSearchContainer from '../containers/MovieSearchContainer.js'

export default class Routers extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={AppContainer}>
                    <IndexRoute component={HomeContainer} />
                    <Route path="home" component={HomeContainer}/>
                    <Route path="movie"
                           component={MovieContainer}
                           onLeave={()=>false}
                           onEnter={()=>false}
                    >
                        <IndexRoute component={MovieListContainer} />
                        <Route path="/movieList" component={MovieListContainer}/>
                        <Route path="movieDetail" component={MovieDetailContainer}/>
                        <Route path="movieSearch" component={MovieSearchContainer}/>
                        <Redirect from="movieList" to="/movieList" />
                    </Route>
                    <Route path="about" component={AboutContainer}/>
                </Route>
            </Router>
        )
    }
}