import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import MovieDetails from "./components/pages/MovieDetails";
import BoxOffice from "./components/reusables/BoxOffice";
import PopularMovies from "./components/reusables/PopularMovies";
import RecentlyAdded from "./components/reusables/RecentlyAdded";
import TrendingMovies from "./components/reusables/TrendingMovies";
import UpcomingMovies from "./components/reusables/UpcomingMovies";
import ScrollToTop from "./ScrollToTop";

export default function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/box-office" component={BoxOffice} />
                        <Route
                            exact
                            path="/popular"
                            component={PopularMovies}
                        />
                        <Route exact path="/recent" component={RecentlyAdded} />
                        <Route
                            exact
                            path="/trending"
                            component={TrendingMovies}
                        />
                        <Route
                            exact
                            path="/upcoming"
                            component={UpcomingMovies}
                        />
                        <Route
                            exact
                            path="/movie-details/:imdb_id"
                            component={MovieDetails}
                        />
                    </Switch>
                </ScrollToTop>
            </Router>
        </div>
    );
}
