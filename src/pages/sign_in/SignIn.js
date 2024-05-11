import React from 'react';

import './css/sign_in.css'

const SignIn = () => {
    return (
        <div className='sign_in_page'>
            <div className="sign_in_content">
                <h1>Sign in</h1>
                <form action="">
                    <input type="text" placeholder='Username'/>
                    <input type="password" placeholder='Password'/>

                    <a href="">Forgot password?</a>

                    <button>Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;