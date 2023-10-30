import './LoginForm.css';
import Google from "../../images/google.png";
import Github from "../../images/github.png"

import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  let googleUrl = "http://localhost:5000/api/session/google";
  let githubUrl =  "http://localhost:5000/api/session/github";
  
  if (process.env.NODE_ENV === 'production') {
    googleUrl = "https://catniip-26d640bb2067.herokuapp.com/api/session/google";
    githubUrl= "https://catniip-26d640bb2067.herokuapp.com/api/session/github";
  } 

  const google= () => {
    // window.open("http://localhost:5000/api/session/google", "_self");
    window.open(googleUrl, "_self");
  }
  const github= () => {
    // window.open("http://localhost:5000/api/session/github", "_self");
    window.open("githubUrl", "_self");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
        // errors comes from /api/session error handler
      });
  }

  const handleClick = () => {
    return dispatch(sessionActions.login({ credential: "Demo-WanYi", password: "password" }))
  }

  return (
    
      <div className='login-form-container'>
        <h1 className='login-h1'>Log In</h1>
        <div className='container'>
          <div className="left">
              <div className="loginButton google" onClick={google}>
                  <img src={Google} alt="" className="icon"/>
                  Log in with Google
              </div>
              <div className="loginButton github" onClick={github}>
                  <img src={Github} alt="" className="icon"/>
                  Log in with Github
              </div>
          </div>

          <div className="center">
              <div className="line" />
              <div className="or">OR</div>
          </div>
        
          <div className='right'>
            <form onSubmit={handleSubmit}>
              <ul className='error-list'>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
              </ul>
              <div className='form-label'>
                <label>
                  Username or Email
                </label>
              </div>
              <div className='form-input'>
                  <input
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                  />
              </div>

              <div className='form-label'>
                <label>
                  Password
                </label>
              </div>

              <div className='form-input'>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
              </div>

              <div>
                <button className="btn-login" type="submit">Log In</button>
              </div>
            </form>

            <div>
              <button className="btn-demo" type="submit" onClick={handleClick}>Demo User Log In</button>
            </div>

          </div>
        
        </div>
      </div>
    
  );
}

export default LoginForm;
