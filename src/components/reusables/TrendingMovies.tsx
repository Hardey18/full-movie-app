import "react-slider-awesome/dist/index.css";

import { Card, Col, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Slider } from "react-slider-awesome";

import API from "../../../axios";
import { useGetRecentlyAddedQuery } from "../../../services/movieApi";

function TrendingMovies({ simplified }: any) {
    const [realTrendingMovies, setRealTrendingMovies] = useState([]);

    const { data: getTrendingMovies } = useGetRecentlyAddedQuery({
        type: "get-trending-movies",
        page: "1",
    });

    let arrayOfMovieImages;

    useEffect(() => {
        arrayOfMovieImages = getTrendingMovies?.movie_results?.map(
            (result: any) => {
                return API.get(
                    `/?type=get-movies-images-by-imdb&imdb=${result.imdb_id}`
                );
            }
        );
        trendingMoviesFunction(arrayOfMovieImages);
    }, [getTrendingMovies, arrayOfMovieImages]);

    async function trendingMoviesFunction(param: any) {
        let resolvedDetails: any = await Promise.all(param);
        setRealTrendingMovies(resolvedDetails);
    }

    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <Input placeholder="Search Trending Movies" />
                </div>
            )}
            {!simplified && (
                <Row gutter={[32, 32]} className="crypto-card-container">
                    {realTrendingMovies?.map((result: any) => (
                        <Col
                            xs={24}
                            sm={12}
                            xl={6}
                            className="crypto-card"
                            key={result.data.IMDB}
                        >
                            <Link to={`/movie-details/${result.data.IMDB}`}>
                                <Card
                                    title={result.data.title}
                                    extra={
                                        <img
                                            className="crypto-image"
                                            src={result.data.poster}
                                            alt="Poster"
                                        />
                                    }
                                    hoverable
                                >
                                    <img
                                        className="image-inner"
                                        src={result.data.poster}
                                        alt="Poster"
                                    />
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            )}
            {simplified && (
                <div className="carousel-wrapper">
                    <Slider rtl={false} noEffects={false} size={"small"}>
                        {realTrendingMovies?.map((result: any) => (
                            <div key={result.data.IMDB}>
                                <Link to={`/movie-details/${result.data.IMDB}`}>
                                    <img
                                        alt="Poster"
                                        src={result.data.poster}
                                    />
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            )}
        </>
    );
}

export default TrendingMovies;
