import React from 'react';

import WhiteFrame from './WhiteFrame';
import Label from './Label';
import Logo from './Logo';
import TextInput from './TextInput';
import Button from './Button';
import Alink from './Alink';

import './global.css';
import logoImg from './logo.svg';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            fetchProgress: 'none',
            email:'',
            password:''
        }
    }
    
    handleSubmit() {
        //this.setState({value: event.target.value});
        let data = {
            "email": this.state.email,
            "password": this.state.password
        }
        this.postData('http://localhost:3000/api/login', data);
        this.setState({
            email : '',
            password : ''
        });
    }

    onEmailChange(e) {
        this.setState({email: e.target.value});
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
    }

    postData(url, data) {
        this.setState({fetchProgress: 'waiting'});
        return fetch(url, {
          body: JSON.stringify(data),
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'content-type': 'application/json'
          },
          method: 'POST',
          mode: 'cors',
          redirect: 'follow',
          referrer: 'no-referrer',
        })
        .then(response => {
            if (response.status === 401) {
                this.setState({fetchProgress: 'error'});
                return;
            }
            console.log(response);
            alert('Login Successed');
            this.setState({fetchProgress: 'success'});
            response.json()
        })
        .catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        //
    }

    render() {
        // start your code here
        console.log(this.state.fetchProgress);
        return (
            <WhiteFrame>
                { this.state.fetchProgress === 'waiting' ?
                <Logo logo={logoImg} cssName='logo-spin' /> : <Logo logo={logoImg}/>
                }
                <Label labelText='E-mail address' />
                <TextInput onChange={this.onEmailChange.bind(this)} value={this.state.email}/>
                <Label labelText='Password' />
                <TextInput onChange={this.onPasswordChange.bind(this)} value={this.state.password}/>
                { this.state.fetchProgress === 'error' ? 
                    <div className='error'>E-mail or password is incorrect</div> : ''}
                <Button text='SIGN IN' onClick={this.handleSubmit.bind(this)} />
                <Alink text='Forgot password?' link='#' />
                <Alink text='Create a new account' link='#' />
            </WhiteFrame>
        );
    }
}

export default App;
