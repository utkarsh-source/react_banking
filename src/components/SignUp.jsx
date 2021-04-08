import React from 'react'
import styled from 'styled-components'
import './SignUp.css'
import wave from '../images/wave.png'
import avatar from '../images/avatar.svg'
import bg from '../images/bg.svg'
import {Link} from 'react-router-dom'



function SignUp() {
    return (
        <>
            <img className="wave" src={wave}/>
	<div className="container">
		<div className="img">
            <img src={bg}/>
		</div>
		<div className="login-content">
			<form>
                <img src={avatar}/>
				<h2 className="title">Welcome</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<input type="text" className="input" placeholder="USERNAME"/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	<input type="password" className="input" placeholder="Password"/>
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
            	<Link to="/" className="btn">Login</Link>
            </form>
        </div>
                </div>
        </>
    )
}

export default SignUp
