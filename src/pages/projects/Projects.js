import React from 'react';
import './css/projects.css'

import project from './../../images/project.png'
import Layout from '../../Layout';

import decor from './../../images/dekor.png'

const Projects = () => {
    return (
        <Layout>
            <div className='projects_block'>
                <div className="container">
                    <div className="project_content">
                        <h2>Проекты</h2>
                        <div className="project_items_block">
                            <div className="common_item">
                                <div className="round orange"></div>
                                <input type="text" />    
                            </div>
                            <div className="common_item">
                                <div className="round green"></div>
                                <input type="text" />    
                            </div>
                            <div className="common_item">
                                <div className="round blue"></div>
                                <input type="text" />    
                            </div>
                        </div>
                        <button className='common_button'>Добавить проект</button>
                    </div>
                    <div className="image">
                        <img src={project} alt="" />
                    </div>
                </div>


                <img src={decor} alt="" className="decoration" />
            </div>
        </Layout>
    );
};

export default Projects;