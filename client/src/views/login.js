import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: {
                email: '',
                password: ''
            }
        };
    }
    
    login(e){
        console.log(this.state.input);
    }
    
    inputChanged(field, value){
        let {input} = this.state;
        input[field] = value;
        this.setState({input});
    }

    renderButton() {
        return(
            <div className='button-wrap'>
                <button onClick={(e) => this.login(e)}>Entrar</button>
            </div>
        );
    }

	render() {
		return (
			<div className='login-container'>
                <p>Entrar</p>
                <div className='input-wrap'>
                    <input type='text' value={this.state.email} onChange={(e) => this.inputChanged('email', e.target.value)} />
                </div>
                <div className='input-wrap'>
                    <input type='password' value={this.state.password} onChange={(e) => this.inputChanged('password', e.target.value)} />
                </div>
                {this.renderButton()}
                <FacebookLogin
                    appId="1608633615860603"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={(response) => console.log(response)}
                    cssClass="facebook-button"
                    icon="fa-facebook"
                />
			</div>
		);
	}
}

export default Login;
