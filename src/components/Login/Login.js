import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='Your Email Address' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='Your Password' required />
                </div>
            <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to Ema John? <Link to='/signup'>Create New Account</Link></p>
        </div>
    );
};

export default Login;