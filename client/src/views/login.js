import React, { Component } from 'react';

class Login extends Component {
	render() {
		return (
			<div className='login-container'>
                <p>Entrar</p>
                <div className='input-wrap'>
                    <input type='text'/>
                </div>
                <div className='input-wrap'>
                    <input type='password'/>
                </div>
                <div className='input-wrap'>
                    <button>Entrar</button>
                </div>           
			</div>      
		);
	}
}

export default Login;
