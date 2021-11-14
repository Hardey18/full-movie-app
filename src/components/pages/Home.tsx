import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import BoxOffice from "../reusables/BoxOffice";
import PopularMovies from "../reusables/PopularMovies";
import RecentlyAdded from "../reusables/RecentlyAdded";
import TrendingMovies from "../reusables/TrendingMovies";
import UpcomingMovies from "../reusables/UpcomingMovies";

const { Title } = Typography;

function Home() {
    return (
        <>
            <h1>Home Page</h1>
            <div className="home-heading-container">
                <Title level={2} className="home-title">
                    Box Office Movies
                </Title>
                <Title level={3} className="show-more">
                    <Link to="/box-office">Show more</Link>
                </Title>
            </div>
            <BoxOffice simplified />

            <div className="home-heading-container">
                <Title level={2} className="home-title">
                    Popular Movies
                </Title>
                <Title level={3} className="show-more">
                    <Link to="/popular">Show more</Link>
                </Title>
            </div>
            <PopularMovies simplified />

            <div className="home-heading-container">
                <Title level={2} className="home-title">
                    Recently Added Movies
                </Title>
                <Title level={3} className="show-more">
                    <Link to="/recent">Show more</Link>
                </Title>
            </div>
            <RecentlyAdded simplified />

            <div className="home-heading-container">
                <Title level={2} className="home-title">
                    Trending Movies
                </Title>
                <Title level={3} className="show-more">
                    <Link to="/trending">Show more</Link>
                </Title>
            </div>
            <TrendingMovies simplified />

            <div className="home-heading-container">
                <Title level={2} className="home-title">
                    Upcoming Movies
                </Title>
                <Title level={3} className="show-more">
                    <Link to="/upcoming">Show more</Link>
                </Title>
            </div>
            <UpcomingMovies simplified />
        </>
    );
}

export default Home;
