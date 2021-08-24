import React from 'react';
import './MovieCard.scss';
import { ICONS } from 'constants/image';
import PopupTrailer from '../PopupTrailer/PopupTrailer';
import MovieClassify from '../MovieClassify/MovieClassify';
import { useSelector } from 'react-redux';

export default function MovieCard({ movie }) {
    const { loading } = useSelector(state => state.home);
    return (
        <div className="movie__card">
            <div className="movie__card__wrapper">
                <div className="movie__card__img relative">
                    <div href="/details" className="block">
                        <img className="w-full h-full" src={movie?.posterUrl} alt="movie" />
                    </div>
                    <PopupTrailer
                        open={<button className="button movie__card__img__playTrailer">
                            <i className="fa fa-play" id="viewTrailer" />
                        </button>}
                        idVideo={movie?.trailerVideoUrl}
                    />
                </div>
                <div className="movie__card__content">
                    <div className="movie__card__title">
                        <h5 className="line-clamp-2">{movie?.title}</h5>
                        <div className="flex items-center mt-2">
                            <MovieClassify classify={movie?.classify} />
                            <span className="ml-1 text-sm text-gray-400">{movie?.duration} minutes</span>
                        </div>
                    </div>
                    <ul className="movie__card__rating">
                        <li className="card__rating_item">
                            <div className="flex items-center ">
                                <img className="max-w-full" src={ICONS.TOMATO} alt="movie" />
                            </div>
                            <span className="font-semibold text-lg ml-2">{movie?.voteAverage * 10}%</span>
                        </li>
                        <li className="card__rating_item">
                            <div className="flex items-center ">
                                <img className="max-w-full" src={ICONS.CAKE} alt="movie" />
                            </div>
                            <span className="font-semibold text-lg ml-2">{movie?.voteAverage / 2}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
