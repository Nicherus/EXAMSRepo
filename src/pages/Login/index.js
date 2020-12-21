import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../contexts/Context';
import UserService from '../../services/UserService';

import {
    MainContainer,
    LoginContainer,
    LoginInput,
    LoginButton,
    TextLink,
} from './styles'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { setUserData } = useContext(Context);
    const history = useHistory();
    
    const goToSignUp = () => {
        history.push('/sign-up');
    }

    const goToHome = () => {
        history.push('/home');
    }

    const checkFields = () => {
        if(email === '' || password === ''){
            return alert('Fill all the fields please ;)');
        }
        login();
    }

    const login = async () => {
        setLoading(true);
        const body = {
            email,
            password,
        }
        const data = await UserService.login(body);
        if(data){
            setUserData(data);
            history.push('/home');
        } else{
            alert('Oops! Wrong password or email :/');
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
                    placeholder={'password'}
                    type={'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <LoginButton
                    disabled={loading}
                    opacity={loading ? 0.5 : 1}
                    onClick={() => checkFields()}
                >
                    Login
                </LoginButton>
                <TextLink
                    onClick={() => goToSignUp()}
                >New user? Sign up now</TextLink>
                <TextLink
                    onClick={() => goToHome()}
                >Or enter as a guest :)</TextLink>
            </LoginContainer>
        </MainContainer>
    );
}

export default Login;
