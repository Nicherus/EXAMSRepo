import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Colors from '../../../config/Colors';
import Context from '../../../contexts/Context';

import {
    MainContainer,
    Container,
    Button,
    Text,
    TextLink,
} from './styles'

const PostOrSearch = () => {
    const history = useHistory();
    const {userData, logout} = useContext(Context);

    useEffect(() => {
        if(!userData){
            alert('You are not logged in, login if you want to save your searches and upload exams. (features to come soon)');
        }
    }, [userData])
    
    const goToPost = () => {
        history.push('/post');
    }

    const goToLogin = () => {
        history.push('/sign-in');
    }

    const goToSearch = () => {
        alert('Ooops! This page DESIGN is in construction (ou seja a api está pronta querido monitor(a) xD) please come back later :)')
        // history.push('/search');
    }


    return (
        <MainContainer>
            <Container>
                <Text>Welcome, {userData.username || 'Guest'}</Text>
                <Button
                    onClick={() => goToPost()}
                >
                    Post a new Exam
                </Button>
                <Button
                    onClick={() => goToSearch()}
                >
                    Search for an Exam
                </Button>
                {userData ?     
                    <Button
                      background={Colors.midnightBlue}
                      onClick={() => logout()}
                    >
                        Logout
                    </Button>
                :   
                    <TextLink
                        onClick={() => goToLogin()}
                    >
                        Click here if you want to login!
                    </TextLink>
                }
            </Container>
        </MainContainer>
    );
}

export default PostOrSearch;