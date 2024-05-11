import React from 'react';
import './css/components.css'
import BurgerList from './BurgerList';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='container'>

                <BurgerList />

                <NavLink to='/sign_in' className="target_icon_user"></NavLink>
                
            </div> 
        </header>
    );
};

export default Header;