import React from 'react';
import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import yoga from './../../../images/yoga.jpeg'

const TapeSplider = () => {
    const spliderOptions = {
        perPage: 1,
        perMove: 1,
        gap: '20px',
        drag: false,
    }


    return (
        <>
            <Splide hasTrack={ true } options={spliderOptions}>

                    <SplideSlide>
                        <div className="image">
                            <img src={yoga} alt="" />
                        </div>
                    </SplideSlide>

                    <SplideSlide>
                        <div className="note">
                            <p>Напишите <br/> заметку</p>
                            <textarea name="" id="" style={{flex: '1', width: '100%'}} onClick={(e) => e.preventDefault()}></textarea>
                        </div>
                        
                    </SplideSlide>
            </Splide>   
        </>
    );
};

export default TapeSplider;