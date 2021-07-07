import React from 'react';
import MovieCarousel from 'containers/Movie/components/MovieBannerCarousel/MovieBannerCarousel';
import MovieSearch from 'containers/Movie/components/MovieSearch/MovieSearch';
import Tabs from 'containers/Movie/components/Tabs/Tabs';
import NewsSection from 'containers/Movie/components/NewsSection/NewsSection';
import Schedule from 'containers/Movie/components/Schedule/Schedule';
import BoxOffice from 'containers/Movie/components/BoxOffice/BoxOffice';

export default function MainPage(props) {
    console.log('🚀 ~ file: index.js ~ line 7 ~ MainPage ~ props', props);
    return (
        <>
            <MovieCarousel />
            <MovieSearch />
            <Tabs />
            <NewsSection />
            <BoxOffice />
            <Schedule />
        </>
    )
}
