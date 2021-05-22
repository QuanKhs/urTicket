import React, { useRef } from 'react';
import Header from 'components/Header';
import MovieBackDrop from 'features/Movie/components/MovieBackDrop';
import WrapperInfo from 'features/Movie/components/WrapperInfo';
import Footer from 'components/Footer';

export default function Details() {
    const scheduleRef = useRef(null);
    // console.log('🚀 ~ file: index.js ~ line 9 ~ Details ~ scheduleRef', scheduleRef);

    const executeScroll = () => scheduleRef.current.scrollIntoView();

    return (
        <div className="w-full ">
            <Header />
            <MovieBackDrop />
            <WrapperInfo refProp={scheduleRef} handleScroll={executeScroll} />
            <Footer />
        </div>
    )
}
