import React from 'react';

import './css/targets.css'

import target from './../../images/target.png'
import Layout from '../../Layout';

import decor from './../../images/dekor.png'

const Targets = () => {
    return (
        <Layout>
            <div className='targets_block'>
                <div className="container">
                    <div className="target_content">
                        <h2>Цели</h2>
                        <div className="common_item no_shadow">
                            <p>Выбрать проект</p>
                        </div>
                        <div className="target_items_block">
                            <div className="common_item">
                                <input type="text" />
                            </div>
                            <div className="common_item">
                                <input type="text" />
                            </div>
                            <div className="common_item">
                                <input type="text" />
                            </div>
                        </div>
                        <button className='common_button'>Добавить цель</button>
                    </div>
                    <div className="image">
                        <img src={target} alt="" />
                    </div>
                </div>

                <img src={decor} alt="" className="decoration" />
            </div>
        </Layout>
    );
};

export default Targets;