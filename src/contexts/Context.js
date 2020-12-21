import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
const Context = createContext();
export default Context;

export function ContextProvider(props){
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [userData, setUserData] = useState(``);
    const history = useHistory();
    const port = '3000';
    const DEV_URL = 'https://api-exams-repo.herokuapp.com/'; 

    const logout = () => {
        localStorage.removeItem('token');
        setUserData('');
        setToken(null);
        history.push('/sign-in');
    }

    return(
        <Context.Provider value={{token, setToken, port, DEV_URL, logout, userData, setUserData}}>
            {props.children}
        </Context.Provider>
    );
}
