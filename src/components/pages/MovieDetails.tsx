import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const { TabPane } = Tabs;

import { useGetMovieDetailsQuery } from "../../../services/movieApi";

function MovieDetails() {
    const { imdb_id }: any = useParams();
    const [movieImage, setMovieImage]: any = useState([]);
    const [movieDetails, setMovieDetails]: any = useState([]);

    const { data: getMovieDetails } = useGetMovieDetailsQuery({
        type: "get-movie-details",
        imdb: imdb_id,
    });

    const { data: getMovieImage } = useGetMovieDetailsQuery({
        type: "get-movies-images-by-imdb",
        imdb: imdb_id,
    });

    useEffect(() => {
        setMovieDetails(getMovieDetails);
        setMovieImage(getMovieImage);
    });

    // const opts: any = {
    //     height: "390",
    //     width: "640",
    //     playerVars: {
    //         // https://developers.google.com/youtube/player_parameters
    //         autoplay: 1,
    //     },
    // };

    return (
        <>
            <div
                className="fanart"
                style={{
                    backgroundImage: `url(${movieImage?.fanart})`,
                }}
            >
                <div className="gradient"></div>
                <div className="image-content-wrapper">
                    <img
                        className="small-image"
                        src={movieImage?.poster}
                        alt=""
                    />
                    <div className="details-wrapper">
                        <div className="title">{movieDetails?.title}</div>
                        <div className="tagline">{movieDetails?.tagline}</div>
                        <div className="description">
                            {movieDetails?.description}
                        </div>
                        <div className="meta-datas">
                            <div className="rated">{movieDetails?.rated}</div>
                            <div className="year">{movieDetails?.year}</div>
                            <div className="year">
                                {`${movieDetails?.runtime} minutes`}
                            </div>
                            <div className="rating-count">
                                <div className="rating">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
                                        alt="IMDB"
                                    />
                                    {movieDetails?.imdb_rating}{" "}
                                </div>
                                <div className="metascore">
                                    <img
                                        src="https://www.pinclipart.com/picdir/middle/149-1497095_file-metacritic-svg-wikimedia-commons-gucci-logo-svg.png"
                                        alt="Metascore"
                                    />
                                    {movieDetails?.popularity}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-details-container">
                <Tabs defaultActiveKey="2">
                    <TabPane
                        tab={
                            <span>
                                <AppleOutlined color="#fff" />
                                TRAILERS AND EVENTS
                            </span>
                        }
                        key="1"
                    >
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${movieDetails?.youtube_trailer_key}}`}
                        />
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <AndroidOutlined />
                                DETAILS
                            </span>
                        }
                        key="2"
                    >
                        <div className="description-container">
                            <h2 className="description-header">DESCRIPTION</h2>
                            <p className="full-description-details">
                                {movieDetails?.description}
                            </p>

                            <div className="row">
                                <div className="genre">
                                    <h2 className="description-header">
                                        RELEASE DATE
                                    </h2>
                                    {movieDetails?.release_date}
                                </div>
                                <div className="cast">
                                    <h2 className="description-header">
                                        MPAA RATING
                                    </h2>
                                    {movieDetails?.rated}
                                </div>
                                <div className="director">
                                    <h2 className="description-header">
                                        RUNTIME
                                    </h2>
                                    {`${movieDetails?.runtime} minutes`}
                                </div>
                            </div>

                            <div className="row">
                                <div className="genre">
                                    <h2 className="description-header">
                                        LANGUAGE
                                    </h2>
                                    {movieDetails?.language?.map(
                                        (result: string, index: number) => (
                                            <div key={index}>
                                                <p>{result}</p>
                                            </div>
                                        )
                                    )}
                                </div>
                                <div className="cast">
                                    <h2 className="description-header">
                                        IMDB RATING
                                    </h2>
                                    {movieDetails?.imdb_rating}
                                </div>
                                <div className="director">
                                    <h2 className="description-header">
                                        POPULARITY
                                    </h2>
                                    {movieDetails?.popularity}
                                </div>
                            </div>

                            <div className="row">
                                <div className="genre">
                                    <h2 className="description-header">
                                        GENRE
                                    </h2>
                                    {movieDetails?.genres?.map(
                                        (result: string, index: number) => (
                                            <div key={index}>
                                                <p>{result}</p>
                                            </div>
                                        )
                                    )}
                                </div>
                                <div className="cast">
                                    <h2 className="description-header">CAST</h2>
                                    {movieDetails?.stars?.map(
                                        (result: string, index: number) => (
                                            <div key={index}>
                                                <p>{result}</p>
                                            </div>
                                        )
                                    )}
                                </div>
                                <div className="director">
                                    <h2 className="description-header">
                                        DIRECTORS
                                    </h2>
                                    {movieDetails?.directors?.map(
                                        (result: string, index: number) => (
                                            <div key={index}>
                                                <p>{result}</p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </>
    );
}

export default MovieDetails;
