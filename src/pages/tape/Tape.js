import React from 'react';
import Layout from '../../Layout';

import './css/tape.css'
import TapeSplider from './components/TapeSplider';
import decor from './../../images/dekor.png'


const Tape = () => {
    return (
        <Layout>
            <div className="tape_block">
                <div className="container">
                    <div className="tape_content">
                        <div className="common_item no_shadow">
                            <h3>Сeгодня</h3>
                            <div className="days">
                                <p>Пн</p>
                                <p>Вт</p>
                                <p>Ср</p>
                                <p>Чт</p>
                                <p>Пт</p>
                                <p>Сб</p>
                                <p>Вс</p>
                            </div>
                        </div>

                        <div className="day_tagets">

                            <div className="target_item">
                                <div className="target_name">
                                    <div className="round orange"></div>
                                    <p>Ваша цель</p>
                                </div>
                                
                                <div className="target_icon_star"></div>
                            </div>

                            <div className="target_item">
                                <div className="target_name">
                                    <div className="round green"></div>
                                    <p>Ваша цель</p>
                                </div>
                                
                                <div className="target_icon_star"></div>
                            </div>

                            <div className="target_item">
                                <div className="target_name">
                                    <div className="round blue"></div>
                                    <p>Ваша цель</p>
                                </div>
                                
                                <div className="target_icon_star"></div>
                            </div>

                            <div className="target_item">
                                <div className="target_name">
                                    <div className="round blue"></div>
                                    <p>Ваша цель</p>
                                </div>
                                
                                <div className="target_icon_star"></div>
                            </div>

                        </div>

                        <button className='common_button'>Добавить цель</button>
                    </div>

                    <div className="splider_block">
                        <TapeSplider />

                        <button className='common_button'>Добавить фото</button>
                    </div>
                </div>



                <img src={decor} alt="" className="decoration" />
            </div>
        </Layout>
    );
};

export default Tape;