import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserService from '../../services/UserService';

import {
    MainContainer,
    LoginContainer,
    LoginInput,
    Button,
    TextLink,
} from './styles'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const checkFields = () => {
        if(
            email === '' || 
            username === '' || 
            password === '' || 
            passwordConfirmation === ''
        ){
            return alert('Fill all the fields please ;)');
        }
        if(password !== passwordConfirmation){
            return alert('Your password must be equal to your confirmed password')
        }
        if(password.length < 6){
            return alert('Your password must at least have 6 characters.')
        }
        signUp();
    }

    const goToLogin = () => {
        history.push('/login');
    }

    const goToHome = () => {
        history.push('/home');
    }

    const signUp = async () => {
        setLoading(true);
        const body = {
            email,
            username,
            password,
            passwordConfirmation,
        }
        
        const data = await UserService.signUp(body);
        if(data){
            history.push('/sign-in');
        } else{
            alert('Oops! Wrong password or email :/')
        }
        setLoading(false);
    }


    return (
        <MainContainer>
            <LoginContainer>
                <LoginInput 
                    placeholder={'email'}
                    type={'email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <LoginInput 
                    placeholder={'username'}
                    type={'text'}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <LoginInput 
                    placeholder={'password'}
                    type={'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <LoginInput 
                    placeholder={'confirm your password'}
                    type={'password'}
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <Button
                    disabled={loading}
                    opacity={loading ? 0.5 : 1}
                    onClick={() => checkFields()}
                >
                    Signup
                </Button>
                <TextLink
                    onClick={() => goToLogin()}
                >Already registered? Login now</TextLink>
                <TextLink
                    onClick={() => goToHome()}
                >Or enter as a guest :)</TextLink>
            </LoginContainer>
        </MainContainer>
    );
}

export default SignUp;